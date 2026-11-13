---
uid: api.d4255304693833587ec81728d5191938fb71896c7475a9010af50c868ab5c5c1
symbol: "engine:Inno.Adapter.Input:M:Inno.Adapter.Input.InputBackendProvider.CreateEventSource(Inno.Platform.IPlatformWindow,System.Boolean)"
source: xml
reviewed: 8257a85ffcbfab46af303da6744ae394ac063cff3eaab8c474f3c157a1db35e3
title: "CreateEventSource"
kind: api
owners: [Inno.Adapter.Input]
apiSurface: source-clr
---

Creates a caller-owned input service using this implementation.

**Parameter `window`:** The window supplying accepted input events.

**Parameter `acceptAllWindows`:** Whether events from every application window are accepted.

**Returns:** A new service owned by the caller; providers must not return null.
