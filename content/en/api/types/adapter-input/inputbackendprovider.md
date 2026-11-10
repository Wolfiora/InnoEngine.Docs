---
title: "InputBackendProvider"
description: "Reference for InputBackendProvider in Inno.Adapter.Input."
uid: api.inno.adapter.input.d585604caa2a1412
kind: api
owners:
  - Inno.Adapter.Input
apiSurface: source-clr
contracts:
  - project.inno-adapter-input#ownership-and-threading
---
# `InputBackendProvider`

This reference describes `InputBackendProvider` in `Inno.Adapter.Input`. Read the [shared contract](../../projects/inno-adapter-input.md#ownership-and-threading) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bd1e45ab14816eb5) | Method |
| [`CreateEventSource`](#api-8a020f2176c2ce9d) | Method |
| [`id`](#api-8db64cb12891fd50) | Property |

## Type declaration

<a id="api-d585604caa2a1412"></a>
<!-- api: T:Inno.Adapter.Input.InputBackendProvider bad6dc024f11e790a45c9885cf69ff10f1bd35ccf9923753abaeeecf0df3394d -->

```csharp
public abstract class Inno.Adapter.Input.InputBackendProvider
```

Describes one explicitly composed input implementation and its creation boundary.

**Constraints:** The composition owns this provider and its immutable registration identity.
Products are owned by their callers. This registration does not perform type discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendProvider.cs#L13).

## `#ctor`

<a id="api-bd1e45ab14816eb5"></a>
<!-- api: M:Inno.Adapter.Input.InputBackendProvider.#ctor(Inno.Adapter.Input.InputBackendId) ce76e0f4498ddb6d69b0dc058a770660ffbaa662bab85cb6635b78ef12016ffc -->

```csharp
protected Inno.Adapter.Input.InputBackendProvider.InputBackendProvider(Inno.Adapter.Input.InputBackendId id)
```

Captures the identity assigned by the composition owner.

**Parameter `id`:** The assigned implementation identity.

**Throws `System.ArgumentException`:** The identity is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendProvider.cs#L24).

## `CreateEventSource`

<a id="api-8a020f2176c2ce9d"></a>
<!-- api: M:Inno.Adapter.Input.InputBackendProvider.CreateEventSource(Inno.Platform.IPlatformWindow,System.Boolean) 1f5d1a7063f39d1cf34fbd7b8e1f2c999fe50593b0fbe270f942dc1c73e0f9ff -->

```csharp
public abstract Inno.Adapter.Input.IInputEventSource Inno.Adapter.Input.InputBackendProvider.CreateEventSource(Inno.Platform.IPlatformWindow window, bool acceptAllWindows)
```

Creates a caller-owned input service using this implementation.

**Parameter `window`:** The window supplying accepted input events.

**Parameter `acceptAllWindows`:** Whether events from every application window are accepted.

**Returns:** A new service owned by the caller; providers must not return null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendProvider.cs#L48).

## `id`

<a id="api-8db64cb12891fd50"></a>
<!-- api: P:Inno.Adapter.Input.InputBackendProvider.id 644f4d1c3f105d1a2844038b194061c4bda4f29418970dca4002b7b59b78f4d6 -->

```csharp
public Inno.Adapter.Input.InputBackendId Inno.Adapter.Input.InputBackendProvider.id { get; }
```

Gets this registration's immutable implementation identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendProvider.cs#L34).
