---
title: "ImGui — Method: PushStyleVar"
description: "Exact Method: PushStyleVar contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.fb3175e9c6c6587f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: PushStyleVar

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `PushStyleVar`

<a id="api-3fc5747c8784b457"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.PushStyleVar(InnoEditor.ImGui.ImGuiStyleVar,System.Numerics.Vector2) 9225b43454eef0f4e91b9bcfe4736b24e44c6daf65e5e19c197458ada7518375 -->

```csharp
public static void InnoEditor.ImGui.ImGui.PushStyleVar(InnoEditor.ImGui.ImGuiStyleVar style, System.Numerics.Vector2 value)
```

Pushes one two-component style override.

**Parameter `style`:** The style variable.

**Parameter `value`:** The vector value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L853).

## `PushStyleVar`

<a id="api-6905d0bc7417a4dd"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.PushStyleVar(InnoEditor.ImGui.ImGuiStyleVar,System.Single) 787a240015d20b27845eb10a63b14322ab32de6211bed485c278ff5f8ceaaca8 -->

```csharp
public static void InnoEditor.ImGui.ImGui.PushStyleVar(InnoEditor.ImGui.ImGuiStyleVar style, float value)
```

Pushes one scalar style override.

**Parameter `style`:** The style variable.

**Parameter `value`:** The scalar value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L836).
