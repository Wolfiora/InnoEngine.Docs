---
title: "AudioMixerFeatureExtensionAttribute"
description: "Reference for AudioMixerFeatureExtensionAttribute in Inno.Audio."
uid: api.inno.audio.runtime-script.d7719ac2c498c754
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioMixerFeatureExtensionAttribute`

This reference describes `AudioMixerFeatureExtensionAttribute` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-41a3a12a98de02dc) | Method |
| [`id`](#api-3f668bf71848a64d) | Property |
| [`priority`](#api-520786f019476607) | Property |

## Type declaration

<a id="api-d7719ac2c498c754"></a>
<!-- api: T:InnoEngine.Audio.AudioMixerFeatureExtensionAttribute 5d4ca962e23070e021a2389e572d8c4a452c348f915960b0f00b51fdb14cb61f -->

```csharp
public sealed class InnoEngine.Audio.AudioMixerFeatureExtensionAttribute : System.Attribute
```

Marks a reloadable extension that contributes to an audio mixer graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L33).

## `#ctor`

<a id="api-41a3a12a98de02dc"></a>
<!-- api: M:InnoEngine.Audio.AudioMixerFeatureExtensionAttribute.#ctor(System.String,System.Int32) 9a0f67512d665da144455a906acbeaf287ea86ca0f537b5040dd965302556d34 -->

```csharp
public InnoEngine.Audio.AudioMixerFeatureExtensionAttribute.AudioMixerFeatureExtensionAttribute(string id, int priority = 0)
```

Creates a mixer feature declaration.

**Parameter `id`:** Globally stable feature extension identifier.

**Parameter `priority`:** Feature invocation priority; lower values build first.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L44).

## `id`

<a id="api-3f668bf71848a64d"></a>
<!-- api: P:InnoEngine.Audio.AudioMixerFeatureExtensionAttribute.id b60762c8e7dbad1dc151d7ce1ece08a4865eaa011a8a35ac881cbc624b68afc5 -->

```csharp
public string InnoEngine.Audio.AudioMixerFeatureExtensionAttribute.id { get; }
```

Gets the globally stable feature extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L56).

## `priority`

<a id="api-520786f019476607"></a>
<!-- api: P:InnoEngine.Audio.AudioMixerFeatureExtensionAttribute.priority 486dc55d2ebabf9a59a710b68a3ad7715c827110f77933ef6903a3f9487dab36 -->

```csharp
public int InnoEngine.Audio.AudioMixerFeatureExtensionAttribute.priority { get; }
```

Gets the feature invocation priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L61).
