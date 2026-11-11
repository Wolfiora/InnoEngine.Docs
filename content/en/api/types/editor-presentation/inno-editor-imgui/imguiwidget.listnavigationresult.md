---
title: "ImGuiWidget.ListNavigationResult"
description: "Reference for ImGuiWidget.ListNavigationResult in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.ea9a66b9cc8b7538
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiWidget.ListNavigationResult`

This reference describes `ImGuiWidget.ListNavigationResult` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`activate`](#api-4a6bb4ab48572150) | Property |
| [`additive`](#api-a6d4c02547c2cd68) | Property |
| [`cancel`](#api-06224f3cd3e6b9c9) | Property |
| [`extendRange`](#api-91be1824452daf0a) | Property |
| [`focusChanged`](#api-10f4f6783a2c3f3c) | Property |
| [`focusedIndex`](#api-710dae7ddc0c17de) | Property |
| [`selectionRequested`](#api-927e4f56c04c7c53) | Property |
| [`toggle`](#api-f62deb27830e8a6e) | Property |

## Type declaration

<a id="api-ea9a66b9cc8b7538"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult e0c211f5176c98bb2559993ed4268257e71c31f361f3a5db649aa5ad6961006e -->

```csharp
public readonly struct Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult
```

Carries frame-local list navigation intents over visible indices without owning objects or selection state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L167).

## `activate`

<a id="api-4a6bb4ab48572150"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult.activate 1ee398a10bee91e99affb978635a13b774681e08334998417ffe6ab4701531f4 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult.activate { get; }
```

Gets whether Enter requests activation of the focused entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L216).

## `additive`

<a id="api-a6d4c02547c2cd68"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult.additive 7787aaf7368816f29021da0ea8ed21d3b12bfc4a1a80af3f62adc9547b659153 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult.additive { get; }
```

Gets whether the product's primary modifier requests preserving other selected entries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L208).

## `cancel`

<a id="api-06224f3cd3e6b9c9"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult.cancel a12dce3069a5ee60794bd3bbdfbe8ab46a137737c244747bd1c4d64f6bd6bd0d -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult.cancel { get; }
```

Gets whether Escape requests canceling the current list workflow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L220).

## `extendRange`

<a id="api-91be1824452daf0a"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult.extendRange 83aa82cb0fdee525766bbe3069e153c020fedc78aae962c0ffee73af579e7a58 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult.extendRange { get; }
```

Gets whether the selection should extend from its existing anchor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L204).

## `focusChanged`

<a id="api-10f4f6783a2c3f3c"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult.focusChanged a6ca322a972d3807a0d38b1d81a17e383f33663a29ef3532eaa32c6fb094bf5a -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult.focusChanged { get; }
```

Gets whether the visible focus index changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L196).

## `focusedIndex`

<a id="api-710dae7ddc0c17de"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult.focusedIndex d6396dcf329418b1b3220e4fdba64f1360b4cb3eece99350170923d0cf575092 -->

```csharp
public int Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult.focusedIndex { get; }
```

Gets the resulting visible focus index, or minus one for no focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L192).

## `selectionRequested`

<a id="api-927e4f56c04c7c53"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult.selectionRequested b5806c0594aebbcffaa246a6b8e33c10963975b74b7f3ec8abde47e0d1ed8873 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult.selectionRequested { get; }
```

Gets whether the caller should apply a domain selection operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L200).

## `toggle`

<a id="api-f62deb27830e8a6e"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult.toggle 15b63d3764da07852f9776df40f7f3b9c18a7bb29ad84478d38d5d482fa372bc -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ListNavigationResult.toggle { get; }
```

Gets whether Space with the primary modifier requests toggling the focused entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selection.cs#L212).
