---
title: "ImGui — Method: SetClipboardText"
description: "Exact Method: SetClipboardText contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.c3b9168b7c070ff3
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: SetClipboardText

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SetClipboardText`

<a id="api-4f2a4a067920513e"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.SetClipboardText(System.String) 53ca1945145f361343295cac137558dc38d17eca7dbb835598b87c313b0a70f4 -->

```csharp
public static void InnoEditor.ImGui.ImGui.SetClipboardText(string text)
```

Copies literal text through the host clipboard adapter.

**Parameter `text`:** Literal text; no formatting interpretation is applied.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L261).
