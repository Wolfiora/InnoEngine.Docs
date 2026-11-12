---
title: "ImGuiHoveredFlags"
description: "Reference for ImGuiHoveredFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.84d3b3829ed0be47
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiHoveredFlags`

This reference describes `ImGuiHoveredFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AllowWhenBlockedByActiveItem`](#api-2eeea43ec0ad6f51) | Field |
| [`AllowWhenBlockedByPopup`](#api-f65991de77802319) | Field |
| [`AllowWhenDisabled`](#api-8b877a4f3fbed977) | Field |
| [`AllowWhenOverlapped`](#api-4b9b3b62fdf73a0e) | Field |
| [`AllowWhenOverlappedByItem`](#api-2609ea717bf42a4d) | Field |
| [`AllowWhenOverlappedByWindow`](#api-45bb383467061a16) | Field |
| [`AnyWindow`](#api-93e531d9026e173c) | Field |
| [`ChildWindows`](#api-338f2dd3158412b9) | Field |
| [`DelayNone`](#api-f5f24429ead8a491) | Field |
| [`DelayNormal`](#api-92d1b0701241452b) | Field |
| [`DelayShort`](#api-23d0ff15ed0d0f59) | Field |
| [`DockHierarchy`](#api-1ec3999e2bf5eb78) | Field |
| [`ForTooltip`](#api-28238980986fab0f) | Field |
| [`NoNavOverride`](#api-c8706e3fdb7fda46) | Field |
| [`None`](#api-81582fd5a56ed269) | Field |
| [`NoPopupHierarchy`](#api-ac346818360590df) | Field |
| [`NoSharedDelay`](#api-22b25f506152d03b) | Field |
| [`RectOnly`](#api-348c10229d539ca4) | Field |
| [`RootAndChildWindows`](#api-97abf7d09c60c0f0) | Field |
| [`RootWindow`](#api-762fe8dd16e6b62f) | Field |
| [`Stationary`](#api-a67fe76606f7d9ba) | Field |

## Type declaration

<a id="api-84d3b3829ed0be47"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiHoveredFlags 020adacf1eed797377ef493295a0daa737b4245a8017503b1d5a86a4a99b594a -->

```csharp
public enum InnoEditor.ImGui.ImGuiHoveredFlags : int
```

Defines the supported hovered flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L8).

## `AllowWhenBlockedByActiveItem`

<a id="api-2eeea43ec0ad6f51"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.AllowWhenBlockedByActiveItem acf38098ae92bf182964b325ac7f931b7799e534f7e60e02c81ba8fcf8081878 -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.AllowWhenBlockedByActiveItem = 128
```

Return true even if an active item is blocking access to this item/window. Useful for Drag and Drop patterns.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L41).

## `AllowWhenBlockedByPopup`

<a id="api-f65991de77802319"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.AllowWhenBlockedByPopup b1c93e2b5d7a4c25f0e926b71bc9670f4cf8dce4a7c79010d01fa900a6668ffa -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.AllowWhenBlockedByPopup = 32
```

Return true even if a popup window is normally blocking access to this item/window


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L37).

## `AllowWhenDisabled`

<a id="api-8b877a4f3fbed977"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.AllowWhenDisabled 68c542e3c17ca5f5bd5219a29f5306e66b0b30f254cf37d136e9b44b67f4790c -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.AllowWhenDisabled = 1024
```

IsItemHovered() only: Return true even if the item is disabled


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L53).

## `AllowWhenOverlapped`

<a id="api-4b9b3b62fdf73a0e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.AllowWhenOverlapped d40658ac8cb417922e000dd91e24f9fe9839e513c9bac54041efd2cc517a4dd7 -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.AllowWhenOverlapped = 768
```

Selects the allow when overlapped presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L61).

## `AllowWhenOverlappedByItem`

<a id="api-2609ea717bf42a4d"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.AllowWhenOverlappedByItem 5dd09b50cf82857768a3ed9a27cbe06b6aca2e538bc67a097f5d1232ee14be81 -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.AllowWhenOverlappedByItem = 256
```

IsItemHovered() only: Return true even if the item uses AllowOverlap mode and is overlapped by another hoverable item.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L45).

## `AllowWhenOverlappedByWindow`

<a id="api-45bb383467061a16"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.AllowWhenOverlappedByWindow c534a2aa1ffffed01abdce9935ef04df117cf90ae7f4501a74604cf6f6fe8d26 -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.AllowWhenOverlappedByWindow = 512
```

IsItemHovered() only: Return true even if the position is obstructed or overlapped by another window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L49).

## `AnyWindow`

<a id="api-93e531d9026e173c"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.AnyWindow a52fdbebf385cd410e666759550650bce5afd494710090126920eab76f1f5e7b -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.AnyWindow = 4
```

IsWindowHovered() only: Return true if any window is hovered


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L25).

## `ChildWindows`

<a id="api-338f2dd3158412b9"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.ChildWindows e8d03b5dbf29b523fc519b6d8d4ef90941e40cd1774a47f00ffba26e06bff11a -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.ChildWindows = 1
```

IsWindowHovered() only: Return true if any children of the window is hovered


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L17).

## `DelayNone`

<a id="api-f5f24429ead8a491"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.DelayNone f4be23b489ab1232b5a23595283b9acd562e1a69c9906340056481d1150f8fc8 -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.DelayNone = 16384
```

IsItemHovered() only: Return true immediately (default). As this is the default you generally ignore this.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L81).

## `DelayNormal`

<a id="api-92d1b0701241452b"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.DelayNormal 22333d7982e718c1b31fb883ba0fda1fe3565c48a0a61a2b751e96ddca55b08c -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.DelayNormal = 65536
```

IsItemHovered() only: Return true after style.HoverDelayNormal elapsed (~0.40 sec) (shared between items) + requires mouse to be stationary for style.HoverStationaryDelay (once per item).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L89).

## `DelayShort`

<a id="api-23d0ff15ed0d0f59"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.DelayShort 4a4ab03cc7965bac731dc45fe4ad23a919f39073592a17ca4063d8707df2611f -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.DelayShort = 32768
```

IsItemHovered() only: Return true after style.HoverDelayShort elapsed (~0.15 sec) (shared between items) + requires mouse to be stationary for style.HoverStationaryDelay (once per item).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L85).

## `DockHierarchy`

<a id="api-1ec3999e2bf5eb78"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.DockHierarchy e6ad214687ac44c19cbc2eab957834fd12b898bbfbc175f8027b44ff3d3f6e2b -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.DockHierarchy = 16
```

IsWindowHovered() only: Consider docking hierarchy (treat dockspace host as parent of docked window) (when used with _ChildWindows or _RootWindow)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L33).

## `ForTooltip`

<a id="api-28238980986fab0f"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.ForTooltip 2d8d9323b9adcb912417baf7b1fb55ea529d31394be03cf1bd7edcafcc024a7e -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.ForTooltip = 4096
```

Shortcut for standard flags when using IsItemHovered() + SetTooltip() sequence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L73).

## `NoNavOverride`

<a id="api-c8706e3fdb7fda46"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.NoNavOverride f88854d1a95a046524f6598725b80e465cd9500f5bc07def3ad5c98d8eb8cb7f -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.NoNavOverride = 2048
```

IsItemHovered() only: Disable using keyboard/gamepad navigation state when active, always query mouse


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L57).

## `None`

<a id="api-81582fd5a56ed269"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.None 719a99f12e1fe68828bf51aefffcdb6b8225d6448c3c5227848f9977ae80bf8b -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.None = 0
```

Return true if directly over the item/window, not obstructed by another window, not obstructed by an active popup or modal blocking inputs under them.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L13).

## `NoPopupHierarchy`

<a id="api-ac346818360590df"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.NoPopupHierarchy c09fba50318d2504be1c69645487cc42c444b80ccc1d01a6b00fa8bac3d2c51f -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.NoPopupHierarchy = 8
```

IsWindowHovered() only: Do not consider popup hierarchy (do not treat popup emitter as parent of popup) (when used with _ChildWindows or _RootWindow)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L29).

## `NoSharedDelay`

<a id="api-22b25f506152d03b"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.NoSharedDelay 071a7874ca34b415215e411835cd89a382c3faf6f8dd84064cd2c73fab19fd47 -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.NoSharedDelay = 131072
```

IsItemHovered() only: Disable shared delay system where moving from one item to the next keeps the previous timer for a short time (standard for tooltips with long delays)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L93).

## `RectOnly`

<a id="api-348c10229d539ca4"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.RectOnly 85cb0101b227b9f096ba6a340e74cca383bb646438a70196b29d6ef5889bd3e6 -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.RectOnly = 928
```

Selects the rect only presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L65).

## `RootAndChildWindows`

<a id="api-97abf7d09c60c0f0"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.RootAndChildWindows 95595b27b0a4d55dc190aad07a8ecf19b2a8e93da6cdf119ec7d78ee50820c4d -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.RootAndChildWindows = 3
```

Selects the root and child windows presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L69).

## `RootWindow`

<a id="api-762fe8dd16e6b62f"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.RootWindow a2d29e225403cac78ea879dd8ce6a759dec7412813ee037ae207695f2be94922 -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.RootWindow = 2
```

IsWindowHovered() only: Test from root window (top most parent of the current hierarchy)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L21).

## `Stationary`

<a id="api-a67fe76606f7d9ba"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiHoveredFlags.Stationary 74ed01694183a590179dac651a1b4a8e8748c6b285e3330acce4ee067c8f7ae6 -->

```csharp
InnoEditor.ImGui.ImGuiHoveredFlags.Stationary = 8192
```

Require mouse to be stationary for style.HoverStationaryDelay (~0.15 sec) _at least one time_. After this, can move on same item/window. Using the stationary test tends to reduces the need for a long delay.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L77).
