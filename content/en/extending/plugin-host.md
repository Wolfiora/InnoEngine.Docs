---
title: Compose plugin discovery with a host
description: Initialize shared asset mounts, stage candidates and retire owned background work.
uid: extending.plugin-host
kind: how-to
aliases:
  - plugin lifecycle
  - plugin activation
  - plugin shutdown
owners:
  - Inno.Plugins.Authoring
contracts:
  - project.inno-plugins-authoring#installation-and-generation-contract
exampleMode: host
exampleProjects:
  - Inno.Plugins.Authoring
---
# Compose plugin discovery with a host

`PluginSourceService` prepares validated installation facts. `PluginEnvironment` owns automatic discovery and publishes plugins together with the host's Assets, settings and scripting generation. Use the existing host composition and one `GenerationCoordinator`; do not build an independent watcher-to-activation loop.

## Prepare the initial scan

The host supplies a configured `SerializationRegistry` capable of reading the current manifest and setting records. It owns that registry for the operation. The scanner creates the selected installation and extraction-cache directories and validates installed packages.

```csharp
using Inno.Core.Serialization;
using Inno.Plugins.Authoring;

public static class PluginDiscovery
{
    public static PluginScanResult Scan(
        SerializationRegistry serialization,
        string pluginDirectory,
        string libraryDirectory)
    {
        var sources = new PluginSourceService(
            serialization, pluginDirectory, libraryDirectory);
        return sources.Scan();
    }
}
```

This helper only scans. It does not initialize the Asset pipeline, install type registries or activate plugins. Use `GetActivatableMounts(scan)` to compose read-only plugin mounts alongside the writable project mount. Initialize Assets with those mounts before constructing `PluginEnvironment` with the same initial scan, settings owner, registry and shared generation coordinator.

Initial activation must succeed before a watcher is created. Treat construction failure as real failed composition and preserve its exception tree, including pending retirement.

## Drive updates on the owning thread

Call `Update` from the host's Asset owner thread. Filesystem callbacks coalesce notifications; periodic reconciliation is owned by a `LifetimeScope` and returns neutral results. Neither callback path publishes domain state from a background thread.

`Refresh` validates and prepares a changed candidate. Discovery diagnostics can update even when the active fingerprint is unchanged. A pending candidate remains owned while scripting evaluates it; a second refresh does not publish over that transaction.

For code changes, the host passes `CreateReloadChange()` into its existing script reload coordination. For non-code availability changes, `ApplyPendingChange()` uses the same gate. The structural participant captures effective settings, activates mounts/catalog/contributors, updates Assets and settings, validates source identities, and commits or compensates in the shared order.

## Keep candidate state separate from active state

Use `activePlugins` and `TryGet` for the published generation. Use `compilationPlugins`, `compilationAssets` and `TryGetCompilationPlugin` only within the owned candidate compilation. Do not expose a pending mount to an unrelated runtime frame.

`ActivatePending`, `CommitPending` and `RollbackPending` support transaction composition. They are not independent public UI actions. In particular, an Activate failure must not perform a local rollback before the coordinator restores the correct publication.

## Shut down without abandoning ownership

Stop accepting updates, then dispose through the host's retirement protocol. `PluginEnvironment` first resolves retained candidate rollback, cancels and drains owned reconciliation work, and only then releases watcher, sources and catalog state. It does not delete source packages or extraction caches.

If retirement is pending, retain the owner and dependencies and let the shared gate report the failure. Do not clear the last references to the candidate to make shutdown appear complete.

See [reference recovery](reference-recovery.md), [owned asynchronous work](../manual/execution/own-async-work.md), and [the exact authoring API](../api/projects/inno-plugins-authoring.md).
