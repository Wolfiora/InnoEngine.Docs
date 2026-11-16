---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9a2fd09dd8c0b7ba929608a65523f04d230a3e363946c90cfebd5518de448a1a
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.NavigateList(InnoEditor.Interactions.EditorInteractions,System.Int32,System.Int32,System.Int32)
title: ImGuiWidget.NavigateList
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 8c75f9579b7454f6f8e9085c005963ee8cd8dbb56c6f94cfcc8905294458c8f8
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `interactions`:** The authoritative interaction owner supplying the product modifier policy.

**Parameter `itemCount`:** The number of currently visible, ordered entries.

**Parameter `focusedIndex`:** The current visible focus index, or minus one when absent.

**Parameter `pageSize`:** The positive number of visible rows advanced by Page Up or Page Down.

## Returns

Neutral focus and selection intents; text editing, active controls and popups produce no intent.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The interaction owner is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The count, focus index or page size is invalid.

**Exception `T:System.InvalidOperationException`:** No matching owner-thread drawing session is active.
