---
title: "EventInputBackend"
description: "Reference for EventInputBackend in Inno.Adapter.Input."
uid: api.inno.adapter.input.0c90a7186f7c398e
kind: api
owners:
  - Inno.Adapter.Input
apiSurface: source-clr
contracts:
  - project.inno-adapter-input#ownership-and-threading
---
# `EventInputBackend`

This reference describes `EventInputBackend` in `Inno.Adapter.Input`. Read the [shared contract](../../projects/inno-adapter-input.md#ownership-and-threading) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Input.IInputBackend`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4b19d2a5deabca2e) | Method |
| [`Capture`](#api-3cebe24955bbc544) | Method |
| [`Dispose`](#api-eda9bae81ff7fce6) | Method |
| [`ProcessEvent`](#api-c592985070d15f8e) | Method |

## Type declaration

<a id="api-0c90a7186f7c398e"></a>
<!-- api: T:Inno.Adapter.Input.EventInputBackend 3de6603b43fb741660968ab84f83d2e343dac37f49276817d13fd67537b9fbb7 -->

```csharp
public sealed class Inno.Adapter.Input.EventInputBackend : Inno.Input.IInputBackend
```

Accumulates backend-neutral platform events into complete runtime input snapshots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/EventInputBackend.cs#L15).

## `#ctor`

<a id="api-4b19d2a5deabca2e"></a>
<!-- api: M:Inno.Adapter.Input.EventInputBackend.#ctor(System.UInt32) 3f338962d1bf2b9896aa66f18639372755c287ba6b2763378ec2b11599d9e6c1 -->

```csharp
public Inno.Adapter.Input.EventInputBackend.EventInputBackend(uint windowId)
```

Creates an event-backed input adapter for one platform window.

**Parameter `windowId`:** The translated event window identifier, or zero to accept input from every window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/EventInputBackend.cs#L41).

## `Capture`

<a id="api-3cebe24955bbc544"></a>
<!-- api: M:Inno.Adapter.Input.EventInputBackend.Capture(System.Int64) 81313ec77f5493c99dfda0c4a76eb432c0cacdec5020abf444592b47f3974e20 -->

```csharp
public Inno.Input.InputSnapshot Inno.Adapter.Input.EventInputBackend.Capture(long frameIndex)
```

Captures an immutable snapshot of the current observable state.

**Parameter `frameIndex`:** The monotonic frame identity associated with this operation.

**Returns:** The validated input snapshot that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/EventInputBackend.cs#L137).

## `Dispose`

<a id="api-eda9bae81ff7fce6"></a>
<!-- api: M:Inno.Adapter.Input.EventInputBackend.Dispose c7c6726ad9361c63654e3b610c5bf2301f93bde2b3428862d55d1dc566c09b24 -->

```csharp
public void Inno.Adapter.Input.EventInputBackend.Dispose()
```

Releases the resources owned by this implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/EventInputBackend.cs#L169).

## `ProcessEvent`

<a id="api-c592985070d15f8e"></a>
<!-- api: M:Inno.Adapter.Input.EventInputBackend.ProcessEvent(Inno.Core.Events.Event) c970b9313abfd3ec6bfac0f093123035267d980335e750515d95843fb5b1e264 -->

```csharp
public void Inno.Adapter.Input.EventInputBackend.ProcessEvent(Inno.Core.Events.Event evnt)
```

Applies one backend-neutral event translated by the owning platform application.

**Parameter `evnt`:** The event observed before runtime dispatch.

**Throws `System.ArgumentNullException`:** Thrown when `evnt` is null.

**Throws `System.ObjectDisposedException`:** Thrown after this backend is disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/EventInputBackend.cs#L66).
