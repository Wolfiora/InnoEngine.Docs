---
title: "ImGui — Method: Indent"
description: "Exact Method: Indent contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.df1ea00e257864de
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: Indent

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `Indent`

<a id="api-44c02ae857773837"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.Indent(System.Single) 00544841dd3eed3f538ea2984d74f14c262ae1c0a3b68e2e81e8b974297645b9 -->

```csharp
public static void InnoEditor.ImGui.ImGui.Indent(float amount = 0)
```

Indents subsequent controls by an explicit amount or the standard step.

**Parameter `amount`:** The requested layout distance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L208).
