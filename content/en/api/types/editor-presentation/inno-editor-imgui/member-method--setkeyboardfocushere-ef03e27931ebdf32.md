---
title: "ImGui — Method: SetKeyboardFocusHere"
description: "Exact Method: SetKeyboardFocusHere contracts in ImGui."
uid: api.inno.editor.imgui.ef03e27931ebdf32
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: SetKeyboardFocusHere

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetKeyboardFocusHere`

<a id="api-7cfa5f34ec08a263"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.SetKeyboardFocusHere(System.Int32) 4994367e64386f51a4c4811b78898a3dede46bef6d575ff724e0517ed6605f1f -->

```csharp
public static void Inno.Editor.ImGui.ImGui.SetKeyboardFocusHere(int offset = 0)
```

Requests focus for a relative control position.

**Parameter `offset`:** The relative focus offset from the next submitted control.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L240).
