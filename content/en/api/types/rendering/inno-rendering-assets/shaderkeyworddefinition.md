---
title: "ShaderKeywordDefinition"
description: "Reference for ShaderKeywordDefinition in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.c36d02f46cae9810
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `ShaderKeywordDefinition`

This reference describes `ShaderKeywordDefinition` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1cabb073b2fc908a) | Method |
| [`id`](#api-9d528c5c83023ce1) | Property |
| [`options`](#api-a9acf836aa223c02) | Property |

## Type declaration

<a id="api-c36d02f46cae9810"></a>
<!-- api: T:Inno.Rendering.Assets.ShaderKeywordDefinition 4c848317d04a3171c07b85a8876eb6650bc729a5e897197d4af1cb7a2dd9de6e -->

```csharp
public struct Inno.Rendering.Assets.ShaderKeywordDefinition
```

Declares one static shader keyword that may produce compiled variants.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderKeywordDefinition.cs#L17).

## `#ctor`

<a id="api-1cabb073b2fc908a"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderKeywordDefinition.#ctor(System.String,System.Collections.Generic.IEnumerable{System.String}) 9e3229f447957864bffdff21fe213ea523a980d8cacacd70d0195473e7f64f9e -->

```csharp
public Inno.Rendering.Assets.ShaderKeywordDefinition.ShaderKeywordDefinition(string id, System.Collections.Generic.IEnumerable<string> options)
```

Creates a shader keyword definition.

**Parameter `id`:** Stable keyword identifier.

**Parameter `options`:** Allowed stable option identifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderKeywordDefinition.cs#L28).

## `id`

<a id="api-9d528c5c83023ce1"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderKeywordDefinition.id a64a40dc5e988b605ad3d2b36549b4044cace020279ed2dd63db60a64e03dcfb -->

```csharp
public string Inno.Rendering.Assets.ShaderKeywordDefinition.id { get; set; }
```

Gets or sets the stable keyword identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderKeywordDefinition.cs#L41).

## `options`

<a id="api-a9acf836aa223c02"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderKeywordDefinition.options 5aa9cec7afe28829ea10b2b790498414d9e2af468fa132bc6947b9bd13157b2e -->

```csharp
public string[] Inno.Rendering.Assets.ShaderKeywordDefinition.options { get; set; }
```

Gets or sets allowed stable option identifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderKeywordDefinition.cs#L46).
