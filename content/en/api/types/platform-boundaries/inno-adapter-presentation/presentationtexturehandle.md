---
title: "PresentationTextureHandle"
description: "Reference for PresentationTextureHandle in Inno.Adapter.Presentation."
uid: api.inno.adapter.presentation.948c5b8727cd8c73
kind: api
owners:
  - Inno.Adapter.Presentation
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation
---
# `PresentationTextureHandle`

This reference describes `PresentationTextureHandle` in `Inno.Adapter.Presentation`. Read the [shared contract](../../../projects/inno-adapter-presentation.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Adapter.Presentation.PresentationTextureHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-83b868525c478bd1) | Method |
| [`Equals`](#api-3ea832f30642ffbe) | Method |
| [`Equals`](#api-1f44c8f6fe788360) | Method |
| [`GetHashCode`](#api-f33bc83a7fa989d3) | Method |
| [`op_Equality`](#api-b965811a1d224c57) | Method |
| [`op_Inequality`](#api-2e3df573a4e03e07) | Method |
| [`ToString`](#api-ed39d4fff8fa36ed) | Method |
| [`isValid`](#api-e101a49d4c41f8a3) | Property |
| [`value`](#api-db02f1e362ad5f51) | Property |

## Type declaration

<a id="api-948c5b8727cd8c73"></a>
<!-- api: T:Inno.Adapter.Presentation.PresentationTextureHandle 1524a8ea2e9ab15e054b1eb4e5359f12be9d6ad2498f85aa7f3f389acd1454f3 -->

```csharp
public readonly record struct Inno.Adapter.Presentation.PresentationTextureHandle : System.IEquatable<Inno.Adapter.Presentation.PresentationTextureHandle>
```

Identifies a renderer-owned texture through an opaque host-presentation token.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationTextureHandle.cs#L8).

## `#ctor`

<a id="api-83b868525c478bd1"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationTextureHandle.#ctor(System.UInt64) 06039695d6ebc1c44b5fe20ae598bffeab5b63cd93b33d8094594f784c7f9d3b -->

```csharp
public Inno.Adapter.Presentation.PresentationTextureHandle.PresentationTextureHandle(ulong value)
```

Creates an opaque presentation texture token.

**Parameter `value`:** Non-zero token allocated by the active presentation backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationTextureHandle.cs#L16).

## `Equals`

<a id="api-3ea832f30642ffbe"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationTextureHandle.Equals(Inno.Adapter.Presentation.PresentationTextureHandle) 97c37004ba16ac53f738203eb97516d01172fc58b313bce440114d6acc85da7a -->

```csharp
public bool Inno.Adapter.Presentation.PresentationTextureHandle.Equals(Inno.Adapter.Presentation.PresentationTextureHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationTextureHandle.cs#L8).

## `Equals`

<a id="api-1f44c8f6fe788360"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationTextureHandle.Equals(System.Object) c8bdc602780385c7fb6bf24f8a34c052a43e29d289b75f5bcb52bd3c1e8a7860 -->

```csharp
public override bool Inno.Adapter.Presentation.PresentationTextureHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationTextureHandle.cs#L8).

## `GetHashCode`

<a id="api-f33bc83a7fa989d3"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationTextureHandle.GetHashCode 5cca8c5f46ad3f8f124ef6b9444f4e8a9f9b3c7ebf86101eae53e14fba42930d -->

```csharp
public override int Inno.Adapter.Presentation.PresentationTextureHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationTextureHandle.cs#L8).

## `op_Equality`

<a id="api-b965811a1d224c57"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationTextureHandle.op_Equality(Inno.Adapter.Presentation.PresentationTextureHandle,Inno.Adapter.Presentation.PresentationTextureHandle) 52468509c601905478c8c8c31953a94f9f3474af3e66a147aa7dd733a0efe581 -->

```csharp
public static bool Inno.Adapter.Presentation.PresentationTextureHandle.operator ==(Inno.Adapter.Presentation.PresentationTextureHandle left, Inno.Adapter.Presentation.PresentationTextureHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationTextureHandle.cs#L8).

## `op_Inequality`

<a id="api-2e3df573a4e03e07"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationTextureHandle.op_Inequality(Inno.Adapter.Presentation.PresentationTextureHandle,Inno.Adapter.Presentation.PresentationTextureHandle) 59d93503e89079c6a98daef8cb4dfa542150d84d366cdaf051ef35d8a2fd9df9 -->

```csharp
public static bool Inno.Adapter.Presentation.PresentationTextureHandle.operator !=(Inno.Adapter.Presentation.PresentationTextureHandle left, Inno.Adapter.Presentation.PresentationTextureHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationTextureHandle.cs#L8).

## `ToString`

<a id="api-ed39d4fff8fa36ed"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationTextureHandle.ToString dc547489f7102986476243bbf70a9ae4c43bb92bb68b60533fd8491f2b816a50 -->

```csharp
public override string Inno.Adapter.Presentation.PresentationTextureHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationTextureHandle.cs#L8).

## `isValid`

<a id="api-e101a49d4c41f8a3"></a>
<!-- api: P:Inno.Adapter.Presentation.PresentationTextureHandle.isValid d4d12508434bb2d59bb150c994e729bc84a2a9205cd952274716848c5c3a5255 -->

```csharp
public bool Inno.Adapter.Presentation.PresentationTextureHandle.isValid { get; }
```

Gets whether this token identifies a registered presentation texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationTextureHandle.cs#L31).

## `value`

<a id="api-db02f1e362ad5f51"></a>
<!-- api: P:Inno.Adapter.Presentation.PresentationTextureHandle.value 3d46761dca9afc561ea191cdbf1c1ab07fe06d442320c6490f50b583e9276f57 -->

```csharp
public ulong Inno.Adapter.Presentation.PresentationTextureHandle.value { get; }
```

Gets the opaque backend token.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationTextureHandle.cs#L26).
