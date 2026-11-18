---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.70449b39bdd1b04f72279df4cbafcb5b376e0195fa9732f7a71e0ebe22a74b47
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.IsTreeNodeOpen(System.String)
title: ImGuiWidget.IsTreeNodeOpen
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: 7c0c705feb2f956b2edf6152c9b85fafa3ff501115cc8a272bd230d41f2184f8
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The stable row identifier within this window and owner.

## Returns

True when the row was explicitly expanded; unknown rows are collapsed.

## Exceptions

**Exception `T:System.ArgumentException`:** The row identifier is empty or whitespace.

**Exception `T:System.InvalidOperationException`:** No valid drawing session or native frame is active.
