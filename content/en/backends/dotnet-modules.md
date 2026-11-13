---
title: Load dynamic code in an authoring host
description: Use explicit .NET assembly closures, collectible module candidates
  and verified retirement.
uid: backends.dotnet-modules
kind: how-to
owners:
  - Inno.Adapter.Modules.DotNet
contracts:
  - project.inno-adapter-modules-dotnet
---
# Load dynamic code in an authoring host

The .NET module adapter supplies concrete dynamic-code sources to the neutral Modules, Types and Reload contracts. Authoring hosts inject it at composition time. Published Players use generated static catalogs; dynamic loading is not a universal deployment capability.

## Declare the host assembly closure

Construct `DotNetAssemblyCatalogSource` from explicit root assemblies. It follows their references and owning SDK dependency manifests; it does not scan every process assembly or arbitrary directory. SDK-listed assemblies load from the explicit root's deployment directory, while CLR references retain their owning host load context.

A library host must deploy its own SDK dependency manifest and runtime copy-local closure. A transitive compilation reference is not proof that runtime discovery can find that dependency. Dispose the catalog source to unregister its notifications; changes concern the owned engine closure rather than unrelated assemblies loaded elsewhere in the process.

## Prepare a module candidate

Describe the module name, compiled assembly path and explicitly owned artifact root in `DotNetModuleSource`. Supply preload paths, upstream names, domain, scope and collectibility where required. Name discovery validates owned code before the transaction; preparation acquires the shadow generation and load context and returns a frozen contribution with its source lifetime. A failed preparation does not publish code.

Pass that source to `ModuleHost.BeginReload`, then coordinate activation and completion through the common transaction. Shadow copies live under the source's artifact root. Foundation does not choose that path or expose the private load context as an application protocol.

## Build type metadata outside hot paths

`ReflectionTypeCatalogSource` scans during candidate construction, not on each frame. It supplies base/interface, direct/inherited attribute and lifecycle override facts. Closed generic construction uses runtime constraints: invalid inputs fail explicitly, while an unsatisfied generic constraint returns null. Instance creation preserves the original user exception rather than masking construction failure.

## Prove retirement before deleting shadow code

Failure, cancellation and host shutdown unregister callbacks and retire source resources in reverse order. The generation retirement gate observes the returned probe. Full GC, finalizers and another full GC are part of collectible retirement verification; Pending is not Success, and a timeout does not erase the probe.

Delete the shadow directory only after the generation is unreachable and the owning retirement protocol permits it. Do not add another resolution table that accidentally keeps retired plugin generations alive. See [reload diagnosis](../manual/extensions/diagnose-reload.md) for retained objects, read leases and rollback failures.
