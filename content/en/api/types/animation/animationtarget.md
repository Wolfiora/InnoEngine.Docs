---
title: "AnimationTarget"
description: "Reference for AnimationTarget in Inno.Animation."
uid: api.inno.animation.6cc1defcf81c22bb
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationTarget`

This reference describes `AnimationTarget` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Animation.AnimationTarget>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1172d0b2df62ebc3) | Method |
| [`Equals`](#api-7cbbb82f049547ea) | Method |
| [`Equals`](#api-b63be64d5a9dc693) | Method |
| [`GetHashCode`](#api-3aca322d862ae96f) | Method |
| [```Resolve``1```](#api-2fdb97c44a47b7ab) | Method |
| [`isSamplingOnly`](#api-ed564242b434638a) | Property |
| [`isValid`](#api-330b8cab7ea95130) | Property |
| [`persistentId`](#api-ef0ef2f917cee200) | Property |
| [`samplingOnly`](#api-0ba1bb8e80f91797) | Property |

## Type declaration

<a id="api-6cc1defcf81c22bb"></a>
<!-- api: T:Inno.Animation.AnimationTarget 0aa562c5a876ef31e7287b6a9dc0f7e2fc59a789a3afe669d17b551d74b54c65 -->

```csharp
public readonly struct Inno.Animation.AnimationTarget : System.IEquatable<Inno.Animation.AnimationTarget>
```

Identifies a transient animation destination without retaining the destination object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTarget.cs#L9).

## `#ctor`

<a id="api-1172d0b2df62ebc3"></a>
<!-- api: M:Inno.Animation.AnimationTarget.#ctor(Inno.Core.Identity.Identity) 22e35c45c104048c8da289127b91fd5ea25d7d8ca081e55a2f773cedac3ea4dc -->

```csharp
public Inno.Animation.AnimationTarget.AnimationTarget(Inno.Core.Identity.Identity identity)
```

Captures one currently registered destination in its original identity domain.

**Parameter `identity`:** The destination's live identity, not a detached persistent identifier.

**Throws `System.ArgumentException`:** The identity is not registered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTarget.cs#L24).

## `Equals`

<a id="api-7cbbb82f049547ea"></a>
<!-- api: M:Inno.Animation.AnimationTarget.Equals(Inno.Animation.AnimationTarget) 03b43a6edf89f0c365665eec1ae2e58adfedda604d9d43e91e6e7d5154cc0da6 -->

```csharp
public bool Inno.Animation.AnimationTarget.Equals(Inno.Animation.AnimationTarget other)
```

Compares runtime destinations, including their identity domain.

**Parameter `other`:** The destination to compare.

**Returns:** True when both values denote the same runtime destination or sampling policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTarget.cs#L79).

## `Equals`

<a id="api-b63be64d5a9dc693"></a>
<!-- api: M:Inno.Animation.AnimationTarget.Equals(System.Object) 58a33a0dec5f799024e9330330849cfdfc36d0256fb58dd3df4943f1a2f5940d -->

```csharp
public override bool Inno.Animation.AnimationTarget.Equals(object? obj)
```

Compares a boxed destination with this value.

**Parameter `obj`:** The value to compare.

**Returns:** True for an equal animation destination.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTarget.cs#L91).

## `GetHashCode`

<a id="api-3aca322d862ae96f"></a>
<!-- api: M:Inno.Animation.AnimationTarget.GetHashCode 0a3ab0556a7b59f741940fcf9db91e6c8e9fd73fd8cf8bfb0eb157b026610bf9 -->

```csharp
public override int Inno.Animation.AnimationTarget.GetHashCode()
```

Hashes the domain-qualified runtime destination.

**Returns:** A hash consistent with destination equality.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTarget.cs#L99).

## ```Resolve``1```

<a id="api-2fdb97c44a47b7ab"></a>
<!-- api: M:Inno.Animation.AnimationTarget.Resolve``1 1000e5b6a5a7bc780fca02dbf28c3453b734e70d871b30c47fa073a17cd66de2 -->

```csharp
public TObject? Inno.Animation.AnimationTarget.Resolve<TObject>() where TObject : Inno.Core.Identity.IdentityObject
```

Resolves the original runtime slot without binding to a replacement generation.

**Type parameter `TObject`:** The expected destination contract.

**Returns:** The live destination, or null for a missing, retired, or incompatible target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTarget.cs#L68).

## `isSamplingOnly`

<a id="api-ed564242b434638a"></a>
<!-- api: P:Inno.Animation.AnimationTarget.isSamplingOnly 7815152c665a26b58fed1a6c75ea1c65841ee2c8dd6b9003d7b6410dcd87b031 -->

```csharp
public bool Inno.Animation.AnimationTarget.isSamplingOnly { get; }
```

Gets whether this target deliberately omits object binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTarget.cs#L47).

## `isValid`

<a id="api-330b8cab7ea95130"></a>
<!-- api: P:Inno.Animation.AnimationTarget.isValid 65941781a1db4f831a78960c94b1c9dbf6d08ea93f575337047962af4e9bf86b -->

```csharp
public bool Inno.Animation.AnimationTarget.isValid { get; }
```

Gets whether this value was initialized with a destination or sampling policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTarget.cs#L52).

## `persistentId`

<a id="api-ef0ef2f917cee200"></a>
<!-- api: P:Inno.Animation.AnimationTarget.persistentId e51e12f6d2906a9c5ecf2667897380bbae80424cd6bfb48f0df478cce4880844 -->

```csharp
public System.Guid Inno.Animation.AnimationTarget.persistentId { get; }
```

Gets the persistent destination identifier, or empty for sampling-only playback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTarget.cs#L57).

## `samplingOnly`

<a id="api-0ba1bb8e80f91797"></a>
<!-- api: P:Inno.Animation.AnimationTarget.samplingOnly 48cfd4778c83d5cadd36472d7cec5135544862d74f0c507034946940c856bad4 -->

```csharp
public static Inno.Animation.AnimationTarget Inno.Animation.AnimationTarget.samplingOnly { get; }
```

Gets an explicit destination for sampling and markers without object binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTarget.cs#L42).
