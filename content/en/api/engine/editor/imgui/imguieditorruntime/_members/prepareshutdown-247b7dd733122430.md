---
uid: api.247b7dd733122430bbc1e1c6cd270acf44f3c369b332f931a9d2202e9309d727
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiEditorRuntime.PrepareShutdown"
source: xml
reviewed: 53929b7755a620e370bba0192bf45bed425992c7e99a049010eab7a65cea6db9
title: "PrepareShutdown"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Freezes automatic extension-state persistence and writes the final project state before editor modules begin shutting down.

## Remarks

This operation is idempotent and prevents module teardown from overwriting the saved module sections with transient empty state.

**Exception `T:System.ObjectDisposedException`:** Thrown after this runtime has been disposed.
