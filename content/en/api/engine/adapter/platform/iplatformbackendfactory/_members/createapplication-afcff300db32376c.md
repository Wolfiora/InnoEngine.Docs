---
uid: api.afcff300db32376c53681800a979babb26ce6c3d547e36b37f0d91d85d7789cd
symbol: "engine:Inno.Adapter.Platform:M:Inno.Adapter.Platform.IPlatformBackendFactory.CreateApplication(Inno.Adapter.Platform.PlatformBackendId)"
source: xml
reviewed: 5910883b8456fddd6337304e23dbcb261c5434a27962dd920833fb8706e952e3
title: "CreateApplication"
kind: api
owners: [Inno.Adapter.Platform]
apiSurface: source-clr
---

Creates a new platform application for the selected backend.

**Parameter `backend`:** platform implementation selected by the composition root.

**Returns:** A caller-owned backend-neutral platform application.

**Exception `T:System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend.
