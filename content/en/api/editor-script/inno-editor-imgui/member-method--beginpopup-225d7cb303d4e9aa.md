---
title: "ImGui — Method: BeginPopup"
description: "Exact Method: BeginPopup contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.225d7cb303d4e9aa
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: BeginPopup

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `BeginPopup`

<a id="api-9c769ca53f3305ab"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.BeginPopup(System.String,InnoEditor.ImGui.ImGuiWindowFlags) eb3ee198282d5daa27d8ba4198a9e7a5695bca55b9a02dacb7cb086e87d52b39 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.BeginPopup(string id, InnoEditor.ImGui.ImGuiWindowFlags flags = InnoEditor.ImGui.ImGuiWindowFlags.None)
```

Begins a named popup.

**Parameter `id`:** The popup identity.

**Parameter `flags`:** Popup window behavior.

**Returns:** `true` when popup contents should be submitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L685).
