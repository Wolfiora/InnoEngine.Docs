---
title: "ImGui — Method: PushClipRect"
description: "Exact Method: PushClipRect contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.97b1b43fd82a094c
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: PushClipRect

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `PushClipRect`

<a id="api-dd7e2b9d430d9e17"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.PushClipRect(System.Numerics.Vector2,System.Numerics.Vector2,System.Boolean) 916f265fd63e47eebaf1444d4a16c497189de9929b7081c7e37f79ea5ad49f2b -->

```csharp
public static void InnoEditor.ImGui.ImGui.PushClipRect(System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum, bool intersect)
```

Clips subsequent controls and drawing to a screen rectangle.

**Parameter `minimum`:** The inclusive lower bound or upper-left corner.

**Parameter `maximum`:** The inclusive upper bound or lower-right corner.

**Parameter `intersect`:** Whether to intersect the enclosing clip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Drawing.cs#L53).
