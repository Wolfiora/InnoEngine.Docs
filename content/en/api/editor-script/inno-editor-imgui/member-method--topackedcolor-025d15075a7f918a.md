---
title: "ImGui — Method: ToPackedColor"
description: "Exact Method: ToPackedColor contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.025d15075a7f918a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: ToPackedColor

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `ToPackedColor`

<a id="api-95d30a140618549d"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.ToPackedColor(System.Numerics.Vector4) 03d255d306219b463456ef8462c8a86aa88d92010faeefefcb617ac3eb0e38c5 -->

```csharp
public static uint InnoEditor.ImGui.ImGui.ToPackedColor(System.Numerics.Vector4 color)
```

Converts a floating-point RGBA color to Dear ImGui packed color order.

**Returns:** The packed color value.

**Parameter `color`:** The color consumed by to packed color; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1171).
