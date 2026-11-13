---
uid: api.8c36dbbc84fbaff9fdb9b0f5515a4036d9dba2661d11f4916119cf7aa5ef09f4
symbol: "engine:Inno.Adapter.Input:M:Inno.Adapter.Input.EventInputBackendProvider.CreateEventSource(Inno.Platform.IPlatformWindow,System.Boolean)"
source: xml
reviewed: 21fd4b40eb18f37a85e808d245aede1b0f7e869ebc382638f8eb635f3e2a0d97
title: "CreateEventSource"
kind: api
owners: [Inno.Adapter.Input]
apiSurface: source-clr
---

Creates a caller-owned input service using this implementation.

**Parameter `window`:** The window supplying accepted input events.

**Parameter `acceptAllWindows`:** Whether events from every application window are accepted.

**Returns:** A new service owned by the caller; providers must not return null.
