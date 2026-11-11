---
title: "IModuleLifetime"
description: "Reference for IModuleLifetime in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.3594af410d394861
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `IModuleLifetime`

This reference describes `IModuleLifetime` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`BeginRetirement`](#api-019cc51017bce752) | Method |

## Type declaration

<a id="api-3594af410d394861"></a>
<!-- api: T:Inno.Extensibility.Modules.IModuleLifetime cf19fd21f6275883520ca1fd2f4db44934d5c1147e39b124cc30a882be90c4fb -->

```csharp
public interface Inno.Extensibility.Modules.IModuleLifetime
```

Owns implementation-specific resources acquired for one unpublished or active module generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IModuleLifetime.cs#L13).

## `BeginRetirement`

<a id="api-019cc51017bce752"></a>
<!-- api: M:Inno.Extensibility.Modules.IModuleLifetime.BeginRetirement b12a064828a7985b0d62a2f208ca94015952d1bd5f2afe7936800f25e8c2c047 -->

```csharp
Inno.Extensibility.Reload.IAssemblyUnloadProbe Inno.Extensibility.Modules.IModuleLifetime.BeginRetirement()
```

Begins retirement once all catalog participants have released the generation.

**Returns:** A non-owning probe that completes only after code and generation storage are released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IModuleLifetime.cs#L21).
