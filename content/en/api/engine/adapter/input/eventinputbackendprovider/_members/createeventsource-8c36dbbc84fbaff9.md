---
uid: api.8c36dbbc84fbaff9fdb9b0f5515a4036d9dba2661d11f4916119cf7aa5ef09f4
symbol: "engine:Inno.Adapter.Input:M:Inno.Adapter.Input.EventInputBackendProvider.CreateEventSource(Inno.Platform.IPlatformWindow,System.Boolean)"
source: xml
reviewed: 4d23f8e1e013f4f6d25ef2f01f5a678501a2e5f0e58b3b686d1f326645d93263
title: "CreateEventSource"
kind: api
owners: [Inno.Adapter.Input]
apiSurface: source-clr
---

Creates a caller-owned input service using this implementation.

**Parameter `window`:** The window supplying accepted input events.

**Parameter `acceptAllWindows`:** Whether events from every application window are accepted.

**Returns:** A new service owned by the caller; providers must not return null.
