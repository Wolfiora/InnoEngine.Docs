---
title: "EditorPalette — Method: Lerp"
description: "Exact Method: Lerp contracts in EditorPalette."
uid: api.inno.editor.imgui.e54a59224b296ba4
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.7230ca01354096de#type-declaration
---
# `EditorPalette`: Method: Lerp

Read these exact member contracts together with the [containing type](editorpalette.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Lerp`

<a id="api-6ba553b0953c5e7d"></a>
<!-- api: M:Inno.Editor.ImGui.EditorPalette.Lerp(System.Numerics.Vector4,System.Numerics.Vector4,System.Single) a70713a2a92a244bf37b5b6a11c25b227524b347978066bf52a23fd62ad5444f -->

```csharp
public static System.Numerics.Vector4 Inno.Editor.ImGui.EditorPalette.Lerp(System.Numerics.Vector4 from, System.Numerics.Vector4 to, float amount)
```

Linearly interpolates two palette colors using a clamped amount.

**Parameter `from`:** The color returned when `amount` is zero.

**Parameter `to`:** The color returned when `amount` is one.

**Parameter `amount`:** The interpolation amount, clamped to the inclusive zero-to-one range.

**Returns:** The component-wise interpolated color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L440).
