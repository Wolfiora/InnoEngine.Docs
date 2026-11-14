---
uid: api.d2e90f433c399863d0857bfb58e366da007b53ba66f1b3d3f7c81cce48d632b3
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.CenteredText(System.String,System.Numerics.Vector2)"
source: xml
reviewed: 7b7cd5455f5679128d2099184c50e9ec13a61db1745763de626b26f8e979bafa
title: "ImGuiWidget.CenteredText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws non-interactive text centered inside a reserved layout area.

## Parameters

**Parameter `text`:** Visible text.

**Parameter `areaSize`:** Size of the layout area that contains the text.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when either component of `areaSize` is not positive.
