---
title: "RenderVertexAttribute"
description: "Reference for RenderVertexAttribute in Inno.Rendering."
uid: api.inno.rendering.runtime-script.cd2c57b33c8a5cef
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderVertexAttribute`

This reference describes `RenderVertexAttribute` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderVertexAttribute>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-53749dd65ac773be) | Method |
| [`Equals`](#api-385911ca8fe0639a) | Method |
| [`Equals`](#api-12a204df1e495f95) | Method |
| [`GetHashCode`](#api-f62c3f50084822ea) | Method |
| [`op_Equality`](#api-78b54fab03faf704) | Method |
| [`op_Inequality`](#api-e6d74b4149f09160) | Method |
| [`ToString`](#api-d5c5a0e1f4722b97) | Method |
| [`byteOffset`](#api-fb8cbced7ec7fb8e) | Property |
| [`byteSize`](#api-13b5f0ebbf5916de) | Property |
| [`format`](#api-caea5e3c7915b571) | Property |
| [`semantic`](#api-e3dffb7ae10a0e4e) | Property |

## Type declaration

<a id="api-cd2c57b33c8a5cef"></a>
<!-- api: T:InnoEngine.Rendering.RenderVertexAttribute d3f6a7c5788f71e78a5c44200012241560153b3e7f4fe4f39f9022aba216c622 -->

```csharp
public readonly struct InnoEngine.Rendering.RenderVertexAttribute : System.IEquatable<InnoEngine.Rendering.RenderVertexAttribute>
```

Describes one vertex attribute in stream order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L156).

## `#ctor`

<a id="api-53749dd65ac773be"></a>
<!-- api: M:InnoEngine.Rendering.RenderVertexAttribute.#ctor(InnoEngine.Rendering.RenderVertexSemantic,InnoEngine.Rendering.RenderVertexFormat,System.Int32) 0f9e36c34176b4c2aa3b7b9677c3d2928e7f281242df7044a3985e187367e5d8 -->

```csharp
public InnoEngine.Rendering.RenderVertexAttribute.RenderVertexAttribute(InnoEngine.Rendering.RenderVertexSemantic semantic, InnoEngine.Rendering.RenderVertexFormat format, int byteOffset = -1)
```

Creates a vertex attribute declaration.

**Parameter `semantic`:** Shader input semantic.

**Parameter `format`:** Packed component representation.

**Parameter `byteOffset`:** Explicit byte offset in the stream, or -1 to place the attribute directly after the preceding attribute.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L170).

## `Equals`

<a id="api-385911ca8fe0639a"></a>
<!-- api: M:InnoEngine.Rendering.RenderVertexAttribute.Equals(InnoEngine.Rendering.RenderVertexAttribute) dc9e345810c712a4d9eae5fa8e3f002c78b808a3ec58e7c3d56771ea10b33287 -->

```csharp
public bool InnoEngine.Rendering.RenderVertexAttribute.Equals(InnoEngine.Rendering.RenderVertexAttribute other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L156).

## `Equals`

<a id="api-12a204df1e495f95"></a>
<!-- api: M:InnoEngine.Rendering.RenderVertexAttribute.Equals(System.Object) 37ac8b1d161bca728ca8457b6491500b48a71defe5afddb246f504b65f0edcf7 -->

```csharp
public override bool InnoEngine.Rendering.RenderVertexAttribute.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L156).

## `GetHashCode`

<a id="api-f62c3f50084822ea"></a>
<!-- api: M:InnoEngine.Rendering.RenderVertexAttribute.GetHashCode e8bf14bf39fd97ff84e5c994fc24bb7f7eafc7ad6d70aa18b17c496831bf8a1d -->

```csharp
public override int InnoEngine.Rendering.RenderVertexAttribute.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L156).

## `op_Equality`

<a id="api-78b54fab03faf704"></a>
<!-- api: M:InnoEngine.Rendering.RenderVertexAttribute.op_Equality(InnoEngine.Rendering.RenderVertexAttribute,InnoEngine.Rendering.RenderVertexAttribute) 9e0d9a9f4b050eec5ca593b2892736651a7b4b8b811916752478ee4576b5c47d -->

```csharp
public static bool InnoEngine.Rendering.RenderVertexAttribute.operator ==(InnoEngine.Rendering.RenderVertexAttribute left, InnoEngine.Rendering.RenderVertexAttribute right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L156).

## `op_Inequality`

<a id="api-e6d74b4149f09160"></a>
<!-- api: M:InnoEngine.Rendering.RenderVertexAttribute.op_Inequality(InnoEngine.Rendering.RenderVertexAttribute,InnoEngine.Rendering.RenderVertexAttribute) 2766a04132dc766350b5a8e2dcd60698e83246892aad5e814faa239827e4d8cc -->

```csharp
public static bool InnoEngine.Rendering.RenderVertexAttribute.operator !=(InnoEngine.Rendering.RenderVertexAttribute left, InnoEngine.Rendering.RenderVertexAttribute right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L156).

## `ToString`

<a id="api-d5c5a0e1f4722b97"></a>
<!-- api: M:InnoEngine.Rendering.RenderVertexAttribute.ToString 1a33a5c5d6608c86f05d0ee87a6d21630e5ddea7edc3fea1d81efa06f8626020 -->

```csharp
public override string InnoEngine.Rendering.RenderVertexAttribute.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L156).

## `byteOffset`

<a id="api-fb8cbced7ec7fb8e"></a>
<!-- api: P:InnoEngine.Rendering.RenderVertexAttribute.byteOffset 84073f8c4fdfd9780dd8d39f14385e064c6d653660765944c554e0365a64459a -->

```csharp
public int InnoEngine.Rendering.RenderVertexAttribute.byteOffset { get; }
```

Gets the explicit byte offset in the resolved stream layout, or -1 before a layout resolves automatic placement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L195).

## `byteSize`

<a id="api-13b5f0ebbf5916de"></a>
<!-- api: P:InnoEngine.Rendering.RenderVertexAttribute.byteSize 710e5913a4af2722c398c07362caf6af4fab4b3bf97fd3a73963bf1983f6393d -->

```csharp
public int InnoEngine.Rendering.RenderVertexAttribute.byteSize { get; }
```

Gets the packed byte size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L200).

## `format`

<a id="api-caea5e3c7915b571"></a>
<!-- api: P:InnoEngine.Rendering.RenderVertexAttribute.format cd34ac3851b434edd02c1c895af9bfc19dcce833875146f91b7e29488dab8c3c -->

```csharp
public InnoEngine.Rendering.RenderVertexFormat InnoEngine.Rendering.RenderVertexAttribute.format { get; }
```

Gets the packed component representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L190).

## `semantic`

<a id="api-e3dffb7ae10a0e4e"></a>
<!-- api: P:InnoEngine.Rendering.RenderVertexAttribute.semantic 4afedc54657d59b1a3af9577b8bef488357addd026cccd0d2325cf35eea0e59d -->

```csharp
public InnoEngine.Rendering.RenderVertexSemantic InnoEngine.Rendering.RenderVertexAttribute.semantic { get; }
```

Gets the shader input semantic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L185).
