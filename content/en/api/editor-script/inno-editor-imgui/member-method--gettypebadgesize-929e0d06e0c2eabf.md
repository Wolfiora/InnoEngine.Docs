---
title: "ImGuiWidget — Method: GetTypeBadgeSize"
description: "Exact Method: GetTypeBadgeSize contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.929e0d06e0c2eabf
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: GetTypeBadgeSize

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetTypeBadgeSize`

<a id="api-4b34b39b34e116b5"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.GetTypeBadgeSize(System.String) cfb8fe646344d603e432716c9b105af484474b467ddbed3beffc0b9b0d2cb7fb -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.ImGuiWidget.GetTypeBadgeSize(string label)
```

Gets the layout size of a compact outlined type badge.

**Parameter `label`:** Visible type name.

**Returns:** The size reserved by `InnoEditor.ImGui.ImGuiWidget.TypeBadge(System.String,System.Numerics.Vector4,System.String)`.

**Throws `System.ArgumentNullException`:** Thrown when `label` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Controls.cs#L71).
