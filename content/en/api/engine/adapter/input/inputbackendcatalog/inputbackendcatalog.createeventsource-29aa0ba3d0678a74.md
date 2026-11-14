---
uid: api.29aa0ba3d0678a741709edc9e19469489de132f0f275ec69cf9cd8bcd47372c4
symbol: "engine:Inno.Adapter.Input:M:Inno.Adapter.Input.InputBackendCatalog.CreateEventSource(Inno.Adapter.Input.InputBackendId,Inno.Platform.IPlatformWindow,System.Boolean)"
source: xml
reviewed: 559d931d7589b2c25e2c8a955baccf205bcbf1c2e60151eb5bab0122fa5e58bb
title: "InputBackendCatalog.CreateEventSource"
kind: api
owners: [Inno.Adapter.Input]
apiSurface: source-clr
---

Creates an input event source for one window or for the entire application.

## Parameters

**Parameter `backend`:** input implementation selected by the composition root.

**Parameter `window`:** Primary platform window whose input is accepted by the source.

**Parameter `acceptAllWindows`:** Whether the source accepts events from every window owned by the application.

## Returns

A caller-owned backend-neutral input event source.

## Exceptions

**Exception `T:System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend or the platform is incompatible.

**Exception `T:System.InvalidOperationException`:** The selected provider returned no service.
