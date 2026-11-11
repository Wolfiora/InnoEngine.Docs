---
title: "ImGuiButtonFlags"
description: "Reference for ImGuiButtonFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.f2a66e87d5841e60
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiButtonFlags`

This reference describes `ImGuiButtonFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`EnableNav`](#api-127572cfad925062) | Field |
| [`MouseButtonLeft`](#api-47141551ee2e36bf) | Field |
| [`MouseButtonMask`](#api-27ea161926419db9) | Field |
| [`MouseButtonMiddle`](#api-4c7daccc32a623cb) | Field |
| [`MouseButtonRight`](#api-f5090a2af1d07409) | Field |
| [`None`](#api-c8d52232424e2ff7) | Field |

## Type declaration

<a id="api-f2a66e87d5841e60"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiButtonFlags 6f78bdfbbc3e371072a9743a7260eb853eaf60786f5b16568d9525fc0c7a870a -->

```csharp
public enum Inno.Editor.ImGui.ImGuiButtonFlags : int
```

Defines the supported button flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiButtonFlags.cs#L8).

## `EnableNav`

<a id="api-127572cfad925062"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiButtonFlags.EnableNav caf47249342ba0754627a2cf8a153d57e792ad77a6ea365721e2bee1a145538d -->

```csharp
Inno.Editor.ImGui.ImGuiButtonFlags.EnableNav = 8
```

InvisibleButton(): do not disable navigation/tabbing. Otherwise disabled by default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiButtonFlags.cs#L33).

## `MouseButtonLeft`

<a id="api-47141551ee2e36bf"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiButtonFlags.MouseButtonLeft ffcf0a1dbcf9ee074e0f8637c3545a6beffba76489420c2562a21d1cb4f7c9d0 -->

```csharp
Inno.Editor.ImGui.ImGuiButtonFlags.MouseButtonLeft = 1
```

React on left mouse button (default)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiButtonFlags.cs#L17).

## `MouseButtonMask`

<a id="api-27ea161926419db9"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiButtonFlags.MouseButtonMask 9367ee072064673e638c39db916686ccc0764841406941de12cc4a22c49a5dcf -->

```csharp
Inno.Editor.ImGui.ImGuiButtonFlags.MouseButtonMask = Inno.Editor.ImGui.ImGuiButtonFlags.MouseButtonLeft | Inno.Editor.ImGui.ImGuiButtonFlags.MouseButtonRight | Inno.Editor.ImGui.ImGuiButtonFlags.MouseButtonMiddle
```

Selects the mouse button mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiButtonFlags.cs#L29).

## `MouseButtonMiddle`

<a id="api-4c7daccc32a623cb"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiButtonFlags.MouseButtonMiddle 9093332813d8de1adafb271be1f0580f2e6b64eb15705134ea60819da5b186a0 -->

```csharp
Inno.Editor.ImGui.ImGuiButtonFlags.MouseButtonMiddle = 4
```

React on center mouse button


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiButtonFlags.cs#L25).

## `MouseButtonRight`

<a id="api-f5090a2af1d07409"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiButtonFlags.MouseButtonRight 355c94f5c3e826bff76c2e18001c68e5ae19e3dc2eaaaabdbf1107e7e42f0b2d -->

```csharp
Inno.Editor.ImGui.ImGuiButtonFlags.MouseButtonRight = 2
```

React on right mouse button


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiButtonFlags.cs#L21).

## `None`

<a id="api-c8d52232424e2ff7"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiButtonFlags.None 1afe8d6ecdb55da29dad6f348c0ba5fde8a56fd5c459d8e13b6746654b5c7df0 -->

```csharp
Inno.Editor.ImGui.ImGuiButtonFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiButtonFlags.cs#L13).
