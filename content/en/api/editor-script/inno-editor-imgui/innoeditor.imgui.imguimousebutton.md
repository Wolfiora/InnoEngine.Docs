---
title: "ImGuiMouseButton"
description: "Reference for ImGuiMouseButton in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.844a205e1c3a66bb
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiMouseButton`

This reference describes `ImGuiMouseButton` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Count`](#api-3daddda32df2c52d) | Field |
| [`Left`](#api-5a03121b7349ca8e) | Field |
| [`Middle`](#api-5d1e6e9720e45cb3) | Field |
| [`Right`](#api-9f4f36692f4bca42) | Field |

## Type declaration

<a id="api-844a205e1c3a66bb"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiMouseButton e0034b8268459b09261f1b7bd57ab38975503cf7061dcd3fec6c48fa5e6715b3 -->

```csharp
public enum InnoEditor.ImGui.ImGuiMouseButton : int
```

Defines the supported mouse button choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseButton.cs#L7).

## `Count`

<a id="api-3daddda32df2c52d"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiMouseButton.Count 014a085d91606c704c41d2cee9ac728358a6fe475d1c77331d6cc15bd1c804fb -->

```csharp
InnoEditor.ImGui.ImGuiMouseButton.Count = 5
```

Marks the exclusive end of the valid option range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseButton.cs#L24).

## `Left`

<a id="api-5a03121b7349ca8e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiMouseButton.Left 79a5ffb9e61e172098d72ccb61c449637674374d5047116d8b503f2090da3d91 -->

```csharp
InnoEditor.ImGui.ImGuiMouseButton.Left = 0
```

Selects the left presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseButton.cs#L12).

## `Middle`

<a id="api-5d1e6e9720e45cb3"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiMouseButton.Middle c89d27c71e0b552452a3311c0882c8c11cf93fda2f5cd2869deed31d90e11a3c -->

```csharp
InnoEditor.ImGui.ImGuiMouseButton.Middle = 2
```

Selects the middle presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseButton.cs#L20).

## `Right`

<a id="api-9f4f36692f4bca42"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiMouseButton.Right d9d7bc10339f6baaf6d246b2f979a7330e3aaf6ce2932b3425c495a88a60580a -->

```csharp
InnoEditor.ImGui.ImGuiMouseButton.Right = 1
```

Selects the right presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseButton.cs#L16).
