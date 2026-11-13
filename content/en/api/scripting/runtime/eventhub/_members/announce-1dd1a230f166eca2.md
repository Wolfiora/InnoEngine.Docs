---
uid: api.1dd1a230f166eca27d775525ae44ed4da2692aac3612147cb6f42a7b38fe51dd
symbol: "scripting:Inno.Core.Events:M:InnoEngine.Events.EventHub.Announce(InnoEngine.Events.Event)"
source: xml
reviewed: 930ff6e77c61c46844166b2a8ab430967fc5cabbff21adb094603e034bb54d51
title: "Announce"
kind: api
owners: [Inno.Core.Events]
apiSurface: editor-script
apiScope: Runtime
---

Immediately dispatches an event inside this hub only.

## Remarks

This does not route through the dispatcher hub chain. Only listeners registered on this hub are invoked.

**Parameter `e`:** The event instance to dispatch locally.
