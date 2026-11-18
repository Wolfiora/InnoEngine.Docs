---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fb8eb1f93cdbc97556f9747ecef33cafd663a0c0aae38847ca65b53bbf2623ff
symbol: engine:Inno.Adapter.Input:M:Inno.Adapter.Input.IInputBackendFactory.CreateEventSource(Inno.Adapter.Input.InputBackendId,Inno.Platform.IPlatformWindow,System.Boolean)
title: IInputBackendFactory.CreateEventSource
kind: api
owners:
- Inno.Adapter.Input
apiSurface: source-clr
sourceFingerprint: 72101824cc87c7fb550ce710f2fa0b4a2706b0be08d947e8977da8e85a69dee7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `backend`:** input implementation selected by the composition root.

**Parameter `window`:** Primary platform window whose input is accepted by the source.

**Parameter `acceptAllWindows`:** Whether the source accepts events from every window owned by the application.

## Returns

A caller-owned backend-neutral input event source.

## Exceptions

**Exception `T:System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend or the platform is incompatible.
