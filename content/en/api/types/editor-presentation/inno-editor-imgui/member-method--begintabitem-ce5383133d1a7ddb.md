---
title: "ImGui — Method: BeginTabItem"
description: "Exact Method: BeginTabItem contracts in ImGui."
uid: api.inno.editor.imgui.ce5383133d1a7ddb
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: BeginTabItem

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BeginTabItem`

<a id="api-4be57a132527ba9f"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.BeginTabItem(System.String,Inno.Editor.ImGui.ImGuiTabItemFlags) cae9a2c97874fc28cbc961c1a2bb87a32e956ed92b65c54ba287258816a6b69e -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.BeginTabItem(string label, Inno.Editor.ImGui.ImGuiTabItemFlags flags = Inno.Editor.ImGui.ImGuiTabItemFlags.None)
```

Begins one tab item.

**Parameter `label`:** The tab label and identity.

**Parameter `flags`:** Tab-item behavior.

**Returns:** `true` when tab contents should be submitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L616).

## `BeginTabItem`

<a id="api-db93d6af7f345457"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.BeginTabItem(System.String,System.Boolean@,Inno.Editor.ImGui.ImGuiTabItemFlags) 1983d2ee539c02ea4db6ec9ecdf602c293535d2551bf56cd20c6822878411171 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.BeginTabItem(string label, ref bool isOpen, Inno.Editor.ImGui.ImGuiTabItemFlags flags = Inno.Editor.ImGui.ImGuiTabItemFlags.None)
```

Begins one closeable tab item.

**Parameter `label`:** The tab label and identity.

**Parameter `isOpen`:** Receives whether the tab remains open.

**Parameter `flags`:** Tab-item behavior.

**Returns:** `true` when tab contents should be submitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L639).
