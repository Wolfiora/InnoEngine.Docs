---
uid: api.41a5db8a749bb6574550c68c8f00317ab57ff6be670e0dd205f0a724e1ecd6a8
symbol: "engine:Inno.Adapter.Platform:M:Inno.Adapter.Platform.PlatformBackendCatalog.CreateApplication(Inno.Adapter.Platform.PlatformBackendId)"
source: xml
reviewed: 0bc9c5b976a661ee14ee4c9343252296ec0fc2ad199eef60411ac5eb23027353
title: "CreateApplication"
kind: api
owners: [Inno.Adapter.Platform]
apiSurface: source-clr
---

Creates a new platform application for the selected backend.

**Parameter `backend`:** platform implementation selected by the composition root.

**Returns:** A caller-owned backend-neutral platform application.

**Exception `T:System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend.

**Exception `T:System.InvalidOperationException`:** The selected provider returned no service.
