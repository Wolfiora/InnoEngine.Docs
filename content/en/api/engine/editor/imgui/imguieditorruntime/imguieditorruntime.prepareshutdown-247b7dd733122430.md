---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.247b7dd733122430bbc1e1c6cd270acf44f3c369b332f931a9d2202e9309d727
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiEditorRuntime.PrepareShutdown
title: ImGuiEditorRuntime.PrepareShutdown
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: d5d684f88ed383cffe45715f570b4a8eebca7a836e281c69378019acd56b3bd4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

This operation is idempotent and prevents module teardown from overwriting the saved module sections with transient empty state.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown after this runtime has been disposed.
