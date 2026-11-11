---
title: "ShaderPropertyDefinition"
description: "Reference for ShaderPropertyDefinition in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.6bde54bf9206013f
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `ShaderPropertyDefinition`

This reference describes `ShaderPropertyDefinition` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-18dc7f5e9564d00a) | Method |
| [`bindingKind`](#api-0e021cee9c689143) | Property |
| [`bindingOwner`](#api-b16e57283622d457) | Property |
| [`defaultValue`](#api-b0dcd449a25ed027) | Property |
| [`displayName`](#api-6a814bf4e564b75d) | Property |
| [`id`](#api-a7fcb89c06fcdb5f) | Property |
| [`stages`](#api-4db6131a7068d761) | Property |
| [`storageAccess`](#api-e9be0d1df423662b) | Property |
| [`type`](#api-76343f9b35af5e77) | Property |

## Type declaration

<a id="api-6bde54bf9206013f"></a>
<!-- api: T:Inno.Rendering.Assets.ShaderPropertyDefinition a7c53695ab932ba1b847f7fe82e2018b2471953ea4b3177c3e044beed53b0749 -->

```csharp
public struct Inno.Rendering.Assets.ShaderPropertyDefinition
```

Declares one shader property and its reflected stage visibility.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L17).

## `#ctor`

<a id="api-18dc7f5e9564d00a"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderPropertyDefinition.#ctor(Inno.Rendering.ShaderPropertyId,System.String,Inno.Rendering.ShaderPropertyType,Inno.Rendering.ShaderStage,Inno.Rendering.Assets.MaterialValue,System.Nullable{Inno.Rendering.ShaderPropertyBindingKind},Inno.Rendering.RenderStorageAccess,Inno.Rendering.Assets.ShaderPropertyBindingOwner) c7193d0aab856165a1bb0e15a2a32f42e4b7f31cea786e6640af15969b86effb -->

```csharp
public Inno.Rendering.Assets.ShaderPropertyDefinition.ShaderPropertyDefinition(Inno.Rendering.ShaderPropertyId id, string displayName, Inno.Rendering.ShaderPropertyType type, Inno.Rendering.ShaderStage stages, Inno.Rendering.Assets.MaterialValue defaultValue, Inno.Rendering.ShaderPropertyBindingKind? bindingKind = null, Inno.Rendering.RenderStorageAccess storageAccess = Inno.Rendering.RenderStorageAccess.Read, Inno.Rendering.Assets.ShaderPropertyBindingOwner bindingOwner = Inno.Rendering.Assets.ShaderPropertyBindingOwner.Material)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L47).

## `bindingKind`

<a id="api-0e021cee9c689143"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderPropertyDefinition.bindingKind 1afc57522f5d50c52de1c69b80af1b2e33796d70ad9a73d7ba9504592dc3c162 -->

```csharp
public Inno.Rendering.ShaderPropertyBindingKind Inno.Rendering.Assets.ShaderPropertyDefinition.bindingKind { get; set; }
```

Gets or sets how the property enters the shader resource interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L103).

## `bindingOwner`

<a id="api-b16e57283622d457"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderPropertyDefinition.bindingOwner 776c53ff538a0475e384e4bbd6784d507062606454e88e76c6b948b46a4c7bd8 -->

```csharp
public Inno.Rendering.Assets.ShaderPropertyBindingOwner Inno.Rendering.Assets.ShaderPropertyDefinition.bindingOwner { get; set; }
```

Gets or sets the layer responsible for supplying this binding at execution time.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L113).

## `defaultValue`

<a id="api-b0dcd449a25ed027"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderPropertyDefinition.defaultValue a95d8a90cec8be10e25d300939f9a36f0f0bb017295d1446386c4fe6740a1074 -->

```csharp
public Inno.Rendering.Assets.MaterialValue Inno.Rendering.Assets.ShaderPropertyDefinition.defaultValue { get; set; }
```

Gets or sets the native serializable default value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L98).

## `displayName`

<a id="api-6a814bf4e564b75d"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderPropertyDefinition.displayName f9e9e9d357104414608b8f0fba7f38e8068b07121f83765bd5157c4789affc91 -->

```csharp
public string Inno.Rendering.Assets.ShaderPropertyDefinition.displayName { get; set; }
```

Gets or sets the artist-facing property name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L83).

## `id`

<a id="api-a7fcb89c06fcdb5f"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderPropertyDefinition.id 49ae4fe988d4df0b8430505e2b43985ce66fe6d42678ea35426ce0dc6a8ee789 -->

```csharp
public Inno.Rendering.ShaderPropertyId Inno.Rendering.Assets.ShaderPropertyDefinition.id { get; set; }
```

Gets or sets the stable property identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L78).

## `stages`

<a id="api-4db6131a7068d761"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderPropertyDefinition.stages b2d8815a972b32b1344741ee8279c89c2a6767c9e526d41fd15576df10b181e6 -->

```csharp
public Inno.Rendering.ShaderStage Inno.Rendering.Assets.ShaderPropertyDefinition.stages { get; set; }
```

Gets or sets stages that access the property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L93).

## `storageAccess`

<a id="api-e9be0d1df423662b"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderPropertyDefinition.storageAccess 870efd8179e5e326932d6d5c3330e880ba47c892375c625429a350fdc7011a8b -->

```csharp
public Inno.Rendering.RenderStorageAccess Inno.Rendering.Assets.ShaderPropertyDefinition.storageAccess { get; set; }
```

Gets or sets required access for storage texture or buffer bindings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L108).

## `type`

<a id="api-76343f9b35af5e77"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderPropertyDefinition.type 06a0dc87a6b7407b260e200e3e89c4664f331086a2f6f63d16ad0d92cf4edcf7 -->

```csharp
public Inno.Rendering.ShaderPropertyType Inno.Rendering.Assets.ShaderPropertyDefinition.type { get; set; }
```

Gets or sets the property type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPropertyDefinition.cs#L88).
