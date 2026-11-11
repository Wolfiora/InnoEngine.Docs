---
title: "RenderVertexAttribute"
description: "Reference for RenderVertexAttribute in Inno.Rendering."
uid: api.inno.rendering.3962e7a08ad8d7e8
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderVertexAttribute`

This reference describes `RenderVertexAttribute` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderVertexAttribute>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f9daa493d3fc325b) | Method |
| [`Equals`](#api-94e1e317c77e4dcc) | Method |
| [`Equals`](#api-53137225db881ea3) | Method |
| [`GetHashCode`](#api-7a66fea011ffe67c) | Method |
| [`op_Equality`](#api-dab29db0f930e67f) | Method |
| [`op_Inequality`](#api-05fbeb0f3ee4512f) | Method |
| [`ToString`](#api-d4d2c773a48e1a7c) | Method |
| [`byteOffset`](#api-f8f94a88e29256d0) | Property |
| [`byteSize`](#api-58ae893a4c4b7146) | Property |
| [`format`](#api-4328c980742fd6a6) | Property |
| [`semantic`](#api-a4d7cb374169abe1) | Property |

## Type declaration

<a id="api-3962e7a08ad8d7e8"></a>
<!-- api: T:Inno.Rendering.RenderVertexAttribute 14a1bc0cd206c822f348dea6c6bb541ff652e0a939a0618c26a3fa62d65626e6 -->

```csharp
public readonly record struct Inno.Rendering.RenderVertexAttribute : System.IEquatable<Inno.Rendering.RenderVertexAttribute>
```

Describes one vertex attribute in stream order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L156).

## `#ctor`

<a id="api-f9daa493d3fc325b"></a>
<!-- api: M:Inno.Rendering.RenderVertexAttribute.#ctor(Inno.Rendering.RenderVertexSemantic,Inno.Rendering.RenderVertexFormat,System.Int32) 366c6647665ae1e535b6254efb7a6b897a2be9c458e32b4eed6fc35a65705f7b -->

```csharp
public Inno.Rendering.RenderVertexAttribute.RenderVertexAttribute(Inno.Rendering.RenderVertexSemantic semantic, Inno.Rendering.RenderVertexFormat format, int byteOffset = -1)
```

Creates a vertex attribute declaration.

**Parameter `semantic`:** Shader input semantic.

**Parameter `format`:** Packed component representation.

**Parameter `byteOffset`:** Explicit byte offset in the stream, or -1 to place the attribute directly after the preceding attribute.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L170).

## `Equals`

<a id="api-94e1e317c77e4dcc"></a>
<!-- api: M:Inno.Rendering.RenderVertexAttribute.Equals(Inno.Rendering.RenderVertexAttribute) 1361d321d65e1adcdc9ee1aaf069b6da13c2b72f9825dcc2725dcfb7ec24e87b -->

```csharp
public bool Inno.Rendering.RenderVertexAttribute.Equals(Inno.Rendering.RenderVertexAttribute other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L156).

## `Equals`

<a id="api-53137225db881ea3"></a>
<!-- api: M:Inno.Rendering.RenderVertexAttribute.Equals(System.Object) fa355a93f756f5cbe3034c41a852a5afa025d3ca5b27f464cb74f6094b0f61a1 -->

```csharp
public override bool Inno.Rendering.RenderVertexAttribute.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L156).

## `GetHashCode`

<a id="api-7a66fea011ffe67c"></a>
<!-- api: M:Inno.Rendering.RenderVertexAttribute.GetHashCode 73f7743d0cfc543ceb927dc3b000b58695e3bbc7b56cbf54ee90a7af1bcf4835 -->

```csharp
public override int Inno.Rendering.RenderVertexAttribute.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L156).

## `op_Equality`

<a id="api-dab29db0f930e67f"></a>
<!-- api: M:Inno.Rendering.RenderVertexAttribute.op_Equality(Inno.Rendering.RenderVertexAttribute,Inno.Rendering.RenderVertexAttribute) c6699b602bf5b875692860b9cf67829785488115c744c884d40f3cef305c57c6 -->

```csharp
public static bool Inno.Rendering.RenderVertexAttribute.operator ==(Inno.Rendering.RenderVertexAttribute left, Inno.Rendering.RenderVertexAttribute right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L156).

## `op_Inequality`

<a id="api-05fbeb0f3ee4512f"></a>
<!-- api: M:Inno.Rendering.RenderVertexAttribute.op_Inequality(Inno.Rendering.RenderVertexAttribute,Inno.Rendering.RenderVertexAttribute) 5db72ec3ccad915793e8821deebb16cf3b4b198a1511f393479948f9ac395144 -->

```csharp
public static bool Inno.Rendering.RenderVertexAttribute.operator !=(Inno.Rendering.RenderVertexAttribute left, Inno.Rendering.RenderVertexAttribute right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L156).

## `ToString`

<a id="api-d4d2c773a48e1a7c"></a>
<!-- api: M:Inno.Rendering.RenderVertexAttribute.ToString f9ca8adf9e3056a95dee0f2281a8a5724a3f2075457fbe9df38f6507aac0ed25 -->

```csharp
public override string Inno.Rendering.RenderVertexAttribute.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L156).

## `byteOffset`

<a id="api-f8f94a88e29256d0"></a>
<!-- api: P:Inno.Rendering.RenderVertexAttribute.byteOffset 7d44b08d24b7888375a125a200f4c98dab9053c4b734074543360ec96964305b -->

```csharp
public int Inno.Rendering.RenderVertexAttribute.byteOffset { get; }
```

Gets the explicit byte offset in the resolved stream layout, or -1 before a layout resolves automatic placement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L195).

## `byteSize`

<a id="api-58ae893a4c4b7146"></a>
<!-- api: P:Inno.Rendering.RenderVertexAttribute.byteSize a04463ebaeb2a0e06b81d46a474f665bf3e1349f7ef73ed49ee236791e3d4aa9 -->

```csharp
public int Inno.Rendering.RenderVertexAttribute.byteSize { get; }
```

Gets the packed byte size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L200).

## `format`

<a id="api-4328c980742fd6a6"></a>
<!-- api: P:Inno.Rendering.RenderVertexAttribute.format b80d1d48e35a0c68a043bb46e9dff4431c3652e02d308350b02fe76c2bd69433 -->

```csharp
public Inno.Rendering.RenderVertexFormat Inno.Rendering.RenderVertexAttribute.format { get; }
```

Gets the packed component representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L190).

## `semantic`

<a id="api-a4d7cb374169abe1"></a>
<!-- api: P:Inno.Rendering.RenderVertexAttribute.semantic 1cc80da6b6133a3cce98c037a7fba493515d27c89a6b8d90f2a7aa0f5c87219c -->

```csharp
public Inno.Rendering.RenderVertexSemantic Inno.Rendering.RenderVertexAttribute.semantic { get; }
```

Gets the shader input semantic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L185).
