---
title: "ImGuiTabBarFlags"
description: "Reference for ImGuiTabBarFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.a7ef9b01faede3bd
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiTabBarFlags`

This reference describes `ImGuiTabBarFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AutoSelectNewTabs`](#api-dd04fc82e2eac8b4) | Field |
| [`DrawSelectedOverline`](#api-180f530aa1dae262) | Field |
| [`FittingPolicyDefault`](#api-7049157998c91f1c) | Field |
| [`FittingPolicyMask`](#api-13c7942db32b5539) | Field |
| [`FittingPolicyMixed`](#api-06d82f6a44e992c8) | Field |
| [`FittingPolicyScroll`](#api-697dcf0715a4e150) | Field |
| [`FittingPolicyShrink`](#api-7641035c901d3ead) | Field |
| [`NoCloseWithMiddleMouseButton`](#api-672b808bceb16629) | Field |
| [`None`](#api-2f7d7d291128cb18) | Field |
| [`NoTabListScrollingButtons`](#api-450ff81691f534d4) | Field |
| [`NoTooltip`](#api-debd8b44eabc3726) | Field |
| [`Reorderable`](#api-17b61be1b4dc6414) | Field |
| [`TabListPopupButton`](#api-167449d5caf1ef41) | Field |

## Type declaration

<a id="api-a7ef9b01faede3bd"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiTabBarFlags 1e53c73e0cc29d0b4b164a5660938cad8b3d234c3652e20391835b5d84e4966a -->

```csharp
public enum InnoEditor.ImGui.ImGuiTabBarFlags : int
```

Defines the supported tab bar flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L8).

## `AutoSelectNewTabs`

<a id="api-dd04fc82e2eac8b4"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabBarFlags.AutoSelectNewTabs 713e54301011c742bff8302302c65ecefeea9900d353ba8821e6f62bf01abc20 -->

```csharp
InnoEditor.ImGui.ImGuiTabBarFlags.AutoSelectNewTabs = 2
```

Automatically select new tabs when they appear


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L21).

## `DrawSelectedOverline`

<a id="api-180f530aa1dae262"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabBarFlags.DrawSelectedOverline 8f6b6c40721f4504b6fd8b2221b9d4d7809c89194571c15e54a83ba4f3806280 -->

```csharp
InnoEditor.ImGui.ImGuiTabBarFlags.DrawSelectedOverline = 64
```

Draw selected overline markers over selected tab


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L41).

## `FittingPolicyDefault`

<a id="api-7049157998c91f1c"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabBarFlags.FittingPolicyDefault cdecb95cccb3bb2b713023d9d86fb332d2159b20662551659ddd7dba1a3c61ae -->

```csharp
InnoEditor.ImGui.ImGuiTabBarFlags.FittingPolicyDefault = 128
```

Selects the fitting policy default presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L61).

## `FittingPolicyMask`

<a id="api-13c7942db32b5539"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabBarFlags.FittingPolicyMask 1aa0d6d7839974ba070e7de620f922acf441bfff70fe81c4ca96e21a2dab94b5 -->

```csharp
InnoEditor.ImGui.ImGuiTabBarFlags.FittingPolicyMask = 896
```

Selects the fitting policy mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L57).

## `FittingPolicyMixed`

<a id="api-06d82f6a44e992c8"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabBarFlags.FittingPolicyMixed f9a3259920b5f6450e19a304826abf2374e885303ffd9a766292cbd821185927 -->

```csharp
InnoEditor.ImGui.ImGuiTabBarFlags.FittingPolicyMixed = 128
```

Shrink down tabs when they don't fit, until width is style.TabMinWidthShrink, then enable scrolling buttons.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L45).

## `FittingPolicyScroll`

<a id="api-697dcf0715a4e150"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabBarFlags.FittingPolicyScroll 21dcc9fec41d51f8d8cfddafac480d4186647b54bf7500287dcd428ee751a82c -->

```csharp
InnoEditor.ImGui.ImGuiTabBarFlags.FittingPolicyScroll = 512
```

Enable scrolling buttons when tabs don't fit


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L53).

## `FittingPolicyShrink`

<a id="api-7641035c901d3ead"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabBarFlags.FittingPolicyShrink b904ce55c5abf0db70dedb180c5c314f1e789eab6708959b1305aca46c406c03 -->

```csharp
InnoEditor.ImGui.ImGuiTabBarFlags.FittingPolicyShrink = 256
```

Shrink down tabs when they don't fit


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L49).

## `NoCloseWithMiddleMouseButton`

<a id="api-672b808bceb16629"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabBarFlags.NoCloseWithMiddleMouseButton 4752734eb76b0ec82d7e0202368091333fbcec145d1e6992d13e4903d91dc1ed -->

```csharp
InnoEditor.ImGui.ImGuiTabBarFlags.NoCloseWithMiddleMouseButton = 8
```

Disable behavior of closing tabs (that are submitted with p_open != NULL) with middle mouse button. You may handle this behavior manually on user's side with if (IsItemHovered() & & IsMouseClicked(2)) *p_open = false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L29).

## `None`

<a id="api-2f7d7d291128cb18"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabBarFlags.None a775569c4cae1183b420cd1974a0f33ca347721ccc1928bea67944f92f235832 -->

```csharp
InnoEditor.ImGui.ImGuiTabBarFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L13).

## `NoTabListScrollingButtons`

<a id="api-450ff81691f534d4"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabBarFlags.NoTabListScrollingButtons 0646e6ad5ed005769c323b9e06e93ca6c54a27396eb788328734f6a92d759be2 -->

```csharp
InnoEditor.ImGui.ImGuiTabBarFlags.NoTabListScrollingButtons = 16
```

Disable scrolling buttons (apply when fitting policy is ImGuiTabBarFlags_FittingPolicyScroll)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L33).

## `NoTooltip`

<a id="api-debd8b44eabc3726"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabBarFlags.NoTooltip d0b7b649e37f24c1cee4be09db09c97b84b58b47a36f96971b839aee75313b7b -->

```csharp
InnoEditor.ImGui.ImGuiTabBarFlags.NoTooltip = 32
```

Disable tooltips when hovering a tab


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L37).

## `Reorderable`

<a id="api-17b61be1b4dc6414"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabBarFlags.Reorderable 466bb2fd97fd879aff46c28f2d338b7a4e904d3b8309fa390e9aeb86bbbd5f8b -->

```csharp
InnoEditor.ImGui.ImGuiTabBarFlags.Reorderable = 1
```

Allow manually dragging tabs to re-order them + New tabs are appended at the end of list


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L17).

## `TabListPopupButton`

<a id="api-167449d5caf1ef41"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTabBarFlags.TabListPopupButton 1417026753de9ef213003ba6360ccce1c7621779d0762ec1f707001ef74a0a37 -->

```csharp
InnoEditor.ImGui.ImGuiTabBarFlags.TabListPopupButton = 4
```

Disable buttons to open the tab list popup


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTabBarFlags.cs#L25).
