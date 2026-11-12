---
title: "AnimationBindingProviderAttribute"
description: "Reference for AnimationBindingProviderAttribute in Inno.Animation."
uid: api.inno.animation.runtime-script.36a460d66884824c
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `AnimationBindingProviderAttribute`

This reference describes `AnimationBindingProviderAttribute` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bc37ed85e875f393) | Method |
| [`bindingId`](#api-dac9027e8b406fad) | Property |
| [`id`](#api-584d801b94a3054f) | Property |
| [`kind`](#api-ec0c8d848764396a) | Property |

## Type declaration

<a id="api-36a460d66884824c"></a>
<!-- api: T:InnoEngine.Animation.AnimationBindingProviderAttribute b93fcbee6ec72ea5a71376d4637c29df34bf96cd53d7b76a79f3dee31a940635 -->

```csharp
public sealed class InnoEngine.Animation.AnimationBindingProviderAttribute : System.Attribute
```

Declares a stable, automatically discovered animation destination protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationBindingProviderAttribute.cs#L9).

## `#ctor`

<a id="api-bc37ed85e875f393"></a>
<!-- api: M:InnoEngine.Animation.AnimationBindingProviderAttribute.#ctor(System.String,System.String,InnoEngine.Animation.AnimationValueKind) 6831e1ebb965ebacf2a7891469556d61cff95c9a4d5dc1e5e0185cc314d7a443 -->

```csharp
public InnoEngine.Animation.AnimationBindingProviderAttribute.AnimationBindingProviderAttribute(string id, string bindingId, InnoEngine.Animation.AnimationValueKind kind)
```

Declares one provider and the value protocol it implements.

**Parameter `id`:** Globally unique stable extension identifier.

**Parameter `bindingId`:** Stable track binding protocol, independent of CLR type names.

**Parameter `kind`:** The accepted value representation.

**Throws `System.ArgumentException`:** An identifier is blank or the value representation is undefined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationBindingProviderAttribute.cs#L26).

## `bindingId`

<a id="api-dac9027e8b406fad"></a>
<!-- api: P:InnoEngine.Animation.AnimationBindingProviderAttribute.bindingId 950c2fda9aa5f40627134b32d1a7621164d2f72e652012f2c4f02984f48282bf -->

```csharp
public InnoEngine.Animation.AnimationBindingId InnoEngine.Animation.AnimationBindingProviderAttribute.bindingId { get; }
```

Gets the supported track binding protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationBindingProviderAttribute.cs#L48).

## `id`

<a id="api-584d801b94a3054f"></a>
<!-- api: P:InnoEngine.Animation.AnimationBindingProviderAttribute.id b5d66a6c19845c0116bb60dc20d7560d32585057f6be6b770d006f6664b192e8 -->

```csharp
public string InnoEngine.Animation.AnimationBindingProviderAttribute.id { get; }
```

Gets the stable provider identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationBindingProviderAttribute.cs#L43).

## `kind`

<a id="api-ec0c8d848764396a"></a>
<!-- api: P:InnoEngine.Animation.AnimationBindingProviderAttribute.kind 6fefd593f55268c1efc3da351f554952458274f027c0b8db8c35e7ff85881ce5 -->

```csharp
public InnoEngine.Animation.AnimationValueKind InnoEngine.Animation.AnimationBindingProviderAttribute.kind { get; }
```

Gets the accepted value representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationBindingProviderAttribute.cs#L53).
