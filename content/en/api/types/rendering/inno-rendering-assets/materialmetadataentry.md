---
title: "MaterialMetadataEntry"
description: "Reference for MaterialMetadataEntry in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.c0d60a5cc501ff4e
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `MaterialMetadataEntry`

This reference describes `MaterialMetadataEntry` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b8137660d9f79110) | Method |
| [`key`](#api-814c4db2d4500745) | Property |
| [`value`](#api-999cff9163908dc7) | Property |

## Type declaration

<a id="api-c0d60a5cc501ff4e"></a>
<!-- api: T:Inno.Rendering.Assets.MaterialMetadataEntry 92089c615a7a4fefefa0e873a5b21469e691c43a4f10f45d521600f46449cddd -->

```csharp
public struct Inno.Rendering.Assets.MaterialMetadataEntry
```

Stores one open material metadata key and value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialMetadataEntry.cs#L16).

## `#ctor`

<a id="api-b8137660d9f79110"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialMetadataEntry.#ctor(System.String,System.String) 385d4f51bd651d279c9edbe6d5cc7024f62718244641f5583478e659e664447f -->

```csharp
public Inno.Rendering.Assets.MaterialMetadataEntry.MaterialMetadataEntry(string key, string value)
```

Creates a material metadata entry.

**Parameter `key`:** Stable provider-defined key.

**Parameter `value`:** Provider-defined value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialMetadataEntry.cs#L27).

## `key`

<a id="api-814c4db2d4500745"></a>
<!-- api: P:Inno.Rendering.Assets.MaterialMetadataEntry.key c5650f2f25bd64728c88964642027401b0bdef9023daecc1af32c759c52c0256 -->

```csharp
public string Inno.Rendering.Assets.MaterialMetadataEntry.key { get; set; }
```

Gets or sets the stable metadata key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialMetadataEntry.cs#L39).

## `value`

<a id="api-999cff9163908dc7"></a>
<!-- api: P:Inno.Rendering.Assets.MaterialMetadataEntry.value d148082e5f5cd45adb228fe91dbc4b7fbaefefd72c8e0abb104bd006ad647be6 -->

```csharp
public string Inno.Rendering.Assets.MaterialMetadataEntry.value { get; set; }
```

Gets or sets the metadata value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialMetadataEntry.cs#L44).
