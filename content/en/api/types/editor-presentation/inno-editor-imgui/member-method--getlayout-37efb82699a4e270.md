---
title: "ImGui — Method: GetLayout"
description: "Exact Method: GetLayout contracts in ImGui."
uid: api.inno.editor.imgui.37efb82699a4e270
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: GetLayout

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetLayout`

<a id="api-c8e479b087055f42"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.GetLayout 67b8f7c025fcb01b50368e78867c1af823480193241acd4bfc5b04654c26a7d5 -->

```csharp
public static Inno.Editor.ImGui.EditorUiLayout Inno.Editor.ImGui.ImGui.GetLayout()
```

Copies the current UI layout metrics.

**Returns:** Value metrics valid independently from the native style pointer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L16).
