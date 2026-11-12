---
title: "ImGuiIcon"
description: "Reference for ImGuiIcon in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.dd2d7e1615898599
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiIcon`

This reference describes `ImGuiIcon` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`AngleLeft`](#api-7077cedc52cd2cb9) | Field |
| [`AngleRight`](#api-a0d30cbcbeddf6be) | Field |
| [`ArrowRotateLeft`](#api-24d2e421417a7177) | Field |
| [`ArrowsUpDownLeftRight`](#api-5ee9f15583e74329) | Field |
| [`Bug`](#api-c57c6d2322bd1321) | Field |
| [`Camera`](#api-ffcf8e1974af6ed9) | Field |
| [`CircleInfo`](#api-1707e1378a8a509e) | Field |
| [`CircleQuestion`](#api-d14f29435ea8e733) | Field |
| [`CircleXmark`](#api-8d76967db3c4fbce) | Field |
| [`Cube`](#api-a16255c662b015f5) | Field |
| [`Cubes`](#api-d5cd1932c71a73d0) | Field |
| [`DiceD6`](#api-1d124e0ac3b63914) | Field |
| [`Eye`](#api-8dc74ce32f8fe8d3) | Field |
| [`EyeSlash`](#api-584c4dd7df0b7391) | Field |
| [`File`](#api-ff6f01b201973aec) | Field |
| [`FileCode`](#api-a7e57faa66a09323) | Field |
| [`FileLines`](#api-647cea3069bc476a) | Field |
| [`Folder`](#api-05329e0ba061d1b4) | Field |
| [`ForwardStep`](#api-5c1ae75dbc87be6d) | Field |
| [`Gears`](#api-60874b8df8585895) | Field |
| [`Globe`](#api-c40cfcc7922ea863) | Field |
| [`GripVertical`](#api-bf5132bda3194d02) | Field |
| [`Inno`](#api-7a3dbff71d4a1537) | Field |
| [`LayerGroup`](#api-6f002440708e9eba) | Field |
| [`Lightbulb`](#api-5bb2ad37e7826b13) | Field |
| [`Lock`](#api-e0437b8e0811e2eb) | Field |
| [`LockOpen`](#api-0621d068c8ed1265) | Field |
| [`MagnifyingGlass`](#api-34d2a5dd87fc7099) | Field |
| [`Palette`](#api-e42186c0bd6e3949) | Field |
| [`Pause`](#api-ea9f81adf25436d6) | Field |
| [`Pen`](#api-c4019e6265f60531) | Field |
| [`Play`](#api-f4732a7652ba4a97) | Field |
| [`Plus`](#api-a3102b5a040c4c33) | Field |
| [`Rotate`](#api-c4b20f2328dbb7ab) | Field |
| [`RupeeSign`](#api-6f901b7c731333fa) | Field |
| [`RupiahSign`](#api-7a39fbaf452ee7ea) | Field |
| [`Shader`](#api-e1bebbbce7f0fff5) | Field |
| [`SkullCrossbones`](#api-97841cdcaf1407cf) | Field |
| [`Stop`](#api-0e71d0f07eddfb6c) | Field |
| [`TriangleExclamation`](#api-b56ca0a2e028c747) | Field |
| [`UpDownLeftRight`](#api-ad2d42bcfbf8b4e3) | Field |
| [`UpRightAndDownLeftFromCenter`](#api-3c6ccc7478d982f6) | Field |
| [`VectorSquare`](#api-7dadf99299c61985) | Field |
| [`Xmark`](#api-09c84482029526f7) | Field |

## Type declaration

<a id="api-dd2d7e1615898599"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiIcon a0e0bef9485782b2acadb82fdf5d15c97ff4b5ed4289e32e3fd37a102384d9ae -->

```csharp
public static class InnoEditor.ImGui.ImGuiIcon
```

Provides the standard Editor glyph vocabulary; extension controls may also supply their own glyph text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L7).

## `AngleLeft`

<a id="api-7077cedc52cd2cb9"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.AngleLeft 659edf8114899fc927192d591808f12397a31c812090a6b5099e7f39000046ab -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.AngleLeft = ""
```

Gets the angle left glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L17).

## `AngleRight`

<a id="api-a0d30cbcbeddf6be"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.AngleRight ae0732b1aaf9fc5a64e2ca2588958f02253a41fc178b2b785b59d85bcc1f79f8 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.AngleRight = ""
```

Gets the angle right glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L21).

## `ArrowRotateLeft`

<a id="api-24d2e421417a7177"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.ArrowRotateLeft 3986895f766360b1a4064c892debefbd4cec2ce1e67bf888b6c0c51674a1c546 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.ArrowRotateLeft = ""
```

Gets the arrow rotate left glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L25).

## `ArrowsUpDownLeftRight`

<a id="api-5ee9f15583e74329"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.ArrowsUpDownLeftRight ca174a507c77ca6bd4d0fb72bb65fd28d59c986d92e3d6f1b306c8fdc211954b -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.ArrowsUpDownLeftRight = ""
```

Gets the arrows up down left right glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L29).

## `Bug`

<a id="api-c57c6d2322bd1321"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Bug d3a782d8e537aabf403f5590e339a1892553907d8ea0cf6197f06b1b1cbd0407 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Bug = ""
```

Gets the bug glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L33).

## `Camera`

<a id="api-ffcf8e1974af6ed9"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Camera aca66a81f345edac1b230ffd5a9362292d776821779024257a6d6f6b86bc3b02 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Camera = ""
```

Gets the camera glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L37).

## `CircleInfo`

<a id="api-1707e1378a8a509e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.CircleInfo 8b73c5f32ef258c0bf4e3c7c0a9a0c1f4fcd0fee6479ca81488f94d0d023ab2f -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.CircleInfo = ""
```

Gets the circle info glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L41).

## `CircleQuestion`

<a id="api-d14f29435ea8e733"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.CircleQuestion e6092c5b5acf890f8494c42b766cbf3987f1e000e89f6042ac74fd0b4392f550 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.CircleQuestion = ""
```

Gets the circle question glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L45).

## `CircleXmark`

<a id="api-8d76967db3c4fbce"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.CircleXmark 99bfb00f4f63e7a450d33eaad2a43303b6a0f877c4a3086c02e455e9de0abdec -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.CircleXmark = ""
```

Gets the circle xmark glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L49).

## `Cube`

<a id="api-a16255c662b015f5"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Cube 58de72ee5fa062b6f44666270773f90089b8f38aa033cf34c4411c89b4fcdc34 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Cube = ""
```

Gets the cube glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L53).

## `Cubes`

<a id="api-d5cd1932c71a73d0"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Cubes d38bc5b1f424a6c7ac6a9a1fa380c23d9a904cf422dd8fde761e0c328ee69b05 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Cubes = ""
```

Gets the cubes glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L57).

## `DiceD6`

<a id="api-1d124e0ac3b63914"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.DiceD6 d55fa99fd4cdd2061e7d546e27655bc0fed72285be573c0e13edfbef32f14071 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.DiceD6 = ""
```

Gets the dice d6 glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L61).

## `Eye`

<a id="api-8dc74ce32f8fe8d3"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Eye 72e8e7bb8be3013e90668604e266135bcab2af0957cd5f6456aba53beaf40f83 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Eye = ""
```

Gets the eye glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L65).

## `EyeSlash`

<a id="api-584c4dd7df0b7391"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.EyeSlash 85ab7c90855366e8def70267933c5555b9e07323f01a2f646134077f3ac10209 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.EyeSlash = ""
```

Gets the eye slash glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L69).

## `File`

<a id="api-ff6f01b201973aec"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.File ac6aefa8ff2ec18681900b8e36bff169931f26f7bd1d2433c88b7f7f9797380c -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.File = ""
```

Gets the file glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L73).

## `FileCode`

<a id="api-a7e57faa66a09323"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.FileCode f493419e62a22a4859792a7630cbf75d276a6fc7448a5f544bbb6b5d3d38ca33 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.FileCode = ""
```

Gets the file code glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L77).

## `FileLines`

<a id="api-647cea3069bc476a"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.FileLines 740044cf73c65ea8f16f1fd230b4ff6b7164c745368ed232804380bd1d2a1d69 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.FileLines = ""
```

Gets the file lines glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L81).

## `Folder`

<a id="api-05329e0ba061d1b4"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Folder a8d2401c3029547c27a998fc229025d9046dc8bbddf56403e745c736f48197bc -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Folder = ""
```

Gets the folder glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L85).

## `ForwardStep`

<a id="api-5c1ae75dbc87be6d"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.ForwardStep 71c98a4e008fd82e8c4563298caae15cffe20271b800d789c28ea2dabf9649dc -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.ForwardStep = ""
```

Gets the forward step glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L89).

## `Gears`

<a id="api-60874b8df8585895"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Gears 972aeaed2e0a9e3608ef8381ac342570c773574cb953c033adef3d54c2a1442e -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Gears = ""
```

Gets the gears glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L93).

## `Globe`

<a id="api-c40cfcc7922ea863"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Globe 2641eb843d5930f8e67456b4952c3aec3d5720c1b12fd1fb776bd5ecf6d2875b -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Globe = ""
```

Gets the globe glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L97).

## `GripVertical`

<a id="api-bf5132bda3194d02"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.GripVertical 90b0f09494bb7b49356fb660253d528e0e4c7afb27b416e68a3fe4c69eb70a2f -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.GripVertical = ""
```

Gets the grip vertical glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L101).

## `Inno`

<a id="api-7a3dbff71d4a1537"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Inno ba73ffefe78e70f9ea9867a586fecaf03ad539c59fcab9683d80f45533b340ac -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Inno = ""
```

Gets the InnoEngine logo glyph available in every default Editor font style.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L12).

## `LayerGroup`

<a id="api-6f002440708e9eba"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.LayerGroup f15f5c833fbeb31b721ef9a8796eaa6b6f6e13e669a567da08dfc801c78e378c -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.LayerGroup = ""
```

Gets the layer group glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L105).

## `Lightbulb`

<a id="api-5bb2ad37e7826b13"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Lightbulb c658bb6cc81b5ce9b26e69c669c2175c617cbd4d29e49593ee38cd8223ce1cb1 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Lightbulb = ""
```

Gets the lightbulb glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L109).

## `Lock`

<a id="api-e0437b8e0811e2eb"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Lock 0c20c95bd2a09ba836ace3d27d3afc776478c871c9e5e931398c4ebf0335474f -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Lock = ""
```

Gets the lock glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L113).

## `LockOpen`

<a id="api-0621d068c8ed1265"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.LockOpen 167cce17164afbcc1dda4ca1028475c91c0142c46b1fd56083a3c9c2b874e26e -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.LockOpen = ""
```

Gets the lock open glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L117).

## `MagnifyingGlass`

<a id="api-34d2a5dd87fc7099"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.MagnifyingGlass 46faf3f4f240eb48ae4b146ba796811491fc6e251a6fc5e51d96ada91e63f824 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.MagnifyingGlass = ""
```

Gets the magnifying glass glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L121).

## `Palette`

<a id="api-e42186c0bd6e3949"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Palette 16bed74cf4c27b44a1bd2d30af5cd066b0e03e24d11ee6c02027f8b83f8a292d -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Palette = ""
```

Gets the palette glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L125).

## `Pause`

<a id="api-ea9f81adf25436d6"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Pause e0dbd1dce1f63ec5ed4a36317d87ae7fdf09f2fa71086b44510472073e18d51b -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Pause = ""
```

Gets the pause glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L129).

## `Pen`

<a id="api-c4019e6265f60531"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Pen 8d0dca4367760af6fa4f938b26605bcd3620edb7f5278f2fa86fb220f6707b0a -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Pen = ""
```

Gets the pen glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L133).

## `Play`

<a id="api-f4732a7652ba4a97"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Play 2ed3579258bcf406a818a1ab63c7a737c07cc65ed2ad5cc70dda20f2ebfeccbb -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Play = ""
```

Gets the play glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L137).

## `Plus`

<a id="api-a3102b5a040c4c33"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Plus 56b328b687804ccbb18114d341c60c1f999552fbe714902af33b49cc44b6b9ae -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Plus = "+"
```

Gets the plus glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L141).

## `Rotate`

<a id="api-c4b20f2328dbb7ab"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Rotate 26ae2c261ca4fdbe8f843958858c20207daf69c3d58a5d5bf29756865d8c0163 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Rotate = ""
```

Gets the rotate glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L145).

## `RupeeSign`

<a id="api-6f901b7c731333fa"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.RupeeSign eaabd638abee541fd194954d6af2bb507ce0deed91a528df2c7e37af56c02b70 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.RupeeSign = ""
```

Gets the rupee sign glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L149).

## `RupiahSign`

<a id="api-7a39fbaf452ee7ea"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.RupiahSign 906d4d7430956c0c307219b4d0551002a2d0f3e5ff9963dbe68d85e3bf407b64 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.RupiahSign = ""
```

Gets the rupiah sign glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L153).

## `Shader`

<a id="api-e1bebbbce7f0fff5"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Shader 380e24d724203218f960950d7bffc6af88da818517265d75dc8d9f239c68f2b4 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Shader = "S"
```

Gets the shader glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L157).

## `SkullCrossbones`

<a id="api-97841cdcaf1407cf"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.SkullCrossbones f48ec1275c884fe6ab6ba6dc4d889c7e7e2689d102c6b6feeddb9ec519d22a85 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.SkullCrossbones = ""
```

Gets the skull crossbones glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L161).

## `Stop`

<a id="api-0e71d0f07eddfb6c"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Stop efb2e7e7e661d1fb93767757e4db41ee30bace998a9eb09fa7fdfb82065edfaf -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Stop = ""
```

Gets the stop glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L165).

## `TriangleExclamation`

<a id="api-b56ca0a2e028c747"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.TriangleExclamation 62d9564e36be6d288ad05978e267040c2471c22f3492e4f7c1bd06fea26dabe2 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.TriangleExclamation = ""
```

Gets the triangle exclamation glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L169).

## `UpDownLeftRight`

<a id="api-ad2d42bcfbf8b4e3"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.UpDownLeftRight 80edc07ac83051475769233487690f3358a930f186a2cf56b6e7f2d568836d90 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.UpDownLeftRight = ""
```

Gets the up down left right glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L173).

## `UpRightAndDownLeftFromCenter`

<a id="api-3c6ccc7478d982f6"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.UpRightAndDownLeftFromCenter 5af57057d29a07649539647918582b0d8f0e59767f366a778bbcd3284d03f78d -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.UpRightAndDownLeftFromCenter = ""
```

Gets the up right and down left from center glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L177).

## `VectorSquare`

<a id="api-7dadf99299c61985"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.VectorSquare 751f90d035c48510dda6717ae7bccda53b7acb63cf34308728265adbf109dbc7 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.VectorSquare = ""
```

Gets the vector square glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L181).

## `Xmark`

<a id="api-09c84482029526f7"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiIcon.Xmark d8acd31c3c3ccf4d522b317db44c8c64d2894fbe4276df0976399ccc57007276 -->

```csharp
public const string InnoEditor.ImGui.ImGuiIcon.Xmark = ""
```

Gets the xmark glyph used by standard Editor controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiIcon.cs#L185).
