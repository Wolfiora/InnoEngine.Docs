---
title: "IAssemblyUnloadProbe"
description: "Reference for IAssemblyUnloadProbe in Inno.Extensibility.Reload."
uid: api.inno.extensibility.reload.989ee0a696a1dde7
kind: api
owners:
  - Inno.Extensibility.Reload
apiSurface: source-clr
contracts:
  - project.inno-extensibility-reload#shared-admission-and-retirement-contract
---
# `IAssemblyUnloadProbe`

This reference describes `IAssemblyUnloadProbe` in `Inno.Extensibility.Reload`. Read the [shared contract](../../projects/inno-extensibility-reload.md#shared-admission-and-retirement-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`description`](#api-f25c59f0d1414f1a) | Property |
| [`isCompleted`](#api-c57958a059ab790b) | Property |

## Type declaration

<a id="api-989ee0a696a1dde7"></a>
<!-- api: T:Inno.Extensibility.Reload.IAssemblyUnloadProbe 76bc61c54543d56b85dfcb8429aad0f8671ba842cd2888195e9d51f0f8a87dbf -->

```csharp
public interface Inno.Extensibility.Reload.IAssemblyUnloadProbe
```

Observes one retired collectible generation without retaining its load context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/IAssemblyUnloadProbe.cs#L6).

## `description`

<a id="api-f25c59f0d1414f1a"></a>
<!-- api: P:Inno.Extensibility.Reload.IAssemblyUnloadProbe.description 5aa030e641ccf5ffe6e960d160cd4d7eed25648fdd1cc4202084faa3b94217a3 -->

```csharp
string Inno.Extensibility.Reload.IAssemblyUnloadProbe.description { get; }
```

Gets a stable diagnostic description of the retired generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/IAssemblyUnloadProbe.cs#L11).

## `isCompleted`

<a id="api-c57958a059ab790b"></a>
<!-- api: P:Inno.Extensibility.Reload.IAssemblyUnloadProbe.isCompleted 46fb77022c2dc47fd4546a86360c83b68e3096f73ff7e3584840b5f3d6d171ab -->

```csharp
bool Inno.Extensibility.Reload.IAssemblyUnloadProbe.isCompleted { get; }
```

Gets whether the retired generation is unreachable and its generation storage is released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/IAssemblyUnloadProbe.cs#L16).
