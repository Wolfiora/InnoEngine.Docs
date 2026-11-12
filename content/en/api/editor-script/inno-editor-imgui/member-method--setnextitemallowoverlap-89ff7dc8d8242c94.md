---
title: "ImGui — Method: SetNextItemAllowOverlap"
description: "Exact Method: SetNextItemAllowOverlap contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.89ff7dc8d8242c94
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: SetNextItemAllowOverlap

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SetNextItemAllowOverlap`

<a id="api-ed438fb09748d044"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.SetNextItemAllowOverlap 2043396854d10d8415b982f9b20e6db3645a39392debaf5d30c9ab87c28e782f -->

```csharp
public static void InnoEditor.ImGui.ImGui.SetNextItemAllowOverlap()
```

Allows explicitly layered controls to share the next item bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L167).
