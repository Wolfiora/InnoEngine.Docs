---
title: "ImGuiWidget — Method: CenteredWrappedText"
description: "Exact Method: CenteredWrappedText contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.f79ea545708c8e7a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: CenteredWrappedText

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `CenteredWrappedText`

<a id="api-bbb7ca23c6e55e30"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.CenteredWrappedText(System.String,System.Numerics.Vector2,System.Numerics.Vector2) 104c6b3221b0937fdf8007c45bf8eac5dcdf32d9282a17000edc06cd14f04cc5 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.CenteredWrappedText(string text, System.Numerics.Vector2 areaSize, System.Numerics.Vector2 padding)
```

Draws wrapped non-interactive text as a centered block inside a padded layout area.

**Parameter `text`:** The literal text to wrap and draw.

**Parameter `areaSize`:** The complete area reserved by the widget.

**Parameter `padding`:** The minimum horizontal and vertical distance retained from the area edges whenever space permits.

**Throws `System.ArgumentNullException`:** Thrown when `text` is `null`.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when an area component is not positive or a padding component is negative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L382).
