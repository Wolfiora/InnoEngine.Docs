---
uid: api.3536fa7b22370ed804310835938087cf66b063dd46a15c46b6e6dd5aba0a867e
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SearchInput(System.String,System.String,System.String@,System.UIntPtr,System.Single)"
source: xml
reviewed: 34c1fb9011023bf91e30d7cc739eff296cf7ce76f9c6770fa5c4391f3294781b
title: "SearchInput"
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
