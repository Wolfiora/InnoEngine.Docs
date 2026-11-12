---
title: "ImGui — Method: GetScrollY"
description: "Exact Method: GetScrollY contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.3847d7af933ccedc
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetScrollY

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetScrollY`

<a id="api-429e58cacaf28698"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetScrollY fbf48076c3db10482423aa604e6b809075427ed18da0aa41fb32a8ed0aea6ed6 -->

```csharp
public static float InnoEditor.ImGui.ImGui.GetScrollY()
```

Gets the current vertical scroll position.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L253).
