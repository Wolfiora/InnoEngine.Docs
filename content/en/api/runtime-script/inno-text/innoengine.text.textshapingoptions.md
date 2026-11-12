---
title: "TextShapingOptions"
description: "Reference for TextShapingOptions in Inno.Text."
uid: api.inno.text.runtime-script.d0c7421c62fbcf55
kind: api
owners:
  - Inno.Text
apiSurface: runtime-script
contracts:
  - project.inno-text#shaping-and-glyph-contract
  - manual.scripting.use-script-api
---
# `TextShapingOptions`

This reference describes `TextShapingOptions` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Text.TextShapingOptions>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-765b7dd73e049ad9) | Method |
| [`Equals`](#api-cce65e8b7fe7e000) | Method |
| [`Equals`](#api-b26d4fbf75b06d75) | Method |
| [`GetHashCode`](#api-45d38bd2d506ef1d) | Method |
| [`op_Equality`](#api-9715622f502ab36d) | Method |
| [`op_Inequality`](#api-9e3094475c31dcd2) | Method |
| [`ToString`](#api-2f13f7d1fd7fe91e) | Method |
| [`automatic`](#api-5a35c4dca2b4247d) | Property |
| [`direction`](#api-1cfe7bfa5ce41106) | Property |
| [`language`](#api-c0c7d0dd7cedb749) | Property |
| [`script`](#api-00430246b7068f33) | Property |

## Type declaration

<a id="api-d0c7421c62fbcf55"></a>
<!-- api: T:InnoEngine.Text.TextShapingOptions 962d4b265b910d80b3f88e19b7638686628a6e995d2d73a9fe55955ce58f1b83 -->

```csharp
public readonly struct InnoEngine.Text.TextShapingOptions : System.IEquatable<InnoEngine.Text.TextShapingOptions>
```

Defines language and script hints for one shaping operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L141).

## `#ctor`

<a id="api-765b7dd73e049ad9"></a>
<!-- api: M:InnoEngine.Text.TextShapingOptions.#ctor(InnoEngine.Text.TextDirection,System.String,System.String) 0a88f09d34526b1c6ce3a2a0ea22789c0c9dc158a269201492d27786589599db -->

```csharp
public InnoEngine.Text.TextShapingOptions.TextShapingOptions(InnoEngine.Text.TextDirection direction = InnoEngine.Text.TextDirection.Automatic, string? language = null, string? script = null)
```

Creates shaping hints.

**Parameter `direction`:** The logical text direction.

**Parameter `language`:** An optional BCP 47 language code.

**Parameter `script`:** An optional ISO 15924 script code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L155).

## `Equals`

<a id="api-cce65e8b7fe7e000"></a>
<!-- api: M:InnoEngine.Text.TextShapingOptions.Equals(InnoEngine.Text.TextShapingOptions) 7900239f9b48fff02312df53cb9767908dbede0839e4bc8e773721398fe65278 -->

```csharp
public bool InnoEngine.Text.TextShapingOptions.Equals(InnoEngine.Text.TextShapingOptions other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L141).

## `Equals`

<a id="api-b26d4fbf75b06d75"></a>
<!-- api: M:InnoEngine.Text.TextShapingOptions.Equals(System.Object) 5d2b31eaaadba13a874448e451331320200b978684997ea3793cd9f634aacb10 -->

```csharp
public override bool InnoEngine.Text.TextShapingOptions.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L141).

## `GetHashCode`

<a id="api-45d38bd2d506ef1d"></a>
<!-- api: M:InnoEngine.Text.TextShapingOptions.GetHashCode 13259bd499a02a9c2eb58d47ebd51248b6aa434a4bd5d91e1913373ce64498f5 -->

```csharp
public override int InnoEngine.Text.TextShapingOptions.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L141).

## `op_Equality`

<a id="api-9715622f502ab36d"></a>
<!-- api: M:InnoEngine.Text.TextShapingOptions.op_Equality(InnoEngine.Text.TextShapingOptions,InnoEngine.Text.TextShapingOptions) 1a9b38dd6105805f403095595ec37c62368cbf50ada58b465ac4d722da88d1b1 -->

```csharp
public static bool InnoEngine.Text.TextShapingOptions.operator ==(InnoEngine.Text.TextShapingOptions left, InnoEngine.Text.TextShapingOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L141).

## `op_Inequality`

<a id="api-9e3094475c31dcd2"></a>
<!-- api: M:InnoEngine.Text.TextShapingOptions.op_Inequality(InnoEngine.Text.TextShapingOptions,InnoEngine.Text.TextShapingOptions) ea81c1f478b519723f8c782886d26a50e8158f218a09251af43e8fcf8a3df2a8 -->

```csharp
public static bool InnoEngine.Text.TextShapingOptions.operator !=(InnoEngine.Text.TextShapingOptions left, InnoEngine.Text.TextShapingOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L141).

## `ToString`

<a id="api-2f13f7d1fd7fe91e"></a>
<!-- api: M:InnoEngine.Text.TextShapingOptions.ToString 266fca6bdb1ae8e34372fba30eaadcd9b3ba31f3770003d74ab5aadd32146f31 -->

```csharp
public override string InnoEngine.Text.TextShapingOptions.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L141).

## `automatic`

<a id="api-5a35c4dca2b4247d"></a>
<!-- api: P:InnoEngine.Text.TextShapingOptions.automatic 0475c6babb3c99b83396bb42993ed1df4bda4f9408f754465d6b9aee054c83d5 -->

```csharp
public static InnoEngine.Text.TextShapingOptions InnoEngine.Text.TextShapingOptions.automatic { get; }
```

Gets automatic shaping hints.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L170).

## `direction`

<a id="api-1cfe7bfa5ce41106"></a>
<!-- api: P:InnoEngine.Text.TextShapingOptions.direction ee0b6e227ecc9754d1395f01111048ce96ecf0865b69c1fd9f69a149cb1b1349 -->

```csharp
public InnoEngine.Text.TextDirection InnoEngine.Text.TextShapingOptions.direction { get; }
```

Gets the requested logical direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L174).

## `language`

<a id="api-c0c7d0dd7cedb749"></a>
<!-- api: P:InnoEngine.Text.TextShapingOptions.language 6943dc901c9193894ec1718131e0e2f80ef1e41b6c826fc1506bf4ae4094c236 -->

```csharp
public string? InnoEngine.Text.TextShapingOptions.language { get; }
```

Gets the optional BCP 47 language code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L178).

## `script`

<a id="api-00430246b7068f33"></a>
<!-- api: P:InnoEngine.Text.TextShapingOptions.script abdd1841551f7422efdfa9975e7fe822b8ceb2628f922b0142845ccb12feb4a4 -->

```csharp
public string? InnoEngine.Text.TextShapingOptions.script { get; }
```

Gets the optional ISO 15924 script code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L182).
