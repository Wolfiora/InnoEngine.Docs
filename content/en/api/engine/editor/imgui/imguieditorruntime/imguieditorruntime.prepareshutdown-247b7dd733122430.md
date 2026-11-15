---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.247b7dd733122430bbc1e1c6cd270acf44f3c369b332f931a9d2202e9309d727
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiEditorRuntime.PrepareShutdown
title: ImGuiEditorRuntime.PrepareShutdown
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 53929b7755a620e370bba0192bf45bed425992c7e99a049010eab7a65cea6db9

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Remarks

This operation is idempotent and prevents module teardown from overwriting the saved module sections with transient empty state.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown after this runtime has been disposed.
