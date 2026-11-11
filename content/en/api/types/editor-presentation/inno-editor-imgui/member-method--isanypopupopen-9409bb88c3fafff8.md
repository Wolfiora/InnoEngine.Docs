---
title: "ImGui — Method: IsAnyPopupOpen"
description: "Exact Method: IsAnyPopupOpen contracts in ImGui."
uid: api.inno.editor.imgui.9409bb88c3fafff8
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: IsAnyPopupOpen

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsAnyPopupOpen`

<a id="api-dc43b0b56d925d79"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.IsAnyPopupOpen 15f1f328bde4c9681f78431e66bbb478b267537041fc85666655eef85e8abfd5 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.IsAnyPopupOpen()
```

Reads whether an open popup or modal currently prevents underlying canvas and list input.

**Returns:** True when any popup is open in this native context, independently of its identifier or nesting.

**Throws `System.InvalidOperationException`:** No valid drawing session or native frame is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L720).
