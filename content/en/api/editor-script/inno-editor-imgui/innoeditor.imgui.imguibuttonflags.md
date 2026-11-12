---
title: "ImGuiButtonFlags"
description: "Reference for ImGuiButtonFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.05165a0ef0d87924
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiButtonFlags`

This reference describes `ImGuiButtonFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`EnableNav`](#api-a82c90492430c6d6) | Field |
| [`MouseButtonLeft`](#api-6d09d8dca13a2ad7) | Field |
| [`MouseButtonMask`](#api-1ca9a321fc529e0a) | Field |
| [`MouseButtonMiddle`](#api-145ef8879078cbc7) | Field |
| [`MouseButtonRight`](#api-dbcb81dd0f19b66e) | Field |
| [`None`](#api-ccef1d96bd73cf8e) | Field |

## Type declaration

<a id="api-05165a0ef0d87924"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiButtonFlags 626439feb4c05e9b767555969a2ea190220561dabd1cf069817b4bcb83eca8d2 -->

```csharp
public enum InnoEditor.ImGui.ImGuiButtonFlags : int
```

Defines the supported button flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiButtonFlags.cs#L8).

## `EnableNav`

<a id="api-a82c90492430c6d6"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiButtonFlags.EnableNav 835ed3615dd09202869bd0908a4b8116a7db62a3069eb892cb935b95a522972e -->

```csharp
InnoEditor.ImGui.ImGuiButtonFlags.EnableNav = 8
```

InvisibleButton(): do not disable navigation/tabbing. Otherwise disabled by default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiButtonFlags.cs#L33).

## `MouseButtonLeft`

<a id="api-6d09d8dca13a2ad7"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiButtonFlags.MouseButtonLeft 2e3b1c17a0ccc983cad2e4ebcb70ceaf1ed17117e2532e47a8e24d8541ce34cd -->

```csharp
InnoEditor.ImGui.ImGuiButtonFlags.MouseButtonLeft = 1
```

React on left mouse button (default)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiButtonFlags.cs#L17).

## `MouseButtonMask`

<a id="api-1ca9a321fc529e0a"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiButtonFlags.MouseButtonMask 7bcc3e1baf7ff4e983b5c690c48dbe915e8e2788b5303336ef6f5c9520881140 -->

```csharp
InnoEditor.ImGui.ImGuiButtonFlags.MouseButtonMask = 7
```

Selects the mouse button mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiButtonFlags.cs#L29).

## `MouseButtonMiddle`

<a id="api-145ef8879078cbc7"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiButtonFlags.MouseButtonMiddle 3d4f886f6487e313600534a71cae1dea0c40186ab8fbd5491c84d3e682f368aa -->

```csharp
InnoEditor.ImGui.ImGuiButtonFlags.MouseButtonMiddle = 4
```

React on center mouse button


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiButtonFlags.cs#L25).

## `MouseButtonRight`

<a id="api-dbcb81dd0f19b66e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiButtonFlags.MouseButtonRight d45086fec9c680c6a3d0ab2f3317bf8dd651ceb01eb213b64a2a8579d6400a7c -->

```csharp
InnoEditor.ImGui.ImGuiButtonFlags.MouseButtonRight = 2
```

React on right mouse button


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiButtonFlags.cs#L21).

## `None`

<a id="api-ccef1d96bd73cf8e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiButtonFlags.None 056cff6a2d449d5bdfbc7a03025ee86f933fb5aa729b229d0f0bc4a039115f27 -->

```csharp
InnoEditor.ImGui.ImGuiButtonFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiButtonFlags.cs#L13).
