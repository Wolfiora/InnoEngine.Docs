---
title: "EditorStyleMetrics — Property: menuSearchFramePadding"
description: "Exact Property: menuSearchFramePadding contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.7530977a9599db5d
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.bf7fb9424cd923b9#type-declaration
---
# `EditorStyleMetrics`: Property: menuSearchFramePadding

Read these exact member contracts together with the [containing type](editorstylemetrics.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `menuSearchFramePadding`

<a id="api-7b863e6f3d398ffc"></a>
<!-- api: P:Inno.Editor.ImGui.EditorStyleMetrics.menuSearchFramePadding d44ccdf63faa89898bc725a7c6a5684350e768e77249835f4ee96a6e2af9b0a5 -->

```csharp
public System.Numerics.Vector2 Inno.Editor.ImGui.EditorStyleMetrics.menuSearchFramePadding { get; }
```

Gets the compact padding used by the search field at the top of editor context menus.
Its vertical padding matches the half-spacing that menu entries add above and below a line.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L197).
