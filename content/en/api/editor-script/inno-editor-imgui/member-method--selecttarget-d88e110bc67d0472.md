---
title: "ImGuiWidget — Method: SelectTarget"
description: "Exact Method: SelectTarget contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.d88e110bc67d0472
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: SelectTarget

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SelectTarget`

<a id="api-e9954ffb22d22a40"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.SelectTarget(InnoEditor.Interactions.EditorInteractions,InnoEngine.Core.IdentityObject,System.Collections.Generic.IReadOnlyList{InnoEngine.Core.RuntimeIdentity}) 7171fb9e8bbcd2ffa3c4e9b06523105d354d2400e90fae2c5c52fe92ed4a6dfd -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.SelectTarget(InnoEditor.Interactions.EditorInteractions interactions, InnoEngine.Core.IdentityObject target, System.Collections.Generic.IReadOnlyList<InnoEngine.Core.RuntimeIdentity> visibleTargets)
```

Applies ordinary, additive or visible-range selection using the active keyboard modifiers.

**Parameter `interactions`:** The session's authoritative interaction service.

**Parameter `target`:** The freshly resolved clicked target.

**Parameter `visibleTargets`:** Current runtime-identity view order; collapsed or filtered items must be omitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L28).
