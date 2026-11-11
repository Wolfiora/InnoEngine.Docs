---
title: "ImGui — Method: IsMouseHoveringRect"
description: "Exact Method: IsMouseHoveringRect contracts in ImGui."
uid: api.inno.editor.imgui.afbe41d52adc13bd
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: IsMouseHoveringRect

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsMouseHoveringRect`

<a id="api-f90ce1c72d068197"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.IsMouseHoveringRect(System.Numerics.Vector2,System.Numerics.Vector2,System.Boolean) d50ecc888ca5a2b3a237d2e4d83881dd4993396afc991e6b56d4205313d0838e -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.IsMouseHoveringRect(System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum, bool clip = true)
```

Checks pointer containment in a screen rectangle with optional window clipping.

**Parameter `minimum`:** The inclusive lower bound or upper-left corner.

**Parameter `maximum`:** The inclusive upper bound or lower-right corner.

**Parameter `clip`:** Whether the current clipping rectangle participates.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L147).
