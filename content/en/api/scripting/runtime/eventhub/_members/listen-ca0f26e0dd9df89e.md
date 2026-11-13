---
uid: api.ca0f26e0dd9df89e7dcf37a624898bb39f4887953af90d201d6b244bf484e106
symbol: "scripting:Inno.Core.Events:M:InnoEngine.Events.EventHub.Listen\u0060\u00601(System.Action{\u0060\u00600},System.Int32)"
source: xml
reviewed: 7f354cac6bcf428714c9eacc0845b64d62eab3db2361d4570f32de931cff114b
title: "Listen"
kind: api
owners: [Inno.Core.Events]
apiSurface: editor-script
apiScope: Runtime
---

Subscribes a listener for the specified event type.

**Type parameter `TEvent`:** Event type to listen for.

**Parameter `handler`:** Listener callback.

**Parameter `priority`:** Listener priority within the selected event type's bucket. Higher values run earlier; a base-type listener does not precede a concrete-type listener because of its priority.

**Returns:** A token that unsubscribes this listener when disposed.
