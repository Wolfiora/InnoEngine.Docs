---
title: "AnimationPlayOptions"
description: "Reference for AnimationPlayOptions in Inno.Animation."
uid: api.inno.animation.runtime-script.47270fd836e36aec
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `AnimationPlayOptions`

This reference describes `AnimationPlayOptions` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`clock`](#api-a4b47a7d418aee87) | Property |
| [`defaultValue`](#api-470fc36d7177d935) | Property |
| [`layer`](#api-4f172f78ed85afbe) | Property |
| [`loop`](#api-bb9a18caba6af1b9) | Property |
| [`speed`](#api-1d4059134d58c1e1) | Property |
| [`weight`](#api-493b0a94145e1194) | Property |

## Type declaration

<a id="api-47270fd836e36aec"></a>
<!-- api: T:InnoEngine.Animation.AnimationPlayOptions b5ab1307338a11ca90ede2cb227ae05830c9a6dec422c89b299aef2cfc892a84 -->

```csharp
public struct InnoEngine.Animation.AnimationPlayOptions
```

Stores immutable options used to begin one animation playback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L254).

## `clock`

<a id="api-a4b47a7d418aee87"></a>
<!-- api: P:InnoEngine.Animation.AnimationPlayOptions.clock 7e2a9c13e97fb69ddf6170e60fa790e7ce6035ad41d37fd8a9d3b445933a45f7 -->

```csharp
public InnoEngine.Animation.AnimationClock InnoEngine.Animation.AnimationPlayOptions.clock { get; set; }
```

Gets or sets the session clock used by the playback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L290).

## `defaultValue`

<a id="api-470fc36d7177d935"></a>
<!-- api: P:InnoEngine.Animation.AnimationPlayOptions.defaultValue 9b9dd2d1f16b516956eadc0b88150cf52b95a112771fa4ccc3c4455cef14a4d0 -->

```csharp
public static InnoEngine.Animation.AnimationPlayOptions InnoEngine.Animation.AnimationPlayOptions.defaultValue { get; }
```

Gets the default playback options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L259).

## `layer`

<a id="api-4f172f78ed85afbe"></a>
<!-- api: P:InnoEngine.Animation.AnimationPlayOptions.layer 44e9780a34a35aed507ad266a996461fce1205b2664dcac8b2632942d4c56016 -->

```csharp
public int InnoEngine.Animation.AnimationPlayOptions.layer { get; set; }
```

Gets or sets the deterministic blend layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L280).

## `loop`

<a id="api-bb9a18caba6af1b9"></a>
<!-- api: P:InnoEngine.Animation.AnimationPlayOptions.loop f38464939ed2cf3d0113829e6839017d8dd113ac7ac3f764f196c0778475361f -->

```csharp
public bool InnoEngine.Animation.AnimationPlayOptions.loop { get; set; }
```

Gets or sets whether the clip repeats after its duration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L285).

## `speed`

<a id="api-1d4059134d58c1e1"></a>
<!-- api: P:InnoEngine.Animation.AnimationPlayOptions.speed c848d1f6ea803f76ca9662981c65eb06259c686791775a8799737869ee9e0d9b -->

```csharp
public float InnoEngine.Animation.AnimationPlayOptions.speed { get; set; }
```

Gets or sets the non-negative playback speed multiplier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L270).

## `weight`

<a id="api-493b0a94145e1194"></a>
<!-- api: P:InnoEngine.Animation.AnimationPlayOptions.weight 62ed2b78371680ca93eb52f0ad7e572f0947117d95c3149b9d9ba99299f04bb3 -->

```csharp
public float InnoEngine.Animation.AnimationPlayOptions.weight { get; set; }
```

Gets or sets the finite blend weight in the inclusive zero-to-one range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationTypes.cs#L275).
