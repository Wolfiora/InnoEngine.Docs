---
uid: api.f317ef4cf7f8c4daa52a47c4482e2cf2693355f36ea33ed7c3ca041ecc14880e
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.GetLabelChipSize(System.String)"
source: xml
reviewed: eeb1a9d545cec0482fcd11b10a2602ba12cff8c307278872000dcb49d7819d82
title: "GetLabelChipSize"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Gets the layout size of a compact colored label chip using the centralized editor style.

**Parameter `label`:** Visible label text.

**Returns:** The size reserved by `M:InnoEditor.ImGui.ImGuiWidget.LabelChip(System.String,System.Numerics.Vector4)` for the supplied text.

**Exception `T:System.ArgumentNullException`:** Thrown when `label` is `null`.
