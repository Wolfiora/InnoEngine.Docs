---
title: "ImGuiWidget — Method: TypeBadge"
description: "Exact Method: TypeBadge contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.b3d09bb74710dfef
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: TypeBadge

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `TypeBadge`

<a id="api-c651630f2ac1ce82"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.TypeBadge(System.String,System.Numerics.Vector4,System.String) c29bd08129dbf350f17f7451d7721286d3a4ee9ac7801ee7f778ee55110df2b0 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.TypeBadge(string label, System.Numerics.Vector4 accent, string? tooltip = null)
```

Draws a compact, non-interactive type badge with a subdued fill and semantic outline.

**Parameter `label`:** Visible type name.

**Parameter `accent`:** Semantic type-family accent.

**Parameter `tooltip`:** Optional explanation shown while the badge is hovered.

**Throws `System.ArgumentNullException`:** Thrown when `label` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Controls.cs#L94).
