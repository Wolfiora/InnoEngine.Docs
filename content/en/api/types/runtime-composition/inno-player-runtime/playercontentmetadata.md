---
title: "PlayerContentMetadata"
description: "Reference for PlayerContentMetadata in Inno.Player.Runtime."
uid: api.inno.player.runtime.078be1bab6aa4ebb
kind: api
owners:
  - Inno.Player.Runtime
apiSurface: source-clr
contracts:
  - project.inno-player-runtime
---
# `PlayerContentMetadata`

This reference describes `PlayerContentMetadata` in `Inno.Player.Runtime`. Read the [shared contract](../../../projects/inno-player-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b7738e400daf5301) | Method |
| [`catalog`](#api-197da010be209fb3) | Property |
| [`manifest`](#api-1d01229669acb6ab) | Property |

## Type declaration

<a id="api-078be1bab6aa4ebb"></a>
<!-- api: T:Inno.Player.Runtime.PlayerContentMetadata 7e20d5f13befe21e0e9cf62a0fc7a9b84dd32f05cfebee2467b7f9574cc20af7 -->

```csharp
public sealed class Inno.Player.Runtime.PlayerContentMetadata
```

Owns the two metadata documents required to identify and verify a Player deployment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/Deployment/PlayerContentMetadata.cs#L8).

## `#ctor`

<a id="api-b7738e400daf5301"></a>
<!-- api: M:Inno.Player.Runtime.PlayerContentMetadata.#ctor(System.ReadOnlySpan{System.Byte},System.ReadOnlySpan{System.Byte}) 150e038c32dd554a4ed33dec1db1100081ea55c3ed76f9d759aa969d2f6c9af1 -->

```csharp
public Inno.Player.Runtime.PlayerContentMetadata.PlayerContentMetadata(System.ReadOnlySpan<byte> manifest, System.ReadOnlySpan<byte> catalog)
```

Copies deployment metadata so the source can retire its own buffers immediately.

**Parameter `manifest`:** The complete strict runtime manifest envelope.

**Parameter `catalog`:** The serialized runtime content catalog.

**Throws `System.ArgumentException`:** Either document is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/Deployment/PlayerContentMetadata.cs#L22).

## `catalog`

<a id="api-197da010be209fb3"></a>
<!-- api: P:Inno.Player.Runtime.PlayerContentMetadata.catalog 1b425d4c8f36879f49d50442b020961101f9bdc7dea94760dd3acd1883df39bc -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Player.Runtime.PlayerContentMetadata.catalog { get; }
```

Gets the owned serialized content catalog, valid for this metadata object's lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/Deployment/PlayerContentMetadata.cs#L40).

## `manifest`

<a id="api-1d01229669acb6ab"></a>
<!-- api: P:Inno.Player.Runtime.PlayerContentMetadata.manifest f5ccf11e27ae6709871c4f58e5901821fe8a64d330171d613a0d1c0ed1a4a4e5 -->

```csharp
public System.ReadOnlyMemory<byte> Inno.Player.Runtime.PlayerContentMetadata.manifest { get; }
```

Gets the owned manifest envelope, valid for this metadata object's lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/Deployment/PlayerContentMetadata.cs#L35).
