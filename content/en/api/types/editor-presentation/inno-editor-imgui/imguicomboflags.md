---
title: "ImGuiComboFlags"
description: "Reference for ImGuiComboFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.3a3b145927eadbba
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiComboFlags`

This reference describes `ImGuiComboFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`HeightLarge`](#api-bff20e40ee345062) | Field |
| [`HeightLargest`](#api-2e30b09aaf594b0a) | Field |
| [`HeightMask`](#api-18e8bdc5388877b7) | Field |
| [`HeightRegular`](#api-94dc899de652b79b) | Field |
| [`HeightSmall`](#api-8842e00cb95feace) | Field |
| [`NoArrowButton`](#api-78dc564f26c78b78) | Field |
| [`None`](#api-2ecc2144393872e8) | Field |
| [`NoPreview`](#api-467f2f731aa0e1fa) | Field |
| [`PopupAlignLeft`](#api-c3c75bf09e520d8a) | Field |
| [`WidthFitPreview`](#api-65c6fc84f2753616) | Field |

## Type declaration

<a id="api-3a3b145927eadbba"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiComboFlags e673c35d09e82400f1f490fb24d3f83d8db58fa68ac9be47caaf2740a228049a -->

```csharp
public enum Inno.Editor.ImGui.ImGuiComboFlags : int
```

Defines the supported combo flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L8).

## `HeightLarge`

<a id="api-bff20e40ee345062"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiComboFlags.HeightLarge 51b9b49c8bb9a1251f97e33902ef282bb66dcc54fdfa733f851ad1ce260061d9 -->

```csharp
Inno.Editor.ImGui.ImGuiComboFlags.HeightLarge = 8
```

Max ~20 items visible


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L29).

## `HeightLargest`

<a id="api-2e30b09aaf594b0a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiComboFlags.HeightLargest 7b18d118550d04b11a83c05e178c7d1d0a6dd350d37afe13fb1252240c389602 -->

```csharp
Inno.Editor.ImGui.ImGuiComboFlags.HeightLargest = 16
```

As many fitting items as possible


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L33).

## `HeightMask`

<a id="api-18e8bdc5388877b7"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiComboFlags.HeightMask 084cb9db7752bbb9eb91faba32c55b220038cc41e67fade56ba6b4a2db711b35 -->

```csharp
Inno.Editor.ImGui.ImGuiComboFlags.HeightMask = Inno.Editor.ImGui.ImGuiComboFlags.HeightSmall | Inno.Editor.ImGui.ImGuiComboFlags.HeightRegular | Inno.Editor.ImGui.ImGuiComboFlags.HeightLarge | Inno.Editor.ImGui.ImGuiComboFlags.HeightLargest
```

Selects the height mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L49).

## `HeightRegular`

<a id="api-94dc899de652b79b"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiComboFlags.HeightRegular c67bbb5a86bdef426c5a594e38fc7dda20fb53212a19b1f64cc2ea29d89dba2f -->

```csharp
Inno.Editor.ImGui.ImGuiComboFlags.HeightRegular = 4
```

Max ~8 items visible (default)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L25).

## `HeightSmall`

<a id="api-8842e00cb95feace"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiComboFlags.HeightSmall 33941ababc295550e8ad29b9fea41e1be6283e92a2293d83cdcc8a9582f58921 -->

```csharp
Inno.Editor.ImGui.ImGuiComboFlags.HeightSmall = 2
```

Max ~4 items visible. Tip: If you want your combo popup to be a specific size you can use SetNextWindowSizeConstraints() prior to calling BeginCombo()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L21).

## `NoArrowButton`

<a id="api-78dc564f26c78b78"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiComboFlags.NoArrowButton 835c5fec3786ff282955395c0332c5fee07152d1e7817d67b29e9c259f433dde -->

```csharp
Inno.Editor.ImGui.ImGuiComboFlags.NoArrowButton = 32
```

Display on the preview box without the square arrow button


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L37).

## `None`

<a id="api-2ecc2144393872e8"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiComboFlags.None d28ee0f37fa32d5da49bc198fb914ded59435f687f8c55ddd9b3330ae0ec91c6 -->

```csharp
Inno.Editor.ImGui.ImGuiComboFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L13).

## `NoPreview`

<a id="api-467f2f731aa0e1fa"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiComboFlags.NoPreview 2d0b629bbd2323b466c8f57ae316526b4f13ff38eb055d9d2a811ee6aeab8969 -->

```csharp
Inno.Editor.ImGui.ImGuiComboFlags.NoPreview = 64
```

Display only a square arrow button


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L41).

## `PopupAlignLeft`

<a id="api-c3c75bf09e520d8a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiComboFlags.PopupAlignLeft 34251e85d7e202fe6107d656cc6ac30fcb9fca367d8707328381b2962e29a64a -->

```csharp
Inno.Editor.ImGui.ImGuiComboFlags.PopupAlignLeft = 1
```

Align the popup toward the left by default


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L17).

## `WidthFitPreview`

<a id="api-65c6fc84f2753616"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiComboFlags.WidthFitPreview fdf83feb4c8ab883b0ba8c20458332798cf202fdfa43aa865cdebc6925dc4430 -->

```csharp
Inno.Editor.ImGui.ImGuiComboFlags.WidthFitPreview = 128
```

Width dynamically calculated from preview contents


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L45).
