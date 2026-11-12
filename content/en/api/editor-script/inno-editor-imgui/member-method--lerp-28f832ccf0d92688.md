---
title: "EditorPalette — Method: Lerp"
description: "Exact Method: Lerp contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.28f832ccf0d92688
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Method: Lerp

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `Lerp`

<a id="api-14a6d1ba3b0762de"></a>
<!-- api: M:InnoEditor.ImGui.EditorPalette.Lerp(System.Numerics.Vector4,System.Numerics.Vector4,System.Single) d9e3507102649a35e64da5fd363108945067287562b8d53feb6b6d71d6c92e99 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.Lerp(System.Numerics.Vector4 from, System.Numerics.Vector4 to, float amount)
```

Linearly interpolates two palette colors using a clamped amount.

**Parameter `from`:** The color returned when `amount` is zero.

**Parameter `to`:** The color returned when `amount` is one.

**Parameter `amount`:** The interpolation amount, clamped to the inclusive zero-to-one range.

**Returns:** The component-wise interpolated color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L440).
