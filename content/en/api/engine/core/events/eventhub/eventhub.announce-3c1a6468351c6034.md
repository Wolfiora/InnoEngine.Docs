---
uid: api.3c1a6468351c6034110143fb2d96200bf646dd90934f274a99e243defe12d966
symbol: "engine:Inno.Core.Events:M:Inno.Core.Events.EventHub.Announce(Inno.Core.Events.Event)"
source: xml
reviewed: 6c8194efeb5950a36bf4cc8b7accfb055faf0f213d913ec27977e5660dbf19ff
title: "EventHub.Announce"
kind: api
owners: [Inno.Core.Events]
apiSurface: source-clr
---

Immediately dispatches an event inside this hub only.

## Remarks

This does not route through the dispatcher hub chain. Only listeners registered on this hub are invoked.

## Parameters

**Parameter `e`:** The event instance to dispatch locally.
