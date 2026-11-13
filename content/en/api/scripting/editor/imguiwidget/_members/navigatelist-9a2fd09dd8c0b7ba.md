---
uid: api.9a2fd09dd8c0b7ba929608a65523f04d230a3e363946c90cfebd5518de448a1a
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.NavigateList(InnoEditor.Interactions.EditorInteractions,System.Int32,System.Int32,System.Int32)"
source: xml
reviewed: 09883db09b4ba2ac504041e874e24e937bb03d6e8f901851bc34cb37bf1e3412
title: "NavigateList"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Reads one focused list's keyboard navigation without retaining its entries or changing domain selection.

**Parameter `interactions`:** The authoritative interaction owner supplying the product modifier policy.

**Parameter `itemCount`:** The number of currently visible, ordered entries.

**Parameter `focusedIndex`:** The current visible focus index, or minus one when absent.

**Parameter `pageSize`:** The positive number of visible rows advanced by Page Up or Page Down.

**Returns:** Neutral focus and selection intents; text editing, active controls and popups produce no intent.

**Exception `T:System.ArgumentNullException`:** The interaction owner is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The count, focus index or page size is invalid.

**Exception `T:System.InvalidOperationException`:** No matching owner-thread drawing session is active.
