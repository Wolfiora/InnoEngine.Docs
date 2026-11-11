---
title: "ImGuiWidget.ImGuiWidget — Method: TypeBadge"
description: "Exact Method: TypeBadge contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.027546e7b7d22d4a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: TypeBadge

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TypeBadge`

<a id="api-29c5ba354ffd3801"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.TypeBadge(System.String,System.Numerics.Vector4,System.String) 810ba80838d8c18863d6028bbd1d9402b30c6887e42ac301f2410148f7e546fe -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.TypeBadge(string label, System.Numerics.Vector4 accent, string? tooltip = null)
```

Draws a compact, non-interactive type badge with a subdued fill and semantic outline.

**Parameter `label`:** Visible type name.

**Parameter `accent`:** Semantic type-family accent.

**Parameter `tooltip`:** Optional explanation shown while the badge is hovered.

**Throws `System.ArgumentNullException`:** Thrown when `label` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Controls.cs#L94).
