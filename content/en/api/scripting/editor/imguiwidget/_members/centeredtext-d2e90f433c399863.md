---
uid: api.d2e90f433c399863d0857bfb58e366da007b53ba66f1b3d3f7c81cce48d632b3
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.CenteredText(System.String,System.Numerics.Vector2)"
source: xml
reviewed: ba1cec150d19bb7a60e0c41aab78a0400b204be47d40946395605f46eb8260d4
title: "CenteredText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws non-interactive text centered inside a reserved layout area.

**Parameter `text`:** Visible text.

**Parameter `areaSize`:** Size of the layout area that contains the text.

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when either component of `areaSize` is not positive.
