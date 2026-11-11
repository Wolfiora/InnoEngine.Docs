---
title: "ImGuiSelectableFlags"
description: "Reference for ImGuiSelectableFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.534d9ecb906dbbbb
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiSelectableFlags`

This reference describes `ImGuiSelectableFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AllowDoubleClick`](#api-c0b89a8dfccad022) | Field |
| [`AllowOverlap`](#api-5feeb60759766ef4) | Field |
| [`Disabled`](#api-a4c05e06e0e71f3f) | Field |
| [`Highlight`](#api-edeb8967b59b2cf3) | Field |
| [`NoAutoClosePopups`](#api-bd0ecf99881a2c39) | Field |
| [`None`](#api-9a462ca332490be1) | Field |
| [`SelectOnNav`](#api-f9575365020e651e) | Field |
| [`SpanAllColumns`](#api-d5be8bba9f1c65fe) | Field |

## Type declaration

<a id="api-534d9ecb906dbbbb"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiSelectableFlags ca3e85121d2d265fef1c0cf0685fb02b60f5ff313d76a2e57c7c9957bb97799a -->

```csharp
public enum Inno.Editor.ImGui.ImGuiSelectableFlags : int
```

Defines the supported selectable flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSelectableFlags.cs#L8).

## `AllowDoubleClick`

<a id="api-c0b89a8dfccad022"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSelectableFlags.AllowDoubleClick d7e49cd684c7790ab80f384cb3ee811604fd1b06ba23d5f7a2eb41a389bdeabb -->

```csharp
Inno.Editor.ImGui.ImGuiSelectableFlags.AllowDoubleClick = 4
```

Generate press events on double clicks too


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSelectableFlags.cs#L25).

## `AllowOverlap`

<a id="api-5feeb60759766ef4"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSelectableFlags.AllowOverlap 865595e921fb01ee3bab21bae94e8a6487fc66e0c95563aa0b7897f6c5fb906c -->

```csharp
Inno.Editor.ImGui.ImGuiSelectableFlags.AllowOverlap = 16
```

(WIP) Hit testing to allow subsequent widgets to overlap this one


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSelectableFlags.cs#L33).

## `Disabled`

<a id="api-a4c05e06e0e71f3f"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSelectableFlags.Disabled 05a9042a6bc9e5d03aff9b2ee1a3019a10b2f1f2e5dbb81de65d567f73795b87 -->

```csharp
Inno.Editor.ImGui.ImGuiSelectableFlags.Disabled = 8
```

Cannot be selected, display grayed out text


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSelectableFlags.cs#L29).

## `Highlight`

<a id="api-edeb8967b59b2cf3"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSelectableFlags.Highlight c2b4b838c3c77117039ff2dcd3af5b7cb421ff23ed1e43e88b73c63abd4a296f -->

```csharp
Inno.Editor.ImGui.ImGuiSelectableFlags.Highlight = 32
```

Make the item be displayed as if it is hovered


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSelectableFlags.cs#L37).

## `NoAutoClosePopups`

<a id="api-bd0ecf99881a2c39"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSelectableFlags.NoAutoClosePopups ae8a960e5ec75cc933c316ef8da651fa6a7ffb54fd8ddcb713d286235d8f7abe -->

```csharp
Inno.Editor.ImGui.ImGuiSelectableFlags.NoAutoClosePopups = 1
```

Clicking this doesn't close parent popup window (overrides ImGuiItemFlags_AutoClosePopups)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSelectableFlags.cs#L17).

## `None`

<a id="api-9a462ca332490be1"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSelectableFlags.None 5da3dc3d7f38198253c4ca07791e897da2e203073c198a8d4d5e26becf25afee -->

```csharp
Inno.Editor.ImGui.ImGuiSelectableFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSelectableFlags.cs#L13).

## `SelectOnNav`

<a id="api-f9575365020e651e"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSelectableFlags.SelectOnNav 4226bfc3cc7258107c8e9532da26aa816e6bd66b318c3146c9c98651d3d0deaf -->

```csharp
Inno.Editor.ImGui.ImGuiSelectableFlags.SelectOnNav = 64
```

Auto-select when moved into, unless Ctrl is held. Automatic when in a BeginMultiSelect() block.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSelectableFlags.cs#L41).

## `SpanAllColumns`

<a id="api-d5be8bba9f1c65fe"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSelectableFlags.SpanAllColumns 155ccff91e0a5bdad94214c45919f80825d6371bce3acb76b50b99380a5955d5 -->

```csharp
Inno.Editor.ImGui.ImGuiSelectableFlags.SpanAllColumns = 2
```

Frame will span all columns of its container table (text will still fit in current column)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSelectableFlags.cs#L21).
