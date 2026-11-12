---
title: "ImGui — Method: ColorEditLinear4"
description: "Exact Method: ColorEditLinear4 contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.9be14cbd7855f43a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: ColorEditLinear4

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `ColorEditLinear4`

<a id="api-cf68feca0f0c7511"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.ColorEditLinear4(System.String,System.Numerics.Vector4@,InnoEditor.ImGui.ImGuiColorEditFlags) a866913932da8f33fe9829759d26ee108dcae966bff4910d6526c1f6511185f6 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.ColorEditLinear4(string label, ref System.Numerics.Vector4 value, InnoEditor.ImGui.ImGuiColorEditFlags flags = InnoEditor.ImGui.ImGuiColorEditFlags.None)
```

Displays a linear RGBA color through a display-sRGB picker and returns edits in linear space.

**Parameter `label`:** The stable identity and visible label of the color control.

**Parameter `value`:** Linear RGB and alpha; only changed RGB channels are decoded, while alpha is never transfer-encoded.

**Parameter `flags`:** Dear ImGui color-edit flags; display modes interpret sRGB values and input storage must be RGB.

**Returns:** True if the display color changed and `value` contains decoded linear RGB.

**Throws `System.ArgumentException`:** HSV input storage conflicts with the linear-RGB value contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L308).
