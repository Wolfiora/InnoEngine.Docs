---
title: "TextShapingOptions"
description: "Reference for TextShapingOptions in Inno.Text."
uid: api.inno.text.54ef59fb6723c7dd
kind: api
owners:
  - Inno.Text
apiSurface: source-clr
contracts:
  - project.inno-text#shaping-and-glyph-contract
---
# `TextShapingOptions`

This reference describes `TextShapingOptions` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Text.TextShapingOptions>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-563597e8abba0e0f) | Method |
| [`Equals`](#api-97c21da61185c825) | Method |
| [`Equals`](#api-067f59f900ffeb3c) | Method |
| [`GetHashCode`](#api-58b5f672e2e89a5b) | Method |
| [`op_Equality`](#api-3a3d539b858f249b) | Method |
| [`op_Inequality`](#api-e4ceff5b9cb1c05c) | Method |
| [`ToString`](#api-b979fc8a1e7bc5e0) | Method |
| [`automatic`](#api-082ab576860b6622) | Property |
| [`direction`](#api-9c6271ffd9e4af68) | Property |
| [`language`](#api-b3484362ee2a63f4) | Property |
| [`script`](#api-4b4a27d9d79905b5) | Property |

## Type declaration

<a id="api-54ef59fb6723c7dd"></a>
<!-- api: T:Inno.Text.TextShapingOptions 5eec2d4999b11a71e2fc754763404ad05626a8462c909caad9de487c303ede2a -->

```csharp
public readonly record struct Inno.Text.TextShapingOptions : System.IEquatable<Inno.Text.TextShapingOptions>
```

Defines language and script hints for one shaping operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L141).

## `#ctor`

<a id="api-563597e8abba0e0f"></a>
<!-- api: M:Inno.Text.TextShapingOptions.#ctor(Inno.Text.TextDirection,System.String,System.String) ae7f0e148cab62e8fb92b3b19bbfb7dcb44d33941c36ffa848ebdd11f56233cd -->

```csharp
public Inno.Text.TextShapingOptions.TextShapingOptions(Inno.Text.TextDirection direction = Inno.Text.TextDirection.Automatic, string? language = null, string? script = null)
```

Creates shaping hints.

**Parameter `direction`:** The logical text direction.

**Parameter `language`:** An optional BCP 47 language code.

**Parameter `script`:** An optional ISO 15924 script code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L155).

## `Equals`

<a id="api-97c21da61185c825"></a>
<!-- api: M:Inno.Text.TextShapingOptions.Equals(Inno.Text.TextShapingOptions) 70526e453525184a4c4840bb78be26251f31bde9725a031f17ca65be38f8ca3d -->

```csharp
public bool Inno.Text.TextShapingOptions.Equals(Inno.Text.TextShapingOptions other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L141).

## `Equals`

<a id="api-067f59f900ffeb3c"></a>
<!-- api: M:Inno.Text.TextShapingOptions.Equals(System.Object) 5361fcebce03e4932362b3a75848a3964ed7aaf9c824be562da228a10dddf99f -->

```csharp
public override bool Inno.Text.TextShapingOptions.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L141).

## `GetHashCode`

<a id="api-58b5f672e2e89a5b"></a>
<!-- api: M:Inno.Text.TextShapingOptions.GetHashCode db394755fe26efa67e919498c53abe0832893f945afe1213f39929b6b7633c65 -->

```csharp
public override int Inno.Text.TextShapingOptions.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L141).

## `op_Equality`

<a id="api-3a3d539b858f249b"></a>
<!-- api: M:Inno.Text.TextShapingOptions.op_Equality(Inno.Text.TextShapingOptions,Inno.Text.TextShapingOptions) c964fa1125bcb22b86178ed00d42f392574754ebb85970374579ffa0587eae6b -->

```csharp
public static bool Inno.Text.TextShapingOptions.operator ==(Inno.Text.TextShapingOptions left, Inno.Text.TextShapingOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L141).

## `op_Inequality`

<a id="api-e4ceff5b9cb1c05c"></a>
<!-- api: M:Inno.Text.TextShapingOptions.op_Inequality(Inno.Text.TextShapingOptions,Inno.Text.TextShapingOptions) 5907d4a6c5c27a0707849f227825e892b1d347fe49104958eae34dbc51a3d9ca -->

```csharp
public static bool Inno.Text.TextShapingOptions.operator !=(Inno.Text.TextShapingOptions left, Inno.Text.TextShapingOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L141).

## `ToString`

<a id="api-b979fc8a1e7bc5e0"></a>
<!-- api: M:Inno.Text.TextShapingOptions.ToString c828426ad828305b12509fe21cfa3796f81ed28980f80be722ae51774b6a706c -->

```csharp
public override string Inno.Text.TextShapingOptions.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L141).

## `automatic`

<a id="api-082ab576860b6622"></a>
<!-- api: P:Inno.Text.TextShapingOptions.automatic b7e3aa0d3c1a418f75d2c598e18f5d1ed0204556798a45363fdf0e36a9959656 -->

```csharp
public static Inno.Text.TextShapingOptions Inno.Text.TextShapingOptions.automatic { get; }
```

Gets automatic shaping hints.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L170).

## `direction`

<a id="api-9c6271ffd9e4af68"></a>
<!-- api: P:Inno.Text.TextShapingOptions.direction 1eba837cd6d73b6fa4fa41674c9c63aeffc6a0bfb919143fb2d24d12ceac21ac -->

```csharp
public Inno.Text.TextDirection Inno.Text.TextShapingOptions.direction { get; }
```

Gets the requested logical direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L174).

## `language`

<a id="api-b3484362ee2a63f4"></a>
<!-- api: P:Inno.Text.TextShapingOptions.language 08d1f9c3916210ee62f66dd14d554eaefbae37391e2040637838cc5fc2af799e -->

```csharp
public string? Inno.Text.TextShapingOptions.language { get; }
```

Gets the optional BCP 47 language code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L178).

## `script`

<a id="api-4b4a27d9d79905b5"></a>
<!-- api: P:Inno.Text.TextShapingOptions.script a65520be25f628c3b64ddeeef489d4879ce679837e3b0654aebd9a1490ec62b0 -->

```csharp
public string? Inno.Text.TextShapingOptions.script { get; }
```

Gets the optional ISO 15924 script code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L182).
