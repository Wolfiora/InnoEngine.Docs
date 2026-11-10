---
title: "AudioMixerFeatureExtensionAttribute"
description: "Reference for AudioMixerFeatureExtensionAttribute in Inno.Audio."
uid: api.inno.audio.a78bac902fbea065
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioMixerFeatureExtensionAttribute`

This reference describes `AudioMixerFeatureExtensionAttribute` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f74fbc52aef7ef77) | Method |
| [`id`](#api-61d5a70f535e66f1) | Property |
| [`priority`](#api-c5ce71eb34a617af) | Property |

## Type declaration

<a id="api-a78bac902fbea065"></a>
<!-- api: T:Inno.Audio.AudioMixerFeatureExtensionAttribute 373552fd13520e7d5f77d12e5a7d6ac0ef1c8881605a272426e26b6c17cf6119 -->

```csharp
public sealed class Inno.Audio.AudioMixerFeatureExtensionAttribute : System.Attribute
```

Marks a reloadable extension that contributes to an audio mixer graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L33).

## `#ctor`

<a id="api-f74fbc52aef7ef77"></a>
<!-- api: M:Inno.Audio.AudioMixerFeatureExtensionAttribute.#ctor(System.String,System.Int32) d0bbe2833e9661f6b466b69545892fd069f6a8df0852686533dd332595f76cdb -->

```csharp
public Inno.Audio.AudioMixerFeatureExtensionAttribute.AudioMixerFeatureExtensionAttribute(string id, int priority = 0)
```

Creates a mixer feature declaration.

**Parameter `id`:** Globally stable feature extension identifier.

**Parameter `priority`:** Feature invocation priority; lower values build first.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L44).

## `id`

<a id="api-61d5a70f535e66f1"></a>
<!-- api: P:Inno.Audio.AudioMixerFeatureExtensionAttribute.id fd7ae0a5fadc6b73acf2a645828650bd96250d6224d688cda3a44d1b473b194b -->

```csharp
public string Inno.Audio.AudioMixerFeatureExtensionAttribute.id { get; }
```

Gets the globally stable feature extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L56).

## `priority`

<a id="api-c5ce71eb34a617af"></a>
<!-- api: P:Inno.Audio.AudioMixerFeatureExtensionAttribute.priority af1d0901fc02380a2dd4cf099dbf998749ee824e9fc6e66052bbf68e8e99e9b4 -->

```csharp
public int Inno.Audio.AudioMixerFeatureExtensionAttribute.priority { get; }
```

Gets the feature invocation priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L61).
