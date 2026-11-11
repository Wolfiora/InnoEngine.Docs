---
title: "ModuleSourceContext"
description: "Reference for ModuleSourceContext in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.75b97d0ea070d173
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `ModuleSourceContext`

This reference describes `ModuleSourceContext` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`TrackRetirement`](#api-996b35870283569d) | Method |
| [`activeModules`](#api-f35ae9b433892f2d) | Property |
| [`generation`](#api-d9ddd63dd606ce6b) | Property |
| [`host`](#api-ba999a6f232535b1) | Property |
| [`plannedAssemblies`](#api-8e0f0d4dc8de2ff2) | Property |
| [`upstreamModules`](#api-979bb18532d1a7c0) | Property |

## Type declaration

<a id="api-75b97d0ea070d173"></a>
<!-- api: T:Inno.Extensibility.Modules.ModuleSourceContext ccf659e65e2af1a6f3cef2f37b818f2f83a2e0fdbeb647b363f90c99ff228540 -->

```csharp
public sealed class Inno.Extensibility.Modules.ModuleSourceContext
```

Supplies a source with the frozen dependencies and retirement boundary of one candidate generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleSourceContext.cs#L13).

## `TrackRetirement`

<a id="api-996b35870283569d"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleSourceContext.TrackRetirement(Inno.Extensibility.Reload.IAssemblyUnloadProbe) d3d15173f706b672b2ce96629952d4cfe3adc27f1208f0822cfeba7f608bb4a4 -->

```csharp
public void Inno.Extensibility.Modules.ModuleSourceContext.TrackRetirement(Inno.Extensibility.Reload.IAssemblyUnloadProbe probe)
```

Transfers a failed acquisition's non-owning retirement probe to the shared generation gate.

**Parameter `probe`:** The failed candidate's code and storage release probe.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleSourceContext.cs#L60).

## `activeModules`

<a id="api-f35ae9b433892f2d"></a>
<!-- api: P:Inno.Extensibility.Modules.ModuleSourceContext.activeModules 173fac802114d57ac11750c84a631bfd8c00cbe409a9b5969841ed9a1d151270 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Extensibility.Modules.ModuleCatalogContribution> Inno.Extensibility.Modules.ModuleSourceContext.activeModules { get; }
```

Gets active contributions used to reject forbidden downstream references.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleSourceContext.cs#L49).

## `generation`

<a id="api-d9ddd63dd606ce6b"></a>
<!-- api: P:Inno.Extensibility.Modules.ModuleSourceContext.generation f34937c1ac35bd48f43e68502ab4000f0ee4ecb3a3aa373d7e56fb58a92ebcac -->

```csharp
public int Inno.Extensibility.Modules.ModuleSourceContext.generation { get; }
```

Gets the candidate generation number.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleSourceContext.cs#L37).

## `host`

<a id="api-ba999a6f232535b1"></a>
<!-- api: P:Inno.Extensibility.Modules.ModuleSourceContext.host 42d77063369a452fedc7ee172cb4d339ba004dff961c89ddadf3d17714352db1 -->

```csharp
public Inno.Extensibility.Modules.IAssemblyCatalogSource Inno.Extensibility.Modules.ModuleSourceContext.host { get; }
```

Gets the borrowed host contract source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleSourceContext.cs#L41).

## `plannedAssemblies`

<a id="api-8e0f0d4dc8de2ff2"></a>
<!-- api: P:Inno.Extensibility.Modules.ModuleSourceContext.plannedAssemblies 0235be6c59bf70c65e4010db9f9de4719a5b43e95010788c4cc461b86c71feb7 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Extensibility.Modules.ModuleAssemblyDescriptor> Inno.Extensibility.Modules.ModuleSourceContext.plannedAssemblies { get; }
```

Gets identities and classifications for the complete candidate closure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleSourceContext.cs#L53).

## `upstreamModules`

<a id="api-979bb18532d1a7c0"></a>
<!-- api: P:Inno.Extensibility.Modules.ModuleSourceContext.upstreamModules 0fe25b1bb907c400d13382fe68172434af96620ad188fc56157c10d04da31a42 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Extensibility.Modules.ModuleCatalogContribution> Inno.Extensibility.Modules.ModuleSourceContext.upstreamModules { get; }
```

Gets the validated direct upstream contributions for this candidate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleSourceContext.cs#L45).
