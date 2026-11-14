---
uid: api.3536fa7b22370ed804310835938087cf66b063dd46a15c46b6e6dd5aba0a867e
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SearchInput(System.String,System.String,System.String@,System.UIntPtr,System.Single)"
source: xml
reviewed: 85c090cb2c75eef1a424fac63785c53b5c68ece85270942be300ef1aea7aaf13
title: "ImGuiWidget.SearchInput"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
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
