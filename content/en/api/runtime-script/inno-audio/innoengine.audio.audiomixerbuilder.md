---
title: "AudioMixerBuilder"
description: "Reference for AudioMixerBuilder in Inno.Audio."
uid: api.inno.audio.runtime-script.9ff57af0c08f00a8
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioMixerBuilder`

This reference describes `AudioMixerBuilder` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-76b97585153a204f) | Method |
| [`AddBus`](#api-512368e02931c104) | Method |
| [`AddProcessor`](#api-0faad4066469a2fe) | Method |
| [`Build`](#api-66fef7747c5de5ba) | Method |

## Type declaration

<a id="api-9ff57af0c08f00a8"></a>
<!-- api: T:InnoEngine.Audio.AudioMixerBuilder 2ddc0e891b73479e22715f77e5c0e76cd7a6b883f9ca5def055d73f12ff28633 -->

```csharp
public sealed class InnoEngine.Audio.AudioMixerBuilder
```

Builds and validates an open backend-neutral mixer graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L178).

## `#ctor`

<a id="api-76b97585153a204f"></a>
<!-- api: M:InnoEngine.Audio.AudioMixerBuilder.#ctor 0f3570ca27f198a68b7d506ac83960edb37a2ca1b3ab6f482adfaf938b3337d6 -->

```csharp
public InnoEngine.Audio.AudioMixerBuilder.AudioMixerBuilder()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L178).

## `AddBus`

<a id="api-512368e02931c104"></a>
<!-- api: M:InnoEngine.Audio.AudioMixerBuilder.AddBus(InnoEngine.Audio.AudioBusId,InnoEngine.Audio.AudioBusId,System.Single,System.Boolean) 0b77c8501dc476cb36cccefa796455c308166293a2ca02f5c9961b25622dd527 -->

```csharp
public void InnoEngine.Audio.AudioMixerBuilder.AddBus(InnoEngine.Audio.AudioBusId id, InnoEngine.Audio.AudioBusId parent, float volume = 1, bool muted = false)
```

Adds one semantic bus to the graph.

**Parameter `id`:** Stable bus identifier.

**Parameter `parent`:** Parent bus identifier.

**Parameter `volume`:** Initial non-negative linear gain.

**Parameter `muted`:** Whether output is initially silenced.

**Throws `System.ArgumentException`:** Thrown when the bus identifier is invalid or duplicated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L203).

## `AddProcessor`

<a id="api-0faad4066469a2fe"></a>
<!-- api: M:InnoEngine.Audio.AudioMixerBuilder.AddProcessor(InnoEngine.Audio.AudioBusId,InnoEngine.Audio.AudioProcessorConfiguration) 268024415a0370b4f2505fd981f139611edcb95aa04571dc0975d480d34098fd -->

```csharp
public void InnoEngine.Audio.AudioMixerBuilder.AddProcessor(InnoEngine.Audio.AudioBusId bus, InnoEngine.Audio.AudioProcessorConfiguration processor)
```

Appends one processor to an existing bus chain.

**Parameter `bus`:** Existing bus identifier.

**Parameter `processor`:** Immutable processor configuration to append.

**Throws `System.Collections.Generic.KeyNotFoundException`:** Thrown when the bus is not defined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L228).

## `Build`

<a id="api-66fef7747c5de5ba"></a>
<!-- api: M:InnoEngine.Audio.AudioMixerBuilder.Build d79ea837b7eee7bce6dd5c2e26763faacafed4232e8fa14939f21e3b1af178ca -->

```csharp
public InnoEngine.Audio.AudioMixer InnoEngine.Audio.AudioMixerBuilder.Build()
```

Validates the graph and returns an immutable parent-before-child snapshot.

**Returns:** A validated mixer graph containing the mandatory master bus.

**Throws `System.InvalidOperationException`:** Thrown when a parent is missing or bus routing contains a cycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L252).
