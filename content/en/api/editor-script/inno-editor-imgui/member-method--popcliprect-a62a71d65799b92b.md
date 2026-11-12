---
title: "ImGui — Method: PopClipRect"
description: "Exact Method: PopClipRect contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.a62a71d65799b92b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: PopClipRect

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `PopClipRect`

<a id="api-c30a95afb6d5c848"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.PopClipRect 0695a6cd6ab743ffa6af4e1c7ab5591f6e063f028f4594f01cade28c58882786 -->

```csharp
public static void InnoEditor.ImGui.ImGui.PopClipRect()
```

Restores the enclosing control clip after a matching push.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Drawing.cs#L65).
