---
title: Compose module sources and catalog participants
description: Supply explicit assembly ownership and unpublished candidates to the shared module host.
uid: extending.module-sources
kind: how-to
owners:
  - Inno.Extensibility.Modules
  - Inno.Extensibility.Types
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
exampleMode: host
exampleProjects:
  - Inno.Extensibility.Modules
  - Inno.Extensibility.Types
---
# Compose module sources and catalog participants

Use `ModuleHost` when a composition owns a set of managed code contributions and their transactional replacement. Choose both an assembly catalog source and the corresponding type metadata source explicitly. Loading files, shadow copies and collectible contexts belong to a concrete adapter; Foundation coordinates identities, dependency closure and publication.

## Establish ownership in composition

This host helper receives an owned assembly source and a matching borrowed metadata source. Nested disposal order releases type-derived state before the module host and its assembly source. The consumer must release its own dependent registries before returning.

```csharp
using System;
using Inno.Extensibility.Modules;
using Inno.Extensibility.Types;

static void UseCatalogs(
    IAssemblyCatalogSource ownedAssemblySource,
    ITypeCatalogSource borrowedTypeSource,
    Action<ModuleHost, TypeCatalog> consume
) {
    using var modules = new ModuleHost(new ModuleHostOptions
    {
        catalogSource = ownedAssemblySource
    });
    using var types = new TypeCatalog(modules, borrowedTypeSource);
    consume(modules, types);
}
```

`ModuleHostOptions.catalogSource` is required and transfers ownership to the host. The host subscribes to source changes and publishes the initial catalog; failed initialization releases acquired ownership. Do not share that transferred source with an independent disposer.

`Register` can contribute externally owned assemblies. In that case the external owner remains responsible for their ultimate code lifetime. Static linked code is process-lived; do not pretend it supports collectible unload.

## Describe the entire source before acquisition

An `IModuleSource` supplies a logical module name, ownership domain, runtime/editor dependency scope, collectible capability, explicit upstream names and per-assembly scope overrides. `GetAssemblyNames` declares the complete owned simple-name set before a generation is acquired.

`Prepare` receives a frozen `ModuleSourceContext` with the candidate generation, borrowed host source, validated direct upstream contributions, active modules and the complete planned assembly classifications. Return one complete unpublished `ModuleCatalogContribution`; do not switch global state while preparing it.

The source owns failed acquisition cleanup. If code or storage cannot finish retiring immediately, transfer its non-owning probe through `TrackRetirement`. A failure cannot abandon that responsibility merely because no successful contribution was returned.

The contribution freezes its assemblies/classifications and may provide an `IModuleLifetime`. `BeginRetirement` must return a probe that observes completion without strongly retaining the code it is waiting to unload.

## Publish through the existing transaction

`Load` prepares and activates a new contribution. `BeginReload` prepares a replacement, a supplied source set, or replacements/additions/removals together, depending on the overload. An `AssemblyReloadSession` exposes previous/candidate catalogs and participant contexts for the active transaction.

Use the host's shared generation coordinator when domain changes must move with code publication. `Activate` publishes the candidate; `Complete` commits and begins old-generation retirement; `Rollback` restores the previous generation and retires the candidate. Disposing an incomplete session rolls it back. Transaction contexts become invalid after completion or rollback.

An unload probe is evidence to keep checking, not proof of successful unload. Drain it through the shared gate before allowing another generation-sensitive operation.

## Add a catalog participant

`RegisterCatalogParticipant` initializes a participant from the current catalog and returns a caller-owned registration. Its `Prepare` builds complete derived state without publishing. The returned transaction implements reversible `Activate`, cleanup-only `Complete`, and `Rollback`.

Prepare/activation failure retains the last good state only when compensation succeeds. Cleanup or rollback failures fault the gate; pending retirement retains dependent owners. Do not retry an unchanged failed candidate endlessly—reconcile new source input or request an explicit rebuild after a recoverable failure.

`Refresh` reconciles source changes; `Rebuild` explicitly reconstructs derived catalogs. Neither is a substitute for preparing new DLL/source content through the correct adapter. A faulted host cannot be reset by either call.

## Keep ownership classifications precise

`AssemblyDomain` distinguishes internal, script and plugin ownership. `AssemblyScope` distinguishes Runtime and Editor dependencies. Module handles are runtime transaction identities, not persistent object IDs. `modules` returns diagnostic information; it does not transfer module ownership.

Catalog snapshots strongly retain their assemblies. Keep them only for their transaction or protected operation. Foundation has no dynamic-cache directory requirement: a dynamic source owns its shadow-copy storage, while a static source need not create it.

See [generation publication](../architecture/generation-publication.md), [type discovery](../manual/extensions/find-types.md), and the [module reference](../api/projects/inno-extensibility-modules.md).
