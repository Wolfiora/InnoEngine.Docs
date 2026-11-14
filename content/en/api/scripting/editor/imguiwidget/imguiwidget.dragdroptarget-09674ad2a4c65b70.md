---
uid: api.09674ad2a4c65b70ec00f7d57b6b194704caa589048ff737f5dc0819dbe61147
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.DragDropTarget\u0060\u00601(System.String,\u0060\u00600@,System.Boolean@)"
source: xml
reviewed: 05182b308f0ced1794825115bdd85e3a668a383ac5afd7f32963c4f1f8878e49
title: "ImGuiWidget.DragDropTarget"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Accepts an unmanaged payload and reports its preview state on the most recently submitted item.

## Type parameters

**Type parameter `TPayload`:** Unmanaged payload type.

## Parameters

**Parameter `payloadType`:** Stable ImGui payload type identifier.

**Parameter `payload`:** Previewed or delivered payload value.

**Parameter `isPreviewing`:** Whether a compatible payload is hovering over the target.

## Returns

`true` only when a compatible payload is delivered.
