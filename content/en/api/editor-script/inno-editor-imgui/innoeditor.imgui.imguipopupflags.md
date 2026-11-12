---
title: "ImGuiPopupFlags"
description: "Reference for ImGuiPopupFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.98b237077ff60117
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiPopupFlags`

This reference describes `ImGuiPopupFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AnyPopup`](#api-b9cd7801912303f3) | Field |
| [`AnyPopupId`](#api-65076802ecacf461) | Field |
| [`AnyPopupLevel`](#api-43e548cd55ae9814) | Field |
| [`InvalidMask`](#api-d7415326fa973b97) | Field |
| [`MouseButtonLeft`](#api-0110b239590d8f85) | Field |
| [`MouseButtonMask`](#api-219250b9870dae63) | Field |
| [`MouseButtonMiddle`](#api-54b02d24a6bed5ed) | Field |
| [`MouseButtonRight`](#api-a336a0132a3ef683) | Field |
| [`MouseButtonShift`](#api-e61933604dd40bcf) | Field |
| [`None`](#api-b2777b0c373fd82d) | Field |
| [`NoOpenOverExistingPopup`](#api-0f4b5f78d98a660b) | Field |
| [`NoOpenOverItems`](#api-869ef2459c328913) | Field |
| [`NoReopen`](#api-6acdcb775707061e) | Field |

## Type declaration

<a id="api-98b237077ff60117"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiPopupFlags 3ea792745089e9224afe9cb2c40eb9796694c5203a28f9bd43c888df3a11302f -->

```csharp
public enum InnoEditor.ImGui.ImGuiPopupFlags : int
```

Defines the supported popup flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L8).

## `AnyPopup`

<a id="api-b9cd7801912303f3"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiPopupFlags.AnyPopup c387dd945addbf8c895babcf43eb6b3edc499130068ad5fefd848e22e771cfba -->

```csharp
InnoEditor.ImGui.ImGuiPopupFlags.AnyPopup = 3072
```

Selects the any popup presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L49).

## `AnyPopupId`

<a id="api-65076802ecacf461"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiPopupFlags.AnyPopupId 135dc033d1a02c003c4fb0239ae4d82f4b298ce0cc456aa924613bb11a0b12ff -->

```csharp
InnoEditor.ImGui.ImGuiPopupFlags.AnyPopupId = 1024
```

For IsPopupOpen(): ignore the ImGuiID parameter and test for any popup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L41).

## `AnyPopupLevel`

<a id="api-43e548cd55ae9814"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiPopupFlags.AnyPopupLevel a9720aba85a023dac9edccda5b8f50962f63e43da9a83de9b204ba0eb1b95881 -->

```csharp
InnoEditor.ImGui.ImGuiPopupFlags.AnyPopupLevel = 2048
```

For IsPopupOpen(): search/test at any level of the popup stack (default test in the current level)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L45).

## `InvalidMask`

<a id="api-d7415326fa973b97"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiPopupFlags.InvalidMask a7020417ebd6b2b2f9ee8d91c8ad8f4869510b3aaf3dc4820d51d11f1e7da44a -->

```csharp
InnoEditor.ImGui.ImGuiPopupFlags.InvalidMask = 3
```

Selects the invalid mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L61).

## `MouseButtonLeft`

<a id="api-0110b239590d8f85"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiPopupFlags.MouseButtonLeft 2eaa9af39d868c925b51b9c03984e41f0f8047131e57bfc70318876e1d38fe6b -->

```csharp
InnoEditor.ImGui.ImGuiPopupFlags.MouseButtonLeft = 4
```

For BeginPopupContext*(): open on Left Mouse release. Only one button allowed!


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L17).

## `MouseButtonMask`

<a id="api-219250b9870dae63"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiPopupFlags.MouseButtonMask 0886634e3317ba9e4784cd21a6ce90d6a2436b10081fafa674322af2525bcad7 -->

```csharp
InnoEditor.ImGui.ImGuiPopupFlags.MouseButtonMask = 12
```

Selects the mouse button mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L57).

## `MouseButtonMiddle`

<a id="api-54b02d24a6bed5ed"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiPopupFlags.MouseButtonMiddle 6be6e36573b2f3da38b417395d7b5f879ec1fb725dd7c7eaa0254a313227053e -->

```csharp
InnoEditor.ImGui.ImGuiPopupFlags.MouseButtonMiddle = 12
```

For BeginPopupContext*(): open on Middle Mouse release. Only one button allowed!


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L25).

## `MouseButtonRight`

<a id="api-a336a0132a3ef683"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiPopupFlags.MouseButtonRight 54b585ab608de34d93fa64eee83a7c12942fdded92263a3514b5a0c3b086838a -->

```csharp
InnoEditor.ImGui.ImGuiPopupFlags.MouseButtonRight = 8
```

For BeginPopupContext*(): open on Right Mouse release. Only one button allowed! (default)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L21).

## `MouseButtonShift`

<a id="api-e61933604dd40bcf"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiPopupFlags.MouseButtonShift b888c6fd4e47c0eb15bec6c91115e9045cc44af1839c214cd5ce5df3ca2e5b44 -->

```csharp
InnoEditor.ImGui.ImGuiPopupFlags.MouseButtonShift = 2
```

Selects the mouse button shift presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L53).

## `None`

<a id="api-b2777b0c373fd82d"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiPopupFlags.None a8d6912df8e28b5fd18bbfc0cd77a2e48283c1ef2e206d773c4082314b2bbbeb -->

```csharp
InnoEditor.ImGui.ImGuiPopupFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L13).

## `NoOpenOverExistingPopup`

<a id="api-0f4b5f78d98a660b"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiPopupFlags.NoOpenOverExistingPopup d9a8d33925dc51bbf6b067ca0418d53529d290525312d408f879b9de0d354a09 -->

```csharp
InnoEditor.ImGui.ImGuiPopupFlags.NoOpenOverExistingPopup = 128
```

For OpenPopup*(), BeginPopupContext*(): don't open if there's already a popup at the same level of the popup stack


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L33).

## `NoOpenOverItems`

<a id="api-869ef2459c328913"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiPopupFlags.NoOpenOverItems a2a1fc8049a4383fea848b00f4a1a31fb702ddc6cc74fe239176e20c7af69347 -->

```csharp
InnoEditor.ImGui.ImGuiPopupFlags.NoOpenOverItems = 256
```

For BeginPopupContextWindow(): don't return true when hovering items, only when hovering empty space


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L37).

## `NoReopen`

<a id="api-6acdcb775707061e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiPopupFlags.NoReopen fc3dd5ad6cdd28ea9adf827ce91b4e5101f926d9d362b4374cd4a3a1bc501bff -->

```csharp
InnoEditor.ImGui.ImGuiPopupFlags.NoReopen = 32
```

For OpenPopup*(), BeginPopupContext*(): don't reopen same popup if already open (won't reposition, won't reinitialize navigation)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiPopupFlags.cs#L29).
