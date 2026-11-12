---
title: "ImGui — Method: Unindent"
description: "Exact Method: Unindent contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.ecb378b0b6721c79
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: Unindent

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `Unindent`

<a id="api-5be4a1169fb6c7ae"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.Unindent(System.Single) c50551a06af9d52f3bcced2177aa17a7564c286160790ac0314c09fd15cbdb05 -->

```csharp
public static void InnoEditor.ImGui.ImGui.Unindent(float amount = 0)
```

Restores a matching indentation step.

**Parameter `amount`:** The requested layout distance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L220).
