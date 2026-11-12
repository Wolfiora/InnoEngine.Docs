---
title: "ImGui — Method: OpenPopup"
description: "Exact Method: OpenPopup contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.ebf2014d723367b6
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: OpenPopup

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `OpenPopup`

<a id="api-f556eb237fec8fed"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.OpenPopup(System.String,InnoEditor.ImGui.ImGuiPopupFlags) d2d8c70abd3de182e88731a96ea8b35ee602480592baa1c8722619d15c55d140 -->

```csharp
public static void InnoEditor.ImGui.ImGui.OpenPopup(string id, InnoEditor.ImGui.ImGuiPopupFlags flags = InnoEditor.ImGui.ImGuiPopupFlags.None)
```

Opens a named popup.

**Parameter `id`:** The popup identity.

**Parameter `flags`:** Popup opening behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L665).
