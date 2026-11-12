---
title: "ShaderGraphType"
description: "Reference for ShaderGraphType in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.9d67065e356d8c0f
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderGraphType`

This reference describes `ShaderGraphType` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-09418a92eb51f7ba) | Method |
| [`Capture`](#api-8393b6afd2001223) | Method |
| [`CreateType`](#api-36c4991f324fe066) | Method |
| [`access`](#api-a305b03c8031dbed) | Property |
| [`dimension`](#api-8cbd543fcf84677c) | Property |
| [`element`](#api-749d134dc29eac1b) | Property |
| [`fieldNames`](#api-fe97ee93dc3dce1a) | Property |
| [`fieldTypes`](#api-32a9acf3f343b3e9) | Property |
| [`format`](#api-18a6a7dbc3049e3e) | Property |
| [`id`](#api-79443b6914ecf20e) | Property |
| [`isArray`](#api-d524c5082e8ad4dd) | Property |
| [`isImage`](#api-5a577ba5092d9079) | Property |
| [`isStorage`](#api-4d9a1dc6e02d9d5d) | Property |
| [`length`](#api-fe3896eaf7e84848) | Property |
| [`storageElement`](#api-31472caf90cdfebe) | Property |

## Type declaration

<a id="api-9d67065e356d8c0f"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderGraphType 54a5af998a7c699ff9f47f7d700ead2b74213a295fd4e469aabbc9a7a66ce526 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderGraphType : InnoEngine.Serialization.ISerializable
```

Persists a complete shader type as neutral native-serializable data, without extension instances.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L10).

## `#ctor`

<a id="api-09418a92eb51f7ba"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphType.#ctor 596d87e264a6b801cd85eed58336e84949e4385d47d30564db307830b1af4631 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphType.ShaderGraphType()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L10).

## `Capture`

<a id="api-8393b6afd2001223"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphType.Capture(InnoEditor.Rendering.Shaders.ShaderSourceType) 89e0a82d44a42ec11792cbd8914db8521b6a5da05a2daa3f6da94be524521a0f -->

```csharp
public static InnoEditor.Rendering.Shaders.ShaderGraphType InnoEditor.Rendering.Shaders.ShaderGraphType.Capture(InnoEditor.Rendering.Shaders.ShaderSourceType type)
```

Captures a full immutable source type as reload-safe authoring data.

**Parameter `type`:** Atomic, aggregate or storage type to capture.

**Returns:** A detached descriptor whose reconstructed type has the same complete interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L70).

## `CreateType`

<a id="api-36c4991f324fe066"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderGraphType.CreateType 3b0e628f2408c122600c46c5b8bb000e80661644b61f57de477de3fe99dba0ae -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceType InnoEditor.Rendering.Shaders.ShaderGraphType.CreateType()
```

Validates and freezes the complete descriptor.

**Returns:** An immutable type; contradictory or incomplete descriptors fail explicitly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L97).

## `access`

<a id="api-a305b03c8031dbed"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphType.access b3c0025291d48da2f422d572905d50c8ca868a326db1ebbc18b68c2d7f01959b -->

```csharp
public InnoEngine.Rendering.RenderStorageAccess InnoEditor.Rendering.Shaders.ShaderGraphType.access { get; set; }
```

Gets or sets storage access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L47).

## `dimension`

<a id="api-8cbd543fcf84677c"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphType.dimension c3d3da87beb9c110ea17c0382f0e3ff27de519d004ab723aedd85974afa5fcf6 -->

```csharp
public InnoEngine.Rendering.RenderTextureDimension InnoEditor.Rendering.Shaders.ShaderGraphType.dimension { get; set; }
```

Gets or sets the image spatial dimension.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L55).

## `element`

<a id="api-749d134dc29eac1b"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphType.element b0818d881e6b975b830ff8bc57748a66b7a9c1663b7a598db90a7d3a4279f033 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphType? InnoEditor.Rendering.Shaders.ShaderGraphType.element { get; set; }
```

Gets or sets the fixed array element type, or null for a non-array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L19).

## `fieldNames`

<a id="api-fe97ee93dc3dce1a"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphType.fieldNames 0fb7fc17580f565fd9abf15a8449215a5692b2957e36742bd181cb3b12ce7c2e -->

```csharp
public string[] InnoEditor.Rendering.Shaders.ShaderGraphType.fieldNames { get; set; }
```

Gets or sets ordered structure member names.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L27).

## `fieldTypes`

<a id="api-32a9acf3f343b3e9"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphType.fieldTypes c68db8beaa33695e6f6a966af22a9341ba1aba0553500714e069dbe721937b89 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphType[] InnoEditor.Rendering.Shaders.ShaderGraphType.fieldTypes { get; set; }
```

Gets or sets ordered structure member types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L31).

## `format`

<a id="api-18a6a7dbc3049e3e"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphType.format 31251a0c27ec9c1486aff74b7a86116780fa5f982be65a2d60b5af4fe09e61f6 -->

```csharp
public InnoEngine.Rendering.RenderTextureFormat InnoEditor.Rendering.Shaders.ShaderGraphType.format { get; set; }
```

Gets or sets the image texel format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L51).

## `id`

<a id="api-79443b6914ecf20e"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphType.id b8fe017f4500780e77f114cfb4bc455ed5b26b13a89d2188d340ab383f730532 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderGraphType.id { get; set; }
```

Gets or sets the atomic or nominal structure type identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L15).

## `isArray`

<a id="api-d524c5082e8ad4dd"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphType.isArray e150eca4bda2bca12f6d0c882a3bc4950f7281e52e4f76c376d022211104eaf5 -->

```csharp
public bool InnoEditor.Rendering.Shaders.ShaderGraphType.isArray { get; set; }
```

Gets or sets whether an image has array layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L59).

## `isImage`

<a id="api-5a577ba5092d9079"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphType.isImage bf57baa83966e3b0f4f23fa40b40f053d98c0825bec06231ea6568b525e372c4 -->

```csharp
public bool InnoEditor.Rendering.Shaders.ShaderGraphType.isImage { get; set; }
```

Gets or sets whether storage is an image instead of a buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L39).

## `isStorage`

<a id="api-4d9a1dc6e02d9d5d"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphType.isStorage 54760b2e293dca8c7886380e7f300c7ebbc21ca8dedccde40c3c9efa12c722ff -->

```csharp
public bool InnoEditor.Rendering.Shaders.ShaderGraphType.isStorage { get; set; }
```

Gets or sets whether the descriptor represents a storage binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L35).

## `length`

<a id="api-fe3896eaf7e84848"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphType.length 48f037fd9fa5c679a03acbde0d9e74b9d8c33731a73ee9c9c09e72c6223fa201 -->

```csharp
public int InnoEditor.Rendering.Shaders.ShaderGraphType.length { get; set; }
```

Gets or sets the fixed array length.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L23).

## `storageElement`

<a id="api-31472caf90cdfebe"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderGraphType.storageElement 6ef2b2059834713f36fd9e8aa143c2e935ce75266919a3dafd6d611ce75dfa6c -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderGraphType? InnoEditor.Rendering.Shaders.ShaderGraphType.storageElement { get; set; }
```

Gets or sets the complete buffer element type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L43).
