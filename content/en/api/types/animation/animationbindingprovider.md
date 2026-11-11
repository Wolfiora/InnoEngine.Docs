---
title: "AnimationBindingProvider"
description: "Reference for AnimationBindingProvider in Inno.Animation."
uid: api.inno.animation.6c13501789caaf93
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationBindingProvider`

This reference describes `AnimationBindingProvider` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2766b301b380bf05) | Method |
| [`Dispose`](#api-5058185ff1268aad) | Method |
| [`TryApply`](#api-a7b4911ad1e23f45) | Method |

## Type declaration

<a id="api-6c13501789caaf93"></a>
<!-- api: T:Inno.Animation.AnimationBindingProvider 7e9ec26856b08ecdbbd46bca7c8e953c51b7f480a7c6c01cb4ae766ab64da95e -->

```csharp
public abstract class Inno.Animation.AnimationBindingProvider : System.IDisposable
```

Applies one declared binding protocol on the owner thread; implementations never run in native callbacks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationBindingProvider.cs#L8).

## `#ctor`

<a id="api-2766b301b380bf05"></a>
<!-- api: M:Inno.Animation.AnimationBindingProvider.#ctor 6cd36db771ec53de244995963225f180833335e63acdf9d8617622ccd42aaa12 -->

```csharp
protected Inno.Animation.AnimationBindingProvider.AnimationBindingProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationBindingProvider.cs#L8).

## `Dispose`

<a id="api-5058185ff1268aad"></a>
<!-- api: M:Inno.Animation.AnimationBindingProvider.Dispose 670e09aaba7f366e0643dc6e6d12cba15fdfb1022015c5673d02b3584b951d53 -->

```csharp
public virtual void Inno.Animation.AnimationBindingProvider.Dispose()
```

Releases subscriptions and resources owned by this extension generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationBindingProvider.cs#L30).

## `TryApply`

<a id="api-a7b4911ad1e23f45"></a>
<!-- api: M:Inno.Animation.AnimationBindingProvider.TryApply(Inno.Animation.AnimationTarget,Inno.Animation.AnimationValue) a98572e06e5dc46f1af434e1fe2baa9f5d31790ed124ffe23478e4ce603a9eb6 -->

```csharp
public abstract bool Inno.Animation.AnimationBindingProvider.TryApply(Inno.Animation.AnimationTarget target, Inno.Animation.AnimationValue value)
```

Attempts to apply a value to a destination resolved through Identity.

**Parameter `target`:** The weak, generation-qualified destination.

**Parameter `value`:** The final blended value for this provider's declared protocol.

**Returns:** True when applied; false when the destination is currently missing or incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationBindingProvider.cs#L22).
