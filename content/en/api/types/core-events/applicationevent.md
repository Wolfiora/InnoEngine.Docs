---
title: "ApplicationEvent"
description: "Reference for ApplicationEvent in Inno.Core.Events."
uid: api.inno.core.events.f47ed6ea5f5d5063
kind: api
owners:
  - Inno.Core.Events
apiSurface: source-clr
contracts:
  - project.inno-core-events#dispatch-and-lifetime-contract
---
# `ApplicationEvent`

This reference describes `ApplicationEvent` in `Inno.Core.Events`. Read the [shared contract](../../projects/inno-core-events.md#dispatch-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Events.Event`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-addb28d16cc44db6) | Method |

## Type declaration

<a id="api-f47ed6ea5f5d5063"></a>
<!-- api: T:Inno.Core.Events.ApplicationEvent 733356a886e170be2dd0e71fbd44b156141c3e33cd759bab687b9c64c9f5ce15 -->

```csharp
public abstract class Inno.Core.Events.ApplicationEvent : Inno.Core.Events.Event
```

Base class for application lifecycle events.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/ApplicationEvents.cs#L6).

## `#ctor`

<a id="api-addb28d16cc44db6"></a>
<!-- api: M:Inno.Core.Events.ApplicationEvent.#ctor 6330633548ce1b8f6068b7c14c751962834fa6587196bca5358b4a67e5d41a4a -->

```csharp
protected Inno.Core.Events.ApplicationEvent.ApplicationEvent()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Events/Events/ApplicationEvents.cs#L6).
