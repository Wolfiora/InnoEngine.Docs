---
title: "RenderTexture"
description: "Reference for RenderTexture in Inno.Rendering."
uid: api.inno.rendering.823ac0a5420be730
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderTexture`

This reference describes `RenderTexture` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ae4843f643f70ba3) | Method |
| [`Resize`](#api-8d595d48a01c4a98) | Method |
| [`contentRevision`](#api-9e49ff0f174a13c8) | Property |
| [`descriptor`](#api-774ee49a5d42ab72) | Property |
| [`name`](#api-dc38102db1b63344) | Property |

## Type declaration

<a id="api-823ac0a5420be730"></a>
<!-- api: T:Inno.Rendering.RenderTexture c643258a3cadc6aa75261e3bcae7e667278e5a572abf216a05e2b436c0b6628d -->

```csharp
public sealed class Inno.Rendering.RenderTexture
```

Describes a persistent offscreen target without owning a backend-native handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTexture.cs#L8).

## `#ctor`

<a id="api-ae4843f643f70ba3"></a>
<!-- api: M:Inno.Rendering.RenderTexture.#ctor(System.String,Inno.Rendering.RenderTextureDescriptor) b50b4a52fec6ada9538962b395e05d0b29df07c9208b630c4e7b37d32da56b56 -->

```csharp
public Inno.Rendering.RenderTexture.RenderTexture(string name, Inno.Rendering.RenderTextureDescriptor descriptor)
```

Creates an offscreen render target description.

**Parameter `name`:** Artist-facing and diagnostic name.

**Parameter `descriptor`:** Initial texture requirements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTexture.cs#L21).

## `Resize`

<a id="api-8d595d48a01c4a98"></a>
<!-- api: M:Inno.Rendering.RenderTexture.Resize(Inno.Rendering.RenderTextureDescriptor) 871f262c068c268f7423517b6e0fe12ba804fe1dc97e8aa3809183ad20200d67 -->

```csharp
public void Inno.Rendering.RenderTexture.Resize(Inno.Rendering.RenderTextureDescriptor descriptor)
```

Replaces texture requirements at the next render-frame safety point.

**Parameter `descriptor`:** New texture requirements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTexture.cs#L52).

## `contentRevision`

<a id="api-9e49ff0f174a13c8"></a>
<!-- api: P:Inno.Rendering.RenderTexture.contentRevision e273dfcdd133c132808e24ecbe76fc2f7361edb94b0afce1d54ee54db64d739c -->

```csharp
public long Inno.Rendering.RenderTexture.contentRevision { get; private set; }
```

Gets a counter incremented whenever the descriptor changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTexture.cs#L44).

## `descriptor`

<a id="api-774ee49a5d42ab72"></a>
<!-- api: P:Inno.Rendering.RenderTexture.descriptor 20eab772f9d05832c14ac05ec62ef7480e01935a190a80513200bbcca6931080 -->

```csharp
public Inno.Rendering.RenderTextureDescriptor Inno.Rendering.RenderTexture.descriptor { get; }
```

Gets the current texture requirements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTexture.cs#L39).

## `name`

<a id="api-dc38102db1b63344"></a>
<!-- api: P:Inno.Rendering.RenderTexture.name ecb4620d5e33452aaae4c56762e4664f054530bd39a13991b7389ccbb2e7fdfb -->

```csharp
public string Inno.Rendering.RenderTexture.name { get; }
```

Gets the artist-facing and diagnostic name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTexture.cs#L34).
