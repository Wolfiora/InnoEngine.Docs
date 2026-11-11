---
title: "ImGui — Method: SetClipboardText"
description: "Exact Method: SetClipboardText contracts in ImGui."
uid: api.inno.editor.imgui.93a9015559d6735d
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: SetClipboardText

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetClipboardText`

<a id="api-815bfc03f6126c33"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.SetClipboardText(System.String) 1de478b8d1417c041abfb71134c49c58430f1468c880c4c14431505b64eb3def -->

```csharp
public static void Inno.Editor.ImGui.ImGui.SetClipboardText(string text)
```

Copies literal text through the host clipboard adapter.

**Parameter `text`:** Literal text; no formatting interpretation is applied.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L261).
