---
title: "ImGui — Method: PushTextWrapPos"
description: "Exact Method: PushTextWrapPos contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.af0674334a420516
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: PushTextWrapPos

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `PushTextWrapPos`

<a id="api-5294225af34131e3"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.PushTextWrapPos(System.Single) 806b414c1fd40e5ab9ac52d906dd9b14641bb906e30ac095778caca9c4b88ffc -->

```csharp
public static void InnoEditor.ImGui.ImGui.PushTextWrapPos(float position = 0)
```

Restricts subsequent text wrapping to a local horizontal boundary.

**Parameter `position`:** The requested coordinate in UI units.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L232).
