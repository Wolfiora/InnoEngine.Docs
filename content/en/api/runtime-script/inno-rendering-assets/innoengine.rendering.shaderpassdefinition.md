---
title: "ShaderPassDefinition"
description: "Reference for ShaderPassDefinition in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.bfac70d845a43a35
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `ShaderPassDefinition`

This reference describes `ShaderPassDefinition` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0908c4c706edf7a3) | Method |
| [`Copy`](#api-e43b1289afd23918) | Method |
| [`metadata`](#api-9ab573b9944e4748) | Property |
| [`name`](#api-365e4653c0d8f339) | Property |
| [`programKind`](#api-d9f6ae20ca64907a) | Property |
| [`renderState`](#api-756437dcd95d82f3) | Property |
| [`requiredFeatures`](#api-deb9d6d49807ecd1) | Property |

## Type declaration

<a id="api-bfac70d845a43a35"></a>
<!-- api: T:InnoEngine.Rendering.ShaderPassDefinition 80f0ba6d9f3565877d6b36ce41c640a79a4a6fdc7b17227e1da8f70bab9468b3 -->

```csharp
public struct InnoEngine.Rendering.ShaderPassDefinition
```

Defines one backend-neutral raster or compute shader pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassDefinition.cs#L17).

## `#ctor`

<a id="api-0908c4c706edf7a3"></a>
<!-- api: M:InnoEngine.Rendering.ShaderPassDefinition.#ctor(System.String,InnoEngine.Rendering.ShaderProgramKind,InnoEngine.Rendering.GraphicsCapability,System.Nullable{InnoEngine.Rendering.ShaderRenderState},System.Collections.Generic.IEnumerable{InnoEngine.Rendering.ShaderMetadataEntry}) df1152446b231c8769cc38e4065e9446fce4f23aad497200445136a03121370e -->

```csharp
public InnoEngine.Rendering.ShaderPassDefinition.ShaderPassDefinition(string name, InnoEngine.Rendering.ShaderProgramKind programKind, InnoEngine.Rendering.GraphicsCapability requiredFeatures = InnoEngine.Rendering.GraphicsCapability.None, InnoEngine.Rendering.ShaderRenderState? renderState = null, System.Collections.Generic.IEnumerable<InnoEngine.Rendering.ShaderMetadataEntry>? metadata = null)
```

Creates a shader pass definition.

**Parameter `name`:** Stable pass name within the shader.

**Parameter `programKind`:** Programmable stage combination.

**Parameter `requiredFeatures`:** Required device capability mask.

**Parameter `renderState`:** Backend-neutral fixed-function state.

**Parameter `metadata`:** Optional provider-defined metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassDefinition.cs#L37).

## `Copy`

<a id="api-e43b1289afd23918"></a>
<!-- api: M:InnoEngine.Rendering.ShaderPassDefinition.Copy 4dcd83a09958be5139ec92f8508df5b4404e38f3cacb8d3529e606843a9c2894 -->

```csharp
public InnoEngine.Rendering.ShaderPassDefinition InnoEngine.Rendering.ShaderPassDefinition.Copy()
```

Copies the pass declaration with independently owned metadata storage.

**Returns:** A detached declaration whose metadata can be changed without affecting this declaration.
Missing metadata is represented by an empty collection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassDefinition.cs#L84).

## `metadata`

<a id="api-9ab573b9944e4748"></a>
<!-- api: P:InnoEngine.Rendering.ShaderPassDefinition.metadata c9d77fe34b107f015e9a4eca2bf32b8811d42ca1a2b9e64f8f9f3926f8a8aae6 -->

```csharp
public InnoEngine.Rendering.ShaderMetadataEntry[] InnoEngine.Rendering.ShaderPassDefinition.metadata { get; set; }
```

Gets or sets provider-defined metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassDefinition.cs#L75).

## `name`

<a id="api-365e4653c0d8f339"></a>
<!-- api: P:InnoEngine.Rendering.ShaderPassDefinition.name 635980014fbc1f6ae375546d9e08cf5e9ce8206a9b1fd70ff330de4b3c3943b0 -->

```csharp
public string InnoEngine.Rendering.ShaderPassDefinition.name { get; set; }
```

Gets or sets the stable pass name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassDefinition.cs#L55).

## `programKind`

<a id="api-d9f6ae20ca64907a"></a>
<!-- api: P:InnoEngine.Rendering.ShaderPassDefinition.programKind 0cfca7fde206d3f2645efac0797fcca0853eaa311e998b1c38ed8b07505f4697 -->

```csharp
public InnoEngine.Rendering.ShaderProgramKind InnoEngine.Rendering.ShaderPassDefinition.programKind { get; set; }
```

Gets or sets the programmable stage combination.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassDefinition.cs#L60).

## `renderState`

<a id="api-756437dcd95d82f3"></a>
<!-- api: P:InnoEngine.Rendering.ShaderPassDefinition.renderState 06a70979f75f051d63c9c5b9758f9d9f0bad2077880db334cb8d30163a2fe439 -->

```csharp
public InnoEngine.Rendering.ShaderRenderState InnoEngine.Rendering.ShaderPassDefinition.renderState { get; set; }
```

Gets or sets backend-neutral fixed-function state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassDefinition.cs#L70).

## `requiredFeatures`

<a id="api-deb9d6d49807ecd1"></a>
<!-- api: P:InnoEngine.Rendering.ShaderPassDefinition.requiredFeatures b33a242cec2b33d75f32aace673fd0ed3e95be4f7d7be64d3ab009b34b9d8ad4 -->

```csharp
public InnoEngine.Rendering.GraphicsCapability InnoEngine.Rendering.ShaderPassDefinition.requiredFeatures { get; set; }
```

Gets or sets required device capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassDefinition.cs#L65).
