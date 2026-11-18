---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.29aa0ba3d0678a741709edc9e19469489de132f0f275ec69cf9cd8bcd47372c4
symbol: engine:Inno.Adapter.Input:M:Inno.Adapter.Input.InputBackendCatalog.CreateEventSource(Inno.Adapter.Input.InputBackendId,Inno.Platform.IPlatformWindow,System.Boolean)
title: InputBackendCatalog.CreateEventSource
kind: api
owners:
- Inno.Adapter.Input
apiSurface: source-clr
sourceFingerprint: 177ed349f28e593f60c42c4e4cb69e05e7ca4925dc5b1ff17e51726e482b0b5c
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
