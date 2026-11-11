---
title: "ImGuiStyleVar"
description: "Reference for ImGuiStyleVar in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.1ced47dbbc4cfea3
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiStyleVar`

This reference describes `ImGuiStyleVar` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Alpha`](#api-2ddbaf6b2f218e95) | Field |
| [`ButtonTextAlign`](#api-ce0cb281bb82dec0) | Field |
| [`CellPadding`](#api-9973300647d4572e) | Field |
| [`ChildBorderSize`](#api-609435fc8bf728b5) | Field |
| [`ChildRounding`](#api-c7fb4147af58eae1) | Field |
| [`Count`](#api-9f70c6768e74623f) | Field |
| [`DisabledAlpha`](#api-2a3454d36c10aca7) | Field |
| [`DockingSeparatorSize`](#api-82c7bc26a340e84a) | Field |
| [`FrameBorderSize`](#api-2f302ac023692c57) | Field |
| [`FramePadding`](#api-63ae05f7c4ec88c5) | Field |
| [`FrameRounding`](#api-7ae63da1ed21ac80) | Field |
| [`GrabMinSize`](#api-5bd62f46a875f746) | Field |
| [`GrabRounding`](#api-693e2651b3b9b1bb) | Field |
| [`ImageBorderSize`](#api-8798b585c9ff193b) | Field |
| [`ImageRounding`](#api-eec214c4e2c67e2b) | Field |
| [`IndentSpacing`](#api-776cab76e0e60f96) | Field |
| [`ItemInnerSpacing`](#api-db4e04915a474805) | Field |
| [`ItemSpacing`](#api-d4c6d43fe945d79a) | Field |
| [`PopupBorderSize`](#api-33521dfb68b470aa) | Field |
| [`PopupRounding`](#api-f6fb818423ea94c7) | Field |
| [`ScrollbarPadding`](#api-f35657ad93b3dd97) | Field |
| [`ScrollbarRounding`](#api-e272c1da6a7c7a3c) | Field |
| [`ScrollbarSize`](#api-1dba0bd84929c74b) | Field |
| [`SelectableTextAlign`](#api-55f5086ae4d027d8) | Field |
| [`SeparatorTextAlign`](#api-a7c2972016d1cc96) | Field |
| [`SeparatorTextBorderSize`](#api-b8f8901f85a6e187) | Field |
| [`SeparatorTextPadding`](#api-4bcdafbcafffd61c) | Field |
| [`TabBarBorderSize`](#api-93b27ddc36d87fba) | Field |
| [`TabBarOverlineSize`](#api-c9687bab93fe64e0) | Field |
| [`TabBorderSize`](#api-88c6350e66147ef6) | Field |
| [`TableAngledHeadersAngle`](#api-ed39f5ad647a8495) | Field |
| [`TableAngledHeadersTextAlign`](#api-ad6b8b83f9e35d0f) | Field |
| [`TabMinWidthBase`](#api-c46717e7c00ac0da) | Field |
| [`TabMinWidthShrink`](#api-d0a7a48fecac14d6) | Field |
| [`TabRounding`](#api-df214415c8328e5a) | Field |
| [`TreeLinesRounding`](#api-b7ecbe8e2228825c) | Field |
| [`TreeLinesSize`](#api-9d3d6c4e6b6084c8) | Field |
| [`WindowBorderSize`](#api-bfdc660c6538fddb) | Field |
| [`WindowMinSize`](#api-c6a603ac34b92747) | Field |
| [`WindowPadding`](#api-a9fff45aa55c6729) | Field |
| [`WindowRounding`](#api-bfc35d44a91c4a94) | Field |
| [`WindowTitleAlign`](#api-035c32cab58dbc17) | Field |

## Type declaration

<a id="api-1ced47dbbc4cfea3"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiStyleVar 5e2c1f228b84574476839e2efe1cf6eca7baba0f1ef3c4a5c15804270b029c48 -->

```csharp
public enum Inno.Editor.ImGui.ImGuiStyleVar : int
```

Defines the supported style var choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L7).

## `Alpha`

<a id="api-2ddbaf6b2f218e95"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.Alpha fe4bbf323c60de2c22a139688e87f6e85f46d2a6cd0e439d7d92e4b031b887ac -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.Alpha = 0
```

Selects the alpha presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L12).

## `ButtonTextAlign`

<a id="api-ce0cb281bb82dec0"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.ButtonTextAlign f554da40cc58400c1ba8086c38025329309bd82b543faa81275e23b9aae2fd78 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.ButtonTextAlign = 35
```

Selects the button text align presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L152).

## `CellPadding`

<a id="api-9973300647d4572e"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.CellPadding 3ced2ff7e980985dd880bdca5e77f39e1c687cdd9d5e7657227419cedcf10dcb -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.CellPadding = 17
```

Selects the cell padding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L80).

## `ChildBorderSize`

<a id="api-609435fc8bf728b5"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.ChildBorderSize f25472ee6a05d64e29cd8b9227da9425ce9f5c8c36595e54236021abb8c9c24b -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.ChildBorderSize = 8
```

Selects the child border size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L44).

## `ChildRounding`

<a id="api-c7fb4147af58eae1"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.ChildRounding 8767dd53db1c009992e1a7b22fd15c8af9a1c8b8bbeb916484b0a8c797fddd38 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.ChildRounding = 7
```

Selects the child rounding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L40).

## `Count`

<a id="api-9f70c6768e74623f"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.Count aaa33db25e0f577342a4617dca579c60b3f0f5a5f60ba76b434a8c4dceaf5228 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.Count = 41
```

Marks the exclusive end of the valid option range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L176).

## `DisabledAlpha`

<a id="api-2a3454d36c10aca7"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.DisabledAlpha 8c397ce7cc72eaa659c91178cf5bb323b42b767c1d48bbf3de6f30600cbb2d53 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.DisabledAlpha = 1
```

Selects the disabled alpha presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L16).

## `DockingSeparatorSize`

<a id="api-82c7bc26a340e84a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.DockingSeparatorSize 9f0c60c72d7d51a082b993234a65264e41ba922afa6f56dc2200a141a776682d -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.DockingSeparatorSize = 40
```

Selects the docking separator size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L172).

## `FrameBorderSize`

<a id="api-2f302ac023692c57"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.FrameBorderSize a04ac5f8136da7358dbadd32ab1076826f02fca202235f3deaa7929fc18c7c4b -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.FrameBorderSize = 13
```

Selects the frame border size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L64).

## `FramePadding`

<a id="api-63ae05f7c4ec88c5"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.FramePadding 029818d4aacfbcb08b705f55c0c6e1127a726e55308d444e41a4261cabaecdc7 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.FramePadding = 11
```

Selects the frame padding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L56).

## `FrameRounding`

<a id="api-7ae63da1ed21ac80"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.FrameRounding 402b1d4759d31e67ce5feab63b88c14ec7c02085e064ccc5a70fc93ac475ec11 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.FrameRounding = 12
```

Selects the frame rounding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L60).

## `GrabMinSize`

<a id="api-5bd62f46a875f746"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.GrabMinSize 327d8c4c97ad53cc21d5b6e880330821b279cf4b0cb433edee427578fec7e7ed -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.GrabMinSize = 21
```

Selects the grab min size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L96).

## `GrabRounding`

<a id="api-693e2651b3b9b1bb"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.GrabRounding 9905939c1f8f852444afe3c55d632b8a5efd99fe9cf834ac158117080bab46d8 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.GrabRounding = 22
```

Selects the grab rounding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L100).

## `ImageBorderSize`

<a id="api-8798b585c9ff193b"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.ImageBorderSize 7c0f28323bd293a38103b9363b90500049f0fd7f468894a90a4d392ced30ceb0 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.ImageBorderSize = 24
```

Selects the image border size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L108).

## `ImageRounding`

<a id="api-eec214c4e2c67e2b"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.ImageRounding 676c3e5b4f89fe3fc70cd7b133367f816f6617bafd2c5138a5207e12f67e653c -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.ImageRounding = 23
```

Selects the image rounding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L104).

## `IndentSpacing`

<a id="api-776cab76e0e60f96"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.IndentSpacing dd65fc82dc4302f76766216c64eb7985d9d1e67b1ab571c624faff2958e09583 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.IndentSpacing = 16
```

Selects the indent spacing presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L76).

## `ItemInnerSpacing`

<a id="api-db4e04915a474805"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.ItemInnerSpacing 7ef20b06d01afba55d9a1f8f7d3f394f23091afaff64c9ae96e6d57cd06587b1 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.ItemInnerSpacing = 15
```

Selects the item inner spacing presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L72).

## `ItemSpacing`

<a id="api-d4c6d43fe945d79a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.ItemSpacing 1a3746298553c1886de5e23f806cc89cb17dec529df49fa17eebdcf40a854a1c -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.ItemSpacing = 14
```

Selects the item spacing presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L68).

## `PopupBorderSize`

<a id="api-33521dfb68b470aa"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.PopupBorderSize 2c3bd1b3d4b3473508289571e74d33fcdf9ffc27fe517e3b89911b3a965d10dd -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.PopupBorderSize = 10
```

Selects the popup border size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L52).

## `PopupRounding`

<a id="api-f6fb818423ea94c7"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.PopupRounding 3f997761d57925c614ecf92d3c0101b6113992e1b601df4b0186674c85a1f7bc -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.PopupRounding = 9
```

Selects the popup rounding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L48).

## `ScrollbarPadding`

<a id="api-f35657ad93b3dd97"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.ScrollbarPadding 4d2c63cd34e9a28b54f05dd15463fbfb0eb027b01c1ddb3026861af7356c5330 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.ScrollbarPadding = 20
```

Selects the scrollbar padding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L92).

## `ScrollbarRounding`

<a id="api-e272c1da6a7c7a3c"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.ScrollbarRounding e843103ad808746d1cd189f663a41d1527964b87dc37a69468373da44bab5275 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.ScrollbarRounding = 19
```

Selects the scrollbar rounding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L88).

## `ScrollbarSize`

<a id="api-1dba0bd84929c74b"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.ScrollbarSize 34e4a2087c73d66d3c4937b064b3550b13867aac10d683591a3c8ad3b24fe3a5 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.ScrollbarSize = 18
```

Selects the scrollbar size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L84).

## `SelectableTextAlign`

<a id="api-55f5086ae4d027d8"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.SelectableTextAlign a798ad6d74d08d1b0b4ac060635334b4575c96e3ac27280261f2a677ff5e4994 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.SelectableTextAlign = 36
```

Selects the selectable text align presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L156).

## `SeparatorTextAlign`

<a id="api-a7c2972016d1cc96"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.SeparatorTextAlign 97d73b980f249a92b376978ea51b391fde2c00028c0dc8e4ad5337b514de45cf -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.SeparatorTextAlign = 38
```

Selects the separator text align presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L164).

## `SeparatorTextBorderSize`

<a id="api-b8f8901f85a6e187"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.SeparatorTextBorderSize 2e4e5c963eb7a8b081da137f00a797ff93940fb09668d081805907bb391b1907 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.SeparatorTextBorderSize = 37
```

Selects the separator text border size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L160).

## `SeparatorTextPadding`

<a id="api-4bcdafbcafffd61c"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.SeparatorTextPadding 02a2dc5169c7ab83bfbf691446bc910b96a60f460dea304db6cce76192d4e273 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.SeparatorTextPadding = 39
```

Selects the separator text padding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L168).

## `TabBarBorderSize`

<a id="api-93b27ddc36d87fba"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.TabBarBorderSize d788f7a35a30e11dfcb3cd0c973b8088009f2e180cd8a66a5a8f8d6cb5eeb6a0 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.TabBarBorderSize = 29
```

Selects the tab bar border size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L128).

## `TabBarOverlineSize`

<a id="api-c9687bab93fe64e0"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.TabBarOverlineSize 4713845e46c657701f0f84c4c781175641117e882ce04a48af625cc2e17ebafc -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.TabBarOverlineSize = 30
```

Selects the tab bar overline size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L132).

## `TabBorderSize`

<a id="api-88c6350e66147ef6"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.TabBorderSize 971a3e50c2f75d7de68b454a8ed9de72fa185a828761348ec10859a810d876ea -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.TabBorderSize = 26
```

Selects the tab border size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L116).

## `TableAngledHeadersAngle`

<a id="api-ed39f5ad647a8495"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.TableAngledHeadersAngle 30812155c305217da6cb15208b361fb792807cf002beee78bd0da0c32289f17e -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.TableAngledHeadersAngle = 31
```

Selects the table angled headers angle presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L136).

## `TableAngledHeadersTextAlign`

<a id="api-ad6b8b83f9e35d0f"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.TableAngledHeadersTextAlign ec0573bc82b003547f23d7b4b70a2dc4c749d9d119cd481a911182003eafded4 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.TableAngledHeadersTextAlign = 32
```

Selects the table angled headers text align presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L140).

## `TabMinWidthBase`

<a id="api-c46717e7c00ac0da"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.TabMinWidthBase 7f409fa34a3416b8ce2532ba5d836566f97f5fb86209ce5448ed5e07b5d9eb47 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.TabMinWidthBase = 27
```

Selects the tab min width base presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L120).

## `TabMinWidthShrink`

<a id="api-d0a7a48fecac14d6"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.TabMinWidthShrink 119c975032940e312c7ac8229264a7afec1cca049d1492abf47cc762439033c8 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.TabMinWidthShrink = 28
```

Selects the tab min width shrink presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L124).

## `TabRounding`

<a id="api-df214415c8328e5a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.TabRounding b8ef0481a28af88845a555e81a5770c39c4b78f9727876bb1366eba7818f3d29 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.TabRounding = 25
```

Selects the tab rounding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L112).

## `TreeLinesRounding`

<a id="api-b7ecbe8e2228825c"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.TreeLinesRounding e48f2074a744ac957c3c5451539138a8d39349f63e9dca94cc35759bfeeacfcf -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.TreeLinesRounding = 34
```

Selects the tree lines rounding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L148).

## `TreeLinesSize`

<a id="api-9d3d6c4e6b6084c8"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.TreeLinesSize 7d9a3495f1a1ad9450ea6c8d5982bf9aaa1e805b5f25cc41b485c21a7592e1ae -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.TreeLinesSize = 33
```

Selects the tree lines size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L144).

## `WindowBorderSize`

<a id="api-bfdc660c6538fddb"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.WindowBorderSize 367a6e25ea2d1f8820a54947516075386171f693f807d7fe778039d0af514d6d -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.WindowBorderSize = 4
```

Selects the window border size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L28).

## `WindowMinSize`

<a id="api-c6a603ac34b92747"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.WindowMinSize ebf0bea9b07b33525eeb6b31371c6f47457660e02fdf42550e0f07a3107c1d73 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.WindowMinSize = 5
```

Selects the window min size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L32).

## `WindowPadding`

<a id="api-a9fff45aa55c6729"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.WindowPadding a02028f33296f2ec2a7a62e3b30ce2e048f41b6aff79a59f0073668600b50c58 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.WindowPadding = 2
```

Selects the window padding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L20).

## `WindowRounding`

<a id="api-bfc35d44a91c4a94"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.WindowRounding b294325df386eaafa0aa912c98a4710e6fd99e4fdbbf590040f7dfbbe69fc497 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.WindowRounding = 3
```

Selects the window rounding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L24).

## `WindowTitleAlign`

<a id="api-035c32cab58dbc17"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiStyleVar.WindowTitleAlign ad70d4151dcd3e9fb61e6cd5f24924fe1653f6ba57caed86bb72df6213bf4df8 -->

```csharp
Inno.Editor.ImGui.ImGuiStyleVar.WindowTitleAlign = 6
```

Selects the window title align presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L36).
