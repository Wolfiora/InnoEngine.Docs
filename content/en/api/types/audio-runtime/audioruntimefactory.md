---
title: "AudioRuntimeFactory"
description: "Reference for AudioRuntimeFactory in Inno.Audio.Runtime."
uid: api.inno.audio.runtime.0aa615762cf6542a
kind: api
owners:
  - Inno.Audio.Runtime
apiSurface: source-clr
contracts:
  - project.inno-audio-runtime#composition-and-lifetime-contract
---
# `AudioRuntimeFactory`

This reference describes `AudioRuntimeFactory` in `Inno.Audio.Runtime`. Read the [shared contract](../../projects/inno-audio-runtime.md#composition-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Runtime.Contracts.IRuntimeSubsystemFactory`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-66f7451ea1e1ad11) | Method |
| [`Create`](#api-964afb1451de92aa) | Method |
| [`descriptor`](#api-1b28ece01f84da0a) | Property |

## Type declaration

<a id="api-0aa615762cf6542a"></a>
<!-- api: T:Inno.Audio.Runtime.AudioRuntimeFactory a6c850781c1061e64c4e601ea3a1e993b611a6b4baf5f4ec2d65b6f4295d299b -->

```csharp
public sealed class Inno.Audio.Runtime.AudioRuntimeFactory : Inno.Runtime.Contracts.IRuntimeSubsystemFactory
```

Creates one audio lifecycle feature for every isolated runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntimeFactory.cs#L11).

## `#ctor`

<a id="api-66f7451ea1e1ad11"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntimeFactory.#ctor(System.Func{Inno.Runtime.Contracts.RuntimeSubsystemContext,Inno.Audio.Runtime.AudioRuntime}) 5fd6b1bb3f972bb0cdd7bec3f93c0dfc8b5b412cb75491ba1608d3f6e57b40a7 -->

```csharp
public Inno.Audio.Runtime.AudioRuntimeFactory.AudioRuntimeFactory(System.Func<Inno.Runtime.Contracts.RuntimeSubsystemContext, Inno.Audio.Runtime.AudioRuntime> runtimeFactory)
```

Creates a reusable factory around a composition-owned audio runtime callback.

**Parameter `runtimeFactory`:** The callback that creates a distinct audio runtime for the supplied session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntimeFactory.cs#L21).

## `Create`

<a id="api-964afb1451de92aa"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntimeFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext) f59c4fed6abc839d1c328570593572cbfda265e8feb6883b9b4c9f4f42d5a4b9 -->

```csharp
public Inno.Runtime.Contracts.IRuntimeSubsystem Inno.Audio.Runtime.AudioRuntimeFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext context)
```

Creates an audio feature over a newly allocated runtime layer.

**Parameter `context`:** The isolated session context passed to the audio runtime factory.

**Returns:** A new feature that exclusively owns its audio runtime layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntimeFactory.cs#L43).

## `descriptor`

<a id="api-1b28ece01f84da0a"></a>
<!-- api: P:Inno.Audio.Runtime.AudioRuntimeFactory.descriptor a14b51ce2cc68e8ae76e9f1ab17b1eed4cdae090befd817f87dfe85635791401 -->

```csharp
public Inno.Runtime.Contracts.RuntimeSubsystemDescriptor Inno.Audio.Runtime.AudioRuntimeFactory.descriptor { get; }
```

Gets stable ordering metadata that updates audio after scene simulation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntimeFactory.cs#L29).
