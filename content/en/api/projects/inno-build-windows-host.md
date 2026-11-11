---
title: Inno.Build.Windows.Host
description: "Windows execution-host discovery and protected native-tool workspaces."
uid: project.inno-build-windows-host
kind: project
owners: [Inno.Build.Windows.Host]
exampleMode: host
exampleProjects: [Inno.Build.Windows.Host]
---
# Inno.Build.Windows.Host

Windows execution-host discovery and protected native-tool workspaces.

Start with [the platform task guide](../../platforms/select-target.md).

## Host discovery

`WindowsBuildHostProvider.TryCapture` returns an immutable descriptor only for a supported current host, otherwise null. It does not select a game target and does not reference WindowsX64 products or Browser. Other platforms consume the neutral interfaces rather than this concrete provider.

## Workspace lifetime

`WindowsToolchainWorkspaceProvider.OpenAsync` acquires a stable junction for an absolute physical directory owned by the build. Hold the returned execution-path scope until every tool process has finished. Disposing the scope removes only a junction whose target was verified; it retains physical data. Leaf locks retire only under exclusive owner protection.

Cancellation releases this operation's wait without disturbing another owner. Do not infer cleanup permission from an alias path or delete an active junction to shorten a build. See [build and cache ownership](../../architecture/build-artifacts.md).

## Capture the current host

```csharp
using Inno.Build.Toolchains;
using Inno.Build.Windows.Host;

static BuildHostDescriptor? CaptureWindows() => new WindowsBuildHostProvider().TryCapture();
```

## Source and validation boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/Windows/build/Inno.Build.Windows.Host/Inno.Build.Windows.Host.csproj) defines this engine-owned surface. Host CLR declarations do not establish game-script exports, native execution or cross-platform certification. Platform, ABI and real-device checks remain separate from compiling the examples.

## API reference

[Browse exact types and members](../types/platform-services/inno-build-windows-host/index.md).
