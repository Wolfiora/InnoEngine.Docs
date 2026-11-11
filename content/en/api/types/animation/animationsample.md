---
title: "AnimationSample"
description: "Reference for AnimationSample in Inno.Animation."
uid: api.inno.animation.540a49c345165522
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationSample`

This reference describes `AnimationSample` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Animation.AnimationSample>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-acb964a979c180e2) | Method |
| [`Equals`](#api-3d251d13b35d271f) | Method |
| [`Equals`](#api-28bcbb536de1ae04) | Method |
| [`GetHashCode`](#api-5e3d6ef9e51d2716) | Method |
| [`op_Equality`](#api-98e0cee6b592457f) | Method |
| [`op_Inequality`](#api-288ec39e2edd372a) | Method |
| [`ToString`](#api-8e0bd892aa620e7a) | Method |
| [`binding`](#api-ffc7038f0bc3fe93) | Property |
| [`target`](#api-b37d3de97a1637aa) | Property |
| [`value`](#api-f16f1184bd8e8ebb) | Property |

## Type declaration

<a id="api-540a49c345165522"></a>
<!-- api: T:Inno.Animation.AnimationSample 9f85037ebf01978f18e7adc52b7e46ca75c2d395dd6f639f8f27f8ad2b57245d -->

```csharp
public readonly record struct Inno.Animation.AnimationSample : System.IEquatable<Inno.Animation.AnimationSample>
```

Stores one final blended value emitted for a stable binding identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L322).

## `#ctor`

<a id="api-acb964a979c180e2"></a>
<!-- api: M:Inno.Animation.AnimationSample.#ctor(Inno.Animation.AnimationTarget,Inno.Animation.AnimationBindingId,Inno.Animation.AnimationValue) 7817a79219bd89d6e1f60c818db10d3208866a212d94bfcd2ab3c8ad495da057 -->

```csharp
public Inno.Animation.AnimationSample.AnimationSample(Inno.Animation.AnimationTarget target, Inno.Animation.AnimationBindingId binding, Inno.Animation.AnimationValue value)
```

Creates one final animation sample.

**Parameter `binding`:** Stable target binding.

**Parameter `value`:** Final blended value.

**Parameter `target`:** The weak destination or explicit sampling-only policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L336).

## `Equals`

<a id="api-3d251d13b35d271f"></a>
<!-- api: M:Inno.Animation.AnimationSample.Equals(Inno.Animation.AnimationSample) 8a12f2d95085585aa5483197ce5c48501cb2598612b694572a09d77e0463e10b -->

```csharp
public bool Inno.Animation.AnimationSample.Equals(Inno.Animation.AnimationSample other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L322).

## `Equals`

<a id="api-28bcbb536de1ae04"></a>
<!-- api: M:Inno.Animation.AnimationSample.Equals(System.Object) dba04153f7e980330bbaee8e4afe19733b9f5fb0db8249460069a42a6646e36e -->

```csharp
public override bool Inno.Animation.AnimationSample.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L322).

## `GetHashCode`

<a id="api-5e3d6ef9e51d2716"></a>
<!-- api: M:Inno.Animation.AnimationSample.GetHashCode 6d3d4f864f1d99781729a294d33d884d488a61c021cecba05347c468eb2bd75b -->

```csharp
public override int Inno.Animation.AnimationSample.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L322).

## `op_Equality`

<a id="api-98e0cee6b592457f"></a>
<!-- api: M:Inno.Animation.AnimationSample.op_Equality(Inno.Animation.AnimationSample,Inno.Animation.AnimationSample) d569d3478ac02ed8978048c1b9fee762e014af748f9c7cee8a1997f81e707a3d -->

```csharp
public static bool Inno.Animation.AnimationSample.operator ==(Inno.Animation.AnimationSample left, Inno.Animation.AnimationSample right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L322).

## `op_Inequality`

<a id="api-288ec39e2edd372a"></a>
<!-- api: M:Inno.Animation.AnimationSample.op_Inequality(Inno.Animation.AnimationSample,Inno.Animation.AnimationSample) 91c6e835ab3200a9a1221c875274249bdbe4a21d52b1d6e51c2a1f26afd4bf22 -->

```csharp
public static bool Inno.Animation.AnimationSample.operator !=(Inno.Animation.AnimationSample left, Inno.Animation.AnimationSample right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L322).

## `ToString`

<a id="api-8e0bd892aa620e7a"></a>
<!-- api: M:Inno.Animation.AnimationSample.ToString 4370c55b7e5431b8e6740a75e49e6c062689d241a3282fb5b205a361acc39a4d -->

```csharp
public override string Inno.Animation.AnimationSample.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L322).

## `binding`

<a id="api-ffc7038f0bc3fe93"></a>
<!-- api: P:Inno.Animation.AnimationSample.binding a8c4ea69c8c8f8b154aceb9b4224014051a8f75be8cd5fc42c2bfa8a4d605853 -->

```csharp
public Inno.Animation.AnimationBindingId Inno.Animation.AnimationSample.binding { get; }
```

Gets the stable target binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L353).

## `target`

<a id="api-b37d3de97a1637aa"></a>
<!-- api: P:Inno.Animation.AnimationSample.target f8682f3eeef815c860213fa15aac6d18ceff0854eb048399863857a770c9f144 -->

```csharp
public Inno.Animation.AnimationTarget Inno.Animation.AnimationSample.target { get; }
```

Gets the generation-qualified destination for this sample.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L358).

## `value`

<a id="api-f16f1184bd8e8ebb"></a>
<!-- api: P:Inno.Animation.AnimationSample.value 03b0b65324336de9bfa6a9ca48453ec4c11a29b90ce51cce46054fef2fe5dea1 -->

```csharp
public Inno.Animation.AnimationValue Inno.Animation.AnimationSample.value { get; }
```

Gets the final blended value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L363).
