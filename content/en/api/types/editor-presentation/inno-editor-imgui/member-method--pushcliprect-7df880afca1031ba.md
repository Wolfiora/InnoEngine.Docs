---
title: "ImGui — Method: PushClipRect"
description: "Exact Method: PushClipRect contracts in ImGui."
uid: api.inno.editor.imgui.7df880afca1031ba
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: PushClipRect

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PushClipRect`

<a id="api-719220f84c4e714d"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.PushClipRect(System.Numerics.Vector2,System.Numerics.Vector2,System.Boolean) 0d8684149277d18490b7818a3c9f8cf6ae189f732ccf06c697f13bb151253662 -->

```csharp
public static void Inno.Editor.ImGui.ImGui.PushClipRect(System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum, bool intersect)
```

Clips subsequent controls and drawing to a screen rectangle.

**Parameter `minimum`:** The inclusive lower bound or upper-left corner.

**Parameter `maximum`:** The inclusive upper bound or lower-right corner.

**Parameter `intersect`:** Whether to intersect the enclosing clip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Drawing.cs#L53).
