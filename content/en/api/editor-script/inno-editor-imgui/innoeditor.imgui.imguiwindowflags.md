---
title: "ImGuiWindowFlags"
description: "Reference for ImGuiWindowFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.e88ac5919a948b24
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiWindowFlags`

This reference describes `ImGuiWindowFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AlwaysAutoResize`](#api-382921f9675af0da) | Field |
| [`AlwaysHorizontalScrollbar`](#api-e31fb8f6254ea569) | Field |
| [`AlwaysVerticalScrollbar`](#api-48446b285ff56bfd) | Field |
| [`ChildMenu`](#api-df8f25f067a4b057) | Field |
| [`ChildWindow`](#api-94fd02c7def1f2ca) | Field |
| [`DockNodeHost`](#api-087a869be3881a65) | Field |
| [`HorizontalScrollbar`](#api-ddc53136372e2c96) | Field |
| [`MenuBar`](#api-36c663c1d5473b72) | Field |
| [`Modal`](#api-dc6f204f298f5a34) | Field |
| [`NoBackground`](#api-34dca166d67846c9) | Field |
| [`NoBringToFrontOnFocus`](#api-6851891edc79a229) | Field |
| [`NoCollapse`](#api-4be741b5ec19fb0e) | Field |
| [`NoDecoration`](#api-b9107d88eac6b494) | Field |
| [`NoDocking`](#api-f03007ccc555f05d) | Field |
| [`NoFocusOnAppearing`](#api-a935f93151e5f0ae) | Field |
| [`NoInputs`](#api-66ebc05fd0178073) | Field |
| [`NoMouseInputs`](#api-2c95e0ef25546c38) | Field |
| [`NoMove`](#api-a3d35e2bbe1ac126) | Field |
| [`NoNav`](#api-4874a9c5302eaaff) | Field |
| [`NoNavFocus`](#api-a0805637791b583d) | Field |
| [`NoNavInputs`](#api-56a0ddff11d8cb93) | Field |
| [`None`](#api-bbbc6962a6dcf7b8) | Field |
| [`NoResize`](#api-06efbebdbc3596f1) | Field |
| [`NoSavedSettings`](#api-7d0a750dfb820b6a) | Field |
| [`NoScrollbar`](#api-c54da798d7160ee5) | Field |
| [`NoScrollWithMouse`](#api-e74bc92627abca91) | Field |
| [`NoTitleBar`](#api-f0de9c72e7c64b7b) | Field |
| [`Popup`](#api-0d628ce9b9a2836b) | Field |
| [`Tooltip`](#api-85531838e7e189b7) | Field |
| [`UnsavedDocument`](#api-0321c3e696ef717e) | Field |

## Type declaration

<a id="api-e88ac5919a948b24"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiWindowFlags af4b01f2612338f643fd97a924e754ac8ca45de6f68c6babcb1f01dbb475f6e5 -->

```csharp
public enum InnoEditor.ImGui.ImGuiWindowFlags : int
```

Defines the supported window flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L8).

## `AlwaysAutoResize`

<a id="api-382921f9675af0da"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.AlwaysAutoResize 866fcf96a133e63efb3957b12701ff0bc941eebad3ee43f36ed1707542b0beba -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.AlwaysAutoResize = 64
```

Resize every window to its content every frame


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L41).

## `AlwaysHorizontalScrollbar`

<a id="api-e31fb8f6254ea569"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.AlwaysHorizontalScrollbar 88275d8e7c2044773ba85056657c2a5c32211f7627f2bbbd7549bb5e8bf02309 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.AlwaysHorizontalScrollbar = 32768
```

Always show horizontal scrollbar (even if ContentSize.x < Size.x)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L77).

## `AlwaysVerticalScrollbar`

<a id="api-48446b285ff56bfd"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.AlwaysVerticalScrollbar 1d6bfe27d87884993411064a33bd0149d8a9e18f5b5b84b82d7188f36ee92b7a -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.AlwaysVerticalScrollbar = 16384
```

Always show vertical scrollbar (even if ContentSize.y < Size.y)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L73).

## `ChildMenu`

<a id="api-df8f25f067a4b057"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.ChildMenu f52d5cfa7330a78c3fe957ab47bd363254c9229586376d9d33a094bf2fe48ea8 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.ChildMenu = 268435456
```

Don't use! For internal use by BeginMenu()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L129).

## `ChildWindow`

<a id="api-94fd02c7def1f2ca"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.ChildWindow 21a425abb0575be4c79a36c6e49de180b5e6bb4c999c86dcd49c7b0ecf9f482d -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.ChildWindow = 16777216
```

Don't use! For internal use by BeginChild()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L113).

## `DockNodeHost`

<a id="api-087a869be3881a65"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.DockNodeHost 78fcc61a16941cd8009199c4752697c2a402ddecbdcd86ba2ee775375d465797 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.DockNodeHost = 8388608
```

Don't use! For internal use by Begin()/NewFrame()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L109).

## `HorizontalScrollbar`

<a id="api-ddc53136372e2c96"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.HorizontalScrollbar 4545c3912dac37f3fea1d266ef0461a66a1fc2d7456d35ff796029673123f253 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.HorizontalScrollbar = 2048
```

Allow horizontal scrollbar to appear (off by default). You may use SetNextWindowContentSize(ImVec2(width,0.0f)); prior to calling Begin() to specify width. Read code in imgui_demo in the "Horizontal Scrolling" section.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L61).

## `MenuBar`

<a id="api-36c663c1d5473b72"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.MenuBar 5e76eff9087055ae01610106fb99ca0fe0e6a6148dba6010266298962e83aac3 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.MenuBar = 1024
```

Has a menu-bar


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L57).

## `Modal`

<a id="api-dc6f204f298f5a34"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.Modal 3471a8273bdb2ee3c9e2dae2e415945067f20719cae69fbf232e6fc92478af09 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.Modal = 134217728
```

Don't use! For internal use by BeginPopupModal()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L125).

## `NoBackground`

<a id="api-34dca166d67846c9"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.NoBackground 519883e1e23ef52f02fcbd4426d65b8588f21e01ee323bfbb6d76deaf9377b56 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.NoBackground = 128
```

Disable drawing background color (WindowBg, etc.) and outside border. Similar as using SetNextWindowBgAlpha(0.0f).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L45).

## `NoBringToFrontOnFocus`

<a id="api-6851891edc79a229"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.NoBringToFrontOnFocus 04ebae8d05304eeda8cb2eda2fd2db6553345b32cc1d33642d258639825ba436 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.NoBringToFrontOnFocus = 8192
```

Disable bringing window to front when taking focus (e.g. clicking on it or programmatically giving it focus)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L69).

## `NoCollapse`

<a id="api-4be741b5ec19fb0e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.NoCollapse 8705f2dc645b7969acfd75157ced1d09f1e17c30333468bd839ce8abe5027283 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.NoCollapse = 32
```

Disable user collapsing window by double-clicking on it. Also referred to as Window Menu Button (e.g. within a docking node).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L37).

## `NoDecoration`

<a id="api-b9107d88eac6b494"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.NoDecoration cfab5bc99cf3e33f67d5ec9d7d2608b15346c46e6ba0ea7516c7ac16dead817c -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.NoDecoration = 43
```

Selects the no decoration presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L101).

## `NoDocking`

<a id="api-f03007ccc555f05d"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.NoDocking ee481a28ee2f323f3b055fcc75590747321bd1b290a82600202bb78e40b64fa7 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.NoDocking = 524288
```

Disable docking of this window


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L93).

## `NoFocusOnAppearing`

<a id="api-a935f93151e5f0ae"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.NoFocusOnAppearing 8cb07442798dc5de4d38d9859f2763ec2d3d68ed582df98f7e32343ef54398e2 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.NoFocusOnAppearing = 4096
```

Disable taking focus when transitioning from hidden to visible state


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L65).

## `NoInputs`

<a id="api-66ebc05fd0178073"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.NoInputs 620504ee30630d535f79e80581d8121ee8b9db24c44e70ceaef0b1a9ba32580c -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.NoInputs = 197120
```

Selects the no inputs presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L105).

## `NoMouseInputs`

<a id="api-2c95e0ef25546c38"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.NoMouseInputs 4711b51a3136dc77fdd02aee55754f0993b87097805aaa14ba5265c044a72014 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.NoMouseInputs = 512
```

Disable catching mouse, hovering test with pass through.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L53).

## `NoMove`

<a id="api-a3d35e2bbe1ac126"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.NoMove fa92f6881fc82aa1f0579c5340ca8e456edea4b3e91ee62b42c354cb67e71469 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.NoMove = 4
```

Disable user moving the window


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L25).

## `NoNav`

<a id="api-4874a9c5302eaaff"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.NoNav 21ad20efdab727ea17fa9d30ffd8f3e2f4dc31f44388de78d00984792ea61ff2 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.NoNav = 196608
```

Selects the no nav presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L97).

## `NoNavFocus`

<a id="api-a0805637791b583d"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.NoNavFocus 92a3e6c67aafa064d09fb40f45af8d6c555c7a7be1e38f1916fdef3145d3d29b -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.NoNavFocus = 131072
```

No focusing toward this window with keyboard/gamepad navigation (e.g. skipped by Ctrl+Tab)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L85).

## `NoNavInputs`

<a id="api-56a0ddff11d8cb93"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.NoNavInputs fdeeb6e943ce84cb764782e2d83948885db007995e96513023c20c066627d364 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.NoNavInputs = 65536
```

No keyboard/gamepad navigation within the window


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L81).

## `None`

<a id="api-bbbc6962a6dcf7b8"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.None 2a1a4711e8be3bbe9cfbc7fb6058a0d8eeb3843ac115b1436e86130d49194a5d -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L13).

## `NoResize`

<a id="api-06efbebdbc3596f1"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.NoResize 1a084001d939599a51c82608a400b58f7386c5dd36f76680b2e9d1abe9cf64d5 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.NoResize = 2
```

Disable user resizing with the lower-right grip


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L21).

## `NoSavedSettings`

<a id="api-7d0a750dfb820b6a"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.NoSavedSettings fb74700cd50e4e5c39e7e208ed21a27fe42d1538a625d3dffd4d2237f30d972c -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.NoSavedSettings = 256
```

Never load/save settings in .ini file


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L49).

## `NoScrollbar`

<a id="api-c54da798d7160ee5"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.NoScrollbar f0f3225ea0d21e9ed41bac0fc8ee41a43faf17e9b170f0a685acc2331a37f718 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.NoScrollbar = 8
```

Disable scrollbars (window can still scroll with mouse or programmatically)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L29).

## `NoScrollWithMouse`

<a id="api-e74bc92627abca91"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.NoScrollWithMouse 0242a815308302b997fcc02bed816bc9670f7340d3eedf3d129b2a675d94a303 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.NoScrollWithMouse = 16
```

Disable user vertically scrolling with mouse wheel. On child window, mouse wheel will be forwarded to the parent unless NoScrollbar is also set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L33).

## `NoTitleBar`

<a id="api-f0de9c72e7c64b7b"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.NoTitleBar 5e0a63ac6de365c2f7027335847302c2fe18715a518a602102bd372565c40207 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.NoTitleBar = 1
```

Disable title-bar


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L17).

## `Popup`

<a id="api-0d628ce9b9a2836b"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.Popup e473904a61ae76758dca843f29f0bbac8e4f174463b1448365da0b9782253013 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.Popup = 67108864
```

Don't use! For internal use by BeginPopup()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L121).

## `Tooltip`

<a id="api-85531838e7e189b7"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.Tooltip f254ccc78928ed0a198841ac2c0e1e37823d81be9d87cd6b19a6902a92545606 -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.Tooltip = 33554432
```

Don't use! For internal use by BeginTooltip()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L117).

## `UnsavedDocument`

<a id="api-0321c3e696ef717e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiWindowFlags.UnsavedDocument d364e239a60f06da36dbcf603aff569822c744edec2496da3524c6027012db3b -->

```csharp
InnoEditor.ImGui.ImGuiWindowFlags.UnsavedDocument = 262144
```

Display a dot next to the title. When used in a tab/docking context, tab is selected when clicking the X + closure is not assumed (will wait for user to stop submitting the tab). Otherwise closure is assumed when pressing the X, so if you keep submitting the tab may reappear at end of tab bar.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L89).
