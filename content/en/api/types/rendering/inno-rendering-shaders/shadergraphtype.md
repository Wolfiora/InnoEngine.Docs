---
title: "ShaderGraphType"
description: "Reference for ShaderGraphType in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.cabe82d4f7d39cf3
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphType`

This reference describes `ShaderGraphType` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bb4ace7de5ce5a38) | Method |
| [`Capture`](#api-1aa2a37b9b5f5938) | Method |
| [`CreateType`](#api-6ba3336cbaeb56dc) | Method |
| [`access`](#api-30fef87da91a9029) | Property |
| [`dimension`](#api-01d685e53c42ce91) | Property |
| [`element`](#api-94e346663ccaf39a) | Property |
| [`fieldNames`](#api-e8f02e174ffbc76f) | Property |
| [`fieldTypes`](#api-3641a1dbfc8bcccc) | Property |
| [`format`](#api-1fb0a06440f6388e) | Property |
| [`id`](#api-fc4dc8be05e107d3) | Property |
| [`isArray`](#api-e1e2d5da2cf7e3a2) | Property |
| [`isImage`](#api-0bf32106ff5b393b) | Property |
| [`isStorage`](#api-c0b3ea8ab25c6a36) | Property |
| [`length`](#api-f4ba44f2f2ade19e) | Property |
| [`storageElement`](#api-3c081627030544b0) | Property |

## Type declaration

<a id="api-cabe82d4f7d39cf3"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphType 10114ba5bbc1bff28ce6b4ffab52d7dff5dd046ed8803d64560453f1663316f5 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphType : Inno.Core.Serialization.ISerializable
```

Persists a complete shader type as neutral native-serializable data, without extension instances.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L10).

## `#ctor`

<a id="api-bb4ace7de5ce5a38"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphType.#ctor 5cd3fd6bceeee9cd7c18cca07b5f07ac7e702564d3e0c48e7aaf657e1586116b -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphType.ShaderGraphType()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L10).

## `Capture`

<a id="api-1aa2a37b9b5f5938"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphType.Capture(Inno.Rendering.Shaders.ShaderSourceType) 8b0dd8c5e8b2f0700c97b937136eb52f16da14b92fdd0e1cd74869acdadaa078 -->

```csharp
public static Inno.Rendering.Shaders.ShaderGraphType Inno.Rendering.Shaders.ShaderGraphType.Capture(Inno.Rendering.Shaders.ShaderSourceType type)
```

Captures a full immutable source type as reload-safe authoring data.

**Parameter `type`:** Atomic, aggregate or storage type to capture.

**Returns:** A detached descriptor whose reconstructed type has the same complete interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L70).

## `CreateType`

<a id="api-6ba3336cbaeb56dc"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphType.CreateType 2b9d50eece783f1b15e45ea88fce5f3892fb78565e3fa58f28b5effffe416598 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceType Inno.Rendering.Shaders.ShaderGraphType.CreateType()
```

Validates and freezes the complete descriptor.

**Returns:** An immutable type; contradictory or incomplete descriptors fail explicitly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L97).

## `access`

<a id="api-30fef87da91a9029"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphType.access 3adc9df8b8689fbf00d6a2e2b1ccaed55482e107da884ef0068423a0a96ef56f -->

```csharp
public Inno.Rendering.RenderStorageAccess Inno.Rendering.Shaders.ShaderGraphType.access { get; set; }
```

Gets or sets storage access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L47).

## `dimension`

<a id="api-01d685e53c42ce91"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphType.dimension 1af64b71427eb42ffba0c5e9e62c1d16370b12468af58a3b0168e2d3048269bc -->

```csharp
public Inno.Rendering.RenderTextureDimension Inno.Rendering.Shaders.ShaderGraphType.dimension { get; set; }
```

Gets or sets the image spatial dimension.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L55).

## `element`

<a id="api-94e346663ccaf39a"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphType.element 8058c4b5beeea9919f27ee72d5e2a6bcfc07e2da96b42ecb8accb3fb64bd91e6 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphType? Inno.Rendering.Shaders.ShaderGraphType.element { get; set; }
```

Gets or sets the fixed array element type, or null for a non-array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L19).

## `fieldNames`

<a id="api-e8f02e174ffbc76f"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphType.fieldNames 262a99668f364897e4649bd89b0ddbb72c4b9b9f072c71f2d9dfbc76b3810aa9 -->

```csharp
public string[] Inno.Rendering.Shaders.ShaderGraphType.fieldNames { get; set; }
```

Gets or sets ordered structure member names.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L27).

## `fieldTypes`

<a id="api-3641a1dbfc8bcccc"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphType.fieldTypes e17c1410d3a8b7c4b0101684c31dba14f4e95fc39a8480c2dc992856f54f9aab -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphType[] Inno.Rendering.Shaders.ShaderGraphType.fieldTypes { get; set; }
```

Gets or sets ordered structure member types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L31).

## `format`

<a id="api-1fb0a06440f6388e"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphType.format bb762ae20fa5efa677ea405f8cb6b52c3681e79fcce136a4c22a6da5f6deb7be -->

```csharp
public Inno.Rendering.RenderTextureFormat Inno.Rendering.Shaders.ShaderGraphType.format { get; set; }
```

Gets or sets the image texel format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L51).

## `id`

<a id="api-fc4dc8be05e107d3"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphType.id 79e3704c712b7de9f8e19a596393485b5172de167fb3a46d4da75003dd80a0e2 -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphType.id { get; set; }
```

Gets or sets the atomic or nominal structure type identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L15).

## `isArray`

<a id="api-e1e2d5da2cf7e3a2"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphType.isArray e9a80aba2828c36393c768d0dd025883a30d962eea0d23aae7b038d91b340126 -->

```csharp
public bool Inno.Rendering.Shaders.ShaderGraphType.isArray { get; set; }
```

Gets or sets whether an image has array layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L59).

## `isImage`

<a id="api-0bf32106ff5b393b"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphType.isImage 34654cd346e588bf1e913527d5e8b4d11fe172021c480d9d6826ffd595557262 -->

```csharp
public bool Inno.Rendering.Shaders.ShaderGraphType.isImage { get; set; }
```

Gets or sets whether storage is an image instead of a buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L39).

## `isStorage`

<a id="api-c0b3ea8ab25c6a36"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphType.isStorage 5845703b5ccf7d9e69a49357780c3f739dd40aa61ac56145e61e60e8a8207504 -->

```csharp
public bool Inno.Rendering.Shaders.ShaderGraphType.isStorage { get; set; }
```

Gets or sets whether the descriptor represents a storage binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L35).

## `length`

<a id="api-f4ba44f2f2ade19e"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphType.length 95fcc82b8536b9e2c9275a4b5dd3771412b93b09c92754bdb25518632b5c681e -->

```csharp
public int Inno.Rendering.Shaders.ShaderGraphType.length { get; set; }
```

Gets or sets the fixed array length.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L23).

## `storageElement`

<a id="api-3c081627030544b0"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphType.storageElement 7f12557b972b7aaa8e01203c2893b4bda1a7a867c5603414c7a6ed10f9b374d1 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphType? Inno.Rendering.Shaders.ShaderGraphType.storageElement { get; set; }
```

Gets or sets the complete buffer element type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphType.cs#L43).
