---
title: "ImGuiWidget.ImGuiWidget — Method: LabelChip"
description: "Exact Method: LabelChip contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.ba4990f7e9e1234a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: LabelChip

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LabelChip`

<a id="api-f2a78abae5c12d38"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.LabelChip(System.String,System.Numerics.Vector4) 18df7f266dd4598e5c8f2ebaadf21896488d51120fabd512ece3b301acda647f -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.LabelChip(string label, System.Numerics.Vector4 background)
```

Draws non-interactive text centered on a compact, softly rounded colored background.

**Parameter `label`:** Visible label text.

**Parameter `background`:** Background color drawn behind the label.

**Throws `System.ArgumentNullException`:** Thrown when `label` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Controls.cs#L44).
