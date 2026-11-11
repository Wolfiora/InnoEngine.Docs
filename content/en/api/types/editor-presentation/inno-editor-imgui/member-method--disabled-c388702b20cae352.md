---
title: "ImGuiWidget.ImGuiWidget — Method: Disabled"
description: "Exact Method: Disabled contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.c388702b20cae352
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: Disabled

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Disabled`

<a id="api-b5d1fe788e0cc660"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.Disabled(System.Boolean,System.Action) f439b8e0c9cfcd1274d4a269f741faffc8335cb92715301df375afa87abb3daa -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.Disabled(bool disabled, System.Action draw)
```

Draws content inside an ImGui disabled scope when requested.

**Parameter `disabled`:** Whether interaction is disabled.

**Parameter `draw`:** Drawing callback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L349).
