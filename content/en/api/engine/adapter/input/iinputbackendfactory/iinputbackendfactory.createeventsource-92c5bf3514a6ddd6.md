---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.92c5bf3514a6ddd6210343d7eaa94031e6d6f482eaae94edf56d044c36e356b5
symbol: engine:Inno.Adapter.Input:M:Inno.Adapter.Input.IInputBackendFactory.CreateEventSource(Inno.Adapter.Input.InputBackendID,Inno.Platform.IPlatformWindow,System.Boolean)
title: IInputBackendFactory.CreateEventSource
kind: api
owners:
- Inno.Adapter.Input
apiSurface: source-clr
sourceFingerprint: b46b6685abf5c483cea64e6f58f927cf24f30b01105f1e41c490ed25500bace9
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
