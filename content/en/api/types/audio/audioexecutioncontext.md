---
title: "AudioExecutionContext"
description: "Reference for AudioExecutionContext in Inno.Audio."
uid: api.inno.audio.1101111a1d7eda35
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioExecutionContext`

This reference describes `AudioExecutionContext` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`EnterScope`](#api-bed98f3ed33e5a57) | Method |
| [`current`](#api-4b352fd34c537861) | Property |

## Type declaration

<a id="api-1101111a1d7eda35"></a>
<!-- api: T:Inno.Audio.AudioExecutionContext 5985ce9c08e5dfb81d8e671ee1d3c25f69827ec34e98740a67e4812fb283eac5 -->

```csharp
public static class Inno.Audio.AudioExecutionContext
```

Binds one host-owned audio service to the current asynchronous execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L11).

## `EnterScope`

<a id="api-bed98f3ed33e5a57"></a>
<!-- api: M:Inno.Audio.AudioExecutionContext.EnterScope(Inno.Audio.IAudioService) a4e4f55cf724ee74e93ce5c64f1cd889e010dee5157c3c486bd8f7864afc37b8 -->

```csharp
public static System.IDisposable Inno.Audio.AudioExecutionContext.EnterScope(Inno.Audio.IAudioService audio)
```

Binds an audio service until the returned strict last-in-first-out scope is disposed.

**Parameter `audio`:** Host-owned audio service exposed to script-facing operations.

**Returns:** A strict last-in-first-out scope owned by the caller.

**Throws `System.ArgumentNullException`:** Thrown when `audio` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L35).

## `current`

<a id="api-4b352fd34c537861"></a>
<!-- api: P:Inno.Audio.AudioExecutionContext.current 48394161decdada4a7b14f5b0a00acd51052fdc5800477fd1916e5206f292ef4 -->

```csharp
public static Inno.Audio.IAudioService Inno.Audio.AudioExecutionContext.current { get; }
```

Gets the audio service bound to the current asynchronous execution context.

**Throws `System.InvalidOperationException`:** Thrown when no audio service is active for the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/Audio.cs#L21).
