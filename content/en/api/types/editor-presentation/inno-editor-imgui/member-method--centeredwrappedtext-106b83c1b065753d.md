---
title: "ImGuiWidget.ImGuiWidget — Method: CenteredWrappedText"
description: "Exact Method: CenteredWrappedText contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.106b83c1b065753d
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: CenteredWrappedText

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CenteredWrappedText`

<a id="api-08060276932999c8"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CenteredWrappedText(System.String,System.Numerics.Vector2,System.Numerics.Vector2) f833c4696d43446557e8c639d08f0f9eaaaee9ddb59f15aa18edd0c75c71409a -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CenteredWrappedText(string text, System.Numerics.Vector2 areaSize, System.Numerics.Vector2 padding)
```

Draws wrapped non-interactive text as a centered block inside a padded layout area.

**Parameter `text`:** The literal text to wrap and draw.

**Parameter `areaSize`:** The complete area reserved by the widget.

**Parameter `padding`:** The minimum horizontal and vertical distance retained from the area edges whenever space permits.

**Throws `System.ArgumentNullException`:** Thrown when `text` is `null`.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when an area component is not positive or a padding component is negative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L382).
