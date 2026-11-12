---
title: "ImGui — Method: PushId"
description: "Exact Method: PushId contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.d8755b8fc04e3122
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: PushId

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `PushId`

<a id="api-3463ee280827bfe9"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.PushId(System.Int32) f85c1f43073b3716b5361bac11812b6167cd05623a38b911cf1a02232f0bc3bf -->

```csharp
public static void InnoEditor.ImGui.ImGui.PushId(int id)
```

Pushes an integer identity onto the ImGui ID stack.

**Parameter `id`:** The stable identity used to locate the requested value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L783).

## `PushId`

<a id="api-c0244bb39c488cdf"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.PushId(System.String) c036a976ed9946595ddc1c715ce1d0255b1cf0439e058433f9a6100b6788cfaf -->

```csharp
public static void InnoEditor.ImGui.ImGui.PushId(string id)
```

Pushes a string identity onto the ImGui ID stack.

**Parameter `id`:** The stable identity used to locate the requested value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L771).
