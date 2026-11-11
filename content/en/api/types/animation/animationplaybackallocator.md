---
title: "AnimationPlaybackAllocator"
description: "Reference for AnimationPlaybackAllocator in Inno.Animation."
uid: api.inno.animation.86fd47b3c29ea82f
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationPlaybackAllocator`

This reference describes `AnimationPlaybackAllocator` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-72354bf408fc1e73) | Method |
| [`Create`](#api-e8ea1a45e8b5c49d) | Method |
| [`Decode`](#api-3d0cd97ea56e45ea) | Method |
| [`generation`](#api-4d07d9e38f95390d) | Property |

## Type declaration

<a id="api-86fd47b3c29ea82f"></a>
<!-- api: T:Inno.Animation.AnimationPlaybackAllocator 626e5980e5a537531dde4d941ab8a0da0208d288355397adcf3ec79404e48b69 -->

```csharp
public sealed class Inno.Animation.AnimationPlaybackAllocator
```

Owns opaque playback identity encoding without requiring a runtime to inherit a fake service base.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationPlaybackAllocator.cs#L9).

## `#ctor`

<a id="api-72354bf408fc1e73"></a>
<!-- api: M:Inno.Animation.AnimationPlaybackAllocator.#ctor f2d4ac0f705f3b67d211c5acb4060b1e3158d447a8212de23683ce3cfc03bc2b -->

```csharp
public Inno.Animation.AnimationPlaybackAllocator.AnimationPlaybackAllocator()
```

Creates a process-unique playback owner.

**Throws `System.InvalidOperationException`:** The process exhausted its playback owner identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationPlaybackAllocator.cs#L19).

## `Create`

<a id="api-e8ea1a45e8b5c49d"></a>
<!-- api: M:Inno.Animation.AnimationPlaybackAllocator.Create(System.Int32,System.UInt32) 0d4977eaf44bcecccdc7b2b71d473abf0def58801cfbc75a6000d95b68e2cd6d -->

```csharp
public Inno.Animation.AnimationPlaybackHandle Inno.Animation.AnimationPlaybackAllocator.Create(int slot, uint slotGeneration)
```

Encodes one owner-managed slot revision into an opaque playback handle.

**Parameter `slot`:** The non-negative slot owned by the runtime.

**Parameter `slotGeneration`:** The non-zero revision used to reject reused slots.

**Returns:** A playback handle that cannot alias a different allocator.

**Throws `System.ArgumentOutOfRangeException`:** The slot or its generation is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationPlaybackAllocator.cs#L47).

## `Decode`

<a id="api-3d0cd97ea56e45ea"></a>
<!-- api: M:Inno.Animation.AnimationPlaybackAllocator.Decode(Inno.Animation.AnimationPlaybackHandle) 6b09aa14f155dacc2cecb66aeff81f6294271f8f43d0ead40cf42e360ec7d992 -->

```csharp
public (int slot, uint generation) Inno.Animation.AnimationPlaybackAllocator.Decode(Inno.Animation.AnimationPlaybackHandle handle)
```

Decodes only handles issued by this owner; slot liveness remains the runtime's responsibility.

**Parameter `handle`:** The opaque playback handle.

**Returns:** The slot and revision, or an invalid slot when the owner does not match.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationPlaybackAllocator.cs#L66).

## `generation`

<a id="api-4d07d9e38f95390d"></a>
<!-- api: P:Inno.Animation.AnimationPlaybackAllocator.generation 9f9407ebf450a33f54f6874eaf3b339bd4e38127e575762b1eea63af8d7a9b20 -->

```csharp
public uint Inno.Animation.AnimationPlaybackAllocator.generation { get; }
```

Gets the generation shared by handles allocated by this owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationPlaybackAllocator.cs#L30).
