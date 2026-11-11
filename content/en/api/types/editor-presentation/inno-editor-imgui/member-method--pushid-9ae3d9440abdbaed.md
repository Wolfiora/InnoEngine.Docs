---
title: "ImGui — Method: PushId"
description: "Exact Method: PushId contracts in ImGui."
uid: api.inno.editor.imgui.9ae3d9440abdbaed
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: PushId

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PushId`

<a id="api-24cc1d79c3029e3c"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.PushId(System.Int32) 38115050a97e2a11652883ef1701bee342b08ccf164755396b7bcf23cef26e3f -->

```csharp
public static void Inno.Editor.ImGui.ImGui.PushId(int id)
```

Pushes an integer identity onto the ImGui ID stack.

**Parameter `id`:** The stable identity used to locate the requested value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L783).

## `PushId`

<a id="api-0160a72ad321e899"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.PushId(System.String) 4cce38b315b10977a649e70556b4e8c73ed926ae838f513df4f5737b382d15b5 -->

```csharp
public static void Inno.Editor.ImGui.ImGui.PushId(string id)
```

Pushes a string identity onto the ImGui ID stack.

**Parameter `id`:** The stable identity used to locate the requested value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L771).
