---
title: "ShaderSourceType"
description: "Reference for ShaderSourceType in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.8dca3fa895b48b68
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSourceType`

This reference describes `ShaderSourceType` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ArrayOf`](#api-56a1a29bc0493957) | Method |
| [`Atomic`](#api-c7191e026a2e4b85) | Method |
| [`IsEquivalentTo`](#api-ac79467dd2f3fb91) | Method |
| [`Storage`](#api-52fba5c48cea5e88) | Method |
| [`Structure`](#api-f701715fa3e0e54b) | Method |
| [`elementCount`](#api-a798433012cd5115) | Property |
| [`elementType`](#api-fe9c340a96f90602) | Property |
| [`fields`](#api-185b04c7c95475b6) | Property |
| [`id`](#api-c4b790df5a952319) | Property |
| [`storage`](#api-5378fc9692271b6a) | Property |

## Type declaration

<a id="api-8dca3fa895b48b68"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSourceType 855e40200208bc28b4401dc7dce4c8dabb889e657da894c00ac7c1dd46fe0ecd -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderSourceType
```

Describes a language-independent function value, including aggregate members and fixed arrays.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L10).

## `ArrayOf`

<a id="api-56a1a29bc0493957"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceType.ArrayOf(Inno.Rendering.Shaders.ShaderSourceType,System.Int32) f1ec2455f99d7853c4100b5061249bb5bd0f699062e98d5647f005aa03287d42 -->

```csharp
public static Inno.Rendering.Shaders.ShaderSourceType Inno.Rendering.Shaders.ShaderSourceType.ArrayOf(Inno.Rendering.Shaders.ShaderSourceType element, int count)
```

Creates a fixed-length array without collapsing its element type.

**Parameter `element`:** Element type.

**Parameter `count`:** Positive fixed element count.

**Returns:** An immutable array type.

**Throws `System.ArgumentException`:** The element is void or an opaque storage binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L87).

## `Atomic`

<a id="api-c7191e026a2e4b85"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceType.Atomic(System.String) 074934dd856cf3c498b151a7f79f6d114209687560bc1c7ba59a261323752bdb -->

```csharp
public static Inno.Rendering.Shaders.ShaderSourceType Inno.Rendering.Shaders.ShaderSourceType.Atomic(string id)
```

Creates an atomic type supplied by a language or graph target.

**Parameter `id`:** Canonical type identity, such as float3, texture2d, or a provider-qualified opaque type.

**Returns:** An immutable atomic type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L70).

## `IsEquivalentTo`

<a id="api-ac79467dd2f3fb91"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceType.IsEquivalentTo(Inno.Rendering.Shaders.ShaderSourceType) 253d6d4eb340b6f622d8f31f0fa296dfe2b92d0cc0ed1604a1c8265393204a34 -->

```csharp
public bool Inno.Rendering.Shaders.ShaderSourceType.IsEquivalentTo(Inno.Rendering.Shaders.ShaderSourceType? other)
```

Checks both nominal identity and complete aggregate layout.

**Parameter `other`:** Candidate type from another implementation.

**Returns:** True only when both descriptors express the same function interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L136).

## `Storage`

<a id="api-52fba5c48cea5e88"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceType.Storage(Inno.Rendering.Shaders.ShaderStorageType) efc5092deb693e63692de2c956079fca12566e512a5472bfb828de8f836aee6e -->

```csharp
public static Inno.Rendering.Shaders.ShaderSourceType Inno.Rendering.Shaders.ShaderSourceType.Storage(Inno.Rendering.Shaders.ShaderStorageType storage)
```

Creates an opaque storage binding value with a complete element, format and access contract.

**Parameter `storage`:** Resource description, independent of any actual GPU object.

**Returns:** An immutable storage handle type; it cannot be constructed or copied as an aggregate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L58).

## `Structure`

<a id="api-f701715fa3e0e54b"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceType.Structure(System.String,System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderSourceField}) a9126f3b03afb249037cdf4422cdf6316d77a487e7ec21c559be428aa2abc852 -->

```csharp
public static Inno.Rendering.Shaders.ShaderSourceType Inno.Rendering.Shaders.ShaderSourceType.Structure(string id, System.Collections.Generic.IEnumerable<Inno.Rendering.Shaders.ShaderSourceField> fields)
```

Creates a nominal structure with a validated immutable field layout.

**Parameter `id`:** Public structure identity shared by alternative implementations.

**Parameter `fields`:** Unique named fields in declaration order.

**Returns:** An immutable structure type.

**Throws `System.ArgumentException`:** The identity is reserved, or fields are empty, null, or duplicated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L113).

## `elementCount`

<a id="api-a798433012cd5115"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceType.elementCount c6530613d3769617ae5be1e7481c46f06cea8a7c48cb58c619b8a98e8aa15a3b -->

```csharp
public int Inno.Rendering.Shaders.ShaderSourceType.elementCount { get; }
```

Gets the fixed array length, or zero for a non-array value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L38).

## `elementType`

<a id="api-fe9c340a96f90602"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceType.elementType 051a0c929d07d3ff6852ce4f293e328e60ae48b82d1f51e5109b6da7bf0157a3 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceType? Inno.Rendering.Shaders.ShaderSourceType.elementType { get; }
```

Gets the array element type, or null for a non-array value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L34).

## `fields`

<a id="api-185b04c7c95475b6"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceType.fields 9a9a0233cf0851a099ead9cfa74a7e3d1f761ef03ea69bfd5fd74e33377632b1 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderSourceField> Inno.Rendering.Shaders.ShaderSourceType.fields { get; }
```

Gets immutable structure fields in declaration order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L42).

## `id`

<a id="api-c4b790df5a952319"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceType.id c5f1f8a60cbb080d722c4602c5a68120fdddcda332a8d68b7cf1656c7af0e716 -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceType.id { get; }
```

Gets the open semantic type identifier, independent of source-language spelling.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L30).

## `storage`

<a id="api-5378fc9692271b6a"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceType.storage b0c43be78d725223720a06eddbb5ef733d88ffa0aff4eaea94cb797b2d82cbb9 -->

```csharp
public Inno.Rendering.Shaders.ShaderStorageType? Inno.Rendering.Shaders.ShaderSourceType.storage { get; }
```

Gets a typed storage binding contract, or null for ordinary values and sampled textures.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L47).
