---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.215567b1d64d46c49fe23e64f1489e2cd88484231f5dcd8465eaf6f05901c54d
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.SetTreeNodeOpen(System.String,System.Boolean)
title: ImGuiWidget.SetTreeNodeOpen
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: 9b5a478fbf429a31a6a8a9b8433ed0eff258dcb25957e3a01d08923fef031ad0
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The stable row identifier within this window and owner.

**Parameter `open`:** The requested disclosure state.

## Exceptions

**Exception `T:System.ArgumentException`:** The row identifier is empty or whitespace.

**Exception `T:System.InvalidOperationException`:** No valid drawing session or native frame is active.
