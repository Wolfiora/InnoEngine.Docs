---
title: "AnimationPlayOptions"
description: "Reference for AnimationPlayOptions in Inno.Animation."
uid: api.inno.animation.9852c242252f5c30
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationPlayOptions`

This reference describes `AnimationPlayOptions` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`clock`](#api-b98fabdb3a66d045) | Property |
| [`defaultValue`](#api-98a264f135d5f23a) | Property |
| [`layer`](#api-d84e8fec8b1c9b16) | Property |
| [`loop`](#api-cd571a2b4de48c97) | Property |
| [`speed`](#api-848f509881512cd1) | Property |
| [`weight`](#api-d08146d7139c1a12) | Property |

## Type declaration

<a id="api-9852c242252f5c30"></a>
<!-- api: T:Inno.Animation.AnimationPlayOptions c00dfea0c0fa5ddcb0dfbdf9e771b51f44a34baa98064f1f86a7e21fd90be3ab -->

```csharp
public struct Inno.Animation.AnimationPlayOptions
```

Stores immutable options used to begin one animation playback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L254).

## `clock`

<a id="api-b98fabdb3a66d045"></a>
<!-- api: P:Inno.Animation.AnimationPlayOptions.clock 5f0ba1370490f3ca2e9b818ca114bd9d3ad0ea98166d6d855f5a6c44921512a3 -->

```csharp
public Inno.Animation.AnimationClock Inno.Animation.AnimationPlayOptions.clock { get; set; }
```

Gets or sets the session clock used by the playback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L290).

## `defaultValue`

<a id="api-98a264f135d5f23a"></a>
<!-- api: P:Inno.Animation.AnimationPlayOptions.defaultValue 722b42b6457adecdeed6e2a347a78dc49558a898e58c2b7db46b8b051703fc61 -->

```csharp
public static Inno.Animation.AnimationPlayOptions Inno.Animation.AnimationPlayOptions.defaultValue { get; }
```

Gets the default playback options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L259).

## `layer`

<a id="api-d84e8fec8b1c9b16"></a>
<!-- api: P:Inno.Animation.AnimationPlayOptions.layer 6816de9185c8d38eb2c32500c644a194a3783daf526b2ab91cc7f593de4fbce4 -->

```csharp
public int Inno.Animation.AnimationPlayOptions.layer { get; set; }
```

Gets or sets the deterministic blend layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L280).

## `loop`

<a id="api-cd571a2b4de48c97"></a>
<!-- api: P:Inno.Animation.AnimationPlayOptions.loop 44f87455875541c52ced7a2fc87b972af6f4f1be2f511d2c8d41e7205c68dbfa -->

```csharp
public bool Inno.Animation.AnimationPlayOptions.loop { get; set; }
```

Gets or sets whether the clip repeats after its duration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L285).

## `speed`

<a id="api-848f509881512cd1"></a>
<!-- api: P:Inno.Animation.AnimationPlayOptions.speed 054680427c658c412fd09ec82a9394c2d89af3a30685480b9a8dddf926b7428a -->

```csharp
public float Inno.Animation.AnimationPlayOptions.speed { get; set; }
```

Gets or sets the non-negative playback speed multiplier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L270).

## `weight`

<a id="api-d08146d7139c1a12"></a>
<!-- api: P:Inno.Animation.AnimationPlayOptions.weight eeab5fee958481aaed9fc152cb25ebfdb95ab022323ce6d92cf3b953e36851ca -->

```csharp
public float Inno.Animation.AnimationPlayOptions.weight { get; set; }
```

Gets or sets the finite blend weight in the inclusive zero-to-one range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationTypes.cs#L275).
