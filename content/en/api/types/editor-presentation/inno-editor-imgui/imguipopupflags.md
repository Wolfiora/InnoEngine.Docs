---
title: "ImGuiPopupFlags"
description: "Reference for ImGuiPopupFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.3525584a6ee1bfad
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiPopupFlags`

This reference describes `ImGuiPopupFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AnyPopup`](#api-2716aa7e3e3e8c67) | Field |
| [`AnyPopupId`](#api-c20f55ba4c9c5eb7) | Field |
| [`AnyPopupLevel`](#api-c9087859cc6e13e5) | Field |
| [`InvalidMask`](#api-1abb819259f0607a) | Field |
| [`MouseButtonLeft`](#api-0fbaedbd4831ce3b) | Field |
| [`MouseButtonMask`](#api-64219b19b615de72) | Field |
| [`MouseButtonMiddle`](#api-439af55b97115b2e) | Field |
| [`MouseButtonRight`](#api-74b94cbacc8174b3) | Field |
| [`MouseButtonShift`](#api-af69f9bb7de5d4be) | Field |
| [`None`](#api-0cf386eddaebc2f7) | Field |
| [`NoOpenOverExistingPopup`](#api-c1c32706fc360bb1) | Field |
| [`NoOpenOverItems`](#api-12125c6ea722faf6) | Field |
| [`NoReopen`](#api-016683523e31015c) | Field |

## Type declaration

<a id="api-3525584a6ee1bfad"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiPopupFlags a68c1fd1f0a8a57634f250e35b4c824e809907cdcbfa2a4be2f9cef4ffb3221f -->

```csharp
public enum Inno.Editor.ImGui.ImGuiPopupFlags : int
```

Defines the supported popup flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L8).

## `AnyPopup`

<a id="api-2716aa7e3e3e8c67"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiPopupFlags.AnyPopup adf8bec21428eb2ca33e2d9590ef7787bed43d141ec33f6c06d14d9cc7c352c2 -->

```csharp
Inno.Editor.ImGui.ImGuiPopupFlags.AnyPopup = Inno.Editor.ImGui.ImGuiPopupFlags.AnyPopupId | Inno.Editor.ImGui.ImGuiPopupFlags.AnyPopupLevel
```

Selects the any popup presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L49).

## `AnyPopupId`

<a id="api-c20f55ba4c9c5eb7"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiPopupFlags.AnyPopupId fd3d1c8f3634bc9bc3cf3ffbfa30a6e09c0b711027113fdada4c0433e0fb484a -->

```csharp
Inno.Editor.ImGui.ImGuiPopupFlags.AnyPopupId = 1024
```

For IsPopupOpen(): ignore the ImGuiID parameter and test for any popup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L41).

## `AnyPopupLevel`

<a id="api-c9087859cc6e13e5"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiPopupFlags.AnyPopupLevel c5d03f04c60b3c1194a1c28ebc3421e4a1f359df0cb487fd4862a419f5b661d7 -->

```csharp
Inno.Editor.ImGui.ImGuiPopupFlags.AnyPopupLevel = 2048
```

For IsPopupOpen(): search/test at any level of the popup stack (default test in the current level)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L45).

## `InvalidMask`

<a id="api-1abb819259f0607a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiPopupFlags.InvalidMask 8b6ed5fee2b29cbf156d8ad13490a2c451fd5be498d8dea46245a316c87f89e1 -->

```csharp
Inno.Editor.ImGui.ImGuiPopupFlags.InvalidMask = 3
```

Selects the invalid mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L61).

## `MouseButtonLeft`

<a id="api-0fbaedbd4831ce3b"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiPopupFlags.MouseButtonLeft ccd23bcd18ed4995766517d5f538b8481ff0fb0542d59bb75f07c507532e90ff -->

```csharp
Inno.Editor.ImGui.ImGuiPopupFlags.MouseButtonLeft = 4
```

For BeginPopupContext*(): open on Left Mouse release. Only one button allowed!


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L17).

## `MouseButtonMask`

<a id="api-64219b19b615de72"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiPopupFlags.MouseButtonMask 222dc8b226762b8bc4dee7ff395885853477819f25b584dea115ded21b35b262 -->

```csharp
Inno.Editor.ImGui.ImGuiPopupFlags.MouseButtonMask = Inno.Editor.ImGui.ImGuiPopupFlags.MouseButtonLeft | Inno.Editor.ImGui.ImGuiPopupFlags.MouseButtonRight
```

Selects the mouse button mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L57).

## `MouseButtonMiddle`

<a id="api-439af55b97115b2e"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiPopupFlags.MouseButtonMiddle e7991026f19b095f4a8559013d81ed7f36794e348e13ffc69afecce4fd8188f3 -->

```csharp
Inno.Editor.ImGui.ImGuiPopupFlags.MouseButtonMiddle = Inno.Editor.ImGui.ImGuiPopupFlags.MouseButtonLeft | Inno.Editor.ImGui.ImGuiPopupFlags.MouseButtonRight
```

For BeginPopupContext*(): open on Middle Mouse release. Only one button allowed!


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L25).

## `MouseButtonRight`

<a id="api-74b94cbacc8174b3"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiPopupFlags.MouseButtonRight 61a0fcf3cc064a3fde7d9cf96055cb87c7e88f3e19ab49471fd199ea8ffb2049 -->

```csharp
Inno.Editor.ImGui.ImGuiPopupFlags.MouseButtonRight = 8
```

For BeginPopupContext*(): open on Right Mouse release. Only one button allowed! (default)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L21).

## `MouseButtonShift`

<a id="api-af69f9bb7de5d4be"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiPopupFlags.MouseButtonShift 16e4637cda6e442b7ed99326e75218d0dc6f67c9ad48af1f145939521670a5bf -->

```csharp
Inno.Editor.ImGui.ImGuiPopupFlags.MouseButtonShift = 2
```

Selects the mouse button shift presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L53).

## `None`

<a id="api-0cf386eddaebc2f7"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiPopupFlags.None a2c39a395689e1a1d2c76fad2967e583758472355bfa2ece65d629bbf7eaa3e8 -->

```csharp
Inno.Editor.ImGui.ImGuiPopupFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L13).

## `NoOpenOverExistingPopup`

<a id="api-c1c32706fc360bb1"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiPopupFlags.NoOpenOverExistingPopup fbf41a8229cf725905fc42786a6ee1461710eccfde4a5df0b2b952375a47b97f -->

```csharp
Inno.Editor.ImGui.ImGuiPopupFlags.NoOpenOverExistingPopup = 128
```

For OpenPopup*(), BeginPopupContext*(): don't open if there's already a popup at the same level of the popup stack


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L33).

## `NoOpenOverItems`

<a id="api-12125c6ea722faf6"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiPopupFlags.NoOpenOverItems ed22db0e9187b656f3e6cf19619cdea55016a9e645b6d37f59c25545d0449355 -->

```csharp
Inno.Editor.ImGui.ImGuiPopupFlags.NoOpenOverItems = 256
```

For BeginPopupContextWindow(): don't return true when hovering items, only when hovering empty space


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L37).

## `NoReopen`

<a id="api-016683523e31015c"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiPopupFlags.NoReopen 43a977d8e239c7b09c442e0ad8bd474be0441b48e3216623bcd74239b43a33e3 -->

```csharp
Inno.Editor.ImGui.ImGuiPopupFlags.NoReopen = 32
```

For OpenPopup*(), BeginPopupContext*(): don't reopen same popup if already open (won't reposition, won't reinitialize navigation)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L29).
