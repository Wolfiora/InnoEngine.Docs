---
title: "ImGuiWidget.ImGuiWidget — Method: Trend"
description: "Exact Method: Trend contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.efc6b1fa2ad1bd21
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: Trend

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Trend`

<a id="api-6957d1c73e2dfb2a"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.Trend(System.String,System.ReadOnlySpan{System.Single},System.Int32) 2df25a5b222a03dcbfcc761824d4b1b4cfdbeedcbcbd87e664953e374dce8d9a -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.Trend(string label, System.ReadOnlySpan<float> values, int offset = 0)
```

Draws a bounded line plot from borrowed numeric samples without copying their buffer.

**Parameter `label`:** The visible plot title and stable item identifier in its current owner.

**Parameter `values`:** Finite samples borrowed only for this call; an empty span draws an empty plot.

**Parameter `offset`:** The first chronological sample in a circular buffer, or zero for empty input.

**Throws `System.ArgumentException`:** The label is empty or a sample is not finite.

**Throws `System.ArgumentOutOfRangeException`:** The offset is outside the supplied sample span.

**Throws `System.InvalidOperationException`:** No matching owner-thread drawing session is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Trend.cs#L34).
