---
uid: api.864b2c9402820a799302e0026886324faa8f81f75523bdf7488bfac733197c77
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.ClickableText(System.String,System.String,System.Numerics.Vector2,System.String)"
source: xml
reviewed: 72dd3735b0ad74ad2aee0ce99d0fa985805c7dbdd198a197b07a661fefcb20b3
title: "ClickableText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws clickable text centered inside an explicitly sized transparent interaction area.

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `text`:** Visible text or icon glyph.

**Parameter `controlSize`:** Size of the transparent interaction area.

**Parameter `tooltip`:** Optional tooltip displayed while the interaction is hovered.

**Returns:** `true` when the text is pressed.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when either component of `controlSize` is not positive.
