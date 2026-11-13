---
uid: api.247b7dd733122430bbc1e1c6cd270acf44f3c369b332f931a9d2202e9309d727
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiEditorRuntime.PrepareShutdown"
source: xml
reviewed: 5350de7ad492a7d84486f43e023cdcf8064c714fc13a81fd8f163c5f2642afc1
title: "PrepareShutdown"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Freezes automatic extension-state persistence and writes the final project state before editor modules begin shutting down.

## Remarks

This operation is idempotent and prevents module teardown from overwriting the saved module sections with transient empty state.

**Exception `T:System.ObjectDisposedException`:** Thrown after this runtime has been disposed.
