---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.70449b39bdd1b04f72279df4cbafcb5b376e0195fa9732f7a71e0ebe22a74b47
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.IsTreeNodeOpen(System.String)
title: ImGuiWidget.IsTreeNodeOpen
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 444d954eb9d159397faccf5f2a7d1af634c840e32c9e09bf0ac534f5c047a9a5
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
