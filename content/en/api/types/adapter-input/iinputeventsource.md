---
title: "IInputEventSource"
description: "Reference for IInputEventSource in Inno.Adapter.Input."
uid: api.inno.adapter.input.2f040db5b109a7f3
kind: api
owners:
  - Inno.Adapter.Input
apiSurface: source-clr
contracts:
  - project.inno-adapter-input#ownership-and-threading
---
# `IInputEventSource`

This reference describes `IInputEventSource` in `Inno.Adapter.Input`. Read the [shared contract](../../projects/inno-adapter-input.md#ownership-and-threading) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateBackend`](#api-4cadcaa4705c910e) | Method |
| [`ProcessEvent`](#api-dee328138c75b10b) | Method |

## Type declaration

<a id="api-2f040db5b109a7f3"></a>
<!-- api: T:Inno.Adapter.Input.IInputEventSource 90c1dc2b045223e262ff30a708bfc62c1e85ada0a82210a96860d352100f3d61 -->

```csharp
public interface Inno.Adapter.Input.IInputEventSource : System.IDisposable
```

Routes backend-neutral platform events into isolated runtime input backends.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/IInputEventSource.cs#L10).

## `CreateBackend`

<a id="api-4cadcaa4705c910e"></a>
<!-- api: M:Inno.Adapter.Input.IInputEventSource.CreateBackend bc1933e35f179670907cb9b5197ce8a872f188eb225e229e8a27bd3cf3556ef8 -->

```csharp
Inno.Input.IInputBackend Inno.Adapter.Input.IInputEventSource.CreateBackend()
```

Creates an isolated input backend owned by one runtime session.

**Returns:** A caller-owned input backend connected to this event source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/IInputEventSource.cs#L18).

## `ProcessEvent`

<a id="api-dee328138c75b10b"></a>
<!-- api: M:Inno.Adapter.Input.IInputEventSource.ProcessEvent(Inno.Core.Events.Event) 99dd9fde6de94727f8cfe5516f4190d79be5281ceb3ed4f11aaae9bdf048c3ba -->

```csharp
void Inno.Adapter.Input.IInputEventSource.ProcessEvent(Inno.Core.Events.Event evnt)
```

Routes one backend-neutral platform event to active input backends.

**Parameter `evnt`:** Event produced by the active platform application.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/IInputEventSource.cs#L26).
