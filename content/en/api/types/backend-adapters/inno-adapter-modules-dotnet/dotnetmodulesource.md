---
title: "DotNetModuleSource"
description: "Reference for DotNetModuleSource in Inno.Adapter.Modules.DotNet."
uid: api.inno.adapter.modules.dotnet.2e056245149b587b
kind: api
owners:
  - Inno.Adapter.Modules.DotNet
apiSurface: source-clr
contracts:
  - project.inno-adapter-modules-dotnet
---
# `DotNetModuleSource`

This reference describes `DotNetModuleSource` in `Inno.Adapter.Modules.DotNet`. Read the [shared contract](../../../projects/inno-adapter-modules-dotnet.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Extensibility.Modules.IModuleSource`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e64268d2a9a507ee) | Method |
| [`GetAssemblyNames`](#api-5e7072ce19f9620d) | Method |
| [`Prepare`](#api-d3d1397de54abcee) | Method |
| [`artifactRootDirectory`](#api-1597c6adcde305d2) | Property |
| [`assemblyScopes`](#api-ee15adf027a7c2d6) | Property |
| [`collectible`](#api-74764e33681a6163) | Property |
| [`domain`](#api-7980fea9e6af0dc0) | Property |
| [`mainAssemblyPath`](#api-ea853347498ee75f) | Property |
| [`moduleName`](#api-da5f8bd7d016a12a) | Property |
| [`preloadAssemblyPaths`](#api-04e73a862fc54cb0) | Property |
| [`scope`](#api-d3c25713c1bb31e6) | Property |
| [`upstreamModuleNames`](#api-d37175b2f3d87c1c) | Property |

## Type declaration

<a id="api-2e056245149b587b"></a>
<!-- api: T:Inno.Adapter.Modules.DotNet.DotNetModuleSource 8a38ad62953841af72be05e533d17f10f9eae6fbd2bf0d91ef12e72b665c1e09 -->

```csharp
public sealed class Inno.Adapter.Modules.DotNet.DotNetModuleSource : Inno.Extensibility.Modules.IModuleSource
```

Describes one independently reloadable managed assembly module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetModuleSource.cs#L15).

## `#ctor`

<a id="api-e64268d2a9a507ee"></a>
<!-- api: M:Inno.Adapter.Modules.DotNet.DotNetModuleSource.#ctor 26e74f90fc0aae324b83be96962436a9b0be349b9aa409c5b488f7978dbbd3e3 -->

```csharp
public Inno.Adapter.Modules.DotNet.DotNetModuleSource.DotNetModuleSource()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetModuleSource.cs#L15).

## `GetAssemblyNames`

<a id="api-5e7072ce19f9620d"></a>
<!-- api: M:Inno.Adapter.Modules.DotNet.DotNetModuleSource.GetAssemblyNames 46fb793c44d65ba5925d274e769c1c573d9c4c5c5dec73cca67edb45c17a5842 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Adapter.Modules.DotNet.DotNetModuleSource.GetAssemblyNames()
```

Reads the complete owned assembly identities before any generation is acquired.

**Returns:** Distinct, nonempty simple names; invalid or unavailable source data causes an exception.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetModuleSource.cs#L72).

## `Prepare`

<a id="api-d3d1397de54abcee"></a>
<!-- api: M:Inno.Adapter.Modules.DotNet.DotNetModuleSource.Prepare(Inno.Extensibility.Modules.ModuleSourceContext) 1054e9c37a4a4eb023c669c27a621476afa7de00bc0ac82eeceb5f7e64f49734 -->

```csharp
public Inno.Extensibility.Modules.ModuleCatalogContribution Inno.Adapter.Modules.DotNet.DotNetModuleSource.Prepare(Inno.Extensibility.Modules.ModuleSourceContext context)
```

Acquires a validated candidate and transfers its lifetime to the caller on success.

**Parameter `context`:** The immutable candidate dependency closure and retirement owner.

**Returns:** A complete unpublished contribution; failure retires every acquired resource through the context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetModuleSource.cs#L93).

## `artifactRootDirectory`

<a id="api-1597c6adcde305d2"></a>
<!-- api: P:Inno.Adapter.Modules.DotNet.DotNetModuleSource.artifactRootDirectory ba39a900664e1d34242b4f9e0cf4c10c98bde2e684171ffe064b84fcc7294bef -->

```csharp
public required string Inno.Adapter.Modules.DotNet.DotNetModuleSource.artifactRootDirectory { get; init; }
```

Gets the absolute host-selected root owned by this dynamic source for shadow-copy generations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetModuleSource.cs#L20).

## `assemblyScopes`

<a id="api-ee15adf027a7c2d6"></a>
<!-- api: P:Inno.Adapter.Modules.DotNet.DotNetModuleSource.assemblyScopes c4af95cd360cb0078dd66b9da55bf84b2366bdd92a3b777f79ae36413d3e0cbd -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Extensibility.Modules.AssemblyScope> Inno.Adapter.Modules.DotNet.DotNetModuleSource.assemblyScopes { get; init; }
```

Gets per-assembly scope overrides keyed by managed assembly simple name.

**Constraints:** This is used when one plugin generation contains both runtime and editor-only assemblies.
Names not present in the map use `Inno.Adapter.Modules.DotNet.DotNetModuleSource.scope`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetModuleSource.cs#L68).

## `collectible`

<a id="api-74764e33681a6163"></a>
<!-- api: P:Inno.Adapter.Modules.DotNet.DotNetModuleSource.collectible f5cdd96840e6ec84f44bb8af3aed1edf69b0fb19711b0367ae8f7cb30803b739 -->

```csharp
public bool Inno.Adapter.Modules.DotNet.DotNetModuleSource.collectible { get; init; }
```

Gets or sets whether the module load context supports cooperative unloading.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetModuleSource.cs#L49).

## `domain`

<a id="api-7980fea9e6af0dc0"></a>
<!-- api: P:Inno.Adapter.Modules.DotNet.DotNetModuleSource.domain e5e64797641e29a21f536cd7655daf429aadde1e4d9d05512dbb1c54c87fe697 -->

```csharp
public Inno.Extensibility.Modules.AssemblyDomain Inno.Adapter.Modules.DotNet.DotNetModuleSource.domain { get; init; }
```

Gets or sets the ownership domain for every assembly in this module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetModuleSource.cs#L54).

## `mainAssemblyPath`

<a id="api-ea853347498ee75f"></a>
<!-- api: P:Inno.Adapter.Modules.DotNet.DotNetModuleSource.mainAssemblyPath c94ce612d5989426da9f4bd7abfac62cb905eb730bdb434c861bd4df10d4c139 -->

```csharp
public required string Inno.Adapter.Modules.DotNet.DotNetModuleSource.mainAssemblyPath { get; init; }
```

Gets or sets the path of the module's primary managed assembly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetModuleSource.cs#L30).

## `moduleName`

<a id="api-da5f8bd7d016a12a"></a>
<!-- api: P:Inno.Adapter.Modules.DotNet.DotNetModuleSource.moduleName 9ee8cf044b5bcadaf08d57ba02c97538b6a93532e1982afe05d9aa5ed22e8988 -->

```csharp
public required string Inno.Adapter.Modules.DotNet.DotNetModuleSource.moduleName { get; init; }
```

Gets or sets the stable logical module name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetModuleSource.cs#L25).

## `preloadAssemblyPaths`

<a id="api-04e73a862fc54cb0"></a>
<!-- api: P:Inno.Adapter.Modules.DotNet.DotNetModuleSource.preloadAssemblyPaths 3cff72d53312fd46566608cb617a3345b1e1db551272029bd69ff618aa2a6bcc -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Adapter.Modules.DotNet.DotNetModuleSource.preloadAssemblyPaths { get; init; }
```

Gets or sets additional managed assemblies loaded into the same context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetModuleSource.cs#L35).

## `scope`

<a id="api-d3c25713c1bb31e6"></a>
<!-- api: P:Inno.Adapter.Modules.DotNet.DotNetModuleSource.scope 603a98db0cad3a84e5bb54c74547653a1940476f422af3f2ba3360e0bffda774 -->

```csharp
public Inno.Extensibility.Modules.AssemblyScope Inno.Adapter.Modules.DotNet.DotNetModuleSource.scope { get; init; }
```

Gets or sets the dependency scope for assemblies without a more specific internal descriptor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetModuleSource.cs#L59).

## `upstreamModuleNames`

<a id="api-d37175b2f3d87c1c"></a>
<!-- api: P:Inno.Adapter.Modules.DotNet.DotNetModuleSource.upstreamModuleNames 24778d8bb7a2283f494da31fba54d5faf910957248a5c2778adfdc06a30e6bac -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Adapter.Modules.DotNet.DotNetModuleSource.upstreamModuleNames { get; init; }
```

Gets stable module names whose exported assemblies may satisfy this module's managed dependencies.

**Constraints:** Dependencies are explicit for every module. An empty collection declares that the module has no
upstream module dependencies; the host never infers dependencies from process-wide active state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetModuleSource.cs#L44).
