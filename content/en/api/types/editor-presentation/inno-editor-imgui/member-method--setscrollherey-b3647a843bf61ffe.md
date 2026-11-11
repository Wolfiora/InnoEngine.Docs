---
title: "ImGui — Method: SetScrollHereY"
description: "Exact Method: SetScrollHereY contracts in ImGui."
uid: api.inno.editor.imgui.b3647a843bf61ffe
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: SetScrollHereY

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetScrollHereY`

<a id="api-ee86e687b84a649d"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.SetScrollHereY(System.Single) bb5e6d70eae08b8476ffec5696b773d9abef4cd9d39e495ee22ccde5a143b750 -->

```csharp
public static void Inno.Editor.ImGui.ImGui.SetScrollHereY(float ratio = 0.5)
```

Scrolls the most recently submitted control into the requested relative position.

**Parameter `ratio`:** The relative alignment from zero through one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L277).
