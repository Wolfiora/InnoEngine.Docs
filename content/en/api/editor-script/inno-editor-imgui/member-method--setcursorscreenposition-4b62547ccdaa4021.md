---
title: "ImGui — Method: SetCursorScreenPosition"
description: "Exact Method: SetCursorScreenPosition contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.4b62547ccdaa4021
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: SetCursorScreenPosition

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SetCursorScreenPosition`

<a id="api-9d60ff4e22fc2d2f"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.SetCursorScreenPosition(System.Numerics.Vector2) 95df883c7fd8e6251938562536c83a5facb2be462d9036ddbd4f78f54cb58083 -->

```csharp
public static void InnoEditor.ImGui.ImGui.SetCursorScreenPosition(System.Numerics.Vector2 position)
```

Places the next control at a screen-space location.

**Parameter `position`:** The requested coordinate in UI units.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L17).
