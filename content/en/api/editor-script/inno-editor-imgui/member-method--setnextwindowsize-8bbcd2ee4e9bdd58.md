---
title: "ImGui — Method: SetNextWindowSize"
description: "Exact Method: SetNextWindowSize contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.8bbcd2ee4e9bdd58
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: SetNextWindowSize

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SetNextWindowSize`

<a id="api-035121ab0859e9c2"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.SetNextWindowSize(System.Numerics.Vector2,InnoEditor.ImGui.ImGuiCond) c648ceeeb199c3b07e6b449512f3c93e3f94027465122fe85b5b1ca5d0b665f1 -->

```csharp
public static void InnoEditor.ImGui.ImGui.SetNextWindowSize(System.Numerics.Vector2 size, InnoEditor.ImGui.ImGuiCond condition = InnoEditor.ImGui.ImGuiCond.None)
```

Requests a size for the next window under an explicit layout condition.

**Parameter `size`:** The explicit two-dimensional extent.

**Parameter `condition`:** The condition controlling when the request is applied.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L182).
