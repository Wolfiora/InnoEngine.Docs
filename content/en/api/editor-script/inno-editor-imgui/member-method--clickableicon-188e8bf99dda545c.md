---
title: "ImGuiWidget — Method: ClickableIcon"
description: "Exact Method: ClickableIcon contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.188e8bf99dda545c
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: ClickableIcon

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `ClickableIcon`

<a id="api-85410e3787a2ff19"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.ClickableIcon(System.String,System.String,System.String) 25c0299c092282a83467fdaf9a955f4865ae795d4adfce5ed74da0eac81b062a -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.ClickableIcon(string id, string icon, string? tooltip = null)
```

Draws a clickable icon inside the same square interaction slot used by editor close controls.
The icon has no resting background and changes only its glyph color while hovered or active.

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `icon`:** The visible icon glyph.

**Parameter `tooltip`:** Optional tooltip displayed while the interaction is hovered.

**Returns:** `true` when the icon is pressed.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `icon` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L252).
