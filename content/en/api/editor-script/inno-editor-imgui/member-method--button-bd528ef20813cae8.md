---
title: "ImGui — Method: Button"
description: "Exact Method: Button contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.bd528ef20813cae8
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: Button

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `Button`

<a id="api-df3ab1b0348f6565"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.Button(System.String,System.Numerics.Vector2) b837367b2b58f7092ff15beac082c793895771f42ce1a478256c56453e0eb299 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.Button(string label, System.Numerics.Vector2 size = default(System.Numerics.Vector2))
```

Draws a standard button.

**Parameter `label`:** The visible label and optional ImGui identity suffix.

**Parameter `size`:** The requested size, or zero components for automatic sizing.

**Returns:** `true` when the button is activated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L38).
