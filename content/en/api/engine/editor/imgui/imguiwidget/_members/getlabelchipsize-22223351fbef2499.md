---
uid: api.22223351fbef24997f44724dc9cc3acbe4038aed165cce115b113a0c74de2aca
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.GetLabelChipSize(System.String)"
source: xml
reviewed: 9e2b4249c5fcd689aca8503e64802f571678115701b6d52a42e4c488a9381a8f
title: "GetLabelChipSize"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Gets the layout size of a compact colored label chip using the centralized editor style.

**Parameter `label`:** Visible label text.

**Returns:** The size reserved by `M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.LabelChip(System.String,System.Numerics.Vector4)` for the supplied text.

**Exception `T:System.ArgumentNullException`:** Thrown when `label` is `null`.
