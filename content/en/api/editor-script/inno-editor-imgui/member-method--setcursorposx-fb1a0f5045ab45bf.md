---
title: "ImGui — Method: SetCursorPosX"
description: "Exact Method: SetCursorPosX contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.fb1a0f5045ab45bf
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: SetCursorPosX

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SetCursorPosX`

<a id="api-3b1dc4a53705a827"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.SetCursorPosX(System.Single) c84f4b40917a853442c0bcdf473d6d7948c5d64dd4a22ddc2e6838dd5032cd76 -->

```csharp
public static void InnoEditor.ImGui.ImGui.SetCursorPosX(float position)
```

Changes only the local horizontal layout cursor.

**Parameter `position`:** The requested coordinate in UI units.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L29).
