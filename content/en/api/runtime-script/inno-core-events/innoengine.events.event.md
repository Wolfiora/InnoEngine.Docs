---
title: "Event"
description: "Reference for Event in Inno.Core.Events."
uid: api.inno.core.events.runtime-script.632c98d2cc044365
kind: api
owners:
  - Inno.Core.Events
apiSurface: runtime-script
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
  - manual.scripting.use-script-api
---
# `Event`

This reference describes `Event` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6d924a66950db9bb) | Method |
| [`#ctor`](#api-14331d84a064a5da) | Method |
| [`HandleInGlobal`](#api-08fa3163f2f521c1) | Method |
| [`HandleInHub`](#api-4a28f245bc1068bc) | Method |
| [`isGlobalHandled`](#api-17a8c6ba2d0133e0) | Property |

## Type declaration

<a id="api-632c98d2cc044365"></a>
<!-- api: T:InnoEngine.Events.Event d8ef442280aa583fea1d5812a2c7976c048e1f7f6ffed1cbcdefd0b2900c77f8 -->

```csharp
public abstract class InnoEngine.Events.Event
```

Base type for all engine events.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/Events/Event.cs#L9).

## `#ctor`

<a id="api-6d924a66950db9bb"></a>
<!-- api: M:InnoEngine.Events.Event.#ctor fbe80c442d5aa6c4410be46efdea6ec7ca508ae4fb2aadfb86d74933146f7647 -->

```csharp
protected InnoEngine.Events.Event.Event()
```

Creates an event with an independent global consumption lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/Events/Event.cs#L19).

## `#ctor`

<a id="api-14331d84a064a5da"></a>
<!-- api: M:InnoEngine.Events.Event.#ctor(InnoEngine.Events.Event) ed53a6330995b37ae82e037f0806f59e1b350fea386fc59b8a0fc7755f8bf4a7 -->

```csharp
protected InnoEngine.Events.Event.Event(InnoEngine.Events.Event source)
```

Creates a routed representation that shares global consumption with its source event.

**Parameter `source`:** The original event whose consumption lifetime remains authoritative.

**Throws `System.ArgumentNullException`:** The source event is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/Events/Event.cs#L30).

## `HandleInGlobal`

<a id="api-08fa3163f2f521c1"></a>
<!-- api: M:InnoEngine.Events.Event.HandleInGlobal 9b1bb615175cf118e1a96d35fd0ef12c992c31cb3688b62c0eeee62e216c578b -->

```csharp
public void InnoEngine.Events.Event.HandleInGlobal()
```

Marks this event as globally handled.

**Constraints:** Global handling stops dispatch in the current hub and all following hubs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/Events/Event.cs#L47).

## `HandleInHub`

<a id="api-4a28f245bc1068bc"></a>
<!-- api: M:InnoEngine.Events.Event.HandleInHub bfb06bb7eaa3dfd848d6335751ffa1ff69a9137fe231cbeb1af381acb447d222 -->

```csharp
public void InnoEngine.Events.Event.HandleInHub()
```

Marks this event as handled in the current hub only.

**Constraints:** Hub handling stops remaining listeners in the current hub
but does not affect following hubs.

**Throws `System.InvalidOperationException`:** Thrown when called outside a valid hub dispatch context for this event.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/Events/Event.cs#L62).

## `isGlobalHandled`

<a id="api-17a8c6ba2d0133e0"></a>
<!-- api: P:InnoEngine.Events.Event.isGlobalHandled 0d23fc8257e8dd18fec4c78bfa57ebcca3acd92ded07faf8eb9cde7361ae2d2c -->

```csharp
public bool InnoEngine.Events.Event.isGlobalHandled { get; }
```

Gets whether this event or any routed representation has been globally consumed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Events/Events/Event.cs#L39).
