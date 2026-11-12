---
title: "AudioMixerFeature"
description: "Reference for AudioMixerFeature in Inno.Audio."
uid: api.inno.audio.runtime-script.34aeb805a7ff0e80
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioMixerFeature`

This reference describes `AudioMixerFeature` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9d28c55b61d51546) | Method |
| [`Build`](#api-d7fcc094e0132847) | Method |

## Type declaration

<a id="api-34aeb805a7ff0e80"></a>
<!-- api: T:InnoEngine.Audio.AudioMixerFeature 1617175fe4941d5d0c0fee1d0f349d8e20d3d0f3e6860c9e89713317ebcc6a1b -->

```csharp
public abstract class InnoEngine.Audio.AudioMixerFeature
```

Contributes optional buses and processors to a candidate mixer graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L87).

## `#ctor`

<a id="api-9d28c55b61d51546"></a>
<!-- api: M:InnoEngine.Audio.AudioMixerFeature.#ctor c8fa8d7daa0a9533b3f537f9cb5ea58893104d857bd99f3dd2ae43fb506fd5eb -->

```csharp
protected InnoEngine.Audio.AudioMixerFeature.AudioMixerFeature()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L87).

## `Build`

<a id="api-d7fcc094e0132847"></a>
<!-- api: M:InnoEngine.Audio.AudioMixerFeature.Build(InnoEngine.Audio.AudioMixerBuilder,InnoEngine.Audio.SerializedAudioExtensionState) abfc9727d9ef2bfd012313d6b4dcc70e140f2c9ca1a17f1f045832ccc44fffa9 -->

```csharp
public abstract void InnoEngine.Audio.AudioMixerFeature.Build(InnoEngine.Audio.AudioMixerBuilder builder, InnoEngine.Audio.SerializedAudioExtensionState state)
```

Adds feature-owned graph declarations on the host control thread.

**Parameter `builder`:** Candidate graph builder valid only for this invocation.

**Parameter `state`:** Reload-safe neutral feature state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L98).
