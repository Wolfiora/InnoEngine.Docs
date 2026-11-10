---
title: "AudioClipMetadataCodec"
description: "Reference for AudioClipMetadataCodec in Inno.Audio."
uid: api.inno.audio.dfb969705f5de5c0
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioClipMetadataCodec`

This reference describes `AudioClipMetadataCodec` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Decode`](#api-b1611435d349672e) | Method |
| [`Encode`](#api-a15c45181293e55f) | Method |

## Type declaration

<a id="api-dfb969705f5de5c0"></a>
<!-- api: T:Inno.Audio.AudioClipMetadataCodec 3c0fd97b8e271bf6c5ea4b8dea30fbac3e22e9ef2a39af2541956c196fbe8a82 -->

```csharp
public static class Inno.Audio.AudioClipMetadataCodec
```

Encodes the compact runtime header shared by audio importers and runtime asset loading.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L86).

## `Decode`

<a id="api-b1611435d349672e"></a>
<!-- api: M:Inno.Audio.AudioClipMetadataCodec.Decode(System.ReadOnlySpan{System.Byte}) 1727542b88e80cccccf920392b0c051d9b1a40f11e4d5117429f5eb726c14b17 -->

```csharp
public static Inno.Audio.AudioClipMetadata Inno.Audio.AudioClipMetadataCodec.Decode(System.ReadOnlySpan<byte> payload)
```

Decodes and validates one compact audio runtime header.

**Parameter `payload`:** Complete runtime header bytes.

**Returns:** Valid imported audio metadata.

**Throws `System.InvalidOperationException`:** Thrown when the header is truncated, corrupt, or semantically invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L128).

## `Encode`

<a id="api-a15c45181293e55f"></a>
<!-- api: M:Inno.Audio.AudioClipMetadataCodec.Encode(Inno.Audio.AudioClipMetadata) 406e6cf79e83c23990a7be6ee7b8682df8a8156e28fd8af5836a3e0bed75d986 -->

```csharp
public static byte[] Inno.Audio.AudioClipMetadataCodec.Encode(Inno.Audio.AudioClipMetadata metadata)
```

Encodes audio metadata into a compact deterministic runtime header.

**Parameter `metadata`:** Valid metadata to encode.

**Returns:** Newly allocated runtime header bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioClipAsset.cs#L100).
