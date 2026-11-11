---
title: "ImGui — Method: Dummy"
description: "Exact Method: Dummy contracts in ImGui."
uid: api.inno.editor.imgui.43392af561bd0fa6
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: Dummy

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Dummy`

<a id="api-3b2785a60c698c87"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.Dummy(System.Numerics.Vector2) 284fb5335534be9b19da2efc9e8ca39331c4e1d83efb10089a2ee71105498fe0 -->

```csharp
public static void Inno.Editor.ImGui.ImGui.Dummy(System.Numerics.Vector2 size)
```

Advances layout by an invisible size.

**Parameter `size`:** The size consumed by dummy; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L926).
