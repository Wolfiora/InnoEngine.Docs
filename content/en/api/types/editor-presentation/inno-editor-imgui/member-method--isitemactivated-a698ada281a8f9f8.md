---
title: "ImGui — Method: IsItemActivated"
description: "Exact Method: IsItemActivated contracts in ImGui."
uid: api.inno.editor.imgui.a698ada281a8f9f8
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: IsItemActivated

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsItemActivated`

<a id="api-51b31180500b3de4"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.IsItemActivated 451c1257c336d7de48fbb0b584f8c1c7eed065ac98c7e2a3e0ea7fc4c7a91a13 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.IsItemActivated()
```

Checks the first frame of the last control interaction.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L216).
