---
uid: api.09674ad2a4c65b70ec00f7d57b6b194704caa589048ff737f5dc0819dbe61147
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.DragDropTarget\u0060\u00601(System.String,\u0060\u00600@,System.Boolean@)"
source: xml
reviewed: 7e53808c061c119a8cef146d3f11a04e9d581dbfe2bebeaabb45716354174ce3
title: "DragDropTarget"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Accepts an unmanaged payload and reports its preview state on the most recently submitted item.

**Type parameter `TPayload`:** Unmanaged payload type.

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payload`:** Previewed or delivered payload value.

**Parameter `isPreviewing`:** Whether a compatible payload is hovering over the target.

**Returns:** `true` only when a compatible payload is delivered.
