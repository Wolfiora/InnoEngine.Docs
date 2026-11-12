---
title: "ImGui — Method: BeginTabBar"
description: "Exact Method: BeginTabBar contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.ccedf7e81a1a30f9
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: BeginTabBar

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `BeginTabBar`

<a id="api-63d86ac51701545c"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.BeginTabBar(System.String,InnoEditor.ImGui.ImGuiTabBarFlags) 9671bbf2a6c251e8ec7972500cb0a85fb827908fec557f3b0c12712f08ecd7d8 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.BeginTabBar(string id, InnoEditor.ImGui.ImGuiTabBarFlags flags = InnoEditor.ImGui.ImGuiTabBarFlags.None)
```

Begins a tab bar.

**Parameter `id`:** The tab bar identity.

**Parameter `flags`:** Tab-bar behavior.

**Returns:** `true` when tab contents should be submitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L587).
