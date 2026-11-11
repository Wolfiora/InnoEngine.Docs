---
title: "ImGui — Method: IsAnyItemActive"
description: "Exact Method: IsAnyItemActive contracts in ImGui."
uid: api.inno.editor.imgui.e0af385050613303
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: IsAnyItemActive

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsAnyItemActive`

<a id="api-85a8feba2b186557"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.IsAnyItemActive 02707e6934434a4b4d4fa8c6b56dd22686b17f946665ced754bb0d8b7e9ded5a -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.IsAnyItemActive()
```

Checks whether a submitted control owns an active interaction.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L204).
