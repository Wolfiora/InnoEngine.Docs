---
title: "ImGui — Method: FocusNextItem"
description: "Exact Method: FocusNextItem contracts in ImGui."
uid: api.inno.editor.imgui.ad23e917b27fda9b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: FocusNextItem

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `FocusNextItem`

<a id="api-30750f03bfc40e00"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.FocusNextItem f3ebca8076484444cda8337654a60c8db5eed8600b817c8abb73765c641da8d6 -->

```csharp
public static void Inno.Editor.ImGui.ImGui.FocusNextItem()
```

Requests keyboard focus for the next submitted item in the current frame and window.

**Throws `System.InvalidOperationException`:** No matching owner-thread drawing session is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L950).
