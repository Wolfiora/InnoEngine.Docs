---
title: "AudioContentProviderContext"
description: "Reference for AudioContentProviderContext in Inno.Audio."
uid: api.inno.audio.runtime-script.233245aa9fe3551a
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioContentProviderContext`

This reference describes `AudioContentProviderContext` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a5b1bb8a126229c2) | Method |
| [`Dispose`](#api-5083a1d8ba55ed17) | Method |
| [`Submit`](#api-3e4b8911c8af2a00) | Method |
| [`Submit`](#api-190534e980d65c0d) | Method |
| [`capacity`](#api-2f76045cefd15f54) | Property |
| [`content`](#api-4721634bde0f815f) | Property |
| [`deltaTime`](#api-7d57d3845ab39c34) | Property |
| [`emitters`](#api-57e19451fce1c59c) | Property |
| [`listeners`](#api-3a2d7188ba4b7b55) | Property |

## Type declaration

<a id="api-233245aa9fe3551a"></a>
<!-- api: T:InnoEngine.Audio.AudioContentProviderContext 5f6d4efc373b4de9880e142157842724be0cc0bd31b0233a299108661f49b477 -->

```csharp
public sealed class InnoEngine.Audio.AudioContentProviderContext : System.IDisposable
```

Collects one bounded, atomic provider contribution on the owning control thread.

**Constraints:** The host disposes this borrowed context when the provider returns. A rejected submission invalidates the
entire contribution, even if the provider catches the exception. The context does not own the content scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L50).

## `#ctor`

<a id="api-a5b1bb8a126229c2"></a>
<!-- api: M:InnoEngine.Audio.AudioContentProviderContext.#ctor(InnoEngine.References.ContentReadScope,System.Single,System.Int32) 4b7c072956d528f731177814e2055b3b2d1493b4d99a86feebbc3af2ab9d02ae -->

```csharp
public InnoEngine.Audio.AudioContentProviderContext.AudioContentProviderContext(InnoEngine.References.ContentReadScope content, float deltaTime, int capacity = 1024)
```

Opens a control-thread snapshot collector over one content read scope.

**Parameter `content`:** The caller-owned identity read scope.

**Parameter `deltaTime`:** Finite non-negative time elapsed since the previous update.

**Parameter `capacity`:** Maximum combined emitter and listener count accepted by this contribution. Zero permits an empty contribution only.

**Throws `System.ArgumentOutOfRangeException`:** The elapsed time is invalid or capacity is negative.

**Throws `System.ArgumentNullException`:** The borrowed content scope is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L77).

## `Dispose`

<a id="api-5083a1d8ba55ed17"></a>
<!-- api: M:InnoEngine.Audio.AudioContentProviderContext.Dispose 91edd94b89c8f2bee542bdbb363919c9d2846197569df3fcf47bf083746a140c -->

```csharp
public void InnoEngine.Audio.AudioContentProviderContext.Dispose()
```

Revokes submission and releases collected references without disposing the borrowed content scope.

**Throws `System.InvalidOperationException`:** Disposal occurs off the owning control thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L210).

## `Submit`

<a id="api-3e4b8911c8af2a00"></a>
<!-- api: M:InnoEngine.Audio.AudioContentProviderContext.Submit(InnoEngine.Audio.AudioEmitterSnapshot) 62926c13d9f9f12e5513baa89e6e47e8f29021df187bdcd5a27b3256ec8ca24e -->

```csharp
public void InnoEngine.Audio.AudioContentProviderContext.Submit(InnoEngine.Audio.AudioEmitterSnapshot emitter)
```

Submits one immutable emitter snapshot for runtime synchronization.

**Parameter `emitter`:** Current state for one stable emitter identity.

**Throws `System.ArgumentException`:** The emitter is uninitialized or its identity duplicates a submission in this contribution.

**Throws `System.InvalidOperationException`:** The budget is exhausted, the contribution was rejected, or access occurs off the owner thread.

**Throws `System.ObjectDisposedException`:** This provider invocation has ended.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L134).

## `Submit`

<a id="api-190534e980d65c0d"></a>
<!-- api: M:InnoEngine.Audio.AudioContentProviderContext.Submit(InnoEngine.Audio.AudioListenerSnapshot) 67f1272c170194302fc6222a8bbd345d0c45a71e48a05eeafae3c0d6944080a7 -->

```csharp
public void InnoEngine.Audio.AudioContentProviderContext.Submit(InnoEngine.Audio.AudioListenerSnapshot listener)
```

Submits one immutable listener snapshot for runtime selection.

**Parameter `listener`:** Current state for one stable listener identity.

**Throws `System.ArgumentException`:** The listener is uninitialized or its identity duplicates a submission in this contribution.

**Throws `System.InvalidOperationException`:** The budget is exhausted, the contribution was rejected, or access occurs off the owner thread.

**Throws `System.ObjectDisposedException`:** This provider invocation has ended.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L161).

## `capacity`

<a id="api-2f76045cefd15f54"></a>
<!-- api: P:InnoEngine.Audio.AudioContentProviderContext.capacity 32a7019c17dcfc4567dd3891dd3071cf3e06bb686114692de6b98a4e1913751f -->

```csharp
public int InnoEngine.Audio.AudioContentProviderContext.capacity { get; }
```

Gets the immutable combined snapshot budget assigned to this invocation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L117).

## `content`

<a id="api-4721634bde0f815f"></a>
<!-- api: P:InnoEngine.Audio.AudioContentProviderContext.content 94608606b3e67e1fcc7491e6afbcce2eec400bd28f09eb9142f66ed128317854 -->

```csharp
public InnoEngine.References.ContentReadScope InnoEngine.Audio.AudioContentProviderContext.content { get; }
```

Gets explicit host content visible during this update.

**Throws `System.ObjectDisposedException`:** This provider invocation has ended.

**Throws `System.InvalidOperationException`:** Access occurs off the owning control thread or a submission was rejected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L100).

## `deltaTime`

<a id="api-7d57d3845ab39c34"></a>
<!-- api: P:InnoEngine.Audio.AudioContentProviderContext.deltaTime cdcc1d543eb5c3ac8b2698ab0c900ef5974dbe2fc3b99bcfbf4001d641847c50 -->

```csharp
public float InnoEngine.Audio.AudioContentProviderContext.deltaTime { get; }
```

Gets non-negative elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L112).

## `emitters`

<a id="api-57e19451fce1c59c"></a>
<!-- api: P:InnoEngine.Audio.AudioContentProviderContext.emitters 681dc7e25103552feaa4354e646b8e88755f8b8784877e16de748a9311d9506b -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Audio.AudioEmitterSnapshot> InnoEngine.Audio.AudioContentProviderContext.emitters { get; }
```

Gets a frozen copy of submitted source state in provider order.

**Throws `System.ObjectDisposedException`:** This provider invocation has ended.

**Throws `System.InvalidOperationException`:** The contribution was rejected or access occurs off the owning control thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L177).

## `listeners`

<a id="api-3a2d7188ba4b7b55"></a>
<!-- api: P:InnoEngine.Audio.AudioContentProviderContext.listeners de3e04cdf4a9f44ad7301f08ba36112c8e482ba193e4bebdced240b4182dac51 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Audio.AudioListenerSnapshot> InnoEngine.Audio.AudioContentProviderContext.listeners { get; }
```

Gets a frozen copy of submitted listener state in provider order.

**Throws `System.ObjectDisposedException`:** This provider invocation has ended.

**Throws `System.InvalidOperationException`:** The contribution was rejected or access occurs off the owning control thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L195).
