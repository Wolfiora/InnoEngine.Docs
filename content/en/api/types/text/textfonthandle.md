---
title: "TextFontHandle"
description: "Reference for TextFontHandle in Inno.Text."
uid: api.inno.text.213ea3cce8ff82c4
kind: api
owners:
  - Inno.Text
apiSurface: source-clr
contracts:
  - project.inno-text#shaping-and-glyph-contract
---
# `TextFontHandle`

This reference describes `TextFontHandle` in `Inno.Text`. Read the [shared contract](../../projects/inno-text.md#shaping-and-glyph-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Text.TextFontHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1249aa692332d36c) | Method |
| [`Deconstruct`](#api-7943ecc751eb9976) | Method |
| [`Equals`](#api-02a9bb50ebeadca0) | Method |
| [`Equals`](#api-00136e1b8fdeb63d) | Method |
| [`GetHashCode`](#api-b818fb68fde2d9e2) | Method |
| [`op_Equality`](#api-224ce6e2b1ba72b3) | Method |
| [`op_Inequality`](#api-e4d338c2a2d32c3c) | Method |
| [`ToString`](#api-db0d0bff7ef6ee96) | Method |
| [`isValid`](#api-f37f07fb9c5fa8c0) | Property |
| [`value`](#api-53367a38f91587d3) | Property |

## Type declaration

<a id="api-213ea3cce8ff82c4"></a>
<!-- api: T:Inno.Text.TextFontHandle 8fc4a398faa6d9d9bf3e7623b051a14d776b2d78bbe089df3982cbc883222935 -->

```csharp
public readonly record struct Inno.Text.TextFontHandle : System.IEquatable<Inno.Text.TextFontHandle>
```

Identifies one font face loaded into a text backend generation.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L58).

## `#ctor`

<a id="api-1249aa692332d36c"></a>
<!-- api: M:Inno.Text.TextFontHandle.#ctor(System.UInt64) 23c1cc10e7046d87cdd10ee8acb64a18dee2ce63e522b0aaeed966385beca03d -->

```csharp
public Inno.Text.TextFontHandle.TextFontHandle(ulong value)
```

Identifies one font face loaded into a text backend generation.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L58).

## `Deconstruct`

<a id="api-7943ecc751eb9976"></a>
<!-- api: M:Inno.Text.TextFontHandle.Deconstruct(System.UInt64@) 4ea8ffd496863ff99b85e3037003709f967224a9049e4672d08b203c39b2a5d6 -->

```csharp
public void Inno.Text.TextFontHandle.Deconstruct(out ulong value)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L58).

## `Equals`

<a id="api-02a9bb50ebeadca0"></a>
<!-- api: M:Inno.Text.TextFontHandle.Equals(Inno.Text.TextFontHandle) 8b2d1f00ace07bc32c643e0fcfe2e5f7d86e4df485f383cdbf5da3d9abdc8f4f -->

```csharp
public bool Inno.Text.TextFontHandle.Equals(Inno.Text.TextFontHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L58).

## `Equals`

<a id="api-00136e1b8fdeb63d"></a>
<!-- api: M:Inno.Text.TextFontHandle.Equals(System.Object) 1d29b8d8f0636f956af0cf8ea7b3570994e8fd3c7aa46c3de935013dd48f88cb -->

```csharp
public override bool Inno.Text.TextFontHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L58).

## `GetHashCode`

<a id="api-b818fb68fde2d9e2"></a>
<!-- api: M:Inno.Text.TextFontHandle.GetHashCode 9dc2b828f5d33ebe037fa5ae9daf8b7a7cb615b9a09515719fdc43ce8519eeaa -->

```csharp
public override int Inno.Text.TextFontHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L58).

## `op_Equality`

<a id="api-224ce6e2b1ba72b3"></a>
<!-- api: M:Inno.Text.TextFontHandle.op_Equality(Inno.Text.TextFontHandle,Inno.Text.TextFontHandle) 9fe8d0ec34e445ded8e855e8cc26f32001ab5f209ed61026d3f2b4d8bc3a2c7e -->

```csharp
public static bool Inno.Text.TextFontHandle.operator ==(Inno.Text.TextFontHandle left, Inno.Text.TextFontHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L58).

## `op_Inequality`

<a id="api-e4d338c2a2d32c3c"></a>
<!-- api: M:Inno.Text.TextFontHandle.op_Inequality(Inno.Text.TextFontHandle,Inno.Text.TextFontHandle) 4be5f6070b3e28f2e76966eb9068a7bda8cf76cf835ef31f9f19f092917e2644 -->

```csharp
public static bool Inno.Text.TextFontHandle.operator !=(Inno.Text.TextFontHandle left, Inno.Text.TextFontHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L58).

## `ToString`

<a id="api-db0d0bff7ef6ee96"></a>
<!-- api: M:Inno.Text.TextFontHandle.ToString 4ebfe0f32961864a7df8c9259bed78aa08a8a4f694ccb6d6b1b028e86578d7cb -->

```csharp
public override string Inno.Text.TextFontHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L58).

## `isValid`

<a id="api-f37f07fb9c5fa8c0"></a>
<!-- api: P:Inno.Text.TextFontHandle.isValid 93712d9609be077a8922ca043205f1f768179a94a23a1b4a23d92a39ce5bab2e -->

```csharp
public bool Inno.Text.TextFontHandle.isValid { get; }
```

Gets whether this handle identifies a loaded face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L63).

## `value`

<a id="api-53367a38f91587d3"></a>
<!-- api: P:Inno.Text.TextFontHandle.value 4792c4bcaf5874a78d0a83fabebf05bfeeb8abb4240ebab187663f3829020913 -->

```csharp
public ulong Inno.Text.TextFontHandle.value { get; init; }
```

The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text/TextTypes.cs#L58).
