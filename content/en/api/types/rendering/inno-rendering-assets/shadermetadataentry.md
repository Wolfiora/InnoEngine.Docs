---
title: "ShaderMetadataEntry"
description: "Reference for ShaderMetadataEntry in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.2d5e89b0e896c2b9
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `ShaderMetadataEntry`

This reference describes `ShaderMetadataEntry` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e17b19a42c872ab2) | Method |
| [`key`](#api-9acc50855cc807f3) | Property |
| [`value`](#api-b9def83f0770fe65) | Property |

## Type declaration

<a id="api-2d5e89b0e896c2b9"></a>
<!-- api: T:Inno.Rendering.Assets.ShaderMetadataEntry a52214c3e844526c7443a90eeff3835b181ed6373c821e773889993d8755acb5 -->

```csharp
public struct Inno.Rendering.Assets.ShaderMetadataEntry
```

Stores one open metadata key and value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderMetadataEntry.cs#L17).

## `#ctor`

<a id="api-e17b19a42c872ab2"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderMetadataEntry.#ctor(System.String,System.String) 3e6aa52aa25166d83d018ee60d4328bceb4835f0bbb018d13fac8cade089146b -->

```csharp
public Inno.Rendering.Assets.ShaderMetadataEntry.ShaderMetadataEntry(string key, string value)
```

Creates one metadata entry.

**Parameter `key`:** Stable provider-defined key.

**Parameter `value`:** Provider-defined value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderMetadataEntry.cs#L28).

## `key`

<a id="api-9acc50855cc807f3"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderMetadataEntry.key 3a0cb2cebc1916f4fe26b913c7a0e49673b0adfeeed71eb202d03bae488cfb00 -->

```csharp
public string Inno.Rendering.Assets.ShaderMetadataEntry.key { get; set; }
```

Gets or sets the stable metadata key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderMetadataEntry.cs#L40).

## `value`

<a id="api-b9def83f0770fe65"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderMetadataEntry.value 1158c3f26a048715eb6b11a3a474802c90a780bd880232d2359a896bb17f50b0 -->

```csharp
public string Inno.Rendering.Assets.ShaderMetadataEntry.value { get; set; }
```

Gets or sets the metadata value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderMetadataEntry.cs#L45).
