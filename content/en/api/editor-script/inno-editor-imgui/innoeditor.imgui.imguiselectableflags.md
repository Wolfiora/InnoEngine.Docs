---
title: "ImGuiSelectableFlags"
description: "Reference for ImGuiSelectableFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.a2ca5f7dd7bd26d5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiSelectableFlags`

This reference describes `ImGuiSelectableFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AllowDoubleClick`](#api-67ac712a85a0b5d8) | Field |
| [`AllowOverlap`](#api-a8aa04adcb9482d9) | Field |
| [`Disabled`](#api-a58fdee17e4b9856) | Field |
| [`Highlight`](#api-63125c05d69c3057) | Field |
| [`NoAutoClosePopups`](#api-5e1a3728f41f9aa8) | Field |
| [`None`](#api-41ba7906add0bddb) | Field |
| [`SelectOnNav`](#api-480c7652573214eb) | Field |
| [`SpanAllColumns`](#api-a5bd41f9770f4290) | Field |

## Type declaration

<a id="api-a2ca5f7dd7bd26d5"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiSelectableFlags e63cbab91ebaddcf95bd8deb50d166655580425dad21b76515f6e702dd8a0fea -->

```csharp
public enum InnoEditor.ImGui.ImGuiSelectableFlags : int
```

Defines the supported selectable flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSelectableFlags.cs#L8).

## `AllowDoubleClick`

<a id="api-67ac712a85a0b5d8"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSelectableFlags.AllowDoubleClick 0dc4cc23affc1d6192fa155510d5f1bc7f6a8797f8522129bc3557c63f2610e5 -->

```csharp
InnoEditor.ImGui.ImGuiSelectableFlags.AllowDoubleClick = 4
```

Generate press events on double clicks too


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSelectableFlags.cs#L25).

## `AllowOverlap`

<a id="api-a8aa04adcb9482d9"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSelectableFlags.AllowOverlap 2dab4d275b64002382757b2f05816f5dd4811e409b16580c8a53c0c458e187b1 -->

```csharp
InnoEditor.ImGui.ImGuiSelectableFlags.AllowOverlap = 16
```

(WIP) Hit testing to allow subsequent widgets to overlap this one


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSelectableFlags.cs#L33).

## `Disabled`

<a id="api-a58fdee17e4b9856"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSelectableFlags.Disabled e35009a01a2264460b23ec6d97720544206f1eddcebcff574d672eaa0be92d58 -->

```csharp
InnoEditor.ImGui.ImGuiSelectableFlags.Disabled = 8
```

Cannot be selected, display grayed out text


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSelectableFlags.cs#L29).

## `Highlight`

<a id="api-63125c05d69c3057"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSelectableFlags.Highlight 2f5eddae5ba5c55954df4a75341333822698a46033460bced5ce536248e0a33a -->

```csharp
InnoEditor.ImGui.ImGuiSelectableFlags.Highlight = 32
```

Make the item be displayed as if it is hovered


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSelectableFlags.cs#L37).

## `NoAutoClosePopups`

<a id="api-5e1a3728f41f9aa8"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSelectableFlags.NoAutoClosePopups c371becaa97e97a769de67c19cf3b1cc2261503fa7dc2e8512158669db247cfa -->

```csharp
InnoEditor.ImGui.ImGuiSelectableFlags.NoAutoClosePopups = 1
```

Clicking this doesn't close parent popup window (overrides ImGuiItemFlags_AutoClosePopups)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSelectableFlags.cs#L17).

## `None`

<a id="api-41ba7906add0bddb"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSelectableFlags.None ee5be1faaf9ac97946cab199542e7179c88a15807eaa7e496629e76b6a9b37ba -->

```csharp
InnoEditor.ImGui.ImGuiSelectableFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSelectableFlags.cs#L13).

## `SelectOnNav`

<a id="api-480c7652573214eb"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSelectableFlags.SelectOnNav bb94ec1ba101e5953fb0cd92c85b6dbfb592432223cfe33352f2f80d4c49bc49 -->

```csharp
InnoEditor.ImGui.ImGuiSelectableFlags.SelectOnNav = 64
```

Auto-select when moved into, unless Ctrl is held. Automatic when in a BeginMultiSelect() block.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSelectableFlags.cs#L41).

## `SpanAllColumns`

<a id="api-a5bd41f9770f4290"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSelectableFlags.SpanAllColumns a2a332094ef88e3da4356f9ad223874645253950edbe750d7ee3a905d91b45da -->

```csharp
InnoEditor.ImGui.ImGuiSelectableFlags.SpanAllColumns = 2
```

Frame will span all columns of its container table (text will still fit in current column)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSelectableFlags.cs#L21).
