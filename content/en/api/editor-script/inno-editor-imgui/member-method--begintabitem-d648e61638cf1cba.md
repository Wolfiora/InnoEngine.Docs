---
title: "ImGui — Method: BeginTabItem"
description: "Exact Method: BeginTabItem contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.d648e61638cf1cba
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: BeginTabItem

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `BeginTabItem`

<a id="api-df3d56f0223375fe"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.BeginTabItem(System.String,InnoEditor.ImGui.ImGuiTabItemFlags) 2df34f8c731d561d375fd655e2887cc5f6f3067782f2dea5fefe27506e443459 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.BeginTabItem(string label, InnoEditor.ImGui.ImGuiTabItemFlags flags = InnoEditor.ImGui.ImGuiTabItemFlags.None)
```

Begins one tab item.

**Parameter `label`:** The tab label and identity.

**Parameter `flags`:** Tab-item behavior.

**Returns:** `true` when tab contents should be submitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L616).

## `BeginTabItem`

<a id="api-2e2fcee11b4008f4"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.BeginTabItem(System.String,System.Boolean@,InnoEditor.ImGui.ImGuiTabItemFlags) 86c670f4392e56bad770b94990c2ee106691eeb2449b718b48f9e4820726d4a1 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.BeginTabItem(string label, ref bool isOpen, InnoEditor.ImGui.ImGuiTabItemFlags flags = InnoEditor.ImGui.ImGuiTabItemFlags.None)
```

Begins one closeable tab item.

**Parameter `label`:** The tab label and identity.

**Parameter `isOpen`:** Receives whether the tab remains open.

**Parameter `flags`:** Tab-item behavior.

**Returns:** `true` when tab contents should be submitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L639).
