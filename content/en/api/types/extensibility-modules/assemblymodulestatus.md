---
title: "AssemblyModuleStatus"
description: "Reference for AssemblyModuleStatus in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.48d205f051a732b2
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `AssemblyModuleStatus`

This reference describes `AssemblyModuleStatus` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Active`](#api-9b6437e2807a77fd) | Field |

## Type declaration

<a id="api-48d205f051a732b2"></a>
<!-- api: T:Inno.Extensibility.Modules.AssemblyModuleStatus 540053300ae6a78ebce21a4c4439f9f076a893880f775b81b488fd194d8f8d83 -->

```csharp
public enum Inno.Extensibility.Modules.AssemblyModuleStatus : int
```

Describes the catalog state of a published assembly module generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L9).

## `Active`

<a id="api-9b6437e2807a77fd"></a>
<!-- api: F:Inno.Extensibility.Modules.AssemblyModuleStatus.Active 3b8d78c3d4132a01245d3fe32e1a20b995e2ca0c24ce9b06499d05baeb17c4e5 -->

```csharp
Inno.Extensibility.Modules.AssemblyModuleStatus.Active = 0
```

The module generation is visible to assembly catalog participants.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleInfo.cs#L14).
