---
title: "FontMetadata"
description: "Reference for FontMetadata in Inno.Text."
uid: api.inno.text.runtime-script.26bb9d5b15de410f
kind: api
owners:
  - Inno.Text
apiSurface: runtime-script
contracts:
  - project.inno-text#shaping-and-glyph-contract
  - manual.scripting.use-script-api
---
# `FontMetadata`

This reference describes `FontMetadata` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Text.FontMetadata>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7662d50403487134) | Method |
| [`Equals`](#api-e6afd3fcd1db342f) | Method |
| [`Equals`](#api-3447b4a8b29cec71) | Method |
| [`GetHashCode`](#api-1ec606309556a10e) | Method |
| [`op_Equality`](#api-e9de7a536dec19ba) | Method |
| [`op_Inequality`](#api-9d57405a890c0ff7) | Method |
| [`ToString`](#api-e3f09cb3accba66a) | Method |
| [`encodedByteLength`](#api-d52bfd3cf3a67c98) | Property |
| [`faceCount`](#api-11f79493aaefd2ea) | Property |

## Type declaration

<a id="api-26bb9d5b15de410f"></a>
<!-- api: T:InnoEngine.Text.FontMetadata 4c589c6883df5d00a41d807767fdc537c547d4e98da21ae3bc5ab9149eef58fe -->

```csharp
public readonly struct InnoEngine.Text.FontMetadata : System.IEquatable<InnoEngine.Text.FontMetadata>
```

Describes immutable metadata for an imported OpenType font source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/FontAsset.cs#L12).

## `#ctor`

<a id="api-7662d50403487134"></a>
<!-- api: M:InnoEngine.Text.FontMetadata.#ctor(System.Int32,System.Int64) 6ef45d83d966c733abd79eb590725ad6c5eb350744fe741f6d1f76af317610b4 -->

```csharp
public InnoEngine.Text.FontMetadata.FontMetadata(int faceCount, long encodedByteLength)
```

Creates validated imported font metadata.

**Parameter `faceCount`:** The number of faces in the source collection.

**Parameter `encodedByteLength`:** The encoded source length in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/FontAsset.cs#L23).

## `Equals`

<a id="api-e6afd3fcd1db342f"></a>
<!-- api: M:InnoEngine.Text.FontMetadata.Equals(InnoEngine.Text.FontMetadata) af674a1dbbfb50cc5022fd9ea34ff673e1cd660f7c75210eee512b58618f0e3a -->

```csharp
public bool InnoEngine.Text.FontMetadata.Equals(InnoEngine.Text.FontMetadata other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/FontAsset.cs#L12).

## `Equals`

<a id="api-3447b4a8b29cec71"></a>
<!-- api: M:InnoEngine.Text.FontMetadata.Equals(System.Object) beb0e755394f56ae4fe3ce1dcf94db7aaf45c13548cb088e7ce8c420e98d247d -->

```csharp
public override bool InnoEngine.Text.FontMetadata.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/FontAsset.cs#L12).

## `GetHashCode`

<a id="api-1ec606309556a10e"></a>
<!-- api: M:InnoEngine.Text.FontMetadata.GetHashCode 8cfbc0d649ddcf31b0c3f02fbac9e1dc358595c6fee7100b5fccc1fc6ad0cb6f -->

```csharp
public override int InnoEngine.Text.FontMetadata.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/FontAsset.cs#L12).

## `op_Equality`

<a id="api-e9de7a536dec19ba"></a>
<!-- api: M:InnoEngine.Text.FontMetadata.op_Equality(InnoEngine.Text.FontMetadata,InnoEngine.Text.FontMetadata) 3f1eb7572b791b0cabfeb357b51d814a7e86c1aa9385efb06bac63f522ce0e28 -->

```csharp
public static bool InnoEngine.Text.FontMetadata.operator ==(InnoEngine.Text.FontMetadata left, InnoEngine.Text.FontMetadata right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/FontAsset.cs#L12).

## `op_Inequality`

<a id="api-9d57405a890c0ff7"></a>
<!-- api: M:InnoEngine.Text.FontMetadata.op_Inequality(InnoEngine.Text.FontMetadata,InnoEngine.Text.FontMetadata) 324cd2d30889a3b955ae268e147a452aba3459688a3b96c1d28f833f95311927 -->

```csharp
public static bool InnoEngine.Text.FontMetadata.operator !=(InnoEngine.Text.FontMetadata left, InnoEngine.Text.FontMetadata right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/FontAsset.cs#L12).

## `ToString`

<a id="api-e3f09cb3accba66a"></a>
<!-- api: M:InnoEngine.Text.FontMetadata.ToString 46d48da041142e001499d5197c71b783fb0e4d9f3ac0be567f213f9cfb512f49 -->

```csharp
public override string InnoEngine.Text.FontMetadata.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/FontAsset.cs#L12).

## `encodedByteLength`

<a id="api-d52bfd3cf3a67c98"></a>
<!-- api: P:InnoEngine.Text.FontMetadata.encodedByteLength 7a5fa2b8b35d3fabf56d650f934174741ef39dcac7f4bc2b67dc08094041e329 -->

```csharp
public long InnoEngine.Text.FontMetadata.encodedByteLength { get; }
```

Gets the encoded source length in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/FontAsset.cs#L41).

## `faceCount`

<a id="api-11f79493aaefd2ea"></a>
<!-- api: P:InnoEngine.Text.FontMetadata.faceCount 815a48fb1d9b367156c1174a89b3cf8e04b7f296f2d286835f56c6f1893ac793 -->

```csharp
public int InnoEngine.Text.FontMetadata.faceCount { get; }
```

Gets the number of independently addressable faces in the source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/FontAsset.cs#L36).
