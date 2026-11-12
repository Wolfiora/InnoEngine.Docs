---
title: "TextGlyph"
description: "Reference for TextGlyph in Inno.Text."
uid: api.inno.text.runtime-script.f5cf530460164940
kind: api
owners:
  - Inno.Text
apiSurface: runtime-script
contracts:
  - project.inno-text#shaping-and-glyph-contract
  - manual.scripting.use-script-api
---
# `TextGlyph`

This reference describes `TextGlyph` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Text.TextGlyph>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-49b8072ebf586dc0) | Method |
| [`Deconstruct`](#api-6cca8a990653e776) | Method |
| [`Equals`](#api-bc7fcf07f660aff8) | Method |
| [`Equals`](#api-ec7b58a8b39cc414) | Method |
| [`GetHashCode`](#api-a4533a1d3e0fa82e) | Method |
| [`op_Equality`](#api-dc71946e75890579) | Method |
| [`op_Inequality`](#api-dc535a16901a8a86) | Method |
| [`ToString`](#api-c7ce9c47c97fa825) | Method |
| [`advanceX`](#api-6af38d3df4d7b6d8) | Property |
| [`advanceY`](#api-8a9ecb54d1af7d29) | Property |
| [`cluster`](#api-ebd499053f0b0dc0) | Property |
| [`glyphId`](#api-53b1fa258324c6b3) | Property |
| [`offsetX`](#api-5731314635dc7a4e) | Property |
| [`offsetY`](#api-33718d89835b9118) | Property |

## Type declaration

<a id="api-f5cf530460164940"></a>
<!-- api: T:InnoEngine.Text.TextGlyph 3b00b186d37a8efb1b9959b814464eaa794a42d239f38f15dd38167e01b5ad57 -->

```csharp
public readonly struct InnoEngine.Text.TextGlyph : System.IEquatable<InnoEngine.Text.TextGlyph>
```

Describes one positioned glyph emitted by Unicode shaping.

**Parameter `glyphId`:** The glyph identifier in the font face that produced this layout.

**Parameter `cluster`:** The source cluster index reported by the backend. The FreeType/HarfBuzz backend
reports a UTF-8 byte offset, not a UTF-16 character index.

**Parameter `advanceX`:** The horizontal pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `advanceY`:** The vertical pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `offsetX`:** The horizontal placement offset from the pen position in logical pixels.

**Parameter `offsetY`:** The vertical placement offset from the pen position in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L207).

## `#ctor`

<a id="api-49b8072ebf586dc0"></a>
<!-- api: M:InnoEngine.Text.TextGlyph.#ctor(System.UInt32,System.UInt32,System.Single,System.Single,System.Single,System.Single) 0fb8670ccd4fae32f0f18c8c56d6b44cfa8b557e295be22b98c5b6b304b43210 -->

```csharp
public InnoEngine.Text.TextGlyph.TextGlyph(uint glyphId, uint cluster, float advanceX, float advanceY, float offsetX, float offsetY)
```

Describes one positioned glyph emitted by Unicode shaping.

**Parameter `glyphId`:** The glyph identifier in the font face that produced this layout.

**Parameter `cluster`:** The source cluster index reported by the backend. The FreeType/HarfBuzz backend
reports a UTF-8 byte offset, not a UTF-16 character index.

**Parameter `advanceX`:** The horizontal pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `advanceY`:** The vertical pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `offsetX`:** The horizontal placement offset from the pen position in logical pixels.

**Parameter `offsetY`:** The vertical placement offset from the pen position in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L207).

## `Deconstruct`

<a id="api-6cca8a990653e776"></a>
<!-- api: M:InnoEngine.Text.TextGlyph.Deconstruct(System.UInt32@,System.UInt32@,System.Single@,System.Single@,System.Single@,System.Single@) fac0dcd459c3d4a4cea2d50436749816b37ac4e21189cc44b9b9a7d8d44a47d0 -->

```csharp
public void InnoEngine.Text.TextGlyph.Deconstruct(out uint glyphId, out uint cluster, out float advanceX, out float advanceY, out float offsetX, out float offsetY)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L207).

## `Equals`

<a id="api-bc7fcf07f660aff8"></a>
<!-- api: M:InnoEngine.Text.TextGlyph.Equals(InnoEngine.Text.TextGlyph) bb993da3290a532c4639f396008d1d1614531f49dfc9b51f785ec3123bbb406b -->

```csharp
public bool InnoEngine.Text.TextGlyph.Equals(InnoEngine.Text.TextGlyph other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L207).

## `Equals`

<a id="api-ec7b58a8b39cc414"></a>
<!-- api: M:InnoEngine.Text.TextGlyph.Equals(System.Object) 3743af1aea886c020952b8c1e9133490ba3dc8a4822dc0bd8f85ceaad2946721 -->

```csharp
public override bool InnoEngine.Text.TextGlyph.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L207).

## `GetHashCode`

<a id="api-a4533a1d3e0fa82e"></a>
<!-- api: M:InnoEngine.Text.TextGlyph.GetHashCode 9717142c1bff63cbc32d4ad952bced0612f76666621796950290fef80b5e4201 -->

```csharp
public override int InnoEngine.Text.TextGlyph.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L207).

## `op_Equality`

<a id="api-dc71946e75890579"></a>
<!-- api: M:InnoEngine.Text.TextGlyph.op_Equality(InnoEngine.Text.TextGlyph,InnoEngine.Text.TextGlyph) 5fdb43912b9f2422c9f31efc6ffcd1bfeeae2fdf37d45a20fdbce3f3de22e638 -->

```csharp
public static bool InnoEngine.Text.TextGlyph.operator ==(InnoEngine.Text.TextGlyph left, InnoEngine.Text.TextGlyph right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L207).

## `op_Inequality`

<a id="api-dc535a16901a8a86"></a>
<!-- api: M:InnoEngine.Text.TextGlyph.op_Inequality(InnoEngine.Text.TextGlyph,InnoEngine.Text.TextGlyph) 5615e6fa557dc4a2a5030d60f5e9b065f91a91830e34b8768355d216edc7e560 -->

```csharp
public static bool InnoEngine.Text.TextGlyph.operator !=(InnoEngine.Text.TextGlyph left, InnoEngine.Text.TextGlyph right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L207).

## `ToString`

<a id="api-c7ce9c47c97fa825"></a>
<!-- api: M:InnoEngine.Text.TextGlyph.ToString fb4bff9d1290e854e4c15a652b869fa1adf47798c7934d35fc950a6a6823470a -->

```csharp
public override string InnoEngine.Text.TextGlyph.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L207).

## `advanceX`

<a id="api-6af38d3df4d7b6d8"></a>
<!-- api: P:InnoEngine.Text.TextGlyph.advanceX 12d330177eacd0d71ebc6cde4885fec818ddff730ebc55967ebbff2abf809c6e -->

```csharp
public float InnoEngine.Text.TextGlyph.advanceX { get; set; }
```

The horizontal pen advance in logical pixels, including backend-applied letter spacing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L210).

## `advanceY`

<a id="api-8a9ecb54d1af7d29"></a>
<!-- api: P:InnoEngine.Text.TextGlyph.advanceY 0cea039ce837f4c23b6fd84357f68be35feb6b981672929debdec5489d7eb504 -->

```csharp
public float InnoEngine.Text.TextGlyph.advanceY { get; set; }
```

The vertical pen advance in logical pixels, including backend-applied letter spacing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L211).

## `cluster`

<a id="api-ebd499053f0b0dc0"></a>
<!-- api: P:InnoEngine.Text.TextGlyph.cluster bf6ca94b096b43d547668bc16c647b1f7a32aa1b4266ed8b21dec357a05ba019 -->

```csharp
public uint InnoEngine.Text.TextGlyph.cluster { get; set; }
```

The source cluster index reported by the backend. The FreeType/HarfBuzz backend
reports a UTF-8 byte offset, not a UTF-16 character index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L209).

## `glyphId`

<a id="api-53b1fa258324c6b3"></a>
<!-- api: P:InnoEngine.Text.TextGlyph.glyphId a2b62ad622e0ab8858b83bc0765faf475eeacbae9e42108e22d77a492024a1c0 -->

```csharp
public uint InnoEngine.Text.TextGlyph.glyphId { get; set; }
```

The glyph identifier in the font face that produced this layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L208).

## `offsetX`

<a id="api-5731314635dc7a4e"></a>
<!-- api: P:InnoEngine.Text.TextGlyph.offsetX ad28897e86cde30779817ccbef47f0153e06fffa8976c4d460ca98514e0acff9 -->

```csharp
public float InnoEngine.Text.TextGlyph.offsetX { get; set; }
```

The horizontal placement offset from the pen position in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L212).

## `offsetY`

<a id="api-33718d89835b9118"></a>
<!-- api: P:InnoEngine.Text.TextGlyph.offsetY 6d7a415abce4adef89dd845d1f33dc377caabe1fd12c68053d422125e2110a7e -->

```csharp
public float InnoEngine.Text.TextGlyph.offsetY { get; set; }
```

The vertical placement offset from the pen position in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L213).
