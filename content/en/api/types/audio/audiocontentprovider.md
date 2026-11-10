---
title: "AudioContentProvider"
description: "Reference for AudioContentProvider in Inno.Audio."
uid: api.inno.audio.b2fdd25fcac700a8
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioContentProvider`

This reference describes `AudioContentProvider` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a8e685d27870860a) | Method |
| [`Dispose`](#api-78c3f9fdd6fcf2a9) | Method |
| [`Dispose`](#api-07764cfe9d95e7f9) | Method |
| [`Submit`](#api-23f726ba067161d9) | Method |

## Type declaration

<a id="api-b2fdd25fcac700a8"></a>
<!-- api: T:Inno.Audio.AudioContentProvider 5c3279fbf73dae080504d46f7e2aef7296dc21718943bf375953763be9a1374e -->

```csharp
public abstract class Inno.Audio.AudioContentProvider : System.IDisposable
```

Converts arbitrary host-owned content into backend-neutral emitter and listener snapshots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L252).

## `#ctor`

<a id="api-a8e685d27870860a"></a>
<!-- api: M:Inno.Audio.AudioContentProvider.#ctor 1536382d7b136218e9f2a91d67063d376af0257bb00581be6c8dad10debd926e -->

```csharp
protected Inno.Audio.AudioContentProvider.AudioContentProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L252).

## `Dispose`

<a id="api-78c3f9fdd6fcf2a9"></a>
<!-- api: M:Inno.Audio.AudioContentProvider.Dispose 18ad1eb6d9e2f85af84767b2847e8e9402cf90b711ace30f9bd28cea52bf9263 -->

```csharp
public void Inno.Audio.AudioContentProvider.Dispose()
```

Releases generation-scoped provider state.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Owned work is still draining. The generation owner must retain this provider and retry disposal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L270).

## `Dispose`

<a id="api-07764cfe9d95e7f9"></a>
<!-- api: M:Inno.Audio.AudioContentProvider.Dispose(System.Boolean) b114591d3f1ed4334ed6d1a3a41e5ad7fd339d4d6b1f1e10ad5b2f85eb4808a7 -->

```csharp
protected virtual void Inno.Audio.AudioContentProvider.Dispose(bool disposing)
```

Releases managed generation-scoped state.

**Parameter `disposing`:** Always `true` for explicit disposal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L297).

## `Submit`

<a id="api-23f726ba067161d9"></a>
<!-- api: M:Inno.Audio.AudioContentProvider.Submit(Inno.Audio.AudioContentProviderContext) 4cfdec2a5aaad0dae53d5dc6d1fa36e0d3883e48eaa298adde98e0b68069ac8f -->

```csharp
public abstract void Inno.Audio.AudioContentProvider.Submit(Inno.Audio.AudioContentProviderContext context)
```

Submits current immutable audio snapshots on the host control thread.

**Parameter `context`:** Update-scoped content and snapshot collector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L262).
