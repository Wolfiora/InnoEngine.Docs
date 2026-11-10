---
title: "EventInputBackendProvider"
description: "Reference for EventInputBackendProvider in Inno.Adapter.Input."
uid: api.inno.adapter.input.a3cb80d3e37d6f8a
kind: api
owners:
  - Inno.Adapter.Input
apiSurface: source-clr
contracts:
  - project.inno-adapter-input#ownership-and-threading
---
# `EventInputBackendProvider`

This reference describes `EventInputBackendProvider` in `Inno.Adapter.Input`. Read the [shared contract](../../projects/inno-adapter-input.md#ownership-and-threading) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Adapter.Input.InputBackendProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-59910159d954f15e) | Method |
| [`CreateEventSource`](#api-dc961e2bfcb9ba17) | Method |

## Type declaration

<a id="api-a3cb80d3e37d6f8a"></a>
<!-- api: T:Inno.Adapter.Input.EventInputBackendProvider 782a330b5dd86a1d719e98c5998f91e4f042ff1eeddb46fa2dc299feaedd1029 -->

```csharp
public sealed class Inno.Adapter.Input.EventInputBackendProvider : Inno.Adapter.Input.InputBackendProvider
```

Supplies the common event implementation through the neutral input creation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/EventInputBackendProvider.cs#L9).

## `#ctor`

<a id="api-59910159d954f15e"></a>
<!-- api: M:Inno.Adapter.Input.EventInputBackendProvider.#ctor 4aaec93cd6e320f1a18a5ce8850007f89fe5bbefa9da61700705c23b94363616 -->

```csharp
public Inno.Adapter.Input.EventInputBackendProvider.EventInputBackendProvider()
```

Creates an explicitly composed registration for the bundled implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/EventInputBackendProvider.cs#L14).

## `CreateEventSource`

<a id="api-dc961e2bfcb9ba17"></a>
<!-- api: M:Inno.Adapter.Input.EventInputBackendProvider.CreateEventSource(Inno.Platform.IPlatformWindow,System.Boolean) a9948837586a2cdb287b1dd96f6ba6622f219857f39142788d24582c7ea0a733 -->

```csharp
public override Inno.Adapter.Input.IInputEventSource Inno.Adapter.Input.EventInputBackendProvider.CreateEventSource(Inno.Platform.IPlatformWindow window, bool acceptAllWindows)
```

Creates a caller-owned input service using this implementation.

**Parameter `window`:** The window supplying accepted input events.

**Parameter `acceptAllWindows`:** Whether events from every application window are accepted.

**Returns:** A new service owned by the caller; providers must not return null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/EventInputBackendProvider.cs#L17).
