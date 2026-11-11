---
title: Inno.Adapter.Modules.DotNet
description: "Explicit host assembly catalogs, collectible module sources and reflection facts for dynamic authoring hosts."
uid: project.inno-adapter-modules-dotnet
kind: project
owners: [Inno.Adapter.Modules.DotNet]
exampleMode: host
exampleProjects: [Inno.Adapter.Modules.DotNet]
---
# Inno.Adapter.Modules.DotNet

Explicit host assembly catalogs, collectible module sources and reflection facts for dynamic authoring hosts.

Read the linked task or ownership explanation before using the exact API below.

## Compose dynamic sources explicitly

[Load code in an authoring host](../../backends/dotnet-modules.md) explains explicit assembly/dependency roots, shadow generation ownership, candidate preparation, reflection facts and retirement probes. Neutral Modules/Types/Reload contracts do not depend on this implementation; authoring composition injects it, while static Players consume generated catalogs.

DotNetModuleSource requires its module name, main assembly and owned artifact root. Prepare returns a frozen contribution and source lifetime. The caller coordinates BeginReload, activation, completion and retirement through the shared transaction. A timeout does not turn a retained collectible generation into a success.

## Discovery and construction

DotNetAssemblyCatalogSource follows only explicit roots and their owning SDK manifests, keeps CLR references in the host context and unregisters notifications on disposal. A host must deploy its own manifest/runtime closure. ReflectionTypeCatalogSource provides candidate-time declarations and lifecycle metadata; it does not scan on each frame. User constructor failures retain their original exceptions. Private ALC, weak-monitor and dependency-resolver implementations are not plugin protocols.

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using Inno.Adapter.Modules.DotNet;
using Inno.Extensibility.Modules;

static DotNetModuleSource DescribeModule(
    string compiledPath,
    string ownedCacheRoot
) {
    return new DotNetModuleSource
    {
        moduleName = "RuntimeScripts",
        mainAssemblyPath = compiledPath,
        artifactRootDirectory = ownedCacheRoot,
        domain = AssemblyDomain.InnoScripting,
        scope = AssemblyScope.Runtime,
        collectible = true
    };
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/Inno.Adapter.Modules.DotNet.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Types and exact member contracts](../types/backend-adapters/inno-adapter-modules-dotnet/index.md) retain declarations and source XML from the recorded engine capture.
