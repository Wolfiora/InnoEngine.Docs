---
title: "ImGuiWidget — Method: Trend"
description: "Exact Method: Trend contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.449732752c8979ca
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: Trend

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `Trend`

<a id="api-633dc9a0fcfc9b4c"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.Trend(System.String,System.ReadOnlySpan{System.Single},System.Int32) a001bd3fa97d312be7f6b3c9dcc594b593284d8351d9bb956077d92f54fb0811 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.Trend(string label, System.ReadOnlySpan<float> values, int offset = 0)
```

Draws a bounded line plot from borrowed numeric samples without copying their buffer.

**Parameter `label`:** The visible plot title and stable item identifier in its current owner.

**Parameter `values`:** Finite samples borrowed only for this call; an empty span draws an empty plot.

**Parameter `offset`:** The first chronological sample in a circular buffer, or zero for empty input.

**Throws `System.ArgumentException`:** The label is empty or a sample is not finite.

**Throws `System.ArgumentOutOfRangeException`:** The offset is outside the supplied sample span.

**Throws `System.InvalidOperationException`:** No matching owner-thread drawing session is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Trend.cs#L34).
