---
title: "IInputBackendFactory"
description: "Reference for IInputBackendFactory in Inno.Adapter.Input."
uid: api.inno.adapter.input.384906b1779db00e
kind: api
owners:
  - Inno.Adapter.Input
apiSurface: source-clr
contracts:
  - project.inno-adapter-input#ownership-and-threading
---
# `IInputBackendFactory`

This reference describes `IInputBackendFactory` in `Inno.Adapter.Input`. Read the [shared contract](../../projects/inno-adapter-input.md#ownership-and-threading) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CreateEventSource`](#api-f86fe93a4b4c703e) | Method |
| [`supportedBackends`](#api-f2bf96b91358164a) | Property |

## Type declaration

<a id="api-384906b1779db00e"></a>
<!-- api: T:Inno.Adapter.Input.IInputBackendFactory b2430a4737b20511f14884fcdffbac34a3e9b643ac5f34f91fe40fe0a448e127 -->

```csharp
public interface Inno.Adapter.Input.IInputBackendFactory
```

Creates host-level input event sources from explicit backend selections.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/IInputBackendFactory.cs#L9).

## `CreateEventSource`

<a id="api-f86fe93a4b4c703e"></a>
<!-- api: M:Inno.Adapter.Input.IInputBackendFactory.CreateEventSource(Inno.Adapter.Input.InputBackendId,Inno.Platform.IPlatformWindow,System.Boolean) 36ffeaab49810357ea6216af5c7cd2ee366cbda432516d276baded3aa4ffccb6 -->

```csharp
Inno.Adapter.Input.IInputEventSource Inno.Adapter.Input.IInputBackendFactory.CreateEventSource(Inno.Adapter.Input.InputBackendId backend, Inno.Platform.IPlatformWindow window, bool acceptAllWindows)
```

Creates an input event source for one window or for the entire application.

**Parameter `backend`:** input implementation selected by the composition root.

**Parameter `window`:** Primary platform window whose input is accepted by the source.

**Parameter `acceptAllWindows`:** Whether the source accepts events from every window owned by the application.

**Returns:** A caller-owned backend-neutral input event source.

**Throws `System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend or the platform is incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/IInputBackendFactory.cs#L34).

## `supportedBackends`

<a id="api-f2bf96b91358164a"></a>
<!-- api: P:Inno.Adapter.Input.IInputBackendFactory.supportedBackends 5521af61ca122c4dd656354a19471e6fb5d7faff7628720f81777b09efc7c731 -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.Adapter.Input.InputBackendId> Inno.Adapter.Input.IInputBackendFactory.supportedBackends { get; }
```

Gets the exact registrations available in this composition snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/IInputBackendFactory.cs#L14).
