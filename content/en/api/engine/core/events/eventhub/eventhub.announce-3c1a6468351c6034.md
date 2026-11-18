---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3c1a6468351c6034110143fb2d96200bf646dd90934f274a99e243defe12d966
symbol: engine:Inno.Core.Events:M:Inno.Core.Events.EventHub.Announce(Inno.Core.Events.Event)
title: EventHub.Announce
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
sourceFingerprint: 909c3e18dbd21100dfeee8ed30cb212d6619ff7e97c839d3ea92033fd4bfd110
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
