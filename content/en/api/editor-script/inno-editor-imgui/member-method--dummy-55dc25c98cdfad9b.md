---
title: "ImGui — Method: Dummy"
description: "Exact Method: Dummy contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.55dc25c98cdfad9b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: Dummy

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `Dummy`

<a id="api-de911a8e2d954b29"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.Dummy(System.Numerics.Vector2) 898e89cd968beca9b942eb53ec08bf7ef784d934a6be48854a6add64598807da -->

```csharp
public static void InnoEditor.ImGui.ImGui.Dummy(System.Numerics.Vector2 size)
```

Advances layout by an invisible size.

**Parameter `size`:** The size consumed by dummy; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L926).
