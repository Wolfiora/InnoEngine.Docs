---
uid: api.646f561b1426bef93c26984e0c33061644992ecc7224466793d0d5578e10bd78
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.NavigateList(Inno.Editor.Interactions.EditorInteractions,System.Int32,System.Int32,System.Int32)"
source: xml
reviewed: 32b6542f299c73ebf61acd3c7dc2adea40234dead1185ebe02136a329119de60
title: "NavigateList"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
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
