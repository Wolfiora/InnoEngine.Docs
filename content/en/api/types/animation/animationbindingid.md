---
title: "AnimationBindingId"
description: "Reference for AnimationBindingId in Inno.Animation."
uid: api.inno.animation.79eecd8d528b9573
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationBindingId`

This reference describes `AnimationBindingId` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Animation.AnimationBindingId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-57e7e88506476aa7) | Method |
| [`Equals`](#api-29559735baf00590) | Method |
| [`Equals`](#api-04d0e1b0b50d59a8) | Method |
| [`GetHashCode`](#api-903b2aebfd854f60) | Method |
| [`op_Equality`](#api-a81432329ffd5d77) | Method |
| [`op_Inequality`](#api-413eb5f1c2bbcdae) | Method |
| [`ToString`](#api-712a64403e03dfce) | Method |
| [`isValid`](#api-53b2f6ab5d1a144a) | Property |
| [`value`](#api-823e30be1469213c) | Property |

## Type declaration

<a id="api-79eecd8d528b9573"></a>
<!-- api: T:Inno.Animation.AnimationBindingId cb8f18552343e24429d040ebd8dd2c2f345cdb1a8d4fadde0ea9d2c9557bc4e2 -->

```csharp
public readonly record struct Inno.Animation.AnimationBindingId : System.IEquatable<Inno.Animation.AnimationBindingId>
```

Identifies one backend-neutral value destination inside an animation binding scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L10).

## `#ctor`

<a id="api-57e7e88506476aa7"></a>
<!-- api: M:Inno.Animation.AnimationBindingId.#ctor(System.String) 8bd7feabe901a39e92f84e9cf9e4f97ba02c4da5f9e42369f89d76daf156332b -->

```csharp
public Inno.Animation.AnimationBindingId.AnimationBindingId(string value)
```

Creates a stable animation binding identifier.

**Parameter `value`:** The non-empty binding protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L18).

## `Equals`

<a id="api-29559735baf00590"></a>
<!-- api: M:Inno.Animation.AnimationBindingId.Equals(Inno.Animation.AnimationBindingId) 7363d85eacfff8f671a0e79d66b6293f82b6e93bcc0bdb79ebf23dcdfa6c1cd0 -->

```csharp
public bool Inno.Animation.AnimationBindingId.Equals(Inno.Animation.AnimationBindingId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L10).

## `Equals`

<a id="api-04d0e1b0b50d59a8"></a>
<!-- api: M:Inno.Animation.AnimationBindingId.Equals(System.Object) 2958190f3ab9826310e835e7806d0e6b2ccc18dece02c77dff854fadda29c58a -->

```csharp
public override bool Inno.Animation.AnimationBindingId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L10).

## `GetHashCode`

<a id="api-903b2aebfd854f60"></a>
<!-- api: M:Inno.Animation.AnimationBindingId.GetHashCode 0ab2126c9809097555622fbbcc89d6c3572652ad1a9824b86ddd4c72af3e573e -->

```csharp
public override int Inno.Animation.AnimationBindingId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L10).

## `op_Equality`

<a id="api-a81432329ffd5d77"></a>
<!-- api: M:Inno.Animation.AnimationBindingId.op_Equality(Inno.Animation.AnimationBindingId,Inno.Animation.AnimationBindingId) cc2243a16a4d7af3e891d8ec76209034047afb97b361bc4322c6689cede66997 -->

```csharp
public static bool Inno.Animation.AnimationBindingId.operator ==(Inno.Animation.AnimationBindingId left, Inno.Animation.AnimationBindingId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L10).

## `op_Inequality`

<a id="api-413eb5f1c2bbcdae"></a>
<!-- api: M:Inno.Animation.AnimationBindingId.op_Inequality(Inno.Animation.AnimationBindingId,Inno.Animation.AnimationBindingId) e2f2cd57651eb15b6a9a07936a84401f4a8dc1f9d12f068e32b4393028c92393 -->

```csharp
public static bool Inno.Animation.AnimationBindingId.operator !=(Inno.Animation.AnimationBindingId left, Inno.Animation.AnimationBindingId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L10).

## `ToString`

<a id="api-712a64403e03dfce"></a>
<!-- api: M:Inno.Animation.AnimationBindingId.ToString f53dae12cf5e230bda4f73891c0b8514a56b969f83f0ad911e8da01fe61e1306 -->

```csharp
public override string Inno.Animation.AnimationBindingId.ToString()
```

Formats this identifier for diagnostics and persistence.

**Returns:** The protocol value, or an empty string for an uninitialized identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L40).

## `isValid`

<a id="api-53b2f6ab5d1a144a"></a>
<!-- api: P:Inno.Animation.AnimationBindingId.isValid 25394b6d72126056239de78853faea543c37e8de2899e767e2975f06f726cc30 -->

```csharp
public bool Inno.Animation.AnimationBindingId.isValid { get; }
```

Gets whether this identifier contains a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L32).

## `value`

<a id="api-823e30be1469213c"></a>
<!-- api: P:Inno.Animation.AnimationBindingId.value 5efff6a9d21fc5887867bd0bd5c14d0aca823a60587a6ad1668bc8a6c87f55f6 -->

```csharp
public string Inno.Animation.AnimationBindingId.value { get; }
```

Gets the stable binding protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L27).
