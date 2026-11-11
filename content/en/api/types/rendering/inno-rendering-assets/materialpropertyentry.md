---
title: "MaterialPropertyEntry"
description: "Reference for MaterialPropertyEntry in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.90d6b484019fb073
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `MaterialPropertyEntry`

This reference describes `MaterialPropertyEntry` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7f0a25efd89db285) | Method |
| [`id`](#api-ef60f89f3e4aad20) | Property |
| [`value`](#api-ecbe80923703aef9) | Property |

## Type declaration

<a id="api-90d6b484019fb073"></a>
<!-- api: T:Inno.Rendering.Assets.MaterialPropertyEntry 18e02c095019d83f13e3401c0921d0d10a07b66e955360024dacdb0cd560df90 -->

```csharp
public struct Inno.Rendering.Assets.MaterialPropertyEntry
```

Stores one persistent material property entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyEntry.cs#L16).

## `#ctor`

<a id="api-7f0a25efd89db285"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialPropertyEntry.#ctor(Inno.Rendering.ShaderPropertyId,Inno.Rendering.Assets.MaterialValue) e53c46f6cd7a162ba1a147b12a43076e22d67b8cf0ec1db0a34f0854596cdcef -->

```csharp
public Inno.Rendering.Assets.MaterialPropertyEntry.MaterialPropertyEntry(Inno.Rendering.ShaderPropertyId id, Inno.Rendering.Assets.MaterialValue value)
```

Creates a persistent material property entry.

**Parameter `id`:** Stable shader property identifier.

**Parameter `value`:** Neutral material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyEntry.cs#L27).

## `id`

<a id="api-ef60f89f3e4aad20"></a>
<!-- api: P:Inno.Rendering.Assets.MaterialPropertyEntry.id 2d92627a38aface6a53c9c1678eaabad531bfb3bda6db004fced1fd248b14fc6 -->

```csharp
public Inno.Rendering.ShaderPropertyId Inno.Rendering.Assets.MaterialPropertyEntry.id { get; set; }
```

Gets or sets the stable shader property identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyEntry.cs#L40).

## `value`

<a id="api-ecbe80923703aef9"></a>
<!-- api: P:Inno.Rendering.Assets.MaterialPropertyEntry.value 7751ab458bb3b6d02c5da5e5ff9df3d5d7d7461b27289ebac2131055561c5899 -->

```csharp
public Inno.Rendering.Assets.MaterialValue Inno.Rendering.Assets.MaterialPropertyEntry.value { get; set; }
```

Gets or sets the neutral material value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPropertyEntry.cs#L45).
