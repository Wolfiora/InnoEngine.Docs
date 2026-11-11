---
title: "ImGui — Method: InputFloat"
description: "Exact Method: InputFloat contracts in ImGui."
uid: api.inno.editor.imgui.e7b64e71b0b97afd
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: InputFloat

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `InputFloat`

<a id="api-5c1737244924d19c"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.InputFloat(System.String,System.Single@) fe9123e8386b7c9c48513f5e107d8729a590b64723d9293b4923477024e30795 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.InputFloat(string label, ref float value)
```

Draws and edits a floating-point value.

**Parameter `label`:** The control label.

**Returns:** `true` when the value changes.

**Parameter `value`:** The number displayed with three fractional digits and replaced after an accepted edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L191).
