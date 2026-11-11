---
title: "Event"
description: "Reference for Event in Inno.Core.Events."
uid: api.inno.core.events.cf759d40b9fbb747
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `Event`

This reference describes `Event` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-993d8fc124e63193) | Method |
| [`#ctor`](#api-b32e040232458e2b) | Method |
| [`HandleInGlobal`](#api-e3501d217ee0dbf1) | Method |
| [`HandleInHub`](#api-5ad73b62bc2308e1) | Method |
| [`isGlobalHandled`](#api-ce8d88a8e0cbdb97) | Property |

## Type declaration

<a id="api-cf759d40b9fbb747"></a>
<!-- api: T:Inno.Core.Events.Event f5af5e24b63fc8066ea69ebaec7f4132d3fcd4bf3e84c17f572606963cc3db1b -->

```csharp
public abstract class Inno.Core.Events.Event
```

Base type for all engine events.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/Event.cs#L9).

## `#ctor`

<a id="api-993d8fc124e63193"></a>
<!-- api: M:Inno.Core.Events.Event.#ctor 7d2eec325af6fa57e0e561a0aece07d0f72acfa230ef6290518442b531829f52 -->

```csharp
protected Inno.Core.Events.Event.Event()
```

Creates an event with an independent global consumption lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/Event.cs#L19).

## `#ctor`

<a id="api-b32e040232458e2b"></a>
<!-- api: M:Inno.Core.Events.Event.#ctor(Inno.Core.Events.Event) fc36c6accfb0d67d697aa057b79656a4968f8ed5e68dac4694e102a1391484e2 -->

```csharp
protected Inno.Core.Events.Event.Event(Inno.Core.Events.Event source)
```

Creates a routed representation that shares global consumption with its source event.

**Parameter `source`:** The original event whose consumption lifetime remains authoritative.

**Throws `System.ArgumentNullException`:** The source event is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/Event.cs#L30).

## `HandleInGlobal`

<a id="api-e3501d217ee0dbf1"></a>
<!-- api: M:Inno.Core.Events.Event.HandleInGlobal ad5c08f15445f18afb0d0b27aa8bceb86009dd02e17719477c35b4ccc3f604bb -->

```csharp
public void Inno.Core.Events.Event.HandleInGlobal()
```

Marks this event as globally handled.

**Constraints:** Global handling stops dispatch in the current hub and all following hubs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/Event.cs#L47).

## `HandleInHub`

<a id="api-5ad73b62bc2308e1"></a>
<!-- api: M:Inno.Core.Events.Event.HandleInHub 8aad7f8557a8559a5b32f89166c5fe44b0efce520d9907a613fc6bc83bc0bbdb -->

```csharp
public void Inno.Core.Events.Event.HandleInHub()
```

Marks this event as handled in the current hub only.

**Constraints:** Hub handling stops remaining listeners in the current hub
but does not affect following hubs.

**Throws `System.InvalidOperationException`:** Thrown when called outside a valid hub dispatch context for this event.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/Event.cs#L62).

## `isGlobalHandled`

<a id="api-ce8d88a8e0cbdb97"></a>
<!-- api: P:Inno.Core.Events.Event.isGlobalHandled 3e7e4b6409a77db0eff831fcf74047da5e07c63ac165c6f606bbf3e4f1915388 -->

```csharp
public bool Inno.Core.Events.Event.isGlobalHandled { get; }
```

Gets whether this event or any routed representation has been globally consumed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/Event.cs#L39).
