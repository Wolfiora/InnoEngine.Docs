---
title: "TextMetrics"
description: "Reference for TextMetrics in Inno.Text."
uid: api.inno.text.runtime-script.ff9c6dbdd807afda
kind: api
owners:
  - Inno.Text
apiSurface: runtime-script
contracts:
  - project.inno-text#shaping-and-glyph-contract
  - manual.scripting.use-script-api
---
# `TextMetrics`

This reference describes `TextMetrics` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Text.TextMetrics>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-08c40380c2b9d6b2) | Method |
| [`Deconstruct`](#api-19434480580838b7) | Method |
| [`Equals`](#api-07d72184660dc5bb) | Method |
| [`Equals`](#api-a4e77c769a9fa11a) | Method |
| [`GetHashCode`](#api-987e37ea8a4e1f6f) | Method |
| [`op_Equality`](#api-c2b5bf66ac993741) | Method |
| [`op_Inequality`](#api-f190ea297d74c9ce) | Method |
| [`ToString`](#api-cfe59065026ebc63) | Method |
| [`ascender`](#api-1b8407b9cd72c0a7) | Property |
| [`descender`](#api-19a778df89a20b11) | Property |
| [`lineHeight`](#api-675d42d3ed5857df) | Property |
| [`underlinePosition`](#api-0e1d84b70d931fe8) | Property |
| [`underlineThickness`](#api-d5f07a536df034ba) | Property |

## Type declaration

<a id="api-ff9c6dbdd807afda"></a>
<!-- api: T:InnoEngine.Text.TextMetrics 5889f7f1a79d0edd0f067d3229a7daaf58cc8223329ef5252dfeff1d35af6ef7 -->

```csharp
public readonly struct InnoEngine.Text.TextMetrics : System.IEquatable<InnoEngine.Text.TextMetrics>
```

Describes scalable metrics for one font face and logical size.

**Parameter `ascender`:** The scaled face ascender in logical pixels, using the backend's coordinate convention.

**Parameter `descender`:** The scaled face descender in logical pixels, using the backend's coordinate convention.

**Parameter `lineHeight`:** The recommended line spacing in logical pixels for the selected face and size.

**Parameter `underlinePosition`:** The scaled underline position relative to the baseline in logical pixels.

**Parameter `underlineThickness`:** The scaled underline thickness in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L234).

## `#ctor`

<a id="api-08c40380c2b9d6b2"></a>
<!-- api: M:InnoEngine.Text.TextMetrics.#ctor(System.Single,System.Single,System.Single,System.Single,System.Single) 81a3ade4d8402bb2a21ccef87bc022e7dc85f238b9f4edd9ba7c5fc62f06bc0f -->

```csharp
public InnoEngine.Text.TextMetrics.TextMetrics(float ascender, float descender, float lineHeight, float underlinePosition, float underlineThickness)
```

Describes scalable metrics for one font face and logical size.

**Parameter `ascender`:** The scaled face ascender in logical pixels, using the backend's coordinate convention.

**Parameter `descender`:** The scaled face descender in logical pixels, using the backend's coordinate convention.

**Parameter `lineHeight`:** The recommended line spacing in logical pixels for the selected face and size.

**Parameter `underlinePosition`:** The scaled underline position relative to the baseline in logical pixels.

**Parameter `underlineThickness`:** The scaled underline thickness in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L234).

## `Deconstruct`

<a id="api-19434480580838b7"></a>
<!-- api: M:InnoEngine.Text.TextMetrics.Deconstruct(System.Single@,System.Single@,System.Single@,System.Single@,System.Single@) 2686b3eb54643765e9f685e1ac4bf62a92fd713747cd8b6948079f1cc6621fcd -->

```csharp
public void InnoEngine.Text.TextMetrics.Deconstruct(out float ascender, out float descender, out float lineHeight, out float underlinePosition, out float underlineThickness)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L234).

## `Equals`

<a id="api-07d72184660dc5bb"></a>
<!-- api: M:InnoEngine.Text.TextMetrics.Equals(InnoEngine.Text.TextMetrics) 531ad7774aa9f7f8cf1b930ad5d778e57a39abe92920888c496bdb086577e5f8 -->

```csharp
public bool InnoEngine.Text.TextMetrics.Equals(InnoEngine.Text.TextMetrics other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L234).

## `Equals`

<a id="api-a4e77c769a9fa11a"></a>
<!-- api: M:InnoEngine.Text.TextMetrics.Equals(System.Object) cff0c4b956ab19f8192deac1d508b19d1f3724c76855dbb139507a77ddfe639c -->

```csharp
public override bool InnoEngine.Text.TextMetrics.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L234).

## `GetHashCode`

<a id="api-987e37ea8a4e1f6f"></a>
<!-- api: M:InnoEngine.Text.TextMetrics.GetHashCode e3be9714a5b35927e8a432822b165ca759ff2460e2d4fc4dec9234085b7c569c -->

```csharp
public override int InnoEngine.Text.TextMetrics.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L234).

## `op_Equality`

<a id="api-c2b5bf66ac993741"></a>
<!-- api: M:InnoEngine.Text.TextMetrics.op_Equality(InnoEngine.Text.TextMetrics,InnoEngine.Text.TextMetrics) b9948010959f5cd34f6c9f6030e6d7d1f166914bc94939f22bcaf7abcf119e75 -->

```csharp
public static bool InnoEngine.Text.TextMetrics.operator ==(InnoEngine.Text.TextMetrics left, InnoEngine.Text.TextMetrics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L234).

## `op_Inequality`

<a id="api-f190ea297d74c9ce"></a>
<!-- api: M:InnoEngine.Text.TextMetrics.op_Inequality(InnoEngine.Text.TextMetrics,InnoEngine.Text.TextMetrics) 37ecd9a9011e2ec7aa616aa71f0d5c67f780430584f25a41e4f1e22485e156f8 -->

```csharp
public static bool InnoEngine.Text.TextMetrics.operator !=(InnoEngine.Text.TextMetrics left, InnoEngine.Text.TextMetrics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L234).

## `ToString`

<a id="api-cfe59065026ebc63"></a>
<!-- api: M:InnoEngine.Text.TextMetrics.ToString 3e9a45149237638986b40a733d9f619c04e66aad658d327853e806dc789d1324 -->

```csharp
public override string InnoEngine.Text.TextMetrics.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L234).

## `ascender`

<a id="api-1b8407b9cd72c0a7"></a>
<!-- api: P:InnoEngine.Text.TextMetrics.ascender fa51bcd3010b65e671d97a27adf16a8e2459aa2f6814c53f07ad01fb8e5bdd3d -->

```csharp
public float InnoEngine.Text.TextMetrics.ascender { get; set; }
```

The scaled face ascender in logical pixels, using the backend's coordinate convention.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L235).

## `descender`

<a id="api-19a778df89a20b11"></a>
<!-- api: P:InnoEngine.Text.TextMetrics.descender e035167620ae21f0a189388243f913c27825e1db5389ef819586202d4c1f6bfb -->

```csharp
public float InnoEngine.Text.TextMetrics.descender { get; set; }
```

The scaled face descender in logical pixels, using the backend's coordinate convention.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L236).

## `lineHeight`

<a id="api-675d42d3ed5857df"></a>
<!-- api: P:InnoEngine.Text.TextMetrics.lineHeight e4e01db9382f4131be5a96e8cc51248b499efabd63ab4548254ac190cffd8d7a -->

```csharp
public float InnoEngine.Text.TextMetrics.lineHeight { get; set; }
```

The recommended line spacing in logical pixels for the selected face and size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L237).

## `underlinePosition`

<a id="api-0e1d84b70d931fe8"></a>
<!-- api: P:InnoEngine.Text.TextMetrics.underlinePosition 1862c7a2c33139ee807a93ffa0858a4b6dfc4ef262aedd1ef217323d1293f4fe -->

```csharp
public float InnoEngine.Text.TextMetrics.underlinePosition { get; set; }
```

The scaled underline position relative to the baseline in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L238).

## `underlineThickness`

<a id="api-d5f07a536df034ba"></a>
<!-- api: P:InnoEngine.Text.TextMetrics.underlineThickness a92dda64197c3ba45e29bc27415294915ddf4eb63e4e286c96f73c366978fd69 -->

```csharp
public float InnoEngine.Text.TextMetrics.underlineThickness { get; set; }
```

The scaled underline thickness in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/text/Inno.Text/TextTypes.cs#L239).
