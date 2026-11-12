---
title: "ImGui — Method: IsMouseHoveringRect"
description: "Exact Method: IsMouseHoveringRect contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.1f8fecbbdd07c98c
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: IsMouseHoveringRect

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsMouseHoveringRect`

<a id="api-6dadefaba925eaa7"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.IsMouseHoveringRect(System.Numerics.Vector2,System.Numerics.Vector2,System.Boolean) 41499e3a624930094375295f42bbbf375403d54bceeb26cd49d5091aaec17354 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.IsMouseHoveringRect(System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum, bool clip = true)
```

Checks pointer containment in a screen rectangle with optional window clipping.

**Parameter `minimum`:** The inclusive lower bound or upper-left corner.

**Parameter `maximum`:** The inclusive upper bound or lower-right corner.

**Parameter `clip`:** Whether the current clipping rectangle participates.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L147).
