---
title: "AudioMixerBuilder"
description: "Reference for AudioMixerBuilder in Inno.Audio."
uid: api.inno.audio.781cf548a5529ceb
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioMixerBuilder`

This reference describes `AudioMixerBuilder` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cb1a6fb5cc692579) | Method |
| [`AddBus`](#api-0cbf3bb5f394d284) | Method |
| [`AddProcessor`](#api-821a4ad7990ab117) | Method |
| [`Build`](#api-d30c0ab35bcb7dc9) | Method |

## Type declaration

<a id="api-781cf548a5529ceb"></a>
<!-- api: T:Inno.Audio.AudioMixerBuilder 6959cce87860311c0f31ad720d668362bbf146d2d553f2ae228120527e134e46 -->

```csharp
public sealed class Inno.Audio.AudioMixerBuilder
```

Builds and validates an open backend-neutral mixer graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L178).

## `#ctor`

<a id="api-cb1a6fb5cc692579"></a>
<!-- api: M:Inno.Audio.AudioMixerBuilder.#ctor c61450781ca23eab1eefe32ce57a941c8afd227baaa49dfd8d69e19a038573cb -->

```csharp
public Inno.Audio.AudioMixerBuilder.AudioMixerBuilder()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L178).

## `AddBus`

<a id="api-0cbf3bb5f394d284"></a>
<!-- api: M:Inno.Audio.AudioMixerBuilder.AddBus(Inno.Audio.AudioBusId,Inno.Audio.AudioBusId,System.Single,System.Boolean) 511c9dce66cec902fa59aad7cd41df31a367d7979ea4e2b3446a15761c1d7a64 -->

```csharp
public void Inno.Audio.AudioMixerBuilder.AddBus(Inno.Audio.AudioBusId id, Inno.Audio.AudioBusId parent, float volume = 1, bool muted = false)
```

Adds one semantic bus to the graph.

**Parameter `id`:** Stable bus identifier.

**Parameter `parent`:** Parent bus identifier.

**Parameter `volume`:** Initial non-negative linear gain.

**Parameter `muted`:** Whether output is initially silenced.

**Throws `System.ArgumentException`:** Thrown when the bus identifier is invalid or duplicated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L203).

## `AddProcessor`

<a id="api-821a4ad7990ab117"></a>
<!-- api: M:Inno.Audio.AudioMixerBuilder.AddProcessor(Inno.Audio.AudioBusId,Inno.Audio.AudioProcessorConfiguration) 2f26c209856db99e893bb088ac1a98b89c9e975312e519ddc494854c85772847 -->

```csharp
public void Inno.Audio.AudioMixerBuilder.AddProcessor(Inno.Audio.AudioBusId bus, Inno.Audio.AudioProcessorConfiguration processor)
```

Appends one processor to an existing bus chain.

**Parameter `bus`:** Existing bus identifier.

**Parameter `processor`:** Immutable processor configuration to append.

**Throws `System.Collections.Generic.KeyNotFoundException`:** Thrown when the bus is not defined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L228).

## `Build`

<a id="api-d30c0ab35bcb7dc9"></a>
<!-- api: M:Inno.Audio.AudioMixerBuilder.Build 21794cf41399ae44bce3ad99642766216623608ec4cdb67eeb87ead159b570ae -->

```csharp
public Inno.Audio.AudioMixer Inno.Audio.AudioMixerBuilder.Build()
```

Validates the graph and returns an immutable parent-before-child snapshot.

**Returns:** A validated mixer graph containing the mandatory master bus.

**Throws `System.InvalidOperationException`:** Thrown when a parent is missing or bus routing contains a cycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L252).
