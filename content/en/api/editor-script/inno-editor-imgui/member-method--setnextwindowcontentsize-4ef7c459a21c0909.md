---
title: "ImGui — Method: SetNextWindowContentSize"
description: "Exact Method: SetNextWindowContentSize contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.4ef7c459a21c0909
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: SetNextWindowContentSize

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SetNextWindowContentSize`

<a id="api-d42df5529502031e"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.SetNextWindowContentSize(System.Numerics.Vector2) 32af31a636ce93c92f75a60112c69dda697cf8935b6b05cd64a7d02ae4d14a87 -->

```csharp
public static void InnoEditor.ImGui.ImGui.SetNextWindowContentSize(System.Numerics.Vector2 size)
```

Declares virtual content size for the next scrollable window.

**Parameter `size`:** The explicit two-dimensional extent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L196).
