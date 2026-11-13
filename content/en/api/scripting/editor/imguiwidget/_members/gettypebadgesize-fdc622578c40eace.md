---
uid: api.fdc622578c40eacec18d3a4fe1de0f1150db73bf201b46431c93adbeb51cb5c2
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.GetTypeBadgeSize(System.String)"
source: xml
reviewed: b75bc6b470d55215b8995c2a19582d0ff97278f22295a1a534aecbe4d49ff9f6
title: "GetTypeBadgeSize"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Gets the layout size of a compact outlined type badge.

**Parameter `label`:** Visible type name.

**Returns:** The size reserved by `M:InnoEditor.ImGui.ImGuiWidget.TypeBadge(System.String,System.Numerics.Vector4,System.String)`.

**Exception `T:System.ArgumentNullException`:** Thrown when `label` is `null`.
