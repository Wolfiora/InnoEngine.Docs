---
title: "ShaderPropertyDefinition"
description: "Reference for ShaderPropertyDefinition in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.ffb96bd2b4b0a737
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `ShaderPropertyDefinition`

This reference describes `ShaderPropertyDefinition` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bcc67ae56494486e) | Method |
| [`bindingKind`](#api-67e7d85534ca89ba) | Property |
| [`bindingOwner`](#api-08b8930e9091237c) | Property |
| [`defaultValue`](#api-d52b45264f5ac993) | Property |
| [`displayName`](#api-b676fd4ec87c4cde) | Property |
| [`id`](#api-309820e45923cd53) | Property |
| [`stages`](#api-ec0274e869fb8f5e) | Property |
| [`storageAccess`](#api-965d2eeb00d68313) | Property |
| [`type`](#api-92f8644326c5185a) | Property |

## Type declaration

<a id="api-ffb96bd2b4b0a737"></a>
<!-- api: T:InnoEngine.Rendering.ShaderPropertyDefinition 5df13710984890caca377ab1639d81aaede46dcdccaff688bbe3629d1c78a7f1 -->

```csharp
public struct InnoEngine.Rendering.ShaderPropertyDefinition
```

Declares one shader property and its reflected stage visibility.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L17).

## `#ctor`

<a id="api-bcc67ae56494486e"></a>
<!-- api: M:InnoEngine.Rendering.ShaderPropertyDefinition.#ctor(InnoEngine.Rendering.ShaderPropertyId,System.String,InnoEngine.Rendering.ShaderPropertyType,InnoEngine.Rendering.ShaderStage,InnoEngine.Rendering.MaterialValue,System.Nullable{InnoEngine.Rendering.ShaderPropertyBindingKind},InnoEngine.Rendering.RenderStorageAccess,InnoEngine.Rendering.ShaderPropertyBindingOwner) d666321ba52931c8ff7149413c8aa33bad459d7d17ca87aef0f22d94312ce5ea -->

```csharp
public InnoEngine.Rendering.ShaderPropertyDefinition.ShaderPropertyDefinition(InnoEngine.Rendering.ShaderPropertyId id, string displayName, InnoEngine.Rendering.ShaderPropertyType type, InnoEngine.Rendering.ShaderStage stages, InnoEngine.Rendering.MaterialValue defaultValue, InnoEngine.Rendering.ShaderPropertyBindingKind? bindingKind = null, InnoEngine.Rendering.RenderStorageAccess storageAccess = InnoEngine.Rendering.RenderStorageAccess.Read, InnoEngine.Rendering.ShaderPropertyBindingOwner bindingOwner = InnoEngine.Rendering.ShaderPropertyBindingOwner.Material)
```

Creates a shader property definition.

**Parameter `id`:** Stable property identifier.

**Parameter `displayName`:** Artist-facing property name.

**Parameter `type`:** Property type.

**Parameter `stages`:** Stages that access the property.

**Parameter `defaultValue`:** Native serializable default value.

**Parameter `bindingKind`:** Optional explicit binding domain. When omitted, numeric values become uniforms, textures become sampled
textures, and buffers become storage buffers.

**Parameter `storageAccess`:** Required access for storage texture or buffer bindings.

**Parameter `bindingOwner`:** Layer responsible for supplying the binding value at execution time.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L47).

## `bindingKind`

<a id="api-67e7d85534ca89ba"></a>
<!-- api: P:InnoEngine.Rendering.ShaderPropertyDefinition.bindingKind 654883d24bc9c33457b7fad5bf156550718f6642028149c6d27da280613e6019 -->

```csharp
public InnoEngine.Rendering.ShaderPropertyBindingKind InnoEngine.Rendering.ShaderPropertyDefinition.bindingKind { get; set; }
```

Gets or sets how the property enters the shader resource interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L103).

## `bindingOwner`

<a id="api-08b8930e9091237c"></a>
<!-- api: P:InnoEngine.Rendering.ShaderPropertyDefinition.bindingOwner 7bfa5041645f8a929ff26ad301402a04b782874cabfd908f6f685e9d3c0251f1 -->

```csharp
public InnoEngine.Rendering.ShaderPropertyBindingOwner InnoEngine.Rendering.ShaderPropertyDefinition.bindingOwner { get; set; }
```

Gets or sets the layer responsible for supplying this binding at execution time.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L113).

## `defaultValue`

<a id="api-d52b45264f5ac993"></a>
<!-- api: P:InnoEngine.Rendering.ShaderPropertyDefinition.defaultValue a55320958ebafd078fb720fca0d06b264b64509de408793a56585272537d85b4 -->

```csharp
public InnoEngine.Rendering.MaterialValue InnoEngine.Rendering.ShaderPropertyDefinition.defaultValue { get; set; }
```

Gets or sets the native serializable default value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L98).

## `displayName`

<a id="api-b676fd4ec87c4cde"></a>
<!-- api: P:InnoEngine.Rendering.ShaderPropertyDefinition.displayName 2506cf9b711f15c2c87d9cc5e5abbad51d6f648f140c9ca065bb5566b27b3151 -->

```csharp
public string InnoEngine.Rendering.ShaderPropertyDefinition.displayName { get; set; }
```

Gets or sets the artist-facing property name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L83).

## `id`

<a id="api-309820e45923cd53"></a>
<!-- api: P:InnoEngine.Rendering.ShaderPropertyDefinition.id 2b7a442eeec23cf1cb5b3fa1c841dbfe5e93e4a7996734a1518d963f9fd97325 -->

```csharp
public InnoEngine.Rendering.ShaderPropertyId InnoEngine.Rendering.ShaderPropertyDefinition.id { get; set; }
```

Gets or sets the stable property identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L78).

## `stages`

<a id="api-ec0274e869fb8f5e"></a>
<!-- api: P:InnoEngine.Rendering.ShaderPropertyDefinition.stages 5b10dccf143b8366eedfd9360145d4562340f912fcd9e9b65b5853054a8c5d6b -->

```csharp
public InnoEngine.Rendering.ShaderStage InnoEngine.Rendering.ShaderPropertyDefinition.stages { get; set; }
```

Gets or sets stages that access the property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L93).

## `storageAccess`

<a id="api-965d2eeb00d68313"></a>
<!-- api: P:InnoEngine.Rendering.ShaderPropertyDefinition.storageAccess 2e5897c66b6091e310967b91b0d7e1fb8473fa71bb4eb21fcd01233793968366 -->

```csharp
public InnoEngine.Rendering.RenderStorageAccess InnoEngine.Rendering.ShaderPropertyDefinition.storageAccess { get; set; }
```

Gets or sets required access for storage texture or buffer bindings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L108).

## `type`

<a id="api-92f8644326c5185a"></a>
<!-- api: P:InnoEngine.Rendering.ShaderPropertyDefinition.type ca41498dd0b05601efea20d77a04378d93d4ea7b17ec4fd7a9a13d97f176dbd0 -->

```csharp
public InnoEngine.Rendering.ShaderPropertyType InnoEngine.Rendering.ShaderPropertyDefinition.type { get; set; }
```

Gets or sets the property type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L88).
