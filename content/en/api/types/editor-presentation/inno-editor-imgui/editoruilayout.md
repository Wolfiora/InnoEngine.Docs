---
title: "EditorUiLayout"
description: "Reference for EditorUiLayout in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.62343a5770d697b8
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `EditorUiLayout`

This reference describes `EditorUiLayout` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`cellPadding`](#api-86bfafa97c904dcb) | Property |
| [`dockingSeparatorSize`](#api-6153af540c50a03f) | Property |
| [`framePadding`](#api-3b6ad36d4aa1af23) | Property |
| [`frameRounding`](#api-8a4e7c2c38c9f4ff) | Property |
| [`itemInnerSpacing`](#api-e4a942215943a055) | Property |
| [`itemSpacing`](#api-64a51bf5749e047e) | Property |
| [`scrollbarSize`](#api-de04501a45a96919) | Property |
| [`windowPadding`](#api-88142584b3230bcb) | Property |

## Type declaration

<a id="api-62343a5770d697b8"></a>
<!-- api: T:Inno.Editor.ImGui.EditorUiLayout b591e73d49b129364bb33491d18033179a6a63e3aa87470ef8a582fb2256da1a -->

```csharp
public readonly struct Inno.Editor.ImGui.EditorUiLayout
```

Copies the presentation metrics needed by custom layouts without retaining native style memory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorUiLayout.cs#L8).

## `cellPadding`

<a id="api-86bfafa97c904dcb"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiLayout.cellPadding 960473db827be539018014875d47e0aedab6165696f52639a9eaaead3a495dbf -->

```csharp
public System.Numerics.Vector2 Inno.Editor.ImGui.EditorUiLayout.cellPadding { get; }
```

Gets table cell padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorUiLayout.cs#L21).

## `dockingSeparatorSize`

<a id="api-6153af540c50a03f"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiLayout.dockingSeparatorSize 3eee93e9e59dbcac986992bc564743633693a813287e38e6ef6e1546edac4d46 -->

```csharp
public float Inno.Editor.ImGui.EditorUiLayout.dockingSeparatorSize { get; }
```

Gets dock splitter thickness.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorUiLayout.cs#L33).

## `framePadding`

<a id="api-3b6ad36d4aa1af23"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiLayout.framePadding 2454e7c6ab163b682666d54447320f48233e917a8535cd2b1154781295b1af52 -->

```csharp
public System.Numerics.Vector2 Inno.Editor.ImGui.EditorUiLayout.framePadding { get; }
```

Gets padding inside a control.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorUiLayout.cs#L29).

## `frameRounding`

<a id="api-8a4e7c2c38c9f4ff"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiLayout.frameRounding 6a4f68957a1a601b72cf2300bc4862ff7acccb7019cf88e8f01d8c7ad4ff9040 -->

```csharp
public float Inno.Editor.ImGui.EditorUiLayout.frameRounding { get; }
```

Gets control corner radius.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorUiLayout.cs#L41).

## `itemInnerSpacing`

<a id="api-e4a942215943a055"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiLayout.itemInnerSpacing 7bcb2950cba38fe3fa06fa415e412f20a0def82ef4e28aefb1a0bd036fe13513 -->

```csharp
public System.Numerics.Vector2 Inno.Editor.ImGui.EditorUiLayout.itemInnerSpacing { get; }
```

Gets spacing between parts of a compound control.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorUiLayout.cs#L25).

## `itemSpacing`

<a id="api-64a51bf5749e047e"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiLayout.itemSpacing 7cadb4c8261188ea8adafcb1c4576c1a3d627f2c81d2472bfb49dde2842bc8be -->

```csharp
public System.Numerics.Vector2 Inno.Editor.ImGui.EditorUiLayout.itemSpacing { get; }
```

Gets spacing between neighboring controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorUiLayout.cs#L13).

## `scrollbarSize`

<a id="api-de04501a45a96919"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiLayout.scrollbarSize 957dfe1d73c779704fec8d34568968ca4956b493629d91cd03bfa95a52add8a9 -->

```csharp
public float Inno.Editor.ImGui.EditorUiLayout.scrollbarSize { get; }
```

Gets scrollbar width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorUiLayout.cs#L37).

## `windowPadding`

<a id="api-88142584b3230bcb"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiLayout.windowPadding 64eef57e20ed0fcc0533c90cebef0e021e28e249c5d4728b837ebf49455a5aa6 -->

```csharp
public System.Numerics.Vector2 Inno.Editor.ImGui.EditorUiLayout.windowPadding { get; }
```

Gets the current window inset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorUiLayout.cs#L17).
