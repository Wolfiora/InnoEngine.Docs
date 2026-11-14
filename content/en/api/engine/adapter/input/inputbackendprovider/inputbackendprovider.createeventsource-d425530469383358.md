---
uid: api.d4255304693833587ec81728d5191938fb71896c7475a9010af50c868ab5c5c1
symbol: "engine:Inno.Adapter.Input:M:Inno.Adapter.Input.InputBackendProvider.CreateEventSource(Inno.Platform.IPlatformWindow,System.Boolean)"
source: xml
reviewed: abaa4e93f8712f5f29a6aec9d8004e24ca4ad57f990f688a6091791e82e24452
title: "InputBackendProvider.CreateEventSource"
kind: api
owners: [Inno.Adapter.Input]
apiSurface: source-clr
---

Creates a caller-owned input service using this implementation.

**Parameter `window`:** The window supplying accepted input events.

**Parameter `acceptAllWindows`:** Whether events from every application window are accepted.

**Returns:** A new service owned by the caller; providers must not return null.
