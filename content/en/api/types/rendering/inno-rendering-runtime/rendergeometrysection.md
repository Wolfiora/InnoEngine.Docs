---
title: "RenderGeometrySection"
description: "Reference for RenderGeometrySection in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.dd107c8ec961a5cf
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderGeometrySection`

This reference describes `RenderGeometrySection` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Runtime.RenderGeometrySection>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-08667da2923f5c25) | Method |
| [`Equals`](#api-3f28c243b754a56b) | Method |
| [`Equals`](#api-d8427e1aaf893152) | Method |
| [`GetHashCode`](#api-17c1c8f952685033) | Method |
| [`op_Equality`](#api-90f5bd13a5f961ea) | Method |
| [`op_Inequality`](#api-420a9bf6fcbc3fa9) | Method |
| [`ToString`](#api-5297a70ae2368f97) | Method |
| [`firstIndex`](#api-9865e50ed132744e) | Property |
| [`indexCount`](#api-21505ed1cfde4d99) | Property |

## Type declaration

<a id="api-dd107c8ec961a5cf"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderGeometrySection 0c1cbd45893f3af81f42edf69c345d7eff537bbaa6fdae9b12c74531362ff221 -->

```csharp
public readonly record struct Inno.Rendering.Runtime.RenderGeometrySection : System.IEquatable<Inno.Rendering.Runtime.RenderGeometrySection>
```

Describes one indexed range in resolved backend-neutral geometry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L16).

## `#ctor`

<a id="api-08667da2923f5c25"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderGeometrySection.#ctor(System.Int32,System.Int32) c502f9b7116fe2dd113e21e3655918b4a45a770d39e9464b1ce8619a137dfa6c -->

```csharp
public Inno.Rendering.Runtime.RenderGeometrySection.RenderGeometrySection(int firstIndex, int indexCount)
```

Creates one indexed geometry range.

**Parameter `firstIndex`:** First index in the shared index buffer.

**Parameter `indexCount`:** Positive index count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L27).

## `Equals`

<a id="api-3f28c243b754a56b"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderGeometrySection.Equals(Inno.Rendering.Runtime.RenderGeometrySection) ebabd138a39a4448f71478745836bb18bceb382e7a530bada0235b837a9d4cb4 -->

```csharp
public bool Inno.Rendering.Runtime.RenderGeometrySection.Equals(Inno.Rendering.Runtime.RenderGeometrySection other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L16).

## `Equals`

<a id="api-d8427e1aaf893152"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderGeometrySection.Equals(System.Object) 4d444e5ccabe5d1f0b98bde0e05006dbfc58c8f458031bd59beb131f7042e508 -->

```csharp
public override bool Inno.Rendering.Runtime.RenderGeometrySection.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L16).

## `GetHashCode`

<a id="api-17c1c8f952685033"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderGeometrySection.GetHashCode 487c9b41a8d057ae9f6b2d2e63f7ed33a547b1a2bab1572b58f99d7d6698dbfa -->

```csharp
public override int Inno.Rendering.Runtime.RenderGeometrySection.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L16).

## `op_Equality`

<a id="api-90f5bd13a5f961ea"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderGeometrySection.op_Equality(Inno.Rendering.Runtime.RenderGeometrySection,Inno.Rendering.Runtime.RenderGeometrySection) 6c92d6ec673cab6848e83ef06d4966fb594f9efc3210c4723cfbb196481d6bfa -->

```csharp
public static bool Inno.Rendering.Runtime.RenderGeometrySection.operator ==(Inno.Rendering.Runtime.RenderGeometrySection left, Inno.Rendering.Runtime.RenderGeometrySection right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L16).

## `op_Inequality`

<a id="api-420a9bf6fcbc3fa9"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderGeometrySection.op_Inequality(Inno.Rendering.Runtime.RenderGeometrySection,Inno.Rendering.Runtime.RenderGeometrySection) 601a8d2d607aa46aa75b0a3d5f615a63178cb111246e0d82e86128264548a6ab -->

```csharp
public static bool Inno.Rendering.Runtime.RenderGeometrySection.operator !=(Inno.Rendering.Runtime.RenderGeometrySection left, Inno.Rendering.Runtime.RenderGeometrySection right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L16).

## `ToString`

<a id="api-5297a70ae2368f97"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderGeometrySection.ToString 760a814885e1708708baf20a525aabd2737e7b971e83954375dcc794c126dcc3 -->

```csharp
public override string Inno.Rendering.Runtime.RenderGeometrySection.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L16).

## `firstIndex`

<a id="api-9865e50ed132744e"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderGeometrySection.firstIndex 389d6871f00080ff2eb69e62bfa44f3ac392ff6b1fb35352077e38b1edd10451 -->

```csharp
public int Inno.Rendering.Runtime.RenderGeometrySection.firstIndex { get; }
```

Gets the first index in the shared index buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L40).

## `indexCount`

<a id="api-21505ed1cfde4d99"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderGeometrySection.indexCount a9ea013b8cd0c9862eabcb2611a9762eb9bee829d124063ee6a7477657d2d8fa -->

```csharp
public int Inno.Rendering.Runtime.RenderGeometrySection.indexCount { get; }
```

Gets the number of indices in this range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometrySection.cs#L45).
