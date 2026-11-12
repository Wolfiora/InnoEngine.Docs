---
title: "ImGui — Method: GetItemMaximum"
description: "Exact Method: GetItemMaximum contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.d5790be0d4904510
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetItemMaximum

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetItemMaximum`

<a id="api-4af745de664d15cc"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetItemMaximum 6296386de075f0324fc4230ca1887608bc723f4768e7bafc1af591e2d7b0d138 -->

```csharp
public static System.Numerics.Vector2 InnoEditor.ImGui.ImGui.GetItemMaximum()
```

Gets the maximum screen-space corner of the previous item.

**Returns:** The item maximum corner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1022).
