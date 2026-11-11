---
title: "ImGui — Method: TableSetupColumn"
description: "Exact Method: TableSetupColumn contracts in ImGui."
uid: api.inno.editor.imgui.652546a1f3ee0252
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: TableSetupColumn

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TableSetupColumn`

<a id="api-bf010fc3ffb69516"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.TableSetupColumn(System.String,Inno.Editor.ImGui.ImGuiTableColumnFlags,System.Single) eb6db76fe1590fa05cb697791d858a7180bc3913eaf4ee2102ca4f3a3f7c8c82 -->

```csharp
public static void Inno.Editor.ImGui.ImGui.TableSetupColumn(string label, Inno.Editor.ImGui.ImGuiTableColumnFlags flags = Inno.Editor.ImGui.ImGuiTableColumnFlags.None, float widthOrWeight = 0)
```

Declares one table column.

**Parameter `label`:** The column label.

**Parameter `flags`:** Column behavior.

**Parameter `widthOrWeight`:** The initial fixed width or stretch weight.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L418).
