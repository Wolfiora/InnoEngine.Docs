---
title: "ImGui — Method: SetCursorPosY"
description: "Exact Method: SetCursorPosY contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.ae6a3bd5e6514426
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: SetCursorPosY

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SetCursorPosY`

<a id="api-90e0f68b216fd1c2"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.SetCursorPosY(System.Single) ca4c7aebbacb1cf3f2c80cba3b940bf077532f2362a561e71d8480e662d147ca -->

```csharp
public static void InnoEditor.ImGui.ImGui.SetCursorPosY(float position)
```

Changes only the local vertical layout cursor.

**Parameter `position`:** The requested coordinate in UI units.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L41).
