---
uid: api.7b07a95fe7d9ff82fac46e9117d6c0711377590d59517c4f7c80e0456e226622
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.BeginMenuPopup(System.String)"
source: xml
reviewed: 40d17dd680d652b49324acf0a98d5c28f7534d4d1d3d69fecbdbe188154f827f
title: "BeginMenuPopup"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Begins an explicitly opened popup using the editor context-menu presentation contract. The popup stays in its parent viewport, sizes itself to submitted content, and scrolls when its work-area bound is reached.

**Parameter `id`:** The stable identifier previously passed to ImGui when opening the popup.

**Returns:** `true` when popup content should be submitted; otherwise, `false`.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.
