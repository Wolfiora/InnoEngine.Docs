---
title: "ShaderSourceType"
description: "Reference for ShaderSourceType in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.4c2b465ac08a2808
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderSourceType`

This reference describes `ShaderSourceType` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a070bb827ad7aa88) | Method |
| [`ArrayOf`](#api-cbf88922a0835fe1) | Method |
| [`Atomic`](#api-2e811d8d6e1264ec) | Method |
| [`IsEquivalentTo`](#api-f060a3e8ff6ced36) | Method |
| [`Storage`](#api-0b67a151c81868e9) | Method |
| [`Structure`](#api-a79d60f878238d77) | Method |
| [`elementCount`](#api-34462002db3e393c) | Property |
| [`elementType`](#api-8dc1e406d2bd50cf) | Property |
| [`fields`](#api-0f99793fac00dd91) | Property |
| [`id`](#api-1bf991089509daa9) | Property |
| [`storage`](#api-c44ce91ca5da24e9) | Property |

## Type declaration

<a id="api-4c2b465ac08a2808"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderSourceType 8d3cbb5a3e0f8ffb4d013053cc918e692d0a1da6690f3f9d80c0cede8c4f563e -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderSourceType
```

Describes a language-independent function value, including aggregate members and fixed arrays.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L10).

## `#ctor`

<a id="api-a070bb827ad7aa88"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceType.#ctor b382f769065ec12bcc12731e410fb05f4b196c5c97c41f72a3068a3b189297b0 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceType.ShaderSourceType()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L10).

## `ArrayOf`

<a id="api-cbf88922a0835fe1"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceType.ArrayOf(InnoEditor.Rendering.Shaders.ShaderSourceType,System.Int32) 7a72219f16790d51476d97ac852c43080aa662fecc57e1efceec3d6f47a3e2f8 -->

```csharp
public static InnoEditor.Rendering.Shaders.ShaderSourceType InnoEditor.Rendering.Shaders.ShaderSourceType.ArrayOf(InnoEditor.Rendering.Shaders.ShaderSourceType element, int count)
```

Creates a fixed-length array without collapsing its element type.

**Parameter `element`:** Element type.

**Parameter `count`:** Positive fixed element count.

**Returns:** An immutable array type.

**Throws `System.ArgumentException`:** The element is void or an opaque storage binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L87).

## `Atomic`

<a id="api-2e811d8d6e1264ec"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceType.Atomic(System.String) e65db090419cb0e9cfb87d8113c1bf7d9f77f5adb0f7d737b8a82cd54782f1d1 -->

```csharp
public static InnoEditor.Rendering.Shaders.ShaderSourceType InnoEditor.Rendering.Shaders.ShaderSourceType.Atomic(string id)
```

Creates an atomic type supplied by a language or graph target.

**Parameter `id`:** Canonical type identity, such as float3, texture2d, or a provider-qualified opaque type.

**Returns:** An immutable atomic type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L70).

## `IsEquivalentTo`

<a id="api-f060a3e8ff6ced36"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceType.IsEquivalentTo(InnoEditor.Rendering.Shaders.ShaderSourceType) 327310e362615ef6132cc7d2e9fd7fe317f82507f88a6db1b8fb22654f1ffab7 -->

```csharp
public bool InnoEditor.Rendering.Shaders.ShaderSourceType.IsEquivalentTo(InnoEditor.Rendering.Shaders.ShaderSourceType? other)
```

Checks both nominal identity and complete aggregate layout.

**Parameter `other`:** Candidate type from another implementation.

**Returns:** True only when both descriptors express the same function interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L136).

## `Storage`

<a id="api-0b67a151c81868e9"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceType.Storage(InnoEditor.Rendering.Shaders.ShaderStorageType) a94c78f6a42a6a2036b76ec74742ad4df3c2a803bdc5a17b9f47e85847799c8a -->

```csharp
public static InnoEditor.Rendering.Shaders.ShaderSourceType InnoEditor.Rendering.Shaders.ShaderSourceType.Storage(InnoEditor.Rendering.Shaders.ShaderStorageType storage)
```

Creates an opaque storage binding value with a complete element, format and access contract.

**Parameter `storage`:** Resource description, independent of any actual GPU object.

**Returns:** An immutable storage handle type; it cannot be constructed or copied as an aggregate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L58).

## `Structure`

<a id="api-a79d60f878238d77"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceType.Structure(System.String,System.Collections.Generic.IEnumerable{InnoEditor.Rendering.Shaders.ShaderSourceField}) 7407aa299ddb9d2b226a5f924a22a8821eb37d25c7400485fbc512b2365fe2f6 -->

```csharp
public static InnoEditor.Rendering.Shaders.ShaderSourceType InnoEditor.Rendering.Shaders.ShaderSourceType.Structure(string id, System.Collections.Generic.IEnumerable<InnoEditor.Rendering.Shaders.ShaderSourceField> fields)
```

Creates a nominal structure with a validated immutable field layout.

**Parameter `id`:** Public structure identity shared by alternative implementations.

**Parameter `fields`:** Unique named fields in declaration order.

**Returns:** An immutable structure type.

**Throws `System.ArgumentException`:** The identity is reserved, or fields are empty, null, or duplicated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L113).

## `elementCount`

<a id="api-34462002db3e393c"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceType.elementCount 6f425a632e8952b3c2e90283cc263827ca635dd899da55901e3b70b90fe3dd67 -->

```csharp
public int InnoEditor.Rendering.Shaders.ShaderSourceType.elementCount { get; }
```

Gets the fixed array length, or zero for a non-array value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L38).

## `elementType`

<a id="api-8dc1e406d2bd50cf"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceType.elementType ac6d07850e05a93936a8b092616f18a37b46b29755fc1891de3d132817fd690a -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceType? InnoEditor.Rendering.Shaders.ShaderSourceType.elementType { get; }
```

Gets the array element type, or null for a non-array value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L34).

## `fields`

<a id="api-0f99793fac00dd91"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceType.fields bd37260706a02016e405e356d874c3b3045f3a4002a4caddc86bc0a9d213a6e8 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Rendering.Shaders.ShaderSourceField> InnoEditor.Rendering.Shaders.ShaderSourceType.fields { get; }
```

Gets immutable structure fields in declaration order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L42).

## `id`

<a id="api-1bf991089509daa9"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceType.id 8f34d7adeaf6a15a69835ad4ff41d67f8a689ac63d338d37531493c57c496bb8 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderSourceType.id { get; }
```

Gets the open semantic type identifier, independent of source-language spelling.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L30).

## `storage`

<a id="api-c44ce91ca5da24e9"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceType.storage b95351555a9f177744dbd11b38eba31b3bcf330b36ff8791b52454879d6c3630 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderStorageType? InnoEditor.Rendering.Shaders.ShaderSourceType.storage { get; }
```

Gets a typed storage binding contract, or null for ordinary values and sampled textures.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L47).
