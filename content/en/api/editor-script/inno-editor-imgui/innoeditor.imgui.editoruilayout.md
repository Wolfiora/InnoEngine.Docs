---
title: "EditorUiLayout"
description: "Reference for EditorUiLayout in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.83bd05139b408daf
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `EditorUiLayout`

This reference describes `EditorUiLayout` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`cellPadding`](#api-035fa66e0e5cddfc) | Property |
| [`dockingSeparatorSize`](#api-1b0b6cb1d0339077) | Property |
| [`framePadding`](#api-517c73cc54be1b65) | Property |
| [`frameRounding`](#api-4103c3d2e56bc8a8) | Property |
| [`itemInnerSpacing`](#api-3ec33e1094cbf290) | Property |
| [`itemSpacing`](#api-e5be2893fbec997a) | Property |
| [`scrollbarSize`](#api-c626225055d67698) | Property |
| [`windowPadding`](#api-ed0cd341ccabed26) | Property |

## Type declaration

<a id="api-83bd05139b408daf"></a>
<!-- api: T:InnoEditor.ImGui.EditorUiLayout 7f4689a80707a42afa7b8e01657e891a907191ff64929b5e4a582169e7a03398 -->

```csharp
public readonly struct InnoEditor.ImGui.EditorUiLayout
```

Copies the presentation metrics needed by custom layouts without retaining native style memory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorUiLayout.cs#L8).

## `cellPadding`

<a id="api-035fa66e0e5cddfc"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiLayout.cellPadding 73088c9030a193742d3455319c8046987170f12a6a6150a66275a4452abc1a41 -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.EditorUiLayout.cellPadding { get; }
```

Gets table cell padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorUiLayout.cs#L21).

## `dockingSeparatorSize`

<a id="api-1b0b6cb1d0339077"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiLayout.dockingSeparatorSize dca3d842a86f0bc8c88fbba46d84b29e75086580b7893b750520af8859d03307 -->

```csharp
public float InnoEditor.ImGui.EditorUiLayout.dockingSeparatorSize { get; }
```

Gets dock splitter thickness.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorUiLayout.cs#L33).

## `framePadding`

<a id="api-517c73cc54be1b65"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiLayout.framePadding a7ab3cc7ec61a4fd7f774a1185afff82525fc46732cdc8a55b69b3aeb5f73f20 -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.EditorUiLayout.framePadding { get; }
```

Gets padding inside a control.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorUiLayout.cs#L29).

## `frameRounding`

<a id="api-4103c3d2e56bc8a8"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiLayout.frameRounding f574068b2a8867aa7eeeb8ff3a5ac9f19e5e17483efa2cfe58e350d21ac97fbc -->

```csharp
public float InnoEditor.ImGui.EditorUiLayout.frameRounding { get; }
```

Gets control corner radius.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorUiLayout.cs#L41).

## `itemInnerSpacing`

<a id="api-3ec33e1094cbf290"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiLayout.itemInnerSpacing 7f707c1ee4bf006ad4417e75b81ffed96c1cd9c633c45fb7d993e837db1b2b96 -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.EditorUiLayout.itemInnerSpacing { get; }
```

Gets spacing between parts of a compound control.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorUiLayout.cs#L25).

## `itemSpacing`

<a id="api-e5be2893fbec997a"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiLayout.itemSpacing acd21cc2c803e2e890b31a8cd275ef6bfb06c5f46e6335ef8aa0dc3ff9321099 -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.EditorUiLayout.itemSpacing { get; }
```

Gets spacing between neighboring controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorUiLayout.cs#L13).

## `scrollbarSize`

<a id="api-c626225055d67698"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiLayout.scrollbarSize 1c585d976146e26b51d11e8bdbf94a898d920dbc7d159dfe7fa9e21051598e82 -->

```csharp
public float InnoEditor.ImGui.EditorUiLayout.scrollbarSize { get; }
```

Gets scrollbar width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorUiLayout.cs#L37).

## `windowPadding`

<a id="api-ed0cd341ccabed26"></a>
<!-- api: P:InnoEditor.ImGui.EditorUiLayout.windowPadding f27b0ce88fb4bb86bee6b87e6778e20476887c25aaad7020603ad50d7818f0ce -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.EditorUiLayout.windowPadding { get; }
```

Gets the current window inset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorUiLayout.cs#L17).
