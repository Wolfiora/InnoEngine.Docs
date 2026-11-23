---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.1dd1a230f166eca27d775525ae44ed4da2692aac3612147cb6f42a7b38fe51dd
symbol: scripting:Inno.Core.Events:M:InnoEngine.Events.EventHub.Announce(InnoEngine.Events.Event)
title: EventHub.Announce
kind: api
owners:
- Inno.Core.Events
apiSurface: editor-script
sourceFingerprint: df7f6c689a657c7900c3fcaa1bc0850da1a77a328c24c4a90b4f458118d0629b
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `e`:** The event instance to dispatch locally.

## Remarks

This does not route through the dispatcher hub chain. Only listeners registered on this hub are invoked.
