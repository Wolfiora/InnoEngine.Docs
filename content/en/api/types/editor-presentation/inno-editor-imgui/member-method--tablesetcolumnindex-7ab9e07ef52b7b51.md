---
title: "ImGui — Method: TableSetColumnIndex"
description: "Exact Method: TableSetColumnIndex contracts in ImGui."
uid: api.inno.editor.imgui.7ab9e07ef52b7b51
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: TableSetColumnIndex

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TableSetColumnIndex`

<a id="api-28455ff3f77679c6"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.TableSetColumnIndex(System.Int32) 0a379ca94b5571568a21befccab36e7295da05dec6324cef80af9b44c3f9db31 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.TableSetColumnIndex(int index)
```

Selects a declared table column for subsequent controls.

**Parameter `index`:** The zero-based item index.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Tables.cs#L20).
