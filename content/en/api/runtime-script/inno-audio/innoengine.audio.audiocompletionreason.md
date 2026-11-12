---
title: "AudioCompletionReason"
description: "Reference for AudioCompletionReason in Inno.Audio."
uid: api.inno.audio.runtime-script.ccff8bfa1eea9866
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioCompletionReason`

This reference describes `AudioCompletionReason` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`DecodeFailed`](#api-c0a4cd405918ffd1) | Field |
| [`DeviceLost`](#api-4d1a09f1ae8a27b0) | Field |
| [`NaturalEnd`](#api-a22bcf99699d9faf) | Field |
| [`Stolen`](#api-77d407b80cc4f873) | Field |
| [`Stopped`](#api-7fa593ac7e205bf7) | Field |

## Type declaration

<a id="api-ccff8bfa1eea9866"></a>
<!-- api: T:InnoEngine.Audio.AudioCompletionReason 88d358778e1d4b32e607e80b3ba138ee8949b0e26310a6149e527ff668d35126 -->

```csharp
public enum InnoEngine.Audio.AudioCompletionReason : int
```

Explains why a voice stopped accepting playback commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L97).

## `DecodeFailed`

<a id="api-c0a4cd405918ffd1"></a>
<!-- api: F:InnoEngine.Audio.AudioCompletionReason.DecodeFailed 3fe55bb047a96077790a0d27bd5825910e082fa3578b584e0d4073dd1fda24a9 -->

```csharp
InnoEngine.Audio.AudioCompletionReason.DecodeFailed = 3
```

Encoded data could not be prepared or decoded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L117).

## `DeviceLost`

<a id="api-4d1a09f1ae8a27b0"></a>
<!-- api: F:InnoEngine.Audio.AudioCompletionReason.DeviceLost 45aee7a4a9bdaf3e7d0e589f83cc78c9960fedbc747176a6d429be684bfd8efb -->

```csharp
InnoEngine.Audio.AudioCompletionReason.DeviceLost = 4
```

Playback ended because the owning device generation was lost.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L122).

## `NaturalEnd`

<a id="api-a22bcf99699d9faf"></a>
<!-- api: F:InnoEngine.Audio.AudioCompletionReason.NaturalEnd 6922019c4477658aa5fa1482bbf4a26f004696cbf5516abd10218b432df182fe -->

```csharp
InnoEngine.Audio.AudioCompletionReason.NaturalEnd = 0
```

The clip reached its natural end.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L102).

## `Stolen`

<a id="api-77d407b80cc4f873"></a>
<!-- api: F:InnoEngine.Audio.AudioCompletionReason.Stolen 702e9945b0a774484babb001ac282e100123b16b21232d50b7691ebc26735dd3 -->

```csharp
InnoEngine.Audio.AudioCompletionReason.Stolen = 2
```

The runtime reclaimed the voice to satisfy its voice budget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L112).

## `Stopped`

<a id="api-7fa593ac7e205bf7"></a>
<!-- api: F:InnoEngine.Audio.AudioCompletionReason.Stopped 7f0381e0bac13678cb05be5f9c129283211239471f0d7b83a69163b6d281efed -->

```csharp
InnoEngine.Audio.AudioCompletionReason.Stopped = 1
```

A caller explicitly stopped the voice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioTypes.cs#L107).
