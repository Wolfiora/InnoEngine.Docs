---
title: "AudioContentProvider"
description: "Reference for AudioContentProvider in Inno.Audio."
uid: api.inno.audio.runtime-script.4ffad9a25169b94e
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioContentProvider`

This reference describes `AudioContentProvider` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d8e49cd9b539a97d) | Method |
| [`Dispose`](#api-a25ebfbfa99c1e66) | Method |
| [`Dispose`](#api-b22f42874285f5dd) | Method |
| [`Submit`](#api-ba1360e1389874e7) | Method |

## Type declaration

<a id="api-4ffad9a25169b94e"></a>
<!-- api: T:InnoEngine.Audio.AudioContentProvider ef7c039d1b17aecbb5cd8e5fee7ff90747d47a3556f6583a186502689ce117b8 -->

```csharp
public abstract class InnoEngine.Audio.AudioContentProvider : System.IDisposable
```

Converts arbitrary host-owned content into backend-neutral emitter and listener snapshots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L252).

## `#ctor`

<a id="api-d8e49cd9b539a97d"></a>
<!-- api: M:InnoEngine.Audio.AudioContentProvider.#ctor a076345014d4281cd1e2f53206d19f3dbba6943229418d3d7d43f45763dfcbdd -->

```csharp
protected InnoEngine.Audio.AudioContentProvider.AudioContentProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L252).

## `Dispose`

<a id="api-a25ebfbfa99c1e66"></a>
<!-- api: M:InnoEngine.Audio.AudioContentProvider.Dispose 4e0ae69466ac0904979bfdb88e5c5df47d001e60798a896164fca0de42302dfb -->

```csharp
public void InnoEngine.Audio.AudioContentProvider.Dispose()
```

Releases generation-scoped provider state.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Owned work is still draining. The generation owner must retain this provider and retry disposal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L270).

## `Dispose`

<a id="api-b22f42874285f5dd"></a>
<!-- api: M:InnoEngine.Audio.AudioContentProvider.Dispose(System.Boolean) e0fe25cc9e2939efe84f917325e29305d44097c120fd977f70a9dd92ebb74b9d -->

```csharp
protected virtual void InnoEngine.Audio.AudioContentProvider.Dispose(bool disposing)
```

Releases managed generation-scoped state.

**Parameter `disposing`:** Always `true` for explicit disposal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L297).

## `Submit`

<a id="api-ba1360e1389874e7"></a>
<!-- api: M:InnoEngine.Audio.AudioContentProvider.Submit(InnoEngine.Audio.AudioContentProviderContext) bf2dc9a6af09ac0798772a895534c3902db0abec52de8f2dccd3c1475d0b495e -->

```csharp
public abstract void InnoEngine.Audio.AudioContentProvider.Submit(InnoEngine.Audio.AudioContentProviderContext context)
```

Submits current immutable audio snapshots on the host control thread.

**Parameter `context`:** Update-scoped content and snapshot collector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L262).
