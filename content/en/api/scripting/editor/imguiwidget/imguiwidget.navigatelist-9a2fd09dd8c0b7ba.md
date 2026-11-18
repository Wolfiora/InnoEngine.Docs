---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9a2fd09dd8c0b7ba929608a65523f04d230a3e363946c90cfebd5518de448a1a
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.NavigateList(InnoEditor.Interactions.EditorInteractions,System.Int32,System.Int32,System.Int32)
title: ImGuiWidget.NavigateList
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: e9912cb0f571023f18c2a388f6bcd2126e91f92000ebcef8fe18bbcdbeb68ca8
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
