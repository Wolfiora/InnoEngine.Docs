---
uid: api.5f2834bf7ac2e51ab587abcd4617f7bd3085b0c00f1f1b63d876fc441a0a3fd2
symbol: "scripting:Inno.Core.Events:M:InnoEngine.Events.EventHub.ListenOnce\u0060\u00601(System.Action{\u0060\u00600},System.Int32)"
source: xml
reviewed: 76adc1411ecbda6c05fa3d57fd0980be40a24da1d960241e0286f03d78c1ea69
title: "EventHub.ListenOnce"
kind: api
owners: [Inno.Core.Events]
apiSurface: editor-script
apiScope: Runtime
---

Subscribes a one-shot listener for the specified event type.

**Type parameter `TEvent`:** Event type to listen for.

**Parameter `handler`:** Listener callback.

**Parameter `priority`:** Listener priority within the selected event type's bucket. Higher values run earlier; a base-type listener does not precede a concrete-type listener because of its priority.

**Returns:** A token that can cancel the one-shot listener before it runs.
