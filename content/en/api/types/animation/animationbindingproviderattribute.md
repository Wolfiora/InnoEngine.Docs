---
title: "AnimationBindingProviderAttribute"
description: "Reference for AnimationBindingProviderAttribute in Inno.Animation."
uid: api.inno.animation.0b3d72a408bebddc
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationBindingProviderAttribute`

This reference describes `AnimationBindingProviderAttribute` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-39d2158c585c1815) | Method |
| [`bindingId`](#api-2678b7318d94966c) | Property |
| [`id`](#api-5f19dec9a06bc513) | Property |
| [`kind`](#api-8674742a19bc0822) | Property |

## Type declaration

<a id="api-0b3d72a408bebddc"></a>
<!-- api: T:Inno.Animation.AnimationBindingProviderAttribute 1a777d8f4e9dcbb199a3e20c0a4407a9c28f74f5d49bc59d80dda1c70cac5550 -->

```csharp
public sealed class Inno.Animation.AnimationBindingProviderAttribute : System.Attribute
```

Declares a stable, automatically discovered animation destination protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationBindingProviderAttribute.cs#L9).

## `#ctor`

<a id="api-39d2158c585c1815"></a>
<!-- api: M:Inno.Animation.AnimationBindingProviderAttribute.#ctor(System.String,System.String,Inno.Animation.AnimationValueKind) 7d33e9b2c80b397fb18148997d182541484b4db002bab24d44b45615a3b3ab7b -->

```csharp
public Inno.Animation.AnimationBindingProviderAttribute.AnimationBindingProviderAttribute(string id, string bindingId, Inno.Animation.AnimationValueKind kind)
```

Declares one provider and the value protocol it implements.

**Parameter `id`:** Globally unique stable extension identifier.

**Parameter `bindingId`:** Stable track binding protocol, independent of CLR type names.

**Parameter `kind`:** The accepted value representation.

**Throws `System.ArgumentException`:** An identifier is blank or the value representation is undefined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationBindingProviderAttribute.cs#L26).

## `bindingId`

<a id="api-2678b7318d94966c"></a>
<!-- api: P:Inno.Animation.AnimationBindingProviderAttribute.bindingId 43b896a6f6f80c8e5e5da05ef3a8fdea864a9288f9a6f4a19c7bcf8024837b8a -->

```csharp
public Inno.Animation.AnimationBindingId Inno.Animation.AnimationBindingProviderAttribute.bindingId { get; }
```

Gets the supported track binding protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationBindingProviderAttribute.cs#L48).

## `id`

<a id="api-5f19dec9a06bc513"></a>
<!-- api: P:Inno.Animation.AnimationBindingProviderAttribute.id ac299753e49995ae790e9da4b4b74d173e0493b6be15f9c7ec345d213b79fa00 -->

```csharp
public string Inno.Animation.AnimationBindingProviderAttribute.id { get; }
```

Gets the stable provider identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationBindingProviderAttribute.cs#L43).

## `kind`

<a id="api-8674742a19bc0822"></a>
<!-- api: P:Inno.Animation.AnimationBindingProviderAttribute.kind 3dacb4ba54210dcb46f3c9a081c176ffbf03b12950dfd48092b31ab69fb8046c -->

```csharp
public Inno.Animation.AnimationValueKind Inno.Animation.AnimationBindingProviderAttribute.kind { get; }
```

Gets the accepted value representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationBindingProviderAttribute.cs#L53).
