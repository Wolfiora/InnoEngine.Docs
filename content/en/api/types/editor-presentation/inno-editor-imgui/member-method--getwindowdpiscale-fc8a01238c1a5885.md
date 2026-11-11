---
title: "ImGui — Method: GetWindowDpiScale"
description: "Exact Method: GetWindowDpiScale contracts in ImGui."
uid: api.inno.editor.imgui.fc8a01238c1a5885
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: GetWindowDpiScale

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowDpiScale`

<a id="api-dab09566af507cdd"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.GetWindowDpiScale f1384d644dbef46153f34c2873d60877be239b065584cca46ebd6a40fde1bba5 -->

```csharp
public static float Inno.Editor.ImGui.ImGui.GetWindowDpiScale()
```

Gets the native viewport scale for the current window.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L149).
