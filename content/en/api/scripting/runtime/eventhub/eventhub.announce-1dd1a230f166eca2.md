---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1dd1a230f166eca27d775525ae44ed4da2692aac3612147cb6f42a7b38fe51dd
symbol: scripting:Inno.Core.Events:M:InnoEngine.Events.EventHub.Announce(InnoEngine.Events.Event)
title: EventHub.Announce
kind: api
owners:
- Inno.Core.Events
apiSurface: editor-script
reviewed: 5d976332f5c1f0d861a8752ea6c162550a24148299a9f755cb82902227cf47a8
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

This does not route through the dispatcher hub chain. Only listeners registered on this hub are invoked.

## Parameters

**Parameter `e`:** The event instance to dispatch locally.
