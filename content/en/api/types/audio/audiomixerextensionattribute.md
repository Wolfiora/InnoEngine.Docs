---
title: "AudioMixerExtensionAttribute"
description: "Reference for AudioMixerExtensionAttribute in Inno.Audio."
uid: api.inno.audio.f2526b0918929a7a
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioMixerExtensionAttribute`

This reference describes `AudioMixerExtensionAttribute` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3f2c1b6d1fd9e452) | Method |
| [`id`](#api-4dbd3f861b2efe7c) | Property |

## Type declaration

<a id="api-f2526b0918929a7a"></a>
<!-- api: T:Inno.Audio.AudioMixerExtensionAttribute ce84b6ce7091577b41bc12471c8cb32b64d3fcbde4314d9cc354378f628a989f -->

```csharp
public sealed class Inno.Audio.AudioMixerExtensionAttribute : System.Attribute
```

Marks a reloadable extension that creates the base audio mixer graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L9).

## `#ctor`

<a id="api-3f2c1b6d1fd9e452"></a>
<!-- api: M:Inno.Audio.AudioMixerExtensionAttribute.#ctor(System.String) e9ad6242dca154dc5f2deb20ab8cf5b2f53e6b762d653a352bff523144aedf5b -->

```csharp
public Inno.Audio.AudioMixerExtensionAttribute.AudioMixerExtensionAttribute(string id)
```

Creates a mixer extension declaration.

**Parameter `id`:** Globally stable mixer extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L17).

## `id`

<a id="api-4dbd3f861b2efe7c"></a>
<!-- api: P:Inno.Audio.AudioMixerExtensionAttribute.id b77e7cd9ff77728ff7fb6e57b6652d640b28224d5d467d14fcee8f7753fdbd98 -->

```csharp
public string Inno.Audio.AudioMixerExtensionAttribute.id { get; }
```

Gets the globally stable mixer extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L26).
