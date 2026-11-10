---
title: "EventInputSource"
description: "Reference for EventInputSource in Inno.Adapter.Input."
uid: api.inno.adapter.input.07d8bc8b1e347d4c
kind: api
owners:
  - Inno.Adapter.Input
apiSurface: source-clr
contracts:
  - project.inno-adapter-input#ownership-and-threading
---
# `EventInputSource`

This reference describes `EventInputSource` in `Inno.Adapter.Input`. Read the [shared contract](../../projects/inno-adapter-input.md#ownership-and-threading) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.Input.IInputEventSource`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3794fd70fc6b3202) | Method |
| [`CreateBackend`](#api-a3641553405f8c16) | Method |
| [`Dispose`](#api-20275aefae97bc1b) | Method |
| [`ProcessEvent`](#api-20d8895c5612a448) | Method |

## Type declaration

<a id="api-07d8bc8b1e347d4c"></a>
<!-- api: T:Inno.Adapter.Input.EventInputSource 6cb95109eaa092daf00988d9454f043f86e3878a627803f70645bd08df52fff5 -->

```csharp
public sealed class Inno.Adapter.Input.EventInputSource : Inno.Adapter.Input.IInputEventSource
```

Routes backend-neutral platform events through Core Events to isolated runtime-session input backends.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/EventInputSource.cs#L12).

## `#ctor`

<a id="api-3794fd70fc6b3202"></a>
<!-- api: M:Inno.Adapter.Input.EventInputSource.#ctor(System.UInt32) 1c9d84397792c36f71df282214744f5a1f53019aca7764359bc86b7777590d10 -->

```csharp
public Inno.Adapter.Input.EventInputSource.EventInputSource(uint windowId)
```

Creates an input source restricted to one window, or to all windows when the identifier is zero.

**Parameter `windowId`:** The platform window identifier accepted by this source; zero accepts events from every window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/EventInputSource.cs#L26).

## `CreateBackend`

<a id="api-a3641553405f8c16"></a>
<!-- api: M:Inno.Adapter.Input.EventInputSource.CreateBackend 6dae84a09f3001dbaad4782d003c70d5b857fe61e61e1bc986ad45be53409afe -->

```csharp
public Inno.Input.IInputBackend Inno.Adapter.Input.EventInputSource.CreateBackend()
```

Creates one isolated backend that receives subsequent events from this source.

**Returns:** A caller-owned backend whose disposal unregisters it from this source.

**Throws `System.ObjectDisposedException`:** Thrown after this source has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/EventInputSource.cs#L41).

## `Dispose`

<a id="api-20275aefae97bc1b"></a>
<!-- api: M:Inno.Adapter.Input.EventInputSource.Dispose 0eee4584fe8e2e72537a73920b69c77299ca270a391a445b6767c1cab1e22a3b -->

```csharp
public void Inno.Adapter.Input.EventInputSource.Dispose()
```

Disconnects all session backends and rejects subsequent event delivery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/EventInputSource.cs#L72).

## `ProcessEvent`

<a id="api-20d8895c5612a448"></a>
<!-- api: M:Inno.Adapter.Input.EventInputSource.ProcessEvent(Inno.Core.Events.Event) b2b260e4197c1f24550886f52b09a93d6759de4564cdf6d0c9cf95080b15de11 -->

```csharp
public void Inno.Adapter.Input.EventInputSource.ProcessEvent(Inno.Core.Events.Event evnt)
```

Dispatches one translated platform event to active session backends, honoring event consumption.

**Parameter `evnt`:** The backend-neutral event produced by a platform adapter.

**Throws `System.ArgumentNullException`:** Thrown when `evnt` is null.

**Throws `System.ObjectDisposedException`:** Thrown after this source has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/EventInputSource.cs#L62).
