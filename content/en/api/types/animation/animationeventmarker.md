---
title: "AnimationEventMarker"
description: "Reference for AnimationEventMarker in Inno.Animation."
uid: api.inno.animation.aed8a7394db5f07e
kind: api
owners:
  - Inno.Animation
apiSurface: source-clr
contracts:
  - project.inno-animation#target-and-service-contract
---
# `AnimationEventMarker`

This reference describes `AnimationEventMarker` in `Inno.Animation`. Read the [shared contract](../../projects/inno-animation.md#target-and-service-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0154b8d3be968a61) | Method |
| [`eventId`](#api-a79c156255a35d50) | Property |
| [`payload`](#api-cfe37f8d3481a023) | Property |
| [`time`](#api-9731919301eb361e) | Property |

## Type declaration

<a id="api-aed8a7394db5f07e"></a>
<!-- api: T:Inno.Animation.AnimationEventMarker 02f3e366a1f807a858f5eed83651170a7d5a3aa4ac1327526d223e261e6dff56 -->

```csharp
public sealed class Inno.Animation.AnimationEventMarker : Inno.Core.Serialization.ISerializable
```

Stores one stable event marker embedded in an animation clip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L125).

## `#ctor`

<a id="api-0154b8d3be968a61"></a>
<!-- api: M:Inno.Animation.AnimationEventMarker.#ctor ad376cd6638b596e7d3220bd2be5326039ea8fe16e1ca567f70247a5a19124d6 -->

```csharp
public Inno.Animation.AnimationEventMarker.AnimationEventMarker()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L125).

## `eventId`

<a id="api-a79c156255a35d50"></a>
<!-- api: P:Inno.Animation.AnimationEventMarker.eventId b1b195f3ea9cbdf8b4083424132d489b2abe5ab0bb7a4e4cf8602ceb529db7e0 -->

```csharp
public string Inno.Animation.AnimationEventMarker.eventId { get; set; }
```

Gets or sets the stable event protocol identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L137).

## `payload`

<a id="api-cfe37f8d3481a023"></a>
<!-- api: P:Inno.Animation.AnimationEventMarker.payload d90e0a31fff48126a086fcd67d6bde1be7c5fd21678f904f37cd598b23fed9a9 -->

```csharp
public byte[] Inno.Animation.AnimationEventMarker.payload { get; set; }
```

Gets or sets opaque reload-safe event payload bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L143).

## `time`

<a id="api-9731919301eb361e"></a>
<!-- api: P:Inno.Animation.AnimationEventMarker.time 3b3771f6d9cf834b55b9dd187fb470c91e85b9c5fd59e5799fc744875ef0cf60 -->

```csharp
public float Inno.Animation.AnimationEventMarker.time { get; set; }
```

Gets or sets clip-local marker time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/src/content/animation/Inno.Animation/AnimationClipAsset.cs#L131).
