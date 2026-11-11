---
title: "ImGuiTableColumnFlags"
description: "Reference for ImGuiTableColumnFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.7370f81b7740dd22
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiTableColumnFlags`

This reference describes `ImGuiTableColumnFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AngledHeader`](#api-b845c3f7869cd3e3) | Field |
| [`DefaultHide`](#api-072f6dfedce763d7) | Field |
| [`DefaultSort`](#api-1daddb98c1b6ac58) | Field |
| [`Disabled`](#api-39db3ee771056ed6) | Field |
| [`IndentDisable`](#api-75ab62c1d9d5e585) | Field |
| [`IndentEnable`](#api-7b62846728684cfb) | Field |
| [`IndentMask`](#api-1eb570c26515c9da) | Field |
| [`IsEnabled`](#api-48141545591ea345) | Field |
| [`IsHovered`](#api-b4fdde14c09b0d57) | Field |
| [`IsSorted`](#api-f3af77e3085fca95) | Field |
| [`IsVisible`](#api-73533f1f400c8258) | Field |
| [`NoClip`](#api-aecd30326be5c9bf) | Field |
| [`NoDirectResize`](#api-18c8df55a0c4d646) | Field |
| [`NoHeaderLabel`](#api-94e16dbf737a8c86) | Field |
| [`NoHeaderWidth`](#api-4ac9bf58c3ca8333) | Field |
| [`NoHide`](#api-3dd748477efbd1f8) | Field |
| [`None`](#api-7de5886a29cf6e1d) | Field |
| [`NoReorder`](#api-43c2500d7e4ee108) | Field |
| [`NoResize`](#api-1056350672e80a9d) | Field |
| [`NoSort`](#api-c6f397fc4fc78e3e) | Field |
| [`NoSortAscending`](#api-ea17e7f85533009d) | Field |
| [`NoSortDescending`](#api-39e47f336fd12297) | Field |
| [`PreferSortAscending`](#api-dc658d4e881acabe) | Field |
| [`PreferSortDescending`](#api-038797381b69541d) | Field |
| [`StatusMask`](#api-17b60b1011496c3b) | Field |
| [`WidthFixed`](#api-7a727095eef01e8e) | Field |
| [`WidthMask`](#api-4173fe97d3238042) | Field |
| [`WidthStretch`](#api-78ddf60aa8f127d1) | Field |

## Type declaration

<a id="api-7370f81b7740dd22"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiTableColumnFlags 06aa6a1e945e5d57e9cb186f3e9bf0df036259e5afc0b2d2bc0ae3c444c96f76 -->

```csharp
public enum Inno.Editor.ImGui.ImGuiTableColumnFlags : int
```

Defines the supported table column flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L8).

## `AngledHeader`

<a id="api-b845c3f7869cd3e3"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.AngledHeader 9522f48a800397f659dd98ac55850b7dcb46bc8c227042c97f77bcb2e0076398 -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.AngledHeader = 262144
```

TableHeadersRow() will submit an angled header row for this column. Note this will add an extra row.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L89).

## `DefaultHide`

<a id="api-072f6dfedce763d7"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.DefaultHide 913852d860f071dc2df48e04287e84ddb72aeaa9405d7ddaa5c5f198dc0f6aab -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.DefaultHide = 2
```

Default as a hidden/disabled column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L21).

## `DefaultSort`

<a id="api-1daddb98c1b6ac58"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.DefaultSort c147ab65a07ad8c82bd606b6b0f8a01f1ac6986105c49ef35846e9dbb518b42d -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.DefaultSort = 4
```

Default as a sorting column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L25).

## `Disabled`

<a id="api-39db3ee771056ed6"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.Disabled 5044ecf9710be798adad5e3eadb99d2d8f3140002eff290bd81372e3689b17eb -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.Disabled = 1
```

Overriding/master disable flag: hide column, won't show in context menu (unlike calling TableSetColumnEnabled() which manipulates the user accessible state)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L17).

## `IndentDisable`

<a id="api-75ab62c1d9d5e585"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.IndentDisable 18e3449a74937e8b5fdabc5a6478a716e8515a9b2f023ad11d0a571eb18f8764 -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.IndentDisable = 131072
```

Ignore current Indent value when entering cell (default for columns > 0). Indentation changes _within_ the cell will still be honored.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L85).

## `IndentEnable`

<a id="api-7b62846728684cfb"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.IndentEnable 3208455b6471742785e63754418fb6682f7e7c9b548ad26561dbf7b799da43f7 -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.IndentEnable = 65536
```

Use current Indent value when entering cell (default for column 0).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L81).

## `IndentMask`

<a id="api-1eb570c26515c9da"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.IndentMask a65ef8e567f91d06e74e262152347162fa0512eb3a67650609ededa363d62c5b -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.IndentMask = Inno.Editor.ImGui.ImGuiTableColumnFlags.IndentEnable | Inno.Editor.ImGui.ImGuiTableColumnFlags.IndentDisable
```

Selects the indent mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L113).

## `IsEnabled`

<a id="api-48141545591ea345"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.IsEnabled 1a9675ca8271efa6aeda1f2eedda7236f18ffdf4add24c0f92836092dabe3415 -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.IsEnabled = 16777216
```

Status: is enabled == not hidden by user/api (referred to as "Hide" in _DefaultHide and _NoHide) flags.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L93).

## `IsHovered`

<a id="api-b4fdde14c09b0d57"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.IsHovered d4dc54a6ff8a7bab979258cea34a7681527513284a54d6f4ffde4e9d25c1fe4d -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.IsHovered = 134217728
```

Status: is hovered by mouse


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L105).

## `IsSorted`

<a id="api-f3af77e3085fca95"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.IsSorted 7a3169ffef887922fa8bc6bc9229e0901031f32b9e0580ab02eb7944c4f9f3ca -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.IsSorted = 67108864
```

Status: is currently part of the sort specs


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L101).

## `IsVisible`

<a id="api-73533f1f400c8258"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.IsVisible 986fc24b03439e588a1eea3a25809f9a96b49896a026971564027f77c5391cc0 -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.IsVisible = 33554432
```

Status: is visible == is enabled AND not clipped by scrolling.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L97).

## `NoClip`

<a id="api-aecd30326be5c9bf"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.NoClip 982954dbb004c96f1086baeaa8cee8ef8a723f853523afcf8ce73b9bde3c4fc5 -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.NoClip = 256
```

Disable clipping for this column (all NoClip columns will render in a same draw command).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L49).

## `NoDirectResize`

<a id="api-18c8df55a0c4d646"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.NoDirectResize 515edbb08928f6c60c62f20183b5882c4d9f6bb30a06ae797a0cd924b4d9471d -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.NoDirectResize = 1073741824
```

Selects the no direct resize presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L121).

## `NoHeaderLabel`

<a id="api-94e16dbf737a8c86"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.NoHeaderLabel 5d5b048a04e1f92955d17b87a857ef3e964559eca77e839c775925161aa9a410 -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.NoHeaderLabel = 4096
```

TableHeadersRow() will submit an empty label for this column. Convenient for some small columns. Name will still appear in context menu or in angled headers. You may append into this cell by calling TableSetColumnIndex() right after the TableHeadersRow() call.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L65).

## `NoHeaderWidth`

<a id="api-4ac9bf58c3ca8333"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.NoHeaderWidth 55488a7bf3cc7d68770330b7c8feec65539f6ff7eb4d23baf5bd946369d04814 -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.NoHeaderWidth = 8192
```

Disable header text width contribution to automatic column width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L69).

## `NoHide`

<a id="api-3dd748477efbd1f8"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.NoHide 81f5e68a0a7e718806c34dd76aa7774c749584b86c73fac865ee83945dc21fd1 -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.NoHide = 128
```

Disable ability to hide/disable this column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L45).

## `None`

<a id="api-7de5886a29cf6e1d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.None d5389a6953cd64d1a2b65fd615278062f221fe4fd29459209dceb46c3c3aeadb -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L13).

## `NoReorder`

<a id="api-43c2500d7e4ee108"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.NoReorder af9e1b70ac52fb777dbae8ec97da1526f42b274aad3e0bfacc2ed52625c22be0 -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.NoReorder = 64
```

Disable manual reordering this column, this will also prevent other columns from crossing over this column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L41).

## `NoResize`

<a id="api-1056350672e80a9d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.NoResize 21d663aa3266829666314a2d2b70c2b1707371c3d8fc082ea0f3489b634067c3 -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.NoResize = 32
```

Disable manual resizing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L37).

## `NoSort`

<a id="api-c6f397fc4fc78e3e"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.NoSort 21660c6a9ec3c40d4865d3c8254d0e0e7707db8199104b695061fd8244e069e1 -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.NoSort = 512
```

Disable ability to sort on this field (even if ImGuiTableFlags_Sortable is set on the table).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L53).

## `NoSortAscending`

<a id="api-ea17e7f85533009d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.NoSortAscending 2303e4789dd17202d7dd45da834d7973b91fe0f778059078ff06f03e88a3f4f3 -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.NoSortAscending = 1024
```

Disable ability to sort in the ascending direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L57).

## `NoSortDescending`

<a id="api-39e47f336fd12297"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.NoSortDescending d8af06793d55760b7ec379b1c58c9e11e2feb9b9fb29034660372a99c65a2d82 -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.NoSortDescending = 2048
```

Disable ability to sort in the descending direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L61).

## `PreferSortAscending`

<a id="api-dc658d4e881acabe"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.PreferSortAscending f1e732aaa31e69809d196ce7aab255c243e0d221d64e6761b2ea2bbfc6e46f5b -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.PreferSortAscending = 16384
```

Make the initial sort direction Ascending when first sorting on this column (default).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L73).

## `PreferSortDescending`

<a id="api-038797381b69541d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.PreferSortDescending 3079d4fd7b756642d0e4374b0602f11fb012a2af87571603a4d096ccff700e61 -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.PreferSortDescending = 32768
```

Make the initial sort direction Descending when first sorting on this column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L77).

## `StatusMask`

<a id="api-17b60b1011496c3b"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.StatusMask 2c4a14b5ad0d2b2fe250856d7dce3f77a54904bba335ea3fddd77999bced1090 -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.StatusMask = Inno.Editor.ImGui.ImGuiTableColumnFlags.IsEnabled | Inno.Editor.ImGui.ImGuiTableColumnFlags.IsVisible | Inno.Editor.ImGui.ImGuiTableColumnFlags.IsSorted | Inno.Editor.ImGui.ImGuiTableColumnFlags.IsHovered
```

Selects the status mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L117).

## `WidthFixed`

<a id="api-7a727095eef01e8e"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.WidthFixed 1b233acbc9fffa63e80897898e4cc6057a5e5817bad39d3667d2ec482e2ab891 -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.WidthFixed = 16
```

Column will not stretch. Preferable with horizontal scrolling enabled (default if table sizing policy is _SizingFixedFit and table is resizable).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L33).

## `WidthMask`

<a id="api-4173fe97d3238042"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.WidthMask af33480211124165cb428388ba70e92ba2623c7ca60c69c893553052dafdac09 -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.WidthMask = Inno.Editor.ImGui.ImGuiTableColumnFlags.WidthStretch | Inno.Editor.ImGui.ImGuiTableColumnFlags.WidthFixed
```

Selects the width mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L109).

## `WidthStretch`

<a id="api-78ddf60aa8f127d1"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableColumnFlags.WidthStretch 9962ef787f1af0eee6b2f84422fac8abe3f3b92c261a5e8367e08b28e662eb9b -->

```csharp
Inno.Editor.ImGui.ImGuiTableColumnFlags.WidthStretch = 8
```

Column will stretch. Preferable with horizontal scrolling disabled (default if table sizing policy is _SizingStretchSame or _SizingStretchProp).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L29).
