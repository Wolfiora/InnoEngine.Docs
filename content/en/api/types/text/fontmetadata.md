---
title: "FontMetadata"
description: "Reference for FontMetadata in Inno.Text."
uid: api.inno.text.285ef95f0b4873ed
kind: api
owners:
  - Inno.Text
apiSurface: source-clr
contracts:
  - project.inno-text#shaping-and-glyph-contract
---
# `FontMetadata`

This reference describes `FontMetadata` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Text.FontMetadata>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-627b529393bf7a0b) | Method |
| [`Equals`](#api-3d379731cb5aa970) | Method |
| [`Equals`](#api-6dd5f224f3dccb30) | Method |
| [`GetHashCode`](#api-1728a794b6a7d39f) | Method |
| [`op_Equality`](#api-6662fd49b82fcb85) | Method |
| [`op_Inequality`](#api-873e5111b6eafa03) | Method |
| [`ToString`](#api-2e5c0118b29cad56) | Method |
| [`encodedByteLength`](#api-6edc6432247032c2) | Property |
| [`faceCount`](#api-3e291afcdac7d63e) | Property |

## Type declaration

<a id="api-285ef95f0b4873ed"></a>
<!-- api: T:Inno.Text.FontMetadata 95746f7a69da6803f1ffdfadb836d52dfe2b649e1381d8392323588f32a7c353 -->

```csharp
public readonly record struct Inno.Text.FontMetadata : System.IEquatable<Inno.Text.FontMetadata>
```

Describes immutable metadata for an imported OpenType font source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/FontAsset.cs#L12).

## `#ctor`

<a id="api-627b529393bf7a0b"></a>
<!-- api: M:Inno.Text.FontMetadata.#ctor(System.Int32,System.Int64) 165f193e401809e34ee32f8377bdc0b63b68ff1af5bdbbc5763884dada7f9a5d -->

```csharp
public Inno.Text.FontMetadata.FontMetadata(int faceCount, long encodedByteLength)
```

Creates validated imported font metadata.

**Parameter `faceCount`:** The number of faces in the source collection.

**Parameter `encodedByteLength`:** The encoded source length in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/FontAsset.cs#L23).

## `Equals`

<a id="api-3d379731cb5aa970"></a>
<!-- api: M:Inno.Text.FontMetadata.Equals(Inno.Text.FontMetadata) 3751e7453ac95e2d07b8fff6f8576ad3d17f3db7fe4b69e6e651ef2431cadd39 -->

```csharp
public bool Inno.Text.FontMetadata.Equals(Inno.Text.FontMetadata other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/FontAsset.cs#L12).

## `Equals`

<a id="api-6dd5f224f3dccb30"></a>
<!-- api: M:Inno.Text.FontMetadata.Equals(System.Object) 8810c2830875ce20501ee613e960ab3cac9d316879ad63f1afaa438d95715b61 -->

```csharp
public override bool Inno.Text.FontMetadata.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/FontAsset.cs#L12).

## `GetHashCode`

<a id="api-1728a794b6a7d39f"></a>
<!-- api: M:Inno.Text.FontMetadata.GetHashCode e20bf3c04150821f9862559b5409261c45e61eb61a2bc5c483d76540048cbc5c -->

```csharp
public override int Inno.Text.FontMetadata.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/FontAsset.cs#L12).

## `op_Equality`

<a id="api-6662fd49b82fcb85"></a>
<!-- api: M:Inno.Text.FontMetadata.op_Equality(Inno.Text.FontMetadata,Inno.Text.FontMetadata) 27fce64acf76edb79ea7d7b67889327cf63bea940c0bc28637e040efb1a3fdda -->

```csharp
public static bool Inno.Text.FontMetadata.operator ==(Inno.Text.FontMetadata left, Inno.Text.FontMetadata right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/FontAsset.cs#L12).

## `op_Inequality`

<a id="api-873e5111b6eafa03"></a>
<!-- api: M:Inno.Text.FontMetadata.op_Inequality(Inno.Text.FontMetadata,Inno.Text.FontMetadata) 199e6da3ea748e4c648a5262f9b133a7708913a6c0fee5eb70d1098983d0b378 -->

```csharp
public static bool Inno.Text.FontMetadata.operator !=(Inno.Text.FontMetadata left, Inno.Text.FontMetadata right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/FontAsset.cs#L12).

## `ToString`

<a id="api-2e5c0118b29cad56"></a>
<!-- api: M:Inno.Text.FontMetadata.ToString 5b32fa9f707a503be5144f42e50e3564ce8791830229a9818de7cd6ca4cba1c7 -->

```csharp
public override string Inno.Text.FontMetadata.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/FontAsset.cs#L12).

## `encodedByteLength`

<a id="api-6edc6432247032c2"></a>
<!-- api: P:Inno.Text.FontMetadata.encodedByteLength 79a0161463ec67f588de949660cd180bc6b8d777eecfcf6316525e6cd45b8c1c -->

```csharp
public long Inno.Text.FontMetadata.encodedByteLength { get; }
```

Gets the encoded source length in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/FontAsset.cs#L41).

## `faceCount`

<a id="api-3e291afcdac7d63e"></a>
<!-- api: P:Inno.Text.FontMetadata.faceCount 9c0c9ffc8209d74ddab5dccd5d4770e7cfa0dd5f90890ce2437b659d63ccb36c -->

```csharp
public int Inno.Text.FontMetadata.faceCount { get; }
```

Gets the number of independently addressable faces in the source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/FontAsset.cs#L36).
