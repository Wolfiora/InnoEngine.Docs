---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.247b7dd733122430bbc1e1c6cd270acf44f3c369b332f931a9d2202e9309d727
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiEditorRuntime.PrepareShutdown
title: ImGuiEditorRuntime.PrepareShutdown
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: 59ce643835a019b0d80a927f6aaa0b004fbdced09fa5743cdb8f5a1152a880e4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown after this runtime has been disposed.

## Remarks

This operation is idempotent and prevents module teardown from overwriting the saved module sections with transient empty state.
