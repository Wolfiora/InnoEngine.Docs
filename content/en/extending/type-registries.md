---
title: Build an owned extension registry
description: Construct immutable candidates with transactional activation and
  explicit retirement ownership.
uid: extending.type-registries
kind: how-to
owners:
  - Inno.Extensibility.Types
contracts:
  - project.inno-extensibility-types#registry-activation-and-retirement-contract
exampleMode: host
exampleProjects:
  - Inno.Extensibility.Types
---
# Build an owned extension registry

Derive from `TypeRegistry<TSnapshot>` when a host feature needs an immutable index of discovered extension instances. The shared registry protocol coordinates candidates with the type catalog and module publication; a new extension point does not need a parallel global manager or a ModuleHost hook.

## Build a complete candidate

This host example indexes extensions by their own semantic ID. The surrounding composition supplies an active `TypeCatalog` and owns the registry's lifetime. Concrete extensions must already belong to that catalog and have supported construction.

```csharp
using System;
using System.Collections.Generic;
using System.Collections.Frozen;
using Inno.Extensibility.Types;

internal abstract class ExampleExtension : IDisposable
{
    public abstract string id { get; }
    public abstract void Dispose();
}

internal sealed class ExampleRegistry(TypeCatalog types)
    : TypeRegistry<FrozenDictionary<string, ExampleExtension>>(types)
{
    protected override FrozenDictionary<string, ExampleExtension> Build(TypeCacheSnapshot snapshot)
    {
        var entries = new Dictionary<string, ExampleExtension>(StringComparer.Ordinal);
        foreach (TypeRef reference in snapshot.GetSubTypesOf<ExampleExtension>())
        {
            ExampleExtension entry = CreateExtension<ExampleExtension>(reference.Resolve(snapshot));
            if (!entries.TryAdd(entry.id, entry))
                throw new InvalidOperationException($"Duplicate extension ID: {entry.id}");
        }
        return entries.ToFrozenDictionary(StringComparer.Ordinal);
    }

    protected override void DisposeSnapshot(FrozenDictionary<string, ExampleExtension> snapshot)
    {
        DisposeExtensions(snapshot.Values);
    }
}
```

`Build` must not mutate the published registry. `CreateExtension` validates construction and tracks new candidate ownership immediately. If a custom factory is necessary, register its newly owned result with `OwnCandidateExtension`; do not pass a borrowed instance from the previous snapshot.

On build failure, the registry owns compensation of registered candidate resources. Do not dispose those same resources a second time in a derived `catch`. On success, the snapshot takes responsibility and its disposal must release the owned instances.

## Separate reversible activation from cleanup

| Hook | Responsibility |
| --- | --- |
| `Build` | Create and validate the entire unpublished candidate. |
| `OnActivating` | Reversible lifecycle work while the candidate is exposed as current. |
| `OnActivationRolledBack` | Reverse completed activation effects and restore prior behavior. |
| `OnActivationCompleted` | Cleanup after all registry activation succeeds; no new publication. |
| `DisposeSnapshot` | Release the snapshot's owned resources. |
| `OnCleanupFailed` | Observe/report cleanup failure, without suppressing it. |

Before global commit, a failed later registry can cause already activated registries to restore their prior snapshots and versions. After commit, cleanup failure cannot honestly be reported as rollback of the published candidate; it faults the shared generation owner.

A reentrant rebuild is deferred until the outer publication completes and then reconciled in a separate transaction. Do not use reentrancy to escape active read leases or unload verification.

## Retire resources before their dependencies

`DisposeExtensions` deduplicates references and retires them in reverse order through Core lifetime ownership. Ordinary failures aggregate while other safe cleanup proceeds. Pending retirement keeps the current resource and its lower dependencies alive until draining succeeds or the host faults.

`RetireResource` supports a bounded retryable Stop/Detach action at a control-thread safe point. It is not a realtime callback API. The default registry drain deadline is thirty seconds and can be configured positively; this is an engine resource-retirement policy, not a build-duration limit.

If domain composition owns a generation-created resource that cannot retire, `ReportRetirementFailure` closes the shared gate and invokes diagnostics. Propagate the real failure. An observer hook cannot approve continued Play, Build, Export or reload.

Pending signals nested in aggregate/inner exceptions retain the same ownership meaning. The registry keeps the failed batch, snapshot or transaction instead of clearing fields to appear disposed. Repeated Clear/Dispose/Refresh cannot bypass that barrier; a faulted host needs replacement.

## Use and release the registry

`current` lazily refreshes against the current type snapshot. `Refresh` avoids rebuilding an unchanged version and converges only through complete transactions. `Clear` releases a successfully retired snapshot while keeping the registry reusable; `Dispose` unregisters and ends its lifecycle.

Keep the registry within its owning type/module composition. Dispose feature registries before their catalog and module host. Do not retain old snapshots, instances or delegates as the next generation's cache.

See [the exact protected extension points](../architecture/projects/inno-extensibility-types.md) and [generation publication](../architecture/generation-publication.md).
