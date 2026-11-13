---
uid: api.1dd1a230f166eca27d775525ae44ed4da2692aac3612147cb6f42a7b38fe51dd
symbol: "scripting:Inno.Core.Events:M:InnoEngine.Events.EventHub.Announce(InnoEngine.Events.Event)"
source: xml
reviewed: 5b6ab7b62233d4b9417fda3cc3c6af715facaf10961a75813575bca6735662aa
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
