---
title: "ImGuiWidget — Method: CenteredText"
description: "Exact Method: CenteredText contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.45c37069a75cdb89
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: CenteredText

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `CenteredText`

<a id="api-50963463bb634518"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.CenteredText(System.String,System.Numerics.Vector2) e54a37dbe2ed3fd540192aab78c75077afcb86af6a768d36f6bbd755644349a4 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.CenteredText(string text, System.Numerics.Vector2 areaSize)
```

Draws non-interactive text centered inside a reserved layout area.

**Parameter `text`:** Visible text.

**Parameter `areaSize`:** Size of the layout area that contains the text.

**Throws `System.ArgumentNullException`:** Thrown when `text` is `null`.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when either component of `areaSize` is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L347).
