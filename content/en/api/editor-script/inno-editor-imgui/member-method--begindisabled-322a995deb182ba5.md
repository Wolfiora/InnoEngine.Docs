---
title: "ImGui — Method: BeginDisabled"
description: "Exact Method: BeginDisabled contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.322a995deb182ba5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: BeginDisabled

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `BeginDisabled`

<a id="api-28d7c2e53ff3228f"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.BeginDisabled(System.Boolean) d208c159833f456878d5fc08c7862f1cb35455bbcb30626b6d996a9adde4ef39 -->

```csharp
public static void InnoEditor.ImGui.ImGui.BeginDisabled(bool disabled = true)
```

Begins a disabled block.

**Parameter `disabled`:** Whether controls in the block are disabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L732).
