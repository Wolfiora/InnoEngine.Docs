---
title: "ImGui — Method: IsAnyItemHovered"
description: "Exact Method: IsAnyItemHovered contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.7a4f13afabac4fd5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: IsAnyItemHovered

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsAnyItemHovered`

<a id="api-27e781420c0e1a73"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.IsAnyItemHovered 4faa5a595c4962a0c75166d13508f1b7d693370e6ca22fd97f6e529e22453384 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.IsAnyItemHovered()
```

Checks whether a submitted control currently owns hover.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L192).
