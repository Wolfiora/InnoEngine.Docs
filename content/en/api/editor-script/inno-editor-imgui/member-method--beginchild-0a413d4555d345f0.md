---
title: "ImGui — Method: BeginChild"
description: "Exact Method: BeginChild contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.0a413d4555d345f0
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: BeginChild

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `BeginChild`

<a id="api-51885d900245b90f"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.BeginChild(System.String,System.Numerics.Vector2,InnoEditor.ImGui.ImGuiChildFlags,InnoEditor.ImGui.ImGuiWindowFlags) 88b719f68414c80c48df46b3b4a967c9ebd846e9086315faf972a804b74f9020 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.BeginChild(string id, System.Numerics.Vector2 size = default(System.Numerics.Vector2), InnoEditor.ImGui.ImGuiChildFlags flags = InnoEditor.ImGui.ImGuiChildFlags.None, InnoEditor.ImGui.ImGuiWindowFlags windowFlags = InnoEditor.ImGui.ImGuiWindowFlags.None)
```

Begins a child region.

**Parameter `id`:** The child identity.

**Parameter `size`:** The requested child size.

**Parameter `flags`:** Child-region behavior.

**Returns:** `true` when child contents should be submitted.

**Parameter `windowFlags`:** Scroll and window policies for the child.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L346).
