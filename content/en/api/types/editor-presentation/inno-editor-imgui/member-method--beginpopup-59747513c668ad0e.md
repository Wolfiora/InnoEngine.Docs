---
title: "ImGui — Method: BeginPopup"
description: "Exact Method: BeginPopup contracts in ImGui."
uid: api.inno.editor.imgui.59747513c668ad0e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: BeginPopup

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BeginPopup`

<a id="api-35bc0d47c0414191"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.BeginPopup(System.String,Inno.Editor.ImGui.ImGuiWindowFlags) f3b8af1973d3382ce3b5a91caa42316fd8aaa72bf5cbd6ebbafd0422e63dc653 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.BeginPopup(string id, Inno.Editor.ImGui.ImGuiWindowFlags flags = Inno.Editor.ImGui.ImGuiWindowFlags.None)
```

Begins a named popup.

**Parameter `id`:** The popup identity.

**Parameter `flags`:** Popup window behavior.

**Returns:** `true` when popup contents should be submitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L685).
