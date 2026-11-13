---
uid: api.fb8eb1f93cdbc97556f9747ecef33cafd663a0c0aae38847ca65b53bbf2623ff
symbol: "engine:Inno.Adapter.Input:M:Inno.Adapter.Input.IInputBackendFactory.CreateEventSource(Inno.Adapter.Input.InputBackendId,Inno.Platform.IPlatformWindow,System.Boolean)"
source: xml
reviewed: 6187973f9d53a13c5499b21fe3c2e639f78ce60c596d6562174cd34e24ef2362
title: "CreateEventSource"
kind: api
owners: [Inno.Adapter.Input]
apiSurface: source-clr
---

Creates an input event source for one window or for the entire application.

**Parameter `backend`:** input implementation selected by the composition root.

**Parameter `window`:** Primary platform window whose input is accepted by the source.

**Parameter `acceptAllWindows`:** Whether the source accepts events from every window owned by the application.

**Returns:** A caller-owned backend-neutral input event source.

**Exception `T:System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend or the platform is incompatible.
