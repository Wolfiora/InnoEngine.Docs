---
title: "ImGui — Method: SetNextItemWidth"
description: "Exact Method: SetNextItemWidth contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.931f9cfd9dd53e50
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: SetNextItemWidth

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SetNextItemWidth`

<a id="api-21d6afcef4b2e935"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.SetNextItemWidth(System.Single) 3a70e9712cb0b74abd7195e1f55bc658c5c8b183cd94ff62fb131eaabfb8da6f -->

```csharp
public static void InnoEditor.ImGui.ImGui.SetNextItemWidth(float width)
```

Sets the width of the next item.

**Parameter `width`:** The width in logical units or pixels required by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L938).
