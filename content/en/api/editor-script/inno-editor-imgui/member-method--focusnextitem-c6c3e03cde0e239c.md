---
title: "ImGui — Method: FocusNextItem"
description: "Exact Method: FocusNextItem contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.c6c3e03cde0e239c
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: FocusNextItem

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `FocusNextItem`

<a id="api-b661b7f585c2a22b"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.FocusNextItem 34622a1958a1e1f58f6a9acbafb9de24a2294259275fed3e378f2ce8258d8582 -->

```csharp
public static void InnoEditor.ImGui.ImGui.FocusNextItem()
```

Requests keyboard focus for the next submitted item in the current frame and window.

**Throws `System.InvalidOperationException`:** No matching owner-thread drawing session is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L950).
