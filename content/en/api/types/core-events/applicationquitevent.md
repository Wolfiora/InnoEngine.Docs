---
title: "ApplicationQuitEvent"
description: "Reference for ApplicationQuitEvent in Inno.Core.Events."
uid: api.inno.core.events.ae50f5a2115cbdbe
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `ApplicationQuitEvent`

This reference describes `ApplicationQuitEvent` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.ApplicationEvent`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e0973feb576d3ed8) | Method |

## Type declaration

<a id="api-ae50f5a2115cbdbe"></a>
<!-- api: T:Inno.Core.Events.ApplicationQuitEvent c5f967e14852d0e6695ceb59ce095b1d05d6e176d7d6c20556adcc46890fa7b9 -->

```csharp
public class Inno.Core.Events.ApplicationQuitEvent : Inno.Core.Events.ApplicationEvent
```

Raised when the application requests shutdown.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/ApplicationEvents.cs#L13).

## `#ctor`

<a id="api-e0973feb576d3ed8"></a>
<!-- api: M:Inno.Core.Events.ApplicationQuitEvent.#ctor 16174ab6809d62db9a937e6ac7a4e2744e4f7d3fad31fec222693dff79754700 -->

```csharp
public Inno.Core.Events.ApplicationQuitEvent.ApplicationQuitEvent()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/ApplicationEvents.cs#L13).
