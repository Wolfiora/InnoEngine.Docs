---
title: "AnimationPlaybackHandle"
description: "Reference for AnimationPlaybackHandle in Inno.Animation."
uid: api.inno.animation.f0a9c5333cd5a46e
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationPlaybackHandle`

This reference describes `AnimationPlaybackHandle` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Animation.AnimationPlaybackHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-4e8eef981f06cdea) | Method |
| [`Equals`](#api-07ff6740504d2253) | Method |
| [`GetHashCode`](#api-77d805ad4f608fb2) | Method |
| [`op_Equality`](#api-d7ffbeb2ba6926c3) | Method |
| [`op_Inequality`](#api-85565b9711f73beb) | Method |
| [`ToString`](#api-9e5d4791a5717501) | Method |
| [`isValid`](#api-5917ba1ed0380114) | Property |
| [`runtimeGeneration`](#api-bd927cb66b3e9573) | Property |

## Type declaration

<a id="api-f0a9c5333cd5a46e"></a>
<!-- api: T:Inno.Animation.AnimationPlaybackHandle bcf0b6656296b6b34c96711dc538b67a522ca2c64f6e041a1a639585c68a01be -->

```csharp
public readonly record struct Inno.Animation.AnimationPlaybackHandle : System.IEquatable<Inno.Animation.AnimationPlaybackHandle>
```

Identifies one generation-checked animation playback owned by a runtime service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L296).

## `Equals`

<a id="api-4e8eef981f06cdea"></a>
<!-- api: M:Inno.Animation.AnimationPlaybackHandle.Equals(Inno.Animation.AnimationPlaybackHandle) b16d29352f54ad6401313e1a71e1313fe86fb6082c253be9f95ae7fb9e8d5f95 -->

```csharp
public bool Inno.Animation.AnimationPlaybackHandle.Equals(Inno.Animation.AnimationPlaybackHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L296).

## `Equals`

<a id="api-07ff6740504d2253"></a>
<!-- api: M:Inno.Animation.AnimationPlaybackHandle.Equals(System.Object) 425941d858442ca7a10153e8b5bae10171364d44a093765a1fa9bd493cad4637 -->

```csharp
public override bool Inno.Animation.AnimationPlaybackHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L296).

## `GetHashCode`

<a id="api-77d805ad4f608fb2"></a>
<!-- api: M:Inno.Animation.AnimationPlaybackHandle.GetHashCode 42e1f530f5106dc21f132bcbc9f5f457dfce41be4e4cc13d6846da6ff4664c5e -->

```csharp
public override int Inno.Animation.AnimationPlaybackHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L296).

## `op_Equality`

<a id="api-d7ffbeb2ba6926c3"></a>
<!-- api: M:Inno.Animation.AnimationPlaybackHandle.op_Equality(Inno.Animation.AnimationPlaybackHandle,Inno.Animation.AnimationPlaybackHandle) af246099f1eb4fe1814738d8b956dfd76af70854ebde693c9db75c37fc41c28d -->

```csharp
public static bool Inno.Animation.AnimationPlaybackHandle.operator ==(Inno.Animation.AnimationPlaybackHandle left, Inno.Animation.AnimationPlaybackHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L296).

## `op_Inequality`

<a id="api-85565b9711f73beb"></a>
<!-- api: M:Inno.Animation.AnimationPlaybackHandle.op_Inequality(Inno.Animation.AnimationPlaybackHandle,Inno.Animation.AnimationPlaybackHandle) 354cfaceee2a6c0525f3aa2db429901fc623f191bc8a3d049bce58846d8e8428 -->

```csharp
public static bool Inno.Animation.AnimationPlaybackHandle.operator !=(Inno.Animation.AnimationPlaybackHandle left, Inno.Animation.AnimationPlaybackHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L296).

## `ToString`

<a id="api-9e5d4791a5717501"></a>
<!-- api: M:Inno.Animation.AnimationPlaybackHandle.ToString c4c0a63ab3f81035cac02a8b9239b78e13786b8834e65ecd1f25c7126b150340 -->

```csharp
public override string Inno.Animation.AnimationPlaybackHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L296).

## `isValid`

<a id="api-5917ba1ed0380114"></a>
<!-- api: P:Inno.Animation.AnimationPlaybackHandle.isValid acb0c150b34bca3bc56d0ccdf2d8ac9e67e6c0549894f92fc65f12e8446a9a0a -->

```csharp
public bool Inno.Animation.AnimationPlaybackHandle.isValid { get; }
```

Gets whether the handle was initialized by an animation service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L309).

## `runtimeGeneration`

<a id="api-bd927cb66b3e9573"></a>
<!-- api: P:Inno.Animation.AnimationPlaybackHandle.runtimeGeneration b4514f547afc75942bbde26c7d31543800146ea1533ed41f9834ab668769b2f4 -->

```csharp
public uint Inno.Animation.AnimationPlaybackHandle.runtimeGeneration { get; }
```

Gets the isolated runtime generation that created this handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L316).
