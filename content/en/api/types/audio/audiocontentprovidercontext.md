---
title: "AudioContentProviderContext"
description: "Reference for AudioContentProviderContext in Inno.Audio."
uid: api.inno.audio.9ba5ad2168e42c86
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioContentProviderContext`

This reference describes `AudioContentProviderContext` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a0ab6a7239b347dd) | Method |
| [`Dispose`](#api-ff7f0fad07aa3d41) | Method |
| [`Submit`](#api-9209cc0f5deb45a1) | Method |
| [`Submit`](#api-76832aed389fe4db) | Method |
| [`capacity`](#api-f899246a48ea2458) | Property |
| [`content`](#api-7beb77d500134e67) | Property |
| [`deltaTime`](#api-46065ceb82614af6) | Property |
| [`emitters`](#api-38cf95412a2bb24a) | Property |
| [`listeners`](#api-bb5dd9c3bc3f0654) | Property |

## Type declaration

<a id="api-9ba5ad2168e42c86"></a>
<!-- api: T:Inno.Audio.AudioContentProviderContext 967a147a11e8e5b912041123a70d0f9bb1311cbf3b811871a6e9621e3b9414d3 -->

```csharp
public sealed class Inno.Audio.AudioContentProviderContext : System.IDisposable
```

Collects one bounded, atomic provider contribution on the owning control thread.

**Constraints:** The host disposes this borrowed context when the provider returns. A rejected submission invalidates the
entire contribution, even if the provider catches the exception. The context does not own the content scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L50).

## `#ctor`

<a id="api-a0ab6a7239b347dd"></a>
<!-- api: M:Inno.Audio.AudioContentProviderContext.#ctor(Inno.References.ContentReadScope,System.Single,System.Int32) df0d37eb83eff0236d707e75488cc3ba6123789d4a5f008eeaa5b274a9bc5d37 -->

```csharp
public Inno.Audio.AudioContentProviderContext.AudioContentProviderContext(Inno.References.ContentReadScope content, float deltaTime, int capacity = 1024)
```

Opens a control-thread snapshot collector over one content read scope.

**Parameter `content`:** The caller-owned identity read scope.

**Parameter `deltaTime`:** Finite non-negative time elapsed since the previous update.

**Parameter `capacity`:** Maximum combined emitter and listener count accepted by this contribution. Zero permits an empty contribution only.

**Throws `System.ArgumentOutOfRangeException`:** The elapsed time is invalid or capacity is negative.

**Throws `System.ArgumentNullException`:** The borrowed content scope is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L77).

## `Dispose`

<a id="api-ff7f0fad07aa3d41"></a>
<!-- api: M:Inno.Audio.AudioContentProviderContext.Dispose 7e5225719a3810b33e18e59c77fafe925770e6dcbf8a8cde27eacc01fcf1c4f6 -->

```csharp
public void Inno.Audio.AudioContentProviderContext.Dispose()
```

Revokes submission and releases collected references without disposing the borrowed content scope.

**Throws `System.InvalidOperationException`:** Disposal occurs off the owning control thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L210).

## `Submit`

<a id="api-9209cc0f5deb45a1"></a>
<!-- api: M:Inno.Audio.AudioContentProviderContext.Submit(Inno.Audio.AudioEmitterSnapshot) b620a1444d1efeb61229ea7eadc73f52b700fe6c6687d7e98649888398605af5 -->

```csharp
public void Inno.Audio.AudioContentProviderContext.Submit(Inno.Audio.AudioEmitterSnapshot emitter)
```

Submits one immutable emitter snapshot for runtime synchronization.

**Parameter `emitter`:** Current state for one stable emitter identity.

**Throws `System.ArgumentException`:** The emitter is uninitialized or its identity duplicates a submission in this contribution.

**Throws `System.InvalidOperationException`:** The budget is exhausted, the contribution was rejected, or access occurs off the owner thread.

**Throws `System.ObjectDisposedException`:** This provider invocation has ended.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L134).

## `Submit`

<a id="api-76832aed389fe4db"></a>
<!-- api: M:Inno.Audio.AudioContentProviderContext.Submit(Inno.Audio.AudioListenerSnapshot) e619b12461caa2e7201e97f7c83087cd8f13df11293d787ee03d7f2e248bc5b6 -->

```csharp
public void Inno.Audio.AudioContentProviderContext.Submit(Inno.Audio.AudioListenerSnapshot listener)
```

Submits one immutable listener snapshot for runtime selection.

**Parameter `listener`:** Current state for one stable listener identity.

**Throws `System.ArgumentException`:** The listener is uninitialized or its identity duplicates a submission in this contribution.

**Throws `System.InvalidOperationException`:** The budget is exhausted, the contribution was rejected, or access occurs off the owner thread.

**Throws `System.ObjectDisposedException`:** This provider invocation has ended.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L161).

## `capacity`

<a id="api-f899246a48ea2458"></a>
<!-- api: P:Inno.Audio.AudioContentProviderContext.capacity e4900c08fe175db977de10213b4181caac800530cb2640b47d982511e6a9fd43 -->

```csharp
public int Inno.Audio.AudioContentProviderContext.capacity { get; }
```

Gets the immutable combined snapshot budget assigned to this invocation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L117).

## `content`

<a id="api-7beb77d500134e67"></a>
<!-- api: P:Inno.Audio.AudioContentProviderContext.content 6c4b16430660b8da3b1ceb3647a433233ad13f87027d4c48710843aa5bb975b8 -->

```csharp
public Inno.References.ContentReadScope Inno.Audio.AudioContentProviderContext.content { get; }
```

Gets explicit host content visible during this update.

**Throws `System.ObjectDisposedException`:** This provider invocation has ended.

**Throws `System.InvalidOperationException`:** Access occurs off the owning control thread or a submission was rejected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L100).

## `deltaTime`

<a id="api-46065ceb82614af6"></a>
<!-- api: P:Inno.Audio.AudioContentProviderContext.deltaTime ba00030bc4b43c5218bb24836acbaa2768753dbe6845f95904e7b31bb5318300 -->

```csharp
public float Inno.Audio.AudioContentProviderContext.deltaTime { get; }
```

Gets non-negative elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L112).

## `emitters`

<a id="api-38cf95412a2bb24a"></a>
<!-- api: P:Inno.Audio.AudioContentProviderContext.emitters db1860b19617b7d00b25c3ca80eb06505ea81811bd173f61b254daca2700a382 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Audio.AudioEmitterSnapshot> Inno.Audio.AudioContentProviderContext.emitters { get; }
```

Gets a frozen copy of submitted source state in provider order.

**Throws `System.ObjectDisposedException`:** This provider invocation has ended.

**Throws `System.InvalidOperationException`:** The contribution was rejected or access occurs off the owning control thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L177).

## `listeners`

<a id="api-bb5dd9c3bc3f0654"></a>
<!-- api: P:Inno.Audio.AudioContentProviderContext.listeners b139134ef3a2bc159ee2d30529e50cedda92f6a825427a4972d5e8e7bbfa96df -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Audio.AudioListenerSnapshot> Inno.Audio.AudioContentProviderContext.listeners { get; }
```

Gets a frozen copy of submitted listener state in provider order.

**Throws `System.ObjectDisposedException`:** This provider invocation has ended.

**Throws `System.InvalidOperationException`:** The contribution was rejected or access occurs off the owning control thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L195).
