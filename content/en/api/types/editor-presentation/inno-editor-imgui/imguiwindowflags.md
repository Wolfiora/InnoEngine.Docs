---
title: "ImGuiWindowFlags"
description: "Reference for ImGuiWindowFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.b40d61ec4d128b82
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiWindowFlags`

This reference describes `ImGuiWindowFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AlwaysAutoResize`](#api-6148009403fc004c) | Field |
| [`AlwaysHorizontalScrollbar`](#api-067417cf0e463423) | Field |
| [`AlwaysVerticalScrollbar`](#api-f2ab0e345fb6aa31) | Field |
| [`ChildMenu`](#api-fcf3aa1094b7498a) | Field |
| [`ChildWindow`](#api-eef7638908550b1a) | Field |
| [`DockNodeHost`](#api-e661c1a8932af1ea) | Field |
| [`HorizontalScrollbar`](#api-242da1cc7c6a248f) | Field |
| [`MenuBar`](#api-108e787036d454fb) | Field |
| [`Modal`](#api-1e4f67d6e57d467e) | Field |
| [`NoBackground`](#api-f1e00dfd7bd0aa62) | Field |
| [`NoBringToFrontOnFocus`](#api-7fc42b73ec4daf93) | Field |
| [`NoCollapse`](#api-48d715e5e2ffee50) | Field |
| [`NoDecoration`](#api-2f635857c6a8c3d9) | Field |
| [`NoDocking`](#api-1f1e105b484ed857) | Field |
| [`NoFocusOnAppearing`](#api-98604ac12b72112f) | Field |
| [`NoInputs`](#api-f60ffdd1767d43db) | Field |
| [`NoMouseInputs`](#api-6102c5edb13634b2) | Field |
| [`NoMove`](#api-abc98531d0a543db) | Field |
| [`NoNav`](#api-722db7011a99a5f5) | Field |
| [`NoNavFocus`](#api-4e39b60cf4782548) | Field |
| [`NoNavInputs`](#api-d1c594545567e238) | Field |
| [`None`](#api-4a7bc0066903b70d) | Field |
| [`NoResize`](#api-64e661d6f68b61fb) | Field |
| [`NoSavedSettings`](#api-459de0a3ca03aba2) | Field |
| [`NoScrollbar`](#api-4b0be9d4a888589a) | Field |
| [`NoScrollWithMouse`](#api-c8ef1fef5348cc0b) | Field |
| [`NoTitleBar`](#api-1f91e5a5ed2d002d) | Field |
| [`Popup`](#api-79c080ed0d840db2) | Field |
| [`Tooltip`](#api-564f4c2d4e90a360) | Field |
| [`UnsavedDocument`](#api-a0ee122adf0f14bf) | Field |

## Type declaration

<a id="api-b40d61ec4d128b82"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiWindowFlags e525f8a483779d44ffffaff58df3baeb7153cb03035292252a86b3ebccacebe5 -->

```csharp
public enum Inno.Editor.ImGui.ImGuiWindowFlags : int
```

Defines the supported window flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L8).

## `AlwaysAutoResize`

<a id="api-6148009403fc004c"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.AlwaysAutoResize 64f00af5b5132bef77ffd81b7c249a7e46ca0555979ac971fbf479a99e4b1fc4 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.AlwaysAutoResize = 64
```

Resize every window to its content every frame


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L41).

## `AlwaysHorizontalScrollbar`

<a id="api-067417cf0e463423"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.AlwaysHorizontalScrollbar 09a639782b0164482cc83fe07bbea0e9632f75ad88462f44ef3181b34f68bcf2 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.AlwaysHorizontalScrollbar = 32768
```

Always show horizontal scrollbar (even if ContentSize.x < Size.x)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L77).

## `AlwaysVerticalScrollbar`

<a id="api-f2ab0e345fb6aa31"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.AlwaysVerticalScrollbar 93f3493ecf09ec386e177fc491dc38c625ecbc70c6cbc6cb0bc6e1ef15df2ff4 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.AlwaysVerticalScrollbar = 16384
```

Always show vertical scrollbar (even if ContentSize.y < Size.y)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L73).

## `ChildMenu`

<a id="api-fcf3aa1094b7498a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.ChildMenu 7c260af3ea86b3701c0701b9673ea9734208e31eb73c8c1aa3771a2b71a6c0e6 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.ChildMenu = 268435456
```

Don't use! For internal use by BeginMenu()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L129).

## `ChildWindow`

<a id="api-eef7638908550b1a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.ChildWindow 86d89aaf06722a01087abe4f58b9273dcd44961d9438d22c444471307615c7dd -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.ChildWindow = 16777216
```

Don't use! For internal use by BeginChild()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L113).

## `DockNodeHost`

<a id="api-e661c1a8932af1ea"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.DockNodeHost 2faf499e610369c5ad311377dbcd7abd221a7744403d88ebd1a839717495f731 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.DockNodeHost = 8388608
```

Don't use! For internal use by Begin()/NewFrame()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L109).

## `HorizontalScrollbar`

<a id="api-242da1cc7c6a248f"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.HorizontalScrollbar f2d60b68bbd39afe9c58d9c3bea7f49d608b3f82cba04389fcac07cf40fecdce -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.HorizontalScrollbar = 2048
```

Allow horizontal scrollbar to appear (off by default). You may use SetNextWindowContentSize(ImVec2(width,0.0f)); prior to calling Begin() to specify width. Read code in imgui_demo in the "Horizontal Scrolling" section.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L61).

## `MenuBar`

<a id="api-108e787036d454fb"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.MenuBar f4056b3554b06ecba95e5ff94b4c2bdf01826edd67de0aea5b913311cdf62796 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.MenuBar = 1024
```

Has a menu-bar


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L57).

## `Modal`

<a id="api-1e4f67d6e57d467e"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.Modal 0b019bbbbfea25e549c90fe22a5afda03635750640f2b8c924c7cb3cc29aa1ef -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.Modal = 134217728
```

Don't use! For internal use by BeginPopupModal()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L125).

## `NoBackground`

<a id="api-f1e00dfd7bd0aa62"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.NoBackground 2a9f0bdada55ad1e11d02efbb854a33d6d2a47503dc3e158a70f13ff641dc627 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.NoBackground = 128
```

Disable drawing background color (WindowBg, etc.) and outside border. Similar as using SetNextWindowBgAlpha(0.0f).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L45).

## `NoBringToFrontOnFocus`

<a id="api-7fc42b73ec4daf93"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.NoBringToFrontOnFocus c9291b25f80a0008e0bde5ee1dbf3d678093477350570b25e4c29e609ec0a8cc -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.NoBringToFrontOnFocus = 8192
```

Disable bringing window to front when taking focus (e.g. clicking on it or programmatically giving it focus)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L69).

## `NoCollapse`

<a id="api-48d715e5e2ffee50"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.NoCollapse 43cb3ab92e1f152d292d2ccfbdcfaae9fecfac0e67d724a79e749acd25acfbc9 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.NoCollapse = 32
```

Disable user collapsing window by double-clicking on it. Also referred to as Window Menu Button (e.g. within a docking node).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L37).

## `NoDecoration`

<a id="api-2f635857c6a8c3d9"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.NoDecoration a18e4bcc91e14859d5c62d77d48ab62f46974952b9bb451b1b68b7dd027af7aa -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.NoDecoration = Inno.Editor.ImGui.ImGuiWindowFlags.NoTitleBar | Inno.Editor.ImGui.ImGuiWindowFlags.NoResize | Inno.Editor.ImGui.ImGuiWindowFlags.NoScrollbar | Inno.Editor.ImGui.ImGuiWindowFlags.NoCollapse
```

Selects the no decoration presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L101).

## `NoDocking`

<a id="api-1f1e105b484ed857"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.NoDocking 77d0f3430fc556f8d0056879f7b2d6696bb42c44b7e41bdb4a03828bc4f23228 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.NoDocking = 524288
```

Disable docking of this window


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L93).

## `NoFocusOnAppearing`

<a id="api-98604ac12b72112f"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.NoFocusOnAppearing 152bed581451416d9ffa3b9538dc6d0f2432c8605ecfa2786b055004c614e143 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.NoFocusOnAppearing = 4096
```

Disable taking focus when transitioning from hidden to visible state


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L65).

## `NoInputs`

<a id="api-f60ffdd1767d43db"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.NoInputs 7af532a5c433c652e813c19883b15ff6214b1af6926c16f34301739bd5a303fc -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.NoInputs = Inno.Editor.ImGui.ImGuiWindowFlags.NoMouseInputs | Inno.Editor.ImGui.ImGuiWindowFlags.NoNav
```

Selects the no inputs presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L105).

## `NoMouseInputs`

<a id="api-6102c5edb13634b2"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.NoMouseInputs 6ecb7968801dfb1c96514b36433122cd8b5b44c0a28bb8391d9d33d093c14449 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.NoMouseInputs = 512
```

Disable catching mouse, hovering test with pass through.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L53).

## `NoMove`

<a id="api-abc98531d0a543db"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.NoMove cdf5b333d6276c30ad2cf39349f05e3f87ab4eb50823878b3a1a9f879723aa23 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.NoMove = 4
```

Disable user moving the window


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L25).

## `NoNav`

<a id="api-722db7011a99a5f5"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.NoNav ea5833b3ec489d1dc9bc91a2f8fbd7350caef0e959ef0fe89f9c72303a75ff9a -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.NoNav = Inno.Editor.ImGui.ImGuiWindowFlags.NoNavInputs | Inno.Editor.ImGui.ImGuiWindowFlags.NoNavFocus
```

Selects the no nav presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L97).

## `NoNavFocus`

<a id="api-4e39b60cf4782548"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.NoNavFocus ca55736156dd609077204c85dc1b0d51c45aa613e639ad698b460e18509cbb15 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.NoNavFocus = 131072
```

No focusing toward this window with keyboard/gamepad navigation (e.g. skipped by Ctrl+Tab)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L85).

## `NoNavInputs`

<a id="api-d1c594545567e238"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.NoNavInputs e2a7ed1587a9bdac4007bf24a7dc795497f4abd7ae5f8ec162efca41e41deffe -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.NoNavInputs = 65536
```

No keyboard/gamepad navigation within the window


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L81).

## `None`

<a id="api-4a7bc0066903b70d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.None 01ad1d5cb546a786687973d6f045312cd7e1cb140dbe3658460e2928fdebfe48 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L13).

## `NoResize`

<a id="api-64e661d6f68b61fb"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.NoResize 72555c04b95023a7131e9435ca93fcdf68ccfb8cdc8f49730b6979d332721590 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.NoResize = 2
```

Disable user resizing with the lower-right grip


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L21).

## `NoSavedSettings`

<a id="api-459de0a3ca03aba2"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.NoSavedSettings e97899dd77e6e7ac4c979dfd0b8e461cd42fc65bd9a16ae6204ced243258811c -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.NoSavedSettings = 256
```

Never load/save settings in .ini file


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L49).

## `NoScrollbar`

<a id="api-4b0be9d4a888589a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.NoScrollbar 23624005937d6d51fd4413778ea0be2023a423ac233cb1ec0719ec3358150eef -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.NoScrollbar = 8
```

Disable scrollbars (window can still scroll with mouse or programmatically)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L29).

## `NoScrollWithMouse`

<a id="api-c8ef1fef5348cc0b"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.NoScrollWithMouse a11ec91264776e3bb868307be03f17229c7e4890d61d9e870260fd52ee5eed92 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.NoScrollWithMouse = 16
```

Disable user vertically scrolling with mouse wheel. On child window, mouse wheel will be forwarded to the parent unless NoScrollbar is also set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L33).

## `NoTitleBar`

<a id="api-1f91e5a5ed2d002d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.NoTitleBar bc4d0ba2594144b86fff3b24e9539f3d95920015451f35af454aa43a21915874 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.NoTitleBar = 1
```

Disable title-bar


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L17).

## `Popup`

<a id="api-79c080ed0d840db2"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.Popup f7a708233cec2a1cb2f830d62f83755dbe1b4b4799f970c1d5a15d8472677905 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.Popup = 67108864
```

Don't use! For internal use by BeginPopup()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L121).

## `Tooltip`

<a id="api-564f4c2d4e90a360"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.Tooltip d32ac251103587ccf9a8ef9a35d08d8c24a25e386e240c2d62c5cba12443c060 -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.Tooltip = 33554432
```

Don't use! For internal use by BeginTooltip()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L117).

## `UnsavedDocument`

<a id="api-a0ee122adf0f14bf"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWindowFlags.UnsavedDocument 80ec4f0e3f8f5568a43b8323b5a1538d154bee741453233952c1503fd731880a -->

```csharp
Inno.Editor.ImGui.ImGuiWindowFlags.UnsavedDocument = 262144
```

Display a dot next to the title. When used in a tab/docking context, tab is selected when clicking the X + closure is not assumed (will wait for user to stop submitting the tab). Otherwise closure is assumed when pressing the X, so if you keep submitting the tab may reappear at end of tab bar.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiWindowFlags.cs#L89).
