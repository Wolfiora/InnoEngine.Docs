---
uid: api.41a5db8a749bb6574550c68c8f00317ab57ff6be670e0dd205f0a724e1ecd6a8
symbol: "engine:Inno.Adapter.Platform:M:Inno.Adapter.Platform.PlatformBackendCatalog.CreateApplication(Inno.Adapter.Platform.PlatformBackendId)"
source: xml
reviewed: 6992b9715e0025b288d65af952ee341f0935da0116f1f696c2f0f5738523f62d
title: "PlatformBackendCatalog.CreateApplication"
kind: api
owners: [Inno.Adapter.Platform]
apiSurface: source-clr
---

Creates a new platform application for the selected backend.

## Parameters

**Parameter `backend`:** platform implementation selected by the composition root.

## Returns

A caller-owned backend-neutral platform application.

## Exceptions

**Exception `T:System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend.

**Exception `T:System.InvalidOperationException`:** The selected provider returned no service.
