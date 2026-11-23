---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3c1a6468351c6034110143fb2d96200bf646dd90934f274a99e243defe12d966
symbol: engine:Inno.Core.Events:M:Inno.Core.Events.EventHub.Announce(Inno.Core.Events.Event)
title: EventHub.Announce
kind: api
owners:
- Inno.Core.Events
apiSurface: source-clr
sourceFingerprint: 1b928719395479c361198bc00c22b1fa2e159106fe13ec77924ebe84ae95a71e
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
