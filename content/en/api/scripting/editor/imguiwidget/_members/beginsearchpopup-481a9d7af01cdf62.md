---
uid: api.481a9d7af01cdf625b0c87be43a2fa3f15ba3c909333bc3778065b621e94357f
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.BeginSearchPopup(System.String,System.String@,System.String,System.UIntPtr,System.Single)"
source: xml
reviewed: 49c894a36138d36e6070f5dd10f66b72eaf32533132eb5faabd4c1dc380ec5b0
title: "BeginSearchPopup"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Begins a popup and draws its focused search field.

**Parameter `id`:** The popup identifier previously supplied to ImGui.

**Parameter `query`:** The mutable search query.

**Parameter `hint`:** The hint shown while the query is empty.

**Parameter `capacity`:** The maximum UTF-8 buffer capacity.

**Parameter `width`:** The search field width, or a negative value to use the editor default.

**Returns:** `true` when popup content should be drawn; otherwise, `false`.
