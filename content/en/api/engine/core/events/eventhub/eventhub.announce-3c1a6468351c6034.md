---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3c1a6468351c6034110143fb2d96200bf646dd90934f274a99e243defe12d966
symbol: engine:Inno.Core.Events:M:Inno.Core.Events.EventHub.Announce(Inno.Core.Events.Event)
title: EventHub.Announce
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
reviewed: 5ccda4e1ef77d08ad9b463bc9347f8fbd9ff4342f80e2dcbc3ecfd6cf81b9541
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
