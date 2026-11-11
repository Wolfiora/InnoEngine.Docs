---
title: "ImGuiHoveredFlags"
description: "Reference for ImGuiHoveredFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.7b0ba52b51b75a93
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiHoveredFlags`

This reference describes `ImGuiHoveredFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AllowWhenBlockedByActiveItem`](#api-76b8013501d42e72) | Field |
| [`AllowWhenBlockedByPopup`](#api-b8164eece682e427) | Field |
| [`AllowWhenDisabled`](#api-a552bf7ec2fc5073) | Field |
| [`AllowWhenOverlapped`](#api-323adf6f3e6c9d21) | Field |
| [`AllowWhenOverlappedByItem`](#api-3ec9a3607c31da9b) | Field |
| [`AllowWhenOverlappedByWindow`](#api-a49702cf54d538d6) | Field |
| [`AnyWindow`](#api-d4f4aa58a5a64d58) | Field |
| [`ChildWindows`](#api-17ac92a045ee664c) | Field |
| [`DelayNone`](#api-305ebd5ac7a08de6) | Field |
| [`DelayNormal`](#api-8b96be9a3c8309be) | Field |
| [`DelayShort`](#api-98c3923261943c4c) | Field |
| [`DockHierarchy`](#api-dbee34fcedfe4937) | Field |
| [`ForTooltip`](#api-685ee1412451ce26) | Field |
| [`NoNavOverride`](#api-70f6b8f3b335282d) | Field |
| [`None`](#api-c61228706a6c8494) | Field |
| [`NoPopupHierarchy`](#api-f407a094207219bc) | Field |
| [`NoSharedDelay`](#api-f2788396d7df4ca9) | Field |
| [`RectOnly`](#api-2394a71e673022e5) | Field |
| [`RootAndChildWindows`](#api-d68f3d79ab168720) | Field |
| [`RootWindow`](#api-c48f91b7b494980c) | Field |
| [`Stationary`](#api-f98d44f65b7b29ae) | Field |

## Type declaration

<a id="api-7b0ba52b51b75a93"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiHoveredFlags 424c836d4db97d5e382abf331667279707b741703d0738f96584cd1a4af071cc -->

```csharp
public enum Inno.Editor.ImGui.ImGuiHoveredFlags : int
```

Defines the supported hovered flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L8).

## `AllowWhenBlockedByActiveItem`

<a id="api-76b8013501d42e72"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.AllowWhenBlockedByActiveItem 872718e0c92746cadab4a594c8578b89f2c6de76ac1f24c0ff2600e07d77ae81 -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.AllowWhenBlockedByActiveItem = 128
```

Return true even if an active item is blocking access to this item/window. Useful for Drag and Drop patterns.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L41).

## `AllowWhenBlockedByPopup`

<a id="api-b8164eece682e427"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.AllowWhenBlockedByPopup 2cd4e5ea5d3b739f5591eab0c1a50dc772a0d20a0c708ba93fe3aa09ac5f60e2 -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.AllowWhenBlockedByPopup = 32
```

Return true even if a popup window is normally blocking access to this item/window


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L37).

## `AllowWhenDisabled`

<a id="api-a552bf7ec2fc5073"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.AllowWhenDisabled f6704cac53a54ce4f2073c05a24fe303d2b97c11ae0dd00ad90df53fe4b34536 -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.AllowWhenDisabled = 1024
```

IsItemHovered() only: Return true even if the item is disabled


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L53).

## `AllowWhenOverlapped`

<a id="api-323adf6f3e6c9d21"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.AllowWhenOverlapped 998c4d8b0481f3f23296b86bf6529d25ee5facb2c99216033b0ce0ee46c662aa -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.AllowWhenOverlapped = Inno.Editor.ImGui.ImGuiHoveredFlags.AllowWhenOverlappedByItem | Inno.Editor.ImGui.ImGuiHoveredFlags.AllowWhenOverlappedByWindow
```

Selects the allow when overlapped presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L61).

## `AllowWhenOverlappedByItem`

<a id="api-3ec9a3607c31da9b"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.AllowWhenOverlappedByItem 4ff3d2027969cb6f249006b47d42b3a8e230d8d10de5b5fe48e5b15483d11160 -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.AllowWhenOverlappedByItem = 256
```

IsItemHovered() only: Return true even if the item uses AllowOverlap mode and is overlapped by another hoverable item.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L45).

## `AllowWhenOverlappedByWindow`

<a id="api-a49702cf54d538d6"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.AllowWhenOverlappedByWindow ae0d4290660d1757fa38d73428e2825b96abf13d6d8500f53c44689ea9805203 -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.AllowWhenOverlappedByWindow = 512
```

IsItemHovered() only: Return true even if the position is obstructed or overlapped by another window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L49).

## `AnyWindow`

<a id="api-d4f4aa58a5a64d58"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.AnyWindow 2b4cbc4a1ffcaa9add722ea6e7232ce25c35a05cfa9618df3b091f762b95a668 -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.AnyWindow = 4
```

IsWindowHovered() only: Return true if any window is hovered


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L25).

## `ChildWindows`

<a id="api-17ac92a045ee664c"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.ChildWindows 7fa39345374ac0cfc6585e1751d1485a4e7899368ece78cd080dd98e3ffe4a5d -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.ChildWindows = 1
```

IsWindowHovered() only: Return true if any children of the window is hovered


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L17).

## `DelayNone`

<a id="api-305ebd5ac7a08de6"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.DelayNone 60ffa3e47e8b922f0930f95887e5e557ec23080004d96675d56f3c652acfc556 -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.DelayNone = 16384
```

IsItemHovered() only: Return true immediately (default). As this is the default you generally ignore this.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L81).

## `DelayNormal`

<a id="api-8b96be9a3c8309be"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.DelayNormal a305604c714fd7ed6548b1850b173411b670faef0966f19f630ffbcac40f540a -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.DelayNormal = 65536
```

IsItemHovered() only: Return true after style.HoverDelayNormal elapsed (~0.40 sec) (shared between items) + requires mouse to be stationary for style.HoverStationaryDelay (once per item).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L89).

## `DelayShort`

<a id="api-98c3923261943c4c"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.DelayShort 3112305c6901a94f77c265ed6b22e39a8c4ac5c6ecbcdf1ca7a69c1ca5a3ad9a -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.DelayShort = 32768
```

IsItemHovered() only: Return true after style.HoverDelayShort elapsed (~0.15 sec) (shared between items) + requires mouse to be stationary for style.HoverStationaryDelay (once per item).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L85).

## `DockHierarchy`

<a id="api-dbee34fcedfe4937"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.DockHierarchy 6123621c4d16602e55ff9e01eb0a47379882ab4c0777b97ae79a9043712789c4 -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.DockHierarchy = 16
```

IsWindowHovered() only: Consider docking hierarchy (treat dockspace host as parent of docked window) (when used with _ChildWindows or _RootWindow)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L33).

## `ForTooltip`

<a id="api-685ee1412451ce26"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.ForTooltip 260cebab65a33db4fa2e57534e33a3c57ed1012416aa93a9721206feb993da11 -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.ForTooltip = 4096
```

Shortcut for standard flags when using IsItemHovered() + SetTooltip() sequence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L73).

## `NoNavOverride`

<a id="api-70f6b8f3b335282d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.NoNavOverride 31abe33ea006ac09623afde4c68998f340ae7484bbac8f3fbe4ee0b06d161150 -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.NoNavOverride = 2048
```

IsItemHovered() only: Disable using keyboard/gamepad navigation state when active, always query mouse


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L57).

## `None`

<a id="api-c61228706a6c8494"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.None 104bdc2a70179176e6218fd4f38d66459a2dd08c7354f121e7a2be2e40aa4018 -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.None = 0
```

Return true if directly over the item/window, not obstructed by another window, not obstructed by an active popup or modal blocking inputs under them.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L13).

## `NoPopupHierarchy`

<a id="api-f407a094207219bc"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.NoPopupHierarchy f3c5d08f0432920503d44078686deed06780edc25ec7f63a953b4514cc9ea610 -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.NoPopupHierarchy = 8
```

IsWindowHovered() only: Do not consider popup hierarchy (do not treat popup emitter as parent of popup) (when used with _ChildWindows or _RootWindow)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L29).

## `NoSharedDelay`

<a id="api-f2788396d7df4ca9"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.NoSharedDelay 46164826c3cc9c2b55c0e3190335a121cd905be4391d55f0fa512eb329f3189f -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.NoSharedDelay = 131072
```

IsItemHovered() only: Disable shared delay system where moving from one item to the next keeps the previous timer for a short time (standard for tooltips with long delays)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L93).

## `RectOnly`

<a id="api-2394a71e673022e5"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.RectOnly 3bf36b896905f84de77a4e53403162d24c3b31f482dcda94660e07aae83ec80d -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.RectOnly = Inno.Editor.ImGui.ImGuiHoveredFlags.AllowWhenBlockedByPopup | Inno.Editor.ImGui.ImGuiHoveredFlags.AllowWhenBlockedByActiveItem | Inno.Editor.ImGui.ImGuiHoveredFlags.AllowWhenOverlapped
```

Selects the rect only presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L65).

## `RootAndChildWindows`

<a id="api-d68f3d79ab168720"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.RootAndChildWindows 4f3eeaf92d3ee97c19f5267f3675173afa3bb30bd49bdd1c389029eeea0b4f68 -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.RootAndChildWindows = Inno.Editor.ImGui.ImGuiHoveredFlags.ChildWindows | Inno.Editor.ImGui.ImGuiHoveredFlags.RootWindow
```

Selects the root and child windows presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L69).

## `RootWindow`

<a id="api-c48f91b7b494980c"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.RootWindow 71022daf0055403528fcf8021a4e3353643822089aaf00ab01a54d4079864265 -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.RootWindow = 2
```

IsWindowHovered() only: Test from root window (top most parent of the current hierarchy)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L21).

## `Stationary`

<a id="api-f98d44f65b7b29ae"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiHoveredFlags.Stationary 0758733f8c9e48d21843d2ba30cd69b646df5b4722499e27307d13c120285f02 -->

```csharp
Inno.Editor.ImGui.ImGuiHoveredFlags.Stationary = 8192
```

Require mouse to be stationary for style.HoverStationaryDelay (~0.15 sec) _at least one time_. After this, can move on same item/window. Using the stationary test tends to reduces the need for a long delay.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiHoveredFlags.cs#L77).
