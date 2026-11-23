---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.200d36e94cf278d77056b723971e9b876af30ad17ecc4ebed75bb9d5739fae36
symbol: engine:Inno.Adapter.Input:M:Inno.Adapter.Input.InputBackendCatalog.CreateEventSource(Inno.Adapter.Input.InputBackendID,Inno.Platform.IPlatformWindow,System.Boolean)
title: InputBackendCatalog.CreateEventSource
kind: api
owners:
- Inno.Adapter.Input
apiSurface: source-clr
sourceFingerprint: 8f0243dda5b7f52b6fb74eb19b9b4679ba7a4171fc7e1a66b683ca48175bdebf
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

**Exception `T:System.InvalidOperationException`:** The selected provider returned no service.
