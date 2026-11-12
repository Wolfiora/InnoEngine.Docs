---
title: "AnimationEventMarker"
description: "Reference for AnimationEventMarker in Inno.Animation."
uid: api.inno.animation.runtime-script.4570aad36e5b20ae
kind: api
owners:
  - Inno.Animation
apiSurface: runtime-script
contracts:
  - project.inno-animation#target-and-service-contract
  - manual.scripting.use-script-api
---
# `AnimationEventMarker`

This reference describes `AnimationEventMarker` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bdd41f73ec161140) | Method |
| [`eventId`](#api-321f0d406932b325) | Property |
| [`payload`](#api-ccba962d63b61939) | Property |
| [`time`](#api-ccfe062f6559ce62) | Property |

## Type declaration

<a id="api-4570aad36e5b20ae"></a>
<!-- api: T:InnoEngine.Animation.AnimationEventMarker 849ccaa26feed52198db9e292492b588761c1a75aa8cc466fe883c5060815909 -->

```csharp
public sealed class InnoEngine.Animation.AnimationEventMarker : InnoEngine.Serialization.ISerializable
```

Stores one stable event marker embedded in an animation clip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L125).

## `#ctor`

<a id="api-bdd41f73ec161140"></a>
<!-- api: M:InnoEngine.Animation.AnimationEventMarker.#ctor 4524150e7f37e5cb31df3e01ebbb2a10d411bab850582917b2988a5571cb37a1 -->

```csharp
public InnoEngine.Animation.AnimationEventMarker.AnimationEventMarker()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L125).

## `eventId`

<a id="api-321f0d406932b325"></a>
<!-- api: P:InnoEngine.Animation.AnimationEventMarker.eventId da519ea45dcb8e41e1e0f95adad9f4697303f7af57e8afd2e96be44b1ec968c2 -->

```csharp
public string InnoEngine.Animation.AnimationEventMarker.eventId { get; set; }
```

Gets or sets the stable event protocol identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L137).

## `payload`

<a id="api-ccba962d63b61939"></a>
<!-- api: P:InnoEngine.Animation.AnimationEventMarker.payload 83b09e4b1934d16036862aa3dca5be8fb53477c968897399cb95cf232d8bc8a8 -->

```csharp
public byte[] InnoEngine.Animation.AnimationEventMarker.payload { get; set; }
```

Gets or sets opaque reload-safe event payload bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L143).

## `time`

<a id="api-ccfe062f6559ce62"></a>
<!-- api: P:InnoEngine.Animation.AnimationEventMarker.time d2810ba54ae26d8f1fbf75a56844a41550d969e3c6d52bf51a20d432ebcafbc7 -->

```csharp
public float InnoEngine.Animation.AnimationEventMarker.time { get; set; }
```

Gets or sets clip-local marker time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L131).
