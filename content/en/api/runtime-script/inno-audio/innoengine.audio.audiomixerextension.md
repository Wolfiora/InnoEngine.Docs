---
title: "AudioMixerExtension"
description: "Reference for AudioMixerExtension in Inno.Audio."
uid: api.inno.audio.runtime-script.7b6ecbff2457255f
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioMixerExtension`

This reference describes `AudioMixerExtension` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-539fea3966651fb1) | Method |
| [`Build`](#api-b6416fddb7512c27) | Method |

## Type declaration

<a id="api-7b6ecbff2457255f"></a>
<!-- api: T:InnoEngine.Audio.AudioMixerExtension 214c3ca5e3ea3ca1d09a1f4dad7df3a9d088812d65f2d44f8fa5060c32bda39a -->

```csharp
public abstract class InnoEngine.Audio.AudioMixerExtension
```

Builds a base mixer graph on the host control thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L67).

## `#ctor`

<a id="api-539fea3966651fb1"></a>
<!-- api: M:InnoEngine.Audio.AudioMixerExtension.#ctor c2903b1238f942bf6d32361a446691b4b0f7bb1bda03c57f6076028b151b0e12 -->

```csharp
protected InnoEngine.Audio.AudioMixerExtension.AudioMixerExtension()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L67).

## `Build`

<a id="api-b6416fddb7512c27"></a>
<!-- api: M:InnoEngine.Audio.AudioMixerExtension.Build(InnoEngine.Audio.AudioMixerBuilder,InnoEngine.Audio.SerializedAudioExtensionState) 33f9d7702256f45ac1519b2165c06b1dfb553dcec56a0eedce420256f7f4af95 -->

```csharp
public abstract void InnoEngine.Audio.AudioMixerExtension.Build(InnoEngine.Audio.AudioMixerBuilder builder, InnoEngine.Audio.SerializedAudioExtensionState state)
```

Adds base buses and processors to a candidate mixer graph.

**Parameter `builder`:** Candidate graph builder valid only for this invocation.

**Parameter `state`:** Reload-safe neutral extension state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L78).
