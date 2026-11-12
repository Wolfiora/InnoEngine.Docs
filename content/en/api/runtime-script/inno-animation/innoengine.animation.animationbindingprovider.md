---
title: "AnimationBindingProvider"
description: "Reference for AnimationBindingProvider in Inno.Animation."
uid: api.inno.animation.runtime-script.85a91bccd4f910ae
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `AnimationBindingProvider`

This reference describes `AnimationBindingProvider` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ba3db388e33c80d0) | Method |
| [`Dispose`](#api-0ec2ea8f576c165f) | Method |
| [`TryApply`](#api-e5e146c0200e02a7) | Method |

## Type declaration

<a id="api-85a91bccd4f910ae"></a>
<!-- api: T:InnoEngine.Animation.AnimationBindingProvider 9433a1b04b2774e92eece69bd4b366602617a79078996f220c345136bdfcd166 -->

```csharp
public abstract class InnoEngine.Animation.AnimationBindingProvider : System.IDisposable
```

Applies one declared binding protocol on the owner thread; implementations never run in native callbacks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationBindingProvider.cs#L8).

## `#ctor`

<a id="api-ba3db388e33c80d0"></a>
<!-- api: M:InnoEngine.Animation.AnimationBindingProvider.#ctor 36a64adf0364c429b3af9d312aaf21ab65759f359371015a61033b0355fe7bc6 -->

```csharp
protected InnoEngine.Animation.AnimationBindingProvider.AnimationBindingProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationBindingProvider.cs#L8).

## `Dispose`

<a id="api-0ec2ea8f576c165f"></a>
<!-- api: M:InnoEngine.Animation.AnimationBindingProvider.Dispose a2c0c831255dfde5bf63c3a2f5ce63a285a337de5119841c07f1c43581250ab4 -->

```csharp
public virtual void InnoEngine.Animation.AnimationBindingProvider.Dispose()
```

Releases subscriptions and resources owned by this extension generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationBindingProvider.cs#L30).

## `TryApply`

<a id="api-e5e146c0200e02a7"></a>
<!-- api: M:InnoEngine.Animation.AnimationBindingProvider.TryApply(InnoEngine.Animation.AnimationTarget,InnoEngine.Animation.AnimationValue) 72a2574f5613007e085bfe607d914410b19beb780c6ebe30ae0d92adcaf2d642 -->

```csharp
public abstract bool InnoEngine.Animation.AnimationBindingProvider.TryApply(InnoEngine.Animation.AnimationTarget target, InnoEngine.Animation.AnimationValue value)
```

Attempts to apply a value to a destination resolved through Identity.

**Parameter `target`:** The weak, generation-qualified destination.

**Parameter `value`:** The final blended value for this provider's declared protocol.

**Returns:** True when applied; false when the destination is currently missing or incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationBindingProvider.cs#L22).
