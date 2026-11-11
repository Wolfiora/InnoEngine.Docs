---
title: "ImGuiTabBarFlags"
description: "Reference for ImGuiTabBarFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.e709a5c7dcbf3bd8
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiTabBarFlags`

This reference describes `ImGuiTabBarFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AutoSelectNewTabs`](#api-2e3f87bee213def6) | Field |
| [`DrawSelectedOverline`](#api-068c8b02209e9f26) | Field |
| [`FittingPolicyDefault`](#api-5db45585e40e0859) | Field |
| [`FittingPolicyMask`](#api-11c5d8b44fa36ed0) | Field |
| [`FittingPolicyMixed`](#api-d722fc843f3f5248) | Field |
| [`FittingPolicyScroll`](#api-ce63a0d5fe073be9) | Field |
| [`FittingPolicyShrink`](#api-c52cb74e123313e4) | Field |
| [`NoCloseWithMiddleMouseButton`](#api-e4f5720e6b94e7dc) | Field |
| [`None`](#api-ff630f560e701869) | Field |
| [`NoTabListScrollingButtons`](#api-12e0d288ffc11877) | Field |
| [`NoTooltip`](#api-07c4a9e8bb1f8003) | Field |
| [`Reorderable`](#api-2d90ba02411878ab) | Field |
| [`TabListPopupButton`](#api-09cb79de13a0f593) | Field |

## Type declaration

<a id="api-e709a5c7dcbf3bd8"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiTabBarFlags a3de48b2ce49bc1db5c5bcbbb18f217623772c6867dc05d7b799d8fe585fdaa6 -->

```csharp
public enum Inno.Editor.ImGui.ImGuiTabBarFlags : int
```

Defines the supported tab bar flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L8).

## `AutoSelectNewTabs`

<a id="api-2e3f87bee213def6"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabBarFlags.AutoSelectNewTabs 8bb8d0debe99f85adbc2cf878580c9331f2126dfab2c00f95a2e1145fabacd69 -->

```csharp
Inno.Editor.ImGui.ImGuiTabBarFlags.AutoSelectNewTabs = 2
```

Automatically select new tabs when they appear


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L21).

## `DrawSelectedOverline`

<a id="api-068c8b02209e9f26"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabBarFlags.DrawSelectedOverline 2d0b280118a7e31aa39b9db1c68da1553c9d20f14915523d1169c5aef6e56aa0 -->

```csharp
Inno.Editor.ImGui.ImGuiTabBarFlags.DrawSelectedOverline = 64
```

Draw selected overline markers over selected tab


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L41).

## `FittingPolicyDefault`

<a id="api-5db45585e40e0859"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabBarFlags.FittingPolicyDefault 226e9b7cfceb76809862042466b9af4ea213542932c559007391d45ec9375c7c -->

```csharp
Inno.Editor.ImGui.ImGuiTabBarFlags.FittingPolicyDefault = 128
```

Selects the fitting policy default presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L61).

## `FittingPolicyMask`

<a id="api-11c5d8b44fa36ed0"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabBarFlags.FittingPolicyMask f214720fb0f3007e444957363ddbc465a644759701fc57b74d299e8d06e19545 -->

```csharp
Inno.Editor.ImGui.ImGuiTabBarFlags.FittingPolicyMask = Inno.Editor.ImGui.ImGuiTabBarFlags.FittingPolicyDefault | Inno.Editor.ImGui.ImGuiTabBarFlags.FittingPolicyShrink | Inno.Editor.ImGui.ImGuiTabBarFlags.FittingPolicyScroll
```

Selects the fitting policy mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L57).

## `FittingPolicyMixed`

<a id="api-d722fc843f3f5248"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabBarFlags.FittingPolicyMixed 308e4857efeff06104f01a5a4f73c8b6bacbedb0cccca420f0759aea68f2b668 -->

```csharp
Inno.Editor.ImGui.ImGuiTabBarFlags.FittingPolicyMixed = 128
```

Shrink down tabs when they don't fit, until width is style.TabMinWidthShrink, then enable scrolling buttons.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L45).

## `FittingPolicyScroll`

<a id="api-ce63a0d5fe073be9"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabBarFlags.FittingPolicyScroll 1f71bb3b6b5ddcf2535105cefecc13c46c58b45b65dd66df6dc619fcb66f5fcd -->

```csharp
Inno.Editor.ImGui.ImGuiTabBarFlags.FittingPolicyScroll = 512
```

Enable scrolling buttons when tabs don't fit


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L53).

## `FittingPolicyShrink`

<a id="api-c52cb74e123313e4"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabBarFlags.FittingPolicyShrink 1df375e9c6c7cad884eaa19d533521aa7a63eb9d9763aa642192ae294b221060 -->

```csharp
Inno.Editor.ImGui.ImGuiTabBarFlags.FittingPolicyShrink = 256
```

Shrink down tabs when they don't fit


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L49).

## `NoCloseWithMiddleMouseButton`

<a id="api-e4f5720e6b94e7dc"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabBarFlags.NoCloseWithMiddleMouseButton 43e9149850fec3fd2adec92ad76ef32ce956cb61d8f50983675b5f0d5bdf1622 -->

```csharp
Inno.Editor.ImGui.ImGuiTabBarFlags.NoCloseWithMiddleMouseButton = 8
```

Disable behavior of closing tabs (that are submitted with p_open != NULL) with middle mouse button. You may handle this behavior manually on user's side with if (IsItemHovered() & & IsMouseClicked(2)) *p_open = false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L29).

## `None`

<a id="api-ff630f560e701869"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabBarFlags.None 874a06d7248ee883dc99ec7b2eb4b2889cd7bd3764331046736ec1f8f86ca856 -->

```csharp
Inno.Editor.ImGui.ImGuiTabBarFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L13).

## `NoTabListScrollingButtons`

<a id="api-12e0d288ffc11877"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabBarFlags.NoTabListScrollingButtons 6056c1943fcafb023756c5d43cec72d4094e82af3b85d348228524832597de61 -->

```csharp
Inno.Editor.ImGui.ImGuiTabBarFlags.NoTabListScrollingButtons = 16
```

Disable scrolling buttons (apply when fitting policy is ImGuiTabBarFlags_FittingPolicyScroll)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L33).

## `NoTooltip`

<a id="api-07c4a9e8bb1f8003"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabBarFlags.NoTooltip fdde639fcb05a678dcde3a4cfb31642f2fa8c6ac3691a2b501551dbfb563b042 -->

```csharp
Inno.Editor.ImGui.ImGuiTabBarFlags.NoTooltip = 32
```

Disable tooltips when hovering a tab


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L37).

## `Reorderable`

<a id="api-2d90ba02411878ab"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabBarFlags.Reorderable 49d9e60366b60c0f3fa3298c1b3c02bedbdf8d833f999487fd3181e367488481 -->

```csharp
Inno.Editor.ImGui.ImGuiTabBarFlags.Reorderable = 1
```

Allow manually dragging tabs to re-order them + New tabs are appended at the end of list


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L17).

## `TabListPopupButton`

<a id="api-09cb79de13a0f593"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTabBarFlags.TabListPopupButton f095513a559cb0aea5371db970f76379d027f6f5f1b0caf290b14e016659cf3e -->

```csharp
Inno.Editor.ImGui.ImGuiTabBarFlags.TabListPopupButton = 4
```

Disable buttons to open the tab list popup


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L25).
