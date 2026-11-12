---
title: "ShaderStorageType"
description: "Reference for ShaderStorageType in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.3af243ff72168d16
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderStorageType`

This reference describes `ShaderStorageType` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bfe5f775adbfe538) | Method |
| [`Buffer`](#api-8aa1db64a8a33166) | Method |
| [`Image`](#api-10df04300ce30dd6) | Method |
| [`IsEquivalentTo`](#api-35a6a01b8709c213) | Method |
| [`access`](#api-0f799b9d10e610ad) | Property |
| [`array`](#api-0cb2a53a0e2f289d) | Property |
| [`dimension`](#api-6a14c52a146abffe) | Property |
| [`format`](#api-2d4d2f60228c87ad) | Property |
| [`isImage`](#api-f091ed71d648ee19) | Property |
| [`valueType`](#api-2c299a5c00e64b4f) | Property |

## Type declaration

<a id="api-3af243ff72168d16"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderStorageType d36d470e128fee42537dc44dc49e29a732fc3a15a7e73930a84afc20cd5c9388 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderStorageType
```

Describes typed storage without embedding a backend register, declaration or resource handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L9).

## `#ctor`

<a id="api-bfe5f775adbfe538"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderStorageType.#ctor 009e8c2a9981b23da4a00b87ea1b1479d9b317f47087ed5fad1f454241d1874b -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderStorageType.ShaderStorageType()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L9).

## `Buffer`

<a id="api-8aa1db64a8a33166"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderStorageType.Buffer(InnoEditor.Rendering.Shaders.ShaderSourceType,InnoEngine.Rendering.RenderStorageAccess) 4913bf724ec1b80bea9a7da7719c07165e68f3a1b909427f14cfbc351238eeac -->

```csharp
public static InnoEditor.Rendering.Shaders.ShaderStorageType InnoEditor.Rendering.Shaders.ShaderStorageType.Buffer(InnoEditor.Rendering.Shaders.ShaderSourceType element, InnoEngine.Rendering.RenderStorageAccess access)
```

Creates a structured storage buffer with an explicit element layout.

**Parameter `element`:** Non-void value layout; resources cannot be embedded in buffer elements.

**Parameter `access`:** Permitted memory operations.

**Returns:** An immutable storage buffer description.

**Throws `System.ArgumentException`:** The element contains void or resource handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L67).

## `Image`

<a id="api-10df04300ce30dd6"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderStorageType.Image(InnoEngine.Rendering.RenderTextureFormat,InnoEngine.Rendering.RenderStorageAccess,InnoEngine.Rendering.RenderTextureDimension,System.Boolean) 03b26819a9eeb14e0ac551e7b1e42d54c296f4e409773ecff991685cb7f9e749 -->

```csharp
public static InnoEditor.Rendering.Shaders.ShaderStorageType InnoEditor.Rendering.Shaders.ShaderStorageType.Image(InnoEngine.Rendering.RenderTextureFormat format, InnoEngine.Rendering.RenderStorageAccess access, InnoEngine.Rendering.RenderTextureDimension dimension = InnoEngine.Rendering.RenderTextureDimension.Texture2D, bool array = false)
```

Creates a formatted storage image; target capabilities must separately support its access and format.

**Parameter `format`:** Linear, non-depth image format supported by the rendering contract.

**Parameter `access`:** Permitted memory operations.

**Parameter `dimension`:** Two-dimensional or three-dimensional image shape.

**Parameter `array`:** Whether a two-dimensional image is an array.

**Returns:** An immutable image description with float4 load/store values.

**Throws `System.ArgumentException`:** The format or shape cannot represent storage image operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L97).

## `IsEquivalentTo`

<a id="api-35a6a01b8709c213"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderStorageType.IsEquivalentTo(InnoEditor.Rendering.Shaders.ShaderStorageType) bf674e18a4247a1ab9a73b2f48b8e43137daccf80bbb9c91666e61612da936f3 -->

```csharp
public bool InnoEditor.Rendering.Shaders.ShaderStorageType.IsEquivalentTo(InnoEditor.Rendering.Shaders.ShaderStorageType? other)
```

Compares complete access, format, shape and element layout contracts.

**Parameter `other`:** Candidate resource description.

**Returns:** True only when both bindings permit exactly the same operations and values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L119).

## `access`

<a id="api-0f799b9d10e610ad"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderStorageType.access 190d33102e3d156a333f04f7e220db19b7cec988f477e3de4ca8b141ba02e816 -->

```csharp
public InnoEngine.Rendering.RenderStorageAccess InnoEditor.Rendering.Shaders.ShaderStorageType.access { get; }
```

Gets the permitted memory access, independent of Render Graph scheduling.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L34).

## `array`

<a id="api-0cb2a53a0e2f289d"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderStorageType.array b5872fdaa0b9ab8277ddd25bb09b885a93883d2af1f730e582492101b757779d -->

```csharp
public bool InnoEditor.Rendering.Shaders.ShaderStorageType.array { get; }
```

Gets whether a two-dimensional storage image has array layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L46).

## `dimension`

<a id="api-6a14c52a146abffe"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderStorageType.dimension 0ecf3d3ba2edea8905e274c8ad592201970c9d071ea1e3a8f1defd5ccd2a0e61 -->

```csharp
public InnoEngine.Rendering.RenderTextureDimension InnoEditor.Rendering.Shaders.ShaderStorageType.dimension { get; }
```

Gets the image dimension; ignored for buffers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L42).

## `format`

<a id="api-2d4d2f60228c87ad"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderStorageType.format 0be2af456d970e7c0bea6fb6d9849dcbc21645f69dbe59f1463b1534346dc47a -->

```csharp
public InnoEngine.Rendering.RenderTextureFormat? InnoEditor.Rendering.Shaders.ShaderStorageType.format { get; }
```

Gets the exact storage image format, or null for a structured buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L38).

## `isImage`

<a id="api-f091ed71d648ee19"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderStorageType.isImage da5549f0ba86af982be80f88cf678f9bf18207ee019c87da20dbf7b0af46028d -->

```csharp
public bool InnoEditor.Rendering.Shaders.ShaderStorageType.isImage { get; }
```

Gets whether this descriptor denotes an image rather than a structured buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L50).

## `valueType`

<a id="api-2c299a5c00e64b4f"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderStorageType.valueType 95691ae3ce8ec0e13e03626ffb77266e4fe6a88f3a6b08d20325edd492fdfa16 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceType InnoEditor.Rendering.Shaders.ShaderStorageType.valueType { get; }
```

Gets the buffer element or image load/store value type; image operations use float4.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L30).
