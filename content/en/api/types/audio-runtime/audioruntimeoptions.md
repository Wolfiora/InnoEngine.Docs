---
title: "AudioRuntimeOptions"
description: "Reference for AudioRuntimeOptions in Inno.Audio.Runtime."
uid: api.inno.audio.runtime.40ad330200c59bfc
kind: api
owners:
  - Inno.Audio.Runtime
apiSurface: source-clr
contracts:
  - project.inno-audio-runtime#composition-and-lifetime-contract
---
# `AudioRuntimeOptions`

This reference describes `AudioRuntimeOptions` in `Inno.Audio.Runtime`. Read the [shared contract](../../projects/inno-audio-runtime.md#composition-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dbb08affdc31a7b4) | Method |
| [`automaticStreamingThresholdBytes`](#api-8e71fcfd65399814) | Property |
| [`decodedCacheBudgetBytes`](#api-f45c5096194be750) | Property |
| [`deviceRecoveryIntervalSeconds`](#api-9991551b35db7674) | Property |
| [`maxContentSnapshots`](#api-b553bb20405ad919) | Property |
| [`maxPendingPreloads`](#api-e54342ddfe30bfea) | Property |
| [`maxVoices`](#api-0d93f693b1815422) | Property |

## Type declaration

<a id="api-40ad330200c59bfc"></a>
<!-- api: T:Inno.Audio.Runtime.AudioRuntimeOptions b33e6638b00333a9e4d211d7b59ee0cd8b1880ad0081a3f0a0af8d9f7e8fd761 -->

```csharp
public sealed class Inno.Audio.Runtime.AudioRuntimeOptions
```

Configures bounded audio runtime resource policies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntimeOptions.cs#L8).

## `#ctor`

<a id="api-dbb08affdc31a7b4"></a>
<!-- api: M:Inno.Audio.Runtime.AudioRuntimeOptions.#ctor 113175c0d4797f978c7591de63e5bb35641f0dc19e417fd6dd3d5d40d4ee9b25 -->

```csharp
public Inno.Audio.Runtime.AudioRuntimeOptions.AudioRuntimeOptions()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntimeOptions.cs#L8).

## `automaticStreamingThresholdBytes`

<a id="api-8e71fcfd65399814"></a>
<!-- api: P:Inno.Audio.Runtime.AudioRuntimeOptions.automaticStreamingThresholdBytes 5977d7c5f981c25f39c539342769efa360a6a9370e10220af0aa21f397a76bd8 -->

```csharp
public long Inno.Audio.Runtime.AudioRuntimeOptions.automaticStreamingThresholdBytes { get; set; }
```

Gets or sets the encoded byte threshold used by automatic load-mode selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntimeOptions.cs#L33).

## `decodedCacheBudgetBytes`

<a id="api-f45c5096194be750"></a>
<!-- api: P:Inno.Audio.Runtime.AudioRuntimeOptions.decodedCacheBudgetBytes 3a6833813b9aeec05d753c80bc59f7e99b24ae1f69eed87a9cb384838c624dac -->

```csharp
public long Inno.Audio.Runtime.AudioRuntimeOptions.decodedCacheBudgetBytes { get; set; }
```

Gets or sets the decoded clip cache budget in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntimeOptions.cs#L28).

## `deviceRecoveryIntervalSeconds`

<a id="api-9991551b35db7674"></a>
<!-- api: P:Inno.Audio.Runtime.AudioRuntimeOptions.deviceRecoveryIntervalSeconds 82904c1b4be8299657ca022380b7f339110637ac4390d2e89ec00235f02f7e51 -->

```csharp
public float Inno.Audio.Runtime.AudioRuntimeOptions.deviceRecoveryIntervalSeconds { get; set; }
```

Gets or sets the positive delay between output-device recovery attempts in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntimeOptions.cs#L38).

## `maxContentSnapshots`

<a id="api-b553bb20405ad919"></a>
<!-- api: P:Inno.Audio.Runtime.AudioRuntimeOptions.maxContentSnapshots cb9a65d414d68e32ccd19e7a0c16827cbecc8e95bf81ff9af510256e5d186c4d -->

```csharp
public int Inno.Audio.Runtime.AudioRuntimeOptions.maxContentSnapshots { get; set; }
```

Gets or sets the maximum combined emitter and listener snapshots accepted across all providers per update.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntimeOptions.cs#L23).

## `maxPendingPreloads`

<a id="api-e54342ddfe30bfea"></a>
<!-- api: P:Inno.Audio.Runtime.AudioRuntimeOptions.maxPendingPreloads 4bd4763d778db1f42fe7e337f84f6270e3399ca0286e9127e3264897df30dc9c -->

```csharp
public int Inno.Audio.Runtime.AudioRuntimeOptions.maxPendingPreloads { get; set; }
```

Gets or sets the maximum number of unfinished preload waiters accepted by this owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntimeOptions.cs#L18).

## `maxVoices`

<a id="api-0d93f693b1815422"></a>
<!-- api: P:Inno.Audio.Runtime.AudioRuntimeOptions.maxVoices db2699e818846b7f33a37b388fbae5a9ac807c0136a462f96e1ba24bcdda4076 -->

```csharp
public int Inno.Audio.Runtime.AudioRuntimeOptions.maxVoices { get; set; }
```

Gets or sets the maximum number of preparing, scheduled, paused, and playing voices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioRuntimeOptions.cs#L13).
