---
title: "AudioProcessorConfiguration"
description: "Reference for AudioProcessorConfiguration in Inno.Audio."
uid: api.inno.audio.runtime-script.d26c45d87331ab63
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioProcessorConfiguration`

This reference describes `AudioProcessorConfiguration` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a345d6ebe5d306d6) | Method |
| [`id`](#api-ee64140555a8161e) | Property |
| [`parameters`](#api-290a72ef4d07c465) | Property |

## Type declaration

<a id="api-d26c45d87331ab63"></a>
<!-- api: T:InnoEngine.Audio.AudioProcessorConfiguration 0f6d8c32a70609d2bccce3af2ef2f5341b4bfde42056d0a23790d7908821c12e -->

```csharp
public sealed class InnoEngine.Audio.AudioProcessorConfiguration
```

Describes one ordered processor instance attached to a mixer bus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L48).

## `#ctor`

<a id="api-a345d6ebe5d306d6"></a>
<!-- api: M:InnoEngine.Audio.AudioProcessorConfiguration.#ctor(InnoEngine.Audio.AudioProcessorId,System.Collections.Generic.IEnumerable{InnoEngine.Audio.AudioProcessorParameter}) 95bc5025103985ab3c1d10053ae4a6596d4f7d0aa6a488d411f26fa7eb6ae3ed -->

```csharp
public InnoEngine.Audio.AudioProcessorConfiguration.AudioProcessorConfiguration(InnoEngine.Audio.AudioProcessorId id, System.Collections.Generic.IEnumerable<InnoEngine.Audio.AudioProcessorParameter>? parameters = null)
```

Creates an immutable processor configuration.

**Parameter `id`:** Open processor protocol identifier.

**Parameter `parameters`:** Complete processor parameter set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L61).

## `id`

<a id="api-ee64140555a8161e"></a>
<!-- api: P:InnoEngine.Audio.AudioProcessorConfiguration.id 900a00bd908e157890d7995759ac99b265b20d58137ada6e96e7ef9f84a674d5 -->

```csharp
public InnoEngine.Audio.AudioProcessorId InnoEngine.Audio.AudioProcessorConfiguration.id { get; }
```

Gets the open processor protocol identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L76).

## `parameters`

<a id="api-290a72ef4d07c465"></a>
<!-- api: P:InnoEngine.Audio.AudioProcessorConfiguration.parameters be64855f7b6d882a9b516eec51743e87fec6a8c29bc003b5273c4cd3e5c5cd92 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Audio.AudioProcessorParameter> InnoEngine.Audio.AudioProcessorConfiguration.parameters { get; }
```

Gets the immutable processor parameter set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L81).
