---
uid: api.b5f0a273d82dce84568606dd3ce34c6b6e162cc51a753080972556180ac4ae64
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.SearchInput(System.String,System.String,System.String@,System.UIntPtr,System.Single)"
source: xml
reviewed: 4a7d8c9aa75e1632259a050a608670f9685a4747e497b7eac11d010a39e6ff33
title: "ImGuiWidget.SearchInput"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a single-line search field with a stable identifier.

## Remarks

Escape clears a nonempty query before leaving text input on a subsequent press.

**Parameter `id`:** The stable control identifier.

**Parameter `hint`:** The hint shown while the query is empty.

**Parameter `query`:** The mutable search query.

**Parameter `capacity`:** The maximum UTF-8 buffer capacity.

**Parameter `width`:** The control width, or a negative value to fill the available space.

**Returns:** `true` when the query changed; otherwise, `false`.
