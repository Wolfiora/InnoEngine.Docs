---
title: "TextMetrics"
description: "Reference for TextMetrics in Inno.Text."
uid: api.inno.text.ac7c1fd5668efd67
kind: api
owners:
  - Inno.Text
apiSurface: source-clr
contracts:
  - project.inno-text#shaping-and-glyph-contract
---
# `TextMetrics`

This reference describes `TextMetrics` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Text.TextMetrics>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2e2ac5914e16fbb7) | Method |
| [`Deconstruct`](#api-84534d5600123982) | Method |
| [`Equals`](#api-0da8988bdb34058b) | Method |
| [`Equals`](#api-933980d100dafa95) | Method |
| [`GetHashCode`](#api-b93679d5a7eb9f96) | Method |
| [`op_Equality`](#api-9c1a6009b214b642) | Method |
| [`op_Inequality`](#api-8a304d01854f0166) | Method |
| [`ToString`](#api-1a380294f14306b3) | Method |
| [`ascender`](#api-b8e3af8feffe1aad) | Property |
| [`descender`](#api-9b64224151668733) | Property |
| [`lineHeight`](#api-8d4ba81b5d5d5463) | Property |
| [`underlinePosition`](#api-55eed78c5c2e46c1) | Property |
| [`underlineThickness`](#api-567b471bee29380a) | Property |

## Type declaration

<a id="api-ac7c1fd5668efd67"></a>
<!-- api: T:Inno.Text.TextMetrics 9d4b5169deea03f295d7a6c1a721ab9d62d18209d3d62b19e1f10c63830111b6 -->

```csharp
public readonly record struct Inno.Text.TextMetrics : System.IEquatable<Inno.Text.TextMetrics>
```

Describes scalable metrics for one font face and logical size.

**Parameter `ascender`:** The scaled face ascender in logical pixels, using the backend's coordinate convention.

**Parameter `descender`:** The scaled face descender in logical pixels, using the backend's coordinate convention.

**Parameter `lineHeight`:** The recommended line spacing in logical pixels for the selected face and size.

**Parameter `underlinePosition`:** The scaled underline position relative to the baseline in logical pixels.

**Parameter `underlineThickness`:** The scaled underline thickness in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L234).

## `#ctor`

<a id="api-2e2ac5914e16fbb7"></a>
<!-- api: M:Inno.Text.TextMetrics.#ctor(System.Single,System.Single,System.Single,System.Single,System.Single) e693f078054f365585c397f04f5e39d096bef6f1b71384d7fa79c227986ea9e9 -->

```csharp
public Inno.Text.TextMetrics.TextMetrics(float ascender, float descender, float lineHeight, float underlinePosition, float underlineThickness)
```

Describes scalable metrics for one font face and logical size.

**Parameter `ascender`:** The scaled face ascender in logical pixels, using the backend's coordinate convention.

**Parameter `descender`:** The scaled face descender in logical pixels, using the backend's coordinate convention.

**Parameter `lineHeight`:** The recommended line spacing in logical pixels for the selected face and size.

**Parameter `underlinePosition`:** The scaled underline position relative to the baseline in logical pixels.

**Parameter `underlineThickness`:** The scaled underline thickness in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L234).

## `Deconstruct`

<a id="api-84534d5600123982"></a>
<!-- api: M:Inno.Text.TextMetrics.Deconstruct(System.Single@,System.Single@,System.Single@,System.Single@,System.Single@) a45e85749cefe99a7d816b15d73b896d41a77c3edb9d7e7993e4d35068f84fdf -->

```csharp
public void Inno.Text.TextMetrics.Deconstruct(out float ascender, out float descender, out float lineHeight, out float underlinePosition, out float underlineThickness)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L234).

## `Equals`

<a id="api-0da8988bdb34058b"></a>
<!-- api: M:Inno.Text.TextMetrics.Equals(Inno.Text.TextMetrics) e2921fc8aaffb2a72796eeadecbd01ba01e3f115410ec4af70f5dd0dfd87222b -->

```csharp
public bool Inno.Text.TextMetrics.Equals(Inno.Text.TextMetrics other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L234).

## `Equals`

<a id="api-933980d100dafa95"></a>
<!-- api: M:Inno.Text.TextMetrics.Equals(System.Object) 98c5a754ad9e9dd5f41f57e09b628b226c5eaa06e10ca43bc2c29d231ee1bfae -->

```csharp
public override bool Inno.Text.TextMetrics.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L234).

## `GetHashCode`

<a id="api-b93679d5a7eb9f96"></a>
<!-- api: M:Inno.Text.TextMetrics.GetHashCode fcb895dd1ef321750f89f0a0488893f2035db91edf015d0f17ab955f526278ad -->

```csharp
public override int Inno.Text.TextMetrics.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L234).

## `op_Equality`

<a id="api-9c1a6009b214b642"></a>
<!-- api: M:Inno.Text.TextMetrics.op_Equality(Inno.Text.TextMetrics,Inno.Text.TextMetrics) 9576ce40b932acd325a05235f4b9450032640e128b932b526741fa39c0c084d5 -->

```csharp
public static bool Inno.Text.TextMetrics.operator ==(Inno.Text.TextMetrics left, Inno.Text.TextMetrics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L234).

## `op_Inequality`

<a id="api-8a304d01854f0166"></a>
<!-- api: M:Inno.Text.TextMetrics.op_Inequality(Inno.Text.TextMetrics,Inno.Text.TextMetrics) 5845c2ea06040f62bc9460ed631c123a3436044465c31dc6c4ef94f8456795fa -->

```csharp
public static bool Inno.Text.TextMetrics.operator !=(Inno.Text.TextMetrics left, Inno.Text.TextMetrics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L234).

## `ToString`

<a id="api-1a380294f14306b3"></a>
<!-- api: M:Inno.Text.TextMetrics.ToString e3a21df35401fc97faa506927d3bc6c050f6c553d2b274310c7d1964395832a5 -->

```csharp
public override string Inno.Text.TextMetrics.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L234).

## `ascender`

<a id="api-b8e3af8feffe1aad"></a>
<!-- api: P:Inno.Text.TextMetrics.ascender ee43f44fdc4f3b1de11672ffcbc2ee6ebab0ac8793ae79e96c33f64ed0fe8b3b -->

```csharp
public float Inno.Text.TextMetrics.ascender { get; init; }
```

The scaled face ascender in logical pixels, using the backend's coordinate convention.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L235).

## `descender`

<a id="api-9b64224151668733"></a>
<!-- api: P:Inno.Text.TextMetrics.descender 7f1fad939fc1f2154115a57908546dd3cdb146d14183166d6693f816f3528184 -->

```csharp
public float Inno.Text.TextMetrics.descender { get; init; }
```

The scaled face descender in logical pixels, using the backend's coordinate convention.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L236).

## `lineHeight`

<a id="api-8d4ba81b5d5d5463"></a>
<!-- api: P:Inno.Text.TextMetrics.lineHeight 9d4fa077ad0c20ad41dcac1b4d1ca0bd018fabba2b47f5adefe8d0afbb3dbef1 -->

```csharp
public float Inno.Text.TextMetrics.lineHeight { get; init; }
```

The recommended line spacing in logical pixels for the selected face and size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L237).

## `underlinePosition`

<a id="api-55eed78c5c2e46c1"></a>
<!-- api: P:Inno.Text.TextMetrics.underlinePosition 7456f62a4adcf5329b3e67ed8bdb29ef883a22ace0dc0d6ae664549a77c7b3cf -->

```csharp
public float Inno.Text.TextMetrics.underlinePosition { get; init; }
```

The scaled underline position relative to the baseline in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L238).

## `underlineThickness`

<a id="api-567b471bee29380a"></a>
<!-- api: P:Inno.Text.TextMetrics.underlineThickness 8fe74c8cc8afb45884777aec054463d36255395d8a6b51732a0f40405c36f148 -->

```csharp
public float Inno.Text.TextMetrics.underlineThickness { get; init; }
```

The scaled underline thickness in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L239).
