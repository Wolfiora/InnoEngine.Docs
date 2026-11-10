---
title: "AudioClipAsset"
description: "Reference for AudioClipAsset in Inno.Audio."
uid: api.inno.audio.56bf18d4fb2991fb
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioClipAsset`

This reference describes `AudioClipAsset` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-335798540af38214) | Method |
| [`OnRuntimePayloadChanged`](#api-b9848174877636a9) | Method |
| [`duration`](#api-c225746ef90bc5b4) | Property |
| [`metadata`](#api-c2f82965bfc40888) | Property |

## Type declaration

<a id="api-56bf18d4fb2991fb"></a>
<!-- api: T:Inno.Audio.AudioClipAsset 48e7a777c3f426b3e1f13140f3849e2e1964e81db0762cbf1c362aa99afaacff -->

```csharp
public sealed class Inno.Audio.AudioClipAsset : Inno.Assets.AssetObject
```

Represents one imported audio source and its compact runtime metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L155).

## `#ctor`

<a id="api-335798540af38214"></a>
<!-- api: M:Inno.Audio.AudioClipAsset.#ctor b7865e6f724f11cb00fc47264299ddcc70ca3599c5ce3a658c2c70cd827c8339 -->

```csharp
public Inno.Audio.AudioClipAsset.AudioClipAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L155).

## `OnRuntimePayloadChanged`

<a id="api-b9848174877636a9"></a>
<!-- api: M:Inno.Audio.AudioClipAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory{System.Byte},System.ReadOnlyMemory{System.Byte}) b960a6b2fb8b77ed8774bba8c209043a39ddb45eb570d4ed382c532ec4abc0ec -->

```csharp
protected override void Inno.Audio.AudioClipAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory<byte> previousPayload, System.ReadOnlyMemory<byte> currentPayload)
```

Refreshes imported metadata after an artifact commit.

**Parameter `previousPayload`:** Previously committed compact header.

**Parameter `currentPayload`:** Newly committed compact header.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L178).

## `duration`

<a id="api-c225746ef90bc5b4"></a>
<!-- api: P:Inno.Audio.AudioClipAsset.duration dafef6869740e645cf2c9c2a5639d5e2627cfa23e41de4f05a6a94a4448e3f2e -->

```csharp
public System.TimeSpan Inno.Audio.AudioClipAsset.duration { get; }
```

Gets the imported clip duration, or zero before runtime content is loaded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L167).

## `metadata`

<a id="api-c2f82965bfc40888"></a>
<!-- api: P:Inno.Audio.AudioClipAsset.metadata 89b612c9023044f29ed591d7269869ecc415ae0cc0ec1193622b161df3968eb1 -->

```csharp
public Inno.Audio.AudioClipMetadata? Inno.Audio.AudioClipAsset.metadata { get; }
```

Gets imported metadata, or `null` before runtime content is loaded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L162).
