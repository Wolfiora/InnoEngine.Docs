---
uid: api.ab8bc4775072cb934ecd36e7911d3c7d6b58b1b3ace7dbe69aac9fbb2494a1a9
symbol: "engine:Inno.Core.Events:M:Inno.Core.Events.EventHub.ListenOnce\u0060\u00601(System.Action{\u0060\u00600},System.Int32)"
source: xml
reviewed: 0e9ec68f7491a3237e9e65e69e89165d92b8b41486eb6a9bba34bbb73997a2a0
title: "EventHub.ListenOnce"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
---

Subscribes a one-shot listener for the specified event type.

**Type parameter `TEvent`:** Event type to listen for.

**Parameter `handler`:** Listener callback.

**Parameter `priority`:** Listener priority within the selected event type's bucket. Higher values run earlier; a base-type listener does not precede a concrete-type listener because of its priority.

**Returns:** A token that can cancel the one-shot listener before it runs.
