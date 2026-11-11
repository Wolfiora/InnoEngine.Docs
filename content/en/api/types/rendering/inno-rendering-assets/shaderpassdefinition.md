---
title: "ShaderPassDefinition"
description: "Reference for ShaderPassDefinition in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.8b9457b5d985c28c
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `ShaderPassDefinition`

This reference describes `ShaderPassDefinition` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d5a55fbad5ec45ee) | Method |
| [`Copy`](#api-e6fb393be4d3205f) | Method |
| [`metadata`](#api-2d4fac53648d6ac6) | Property |
| [`name`](#api-abd416ec9a178b0a) | Property |
| [`programKind`](#api-0cf35d8fe87db77a) | Property |
| [`renderState`](#api-ebad19c5a37478a4) | Property |
| [`requiredFeatures`](#api-f198c71e131a8c8e) | Property |

## Type declaration

<a id="api-8b9457b5d985c28c"></a>
<!-- api: T:Inno.Rendering.Assets.ShaderPassDefinition 65990e39acf66fdca0350996247a77715417d0d25ae3110b7c0a302433b9ac6e -->

```csharp
public struct Inno.Rendering.Assets.ShaderPassDefinition
```

Defines one backend-neutral raster or compute shader pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassDefinition.cs#L17).

## `#ctor`

<a id="api-d5a55fbad5ec45ee"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderPassDefinition.#ctor(System.String,Inno.Rendering.ShaderProgramKind,Inno.Rendering.GraphicsCapability,System.Nullable{Inno.Rendering.Assets.ShaderRenderState},System.Collections.Generic.IEnumerable{Inno.Rendering.Assets.ShaderMetadataEntry}) 9975c8ba1fb1612d5e0a917bd2da866980667722d50eab203453229ee5a50f0e -->

```csharp
public Inno.Rendering.Assets.ShaderPassDefinition.ShaderPassDefinition(string name, Inno.Rendering.ShaderProgramKind programKind, Inno.Rendering.GraphicsCapability requiredFeatures = Inno.Rendering.GraphicsCapability.None, Inno.Rendering.Assets.ShaderRenderState? renderState = null, System.Collections.Generic.IEnumerable<Inno.Rendering.Assets.ShaderMetadataEntry>? metadata = null)
```

Creates a shader pass definition.

**Parameter `name`:** Stable pass name within the shader.

**Parameter `programKind`:** Programmable stage combination.

**Parameter `requiredFeatures`:** Required device capability mask.

**Parameter `renderState`:** Backend-neutral fixed-function state.

**Parameter `metadata`:** Optional provider-defined metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassDefinition.cs#L37).

## `Copy`

<a id="api-e6fb393be4d3205f"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderPassDefinition.Copy 2d2308bf7390667220a80cea00c4816076cc83e995d7984aed58a0c01427c611 -->

```csharp
public Inno.Rendering.Assets.ShaderPassDefinition Inno.Rendering.Assets.ShaderPassDefinition.Copy()
```

Copies the pass declaration with independently owned metadata storage.

**Returns:** A detached declaration whose metadata can be changed without affecting this declaration.
Missing metadata is represented by an empty collection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassDefinition.cs#L84).

## `metadata`

<a id="api-2d4fac53648d6ac6"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderPassDefinition.metadata 63b34db3a692628e1fb446b2f8cf8e10a9a64c0cf92c22a8ba972ee84c2f636d -->

```csharp
public Inno.Rendering.Assets.ShaderMetadataEntry[] Inno.Rendering.Assets.ShaderPassDefinition.metadata { get; set; }
```

Gets or sets provider-defined metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassDefinition.cs#L75).

## `name`

<a id="api-abd416ec9a178b0a"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderPassDefinition.name 64d3052fb07b95d0d4d5abbc54d170d488913d0ae591637d9ffe87e534fe3430 -->

```csharp
public string Inno.Rendering.Assets.ShaderPassDefinition.name { get; set; }
```

Gets or sets the stable pass name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassDefinition.cs#L55).

## `programKind`

<a id="api-0cf35d8fe87db77a"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderPassDefinition.programKind c8e8041cb02b0295aec9b410c71d99c9efef5ec203c83aac0465e004cba1671b -->

```csharp
public Inno.Rendering.ShaderProgramKind Inno.Rendering.Assets.ShaderPassDefinition.programKind { get; set; }
```

Gets or sets the programmable stage combination.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassDefinition.cs#L60).

## `renderState`

<a id="api-ebad19c5a37478a4"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderPassDefinition.renderState 5f8b17acc70cff5cb04384a00190aec2eee2673c858d0b923da96711c540925a -->

```csharp
public Inno.Rendering.Assets.ShaderRenderState Inno.Rendering.Assets.ShaderPassDefinition.renderState { get; set; }
```

Gets or sets backend-neutral fixed-function state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassDefinition.cs#L70).

## `requiredFeatures`

<a id="api-f198c71e131a8c8e"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderPassDefinition.requiredFeatures 322b2155dfa12df6bf29480531a2745c4cea5e00da180324a14794995f93bf61 -->

```csharp
public Inno.Rendering.GraphicsCapability Inno.Rendering.Assets.ShaderPassDefinition.requiredFeatures { get; set; }
```

Gets or sets required device capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassDefinition.cs#L65).
