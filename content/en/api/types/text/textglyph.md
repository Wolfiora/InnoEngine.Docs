---
title: "TextGlyph"
description: "Reference for TextGlyph in Inno.Text."
uid: api.inno.text.027e94403f7bec65
kind: api
owners:
  - Inno.Text
apiSurface: source-clr
contracts:
  - project.inno-text#shaping-and-glyph-contract
---
# `TextGlyph`

This reference describes `TextGlyph` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Text.TextGlyph>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0c5f7a4b3e1d602d) | Method |
| [`Deconstruct`](#api-7bd14e6157fc4995) | Method |
| [`Equals`](#api-a5c763a2f0869ae8) | Method |
| [`Equals`](#api-07e17e3959505b20) | Method |
| [`GetHashCode`](#api-93aafa7c253c2edf) | Method |
| [`op_Equality`](#api-c67c3bef44aa2346) | Method |
| [`op_Inequality`](#api-8dd75b62defce5f6) | Method |
| [`ToString`](#api-1a36592eca97a152) | Method |
| [`advanceX`](#api-141ddcd55458ae5f) | Property |
| [`advanceY`](#api-fcdec7c8b72c7e28) | Property |
| [`cluster`](#api-18ed4c568091d392) | Property |
| [`glyphId`](#api-5901141e763352cb) | Property |
| [`offsetX`](#api-4e24eb7eef682f13) | Property |
| [`offsetY`](#api-d539a50d4464fd45) | Property |

## Type declaration

<a id="api-027e94403f7bec65"></a>
<!-- api: T:Inno.Text.TextGlyph 177c638e3902d1f30bac0610d3c885ee8526fe0f5fd275253321eb3245d7b7cd -->

```csharp
public readonly record struct Inno.Text.TextGlyph : System.IEquatable<Inno.Text.TextGlyph>
```

Describes one positioned glyph emitted by Unicode shaping.

**Parameter `glyphId`:** The glyph identifier in the font face that produced this layout.

**Parameter `cluster`:** The source cluster index reported by the backend. The FreeType/HarfBuzz backend
reports a UTF-8 byte offset, not a UTF-16 character index.

**Parameter `advanceX`:** The horizontal pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `advanceY`:** The vertical pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `offsetX`:** The horizontal placement offset from the pen position in logical pixels.

**Parameter `offsetY`:** The vertical placement offset from the pen position in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L207).

## `#ctor`

<a id="api-0c5f7a4b3e1d602d"></a>
<!-- api: M:Inno.Text.TextGlyph.#ctor(System.UInt32,System.UInt32,System.Single,System.Single,System.Single,System.Single) a6bd696c2cd9ef82248f015a0529a9139e62c16bce0d277b04f6cbd3daf5da74 -->

```csharp
public Inno.Text.TextGlyph.TextGlyph(uint glyphId, uint cluster, float advanceX, float advanceY, float offsetX, float offsetY)
```

Describes one positioned glyph emitted by Unicode shaping.

**Parameter `glyphId`:** The glyph identifier in the font face that produced this layout.

**Parameter `cluster`:** The source cluster index reported by the backend. The FreeType/HarfBuzz backend
reports a UTF-8 byte offset, not a UTF-16 character index.

**Parameter `advanceX`:** The horizontal pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `advanceY`:** The vertical pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `offsetX`:** The horizontal placement offset from the pen position in logical pixels.

**Parameter `offsetY`:** The vertical placement offset from the pen position in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L207).

## `Deconstruct`

<a id="api-7bd14e6157fc4995"></a>
<!-- api: M:Inno.Text.TextGlyph.Deconstruct(System.UInt32@,System.UInt32@,System.Single@,System.Single@,System.Single@,System.Single@) a248d1d7ad3bb71d8b7f126adc3a7baf18cdfd344b993b247a692fa942e77658 -->

```csharp
public void Inno.Text.TextGlyph.Deconstruct(out uint glyphId, out uint cluster, out float advanceX, out float advanceY, out float offsetX, out float offsetY)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L207).

## `Equals`

<a id="api-a5c763a2f0869ae8"></a>
<!-- api: M:Inno.Text.TextGlyph.Equals(Inno.Text.TextGlyph) 5ab022f82abee10e39367fd1a5003baf85981cbcdb0bae25a0522cfeaa830898 -->

```csharp
public bool Inno.Text.TextGlyph.Equals(Inno.Text.TextGlyph other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L207).

## `Equals`

<a id="api-07e17e3959505b20"></a>
<!-- api: M:Inno.Text.TextGlyph.Equals(System.Object) 11e228bf9abf7a553a4b80cdfb53cf5a1c732281b967cba667bc72a7366bcd8b -->

```csharp
public override bool Inno.Text.TextGlyph.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L207).

## `GetHashCode`

<a id="api-93aafa7c253c2edf"></a>
<!-- api: M:Inno.Text.TextGlyph.GetHashCode df769991c70af48cd6c2b29d723214f648c7bcc14051b931796f4fd0d179724f -->

```csharp
public override int Inno.Text.TextGlyph.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L207).

## `op_Equality`

<a id="api-c67c3bef44aa2346"></a>
<!-- api: M:Inno.Text.TextGlyph.op_Equality(Inno.Text.TextGlyph,Inno.Text.TextGlyph) 32c1d771b0f591e9a9b9cf2408c0133e51f3863d699a58de757690f0f8fea5dc -->

```csharp
public static bool Inno.Text.TextGlyph.operator ==(Inno.Text.TextGlyph left, Inno.Text.TextGlyph right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L207).

## `op_Inequality`

<a id="api-8dd75b62defce5f6"></a>
<!-- api: M:Inno.Text.TextGlyph.op_Inequality(Inno.Text.TextGlyph,Inno.Text.TextGlyph) 89ddc539844aa7edf399325e41ae79666463b700eb6d8f12f1f87fa0efd88870 -->

```csharp
public static bool Inno.Text.TextGlyph.operator !=(Inno.Text.TextGlyph left, Inno.Text.TextGlyph right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L207).

## `ToString`

<a id="api-1a36592eca97a152"></a>
<!-- api: M:Inno.Text.TextGlyph.ToString b6bfac7075b03b967500861fa1a9e9660dd5cb17a7bb4eac608d0840e66b3b4d -->

```csharp
public override string Inno.Text.TextGlyph.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L207).

## `advanceX`

<a id="api-141ddcd55458ae5f"></a>
<!-- api: P:Inno.Text.TextGlyph.advanceX 71131feeda6cea4b5eb139097809ea056e60bb2d83ce18b5c90036ad61890c56 -->

```csharp
public float Inno.Text.TextGlyph.advanceX { get; init; }
```

The horizontal pen advance in logical pixels, including backend-applied letter spacing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L210).

## `advanceY`

<a id="api-fcdec7c8b72c7e28"></a>
<!-- api: P:Inno.Text.TextGlyph.advanceY 95aee00faec803caffca32be8c8b89a6ad4f09c66ea4fab41831249a27c4653b -->

```csharp
public float Inno.Text.TextGlyph.advanceY { get; init; }
```

The vertical pen advance in logical pixels, including backend-applied letter spacing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L211).

## `cluster`

<a id="api-18ed4c568091d392"></a>
<!-- api: P:Inno.Text.TextGlyph.cluster cf1689b71037e68c4e638e3a07c482503134e4e6906bf6f3989d7ea6d36bca18 -->

```csharp
public uint Inno.Text.TextGlyph.cluster { get; init; }
```

The source cluster index reported by the backend. The FreeType/HarfBuzz backend
reports a UTF-8 byte offset, not a UTF-16 character index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L209).

## `glyphId`

<a id="api-5901141e763352cb"></a>
<!-- api: P:Inno.Text.TextGlyph.glyphId 263f1c07319a35fe49e8829775c8ea7737e41cffd0315578f54d4cf9156e7ec7 -->

```csharp
public uint Inno.Text.TextGlyph.glyphId { get; init; }
```

The glyph identifier in the font face that produced this layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L208).

## `offsetX`

<a id="api-4e24eb7eef682f13"></a>
<!-- api: P:Inno.Text.TextGlyph.offsetX ca9c588d37d7ae79f54c835c24cd4e931abb2bd1e9232fac834388da24ef3d51 -->

```csharp
public float Inno.Text.TextGlyph.offsetX { get; init; }
```

The horizontal placement offset from the pen position in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L212).

## `offsetY`

<a id="api-d539a50d4464fd45"></a>
<!-- api: P:Inno.Text.TextGlyph.offsetY 0ad727f2843aec6798cf3db3d4b793c2996dd67afa297453032a3df0b83182d4 -->

```csharp
public float Inno.Text.TextGlyph.offsetY { get; init; }
```

The vertical placement offset from the pen position in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L213).
