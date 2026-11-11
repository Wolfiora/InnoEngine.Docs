---
title: "ImGuiWidget.ImGuiWidget — Method: SelectTarget"
description: "Exact Method: SelectTarget contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.e6785b3546e339f3
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: SelectTarget

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SelectTarget`

<a id="api-daaa9a5c21b05b17"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SelectTarget(Inno.Editor.Interactions.EditorInteractions,Inno.Core.Identity.IdentityObject,System.Collections.Generic.IReadOnlyList{Inno.Core.Identity.RuntimeIdentity}) ee46a33f7a79acf46212873b74980d1fc0e51c0853f71facb3c11d02fb2de942 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SelectTarget(Inno.Editor.Interactions.EditorInteractions interactions, Inno.Core.Identity.IdentityObject target, System.Collections.Generic.IReadOnlyList<Inno.Core.Identity.RuntimeIdentity> visibleTargets)
```

Applies ordinary, additive or visible-range selection using the active keyboard modifiers.

**Parameter `interactions`:** The session's authoritative interaction service.

**Parameter `target`:** The freshly resolved clicked target.

**Parameter `visibleTargets`:** Current runtime-identity view order; collapsed or filtered items must be omitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L28).
