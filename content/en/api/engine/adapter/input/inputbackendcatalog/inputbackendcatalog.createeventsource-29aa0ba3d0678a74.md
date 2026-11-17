---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.29aa0ba3d0678a741709edc9e19469489de132f0f275ec69cf9cd8bcd47372c4
symbol: engine:Inno.Adapter.Input:M:Inno.Adapter.Input.InputBackendCatalog.CreateEventSource(Inno.Adapter.Input.InputBackendId,Inno.Platform.IPlatformWindow,System.Boolean)
title: InputBackendCatalog.CreateEventSource
kind: api
owners:
- Inno.Adapter.Input
apiSurface: source-clr
reviewed: eb16901c9db9bacc4c8cab33798020b875f6a3d55ca19d1f5462d20da65f7e82
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
