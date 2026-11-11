---
title: "ImGuiTableFlags"
description: "Reference for ImGuiTableFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.650b7a2fd1c17b87
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiTableFlags`

This reference describes `ImGuiTableFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Borders`](#api-67ab33d5b90dbe93) | Field |
| [`BordersH`](#api-ee9ab8312c810f70) | Field |
| [`BordersInner`](#api-e237b107e50272b3) | Field |
| [`BordersInnerH`](#api-cba48ee95f11b4a1) | Field |
| [`BordersInnerV`](#api-748591b89a81240d) | Field |
| [`BordersOuter`](#api-3af2e802cc115742) | Field |
| [`BordersOuterH`](#api-690459c7418930a1) | Field |
| [`BordersOuterV`](#api-31208b9ac8603522) | Field |
| [`BordersV`](#api-57da55add5806bd6) | Field |
| [`ContextMenuInBody`](#api-78f0cdecfce8f8a3) | Field |
| [`Hideable`](#api-65e3cb68b2fffd3a) | Field |
| [`HighlightHoveredColumn`](#api-540ca36aa5fbe823) | Field |
| [`NoBordersInBody`](#api-b34c4f9ed2067d15) | Field |
| [`NoBordersInBodyUntilResize`](#api-c80e174c993df623) | Field |
| [`NoClip`](#api-9dd01e48cd0be4d6) | Field |
| [`NoHostExtendX`](#api-849b43244e2370e3) | Field |
| [`NoHostExtendY`](#api-50b2a743d9547b79) | Field |
| [`NoKeepColumnsVisible`](#api-e3927b0ba810d0ca) | Field |
| [`None`](#api-a9a67f08cb6c3e5f) | Field |
| [`NoPadInnerX`](#api-9024981f1e1d866f) | Field |
| [`NoPadOuterX`](#api-3e0df93efbd12566) | Field |
| [`NoSavedSettings`](#api-207788b04f993503) | Field |
| [`PadOuterX`](#api-719732779c13e4c5) | Field |
| [`PreciseWidths`](#api-dc9c66a01d7cad45) | Field |
| [`Reorderable`](#api-a68ea643a8929d63) | Field |
| [`Resizable`](#api-56a77443abcf3fc0) | Field |
| [`RowBg`](#api-bab405fdba77ccf7) | Field |
| [`ScrollX`](#api-28297dc9d591f990) | Field |
| [`ScrollY`](#api-d3130eb5b7609ea0) | Field |
| [`SizingFixedFit`](#api-c10d345b2956448f) | Field |
| [`SizingFixedSame`](#api-a86ee352cca73a39) | Field |
| [`SizingMask`](#api-d7396b90ef5d8eeb) | Field |
| [`SizingStretchProp`](#api-5a584188b160913d) | Field |
| [`SizingStretchSame`](#api-8e94c9a366bb838f) | Field |
| [`Sortable`](#api-6a3e6ac3600e83cb) | Field |
| [`SortMulti`](#api-5683491ad55ad067) | Field |
| [`SortTristate`](#api-0954a6c7ede0b621) | Field |

## Type declaration

<a id="api-650b7a2fd1c17b87"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiTableFlags 3e42de22d1e02037262122cfccee18689142b644193c96b38d0b70713ff05b1d -->

```csharp
public enum Inno.Editor.ImGui.ImGuiTableFlags : int
```

Defines the supported table flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L8).

## `Borders`

<a id="api-67ab33d5b90dbe93"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.Borders 7d472cda21ca9a582013f7c2a60567c2a5e6a08889b3c7438d1f20d951feb27f -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.Borders = Inno.Editor.ImGui.ImGuiTableFlags.BordersH | Inno.Editor.ImGui.ImGuiTableFlags.BordersV
```

Draw all borders.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L77).

## `BordersH`

<a id="api-ee9ab8312c810f70"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.BordersH 5e19e128364ec5317029f49c078d34656e4e3e68f72d6bb94381bcaadd12451a -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.BordersH = Inno.Editor.ImGui.ImGuiTableFlags.BordersInnerH | Inno.Editor.ImGui.ImGuiTableFlags.BordersOuterH
```

Draw horizontal borders.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L61).

## `BordersInner`

<a id="api-e237b107e50272b3"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.BordersInner 51de7d0d28090b1bd9ff34809589e710b88858d4c89ea6231ec042f235a4fcf5 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.BordersInner = Inno.Editor.ImGui.ImGuiTableFlags.BordersInnerH | Inno.Editor.ImGui.ImGuiTableFlags.BordersInnerV
```

Draw inner borders.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L69).

## `BordersInnerH`

<a id="api-cba48ee95f11b4a1"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.BordersInnerH 3020a9e57aa1805dcdb58c918dd74f5921651aefa7e419098522991310a14efc -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.BordersInnerH = 128
```

Draw horizontal borders between rows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L45).

## `BordersInnerV`

<a id="api-748591b89a81240d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.BordersInnerV 74cafe95d3ea6c22189c5cc90b391987d49d3df050ca1432c516a96d0da1ca19 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.BordersInnerV = 512
```

Draw vertical borders between columns.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L53).

## `BordersOuter`

<a id="api-3af2e802cc115742"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.BordersOuter 26cee251f32797c0b09afd99c9dda0b20bc2b5759161e493b5608b0aa8e4b41f -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.BordersOuter = Inno.Editor.ImGui.ImGuiTableFlags.BordersOuterH | Inno.Editor.ImGui.ImGuiTableFlags.BordersOuterV
```

Draw outer borders.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L73).

## `BordersOuterH`

<a id="api-690459c7418930a1"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.BordersOuterH 68f26587f3b71bb4aa2dd4e18a312b1e1af9a7484061b02679154f3c5c1498b2 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.BordersOuterH = 256
```

Draw horizontal borders at the top and bottom.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L49).

## `BordersOuterV`

<a id="api-31208b9ac8603522"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.BordersOuterV e21963a54b3ff297ac19b82fd323fc3bca1a8705ec339086630624a55e2ce748 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.BordersOuterV = 1024
```

Draw vertical borders on the left and right sides.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L57).

## `BordersV`

<a id="api-57da55add5806bd6"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.BordersV 639470e75865cdd707d91684bbeb8cebf97dafabc7f99efe97d967e231d231f4 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.BordersV = Inno.Editor.ImGui.ImGuiTableFlags.BordersInnerV | Inno.Editor.ImGui.ImGuiTableFlags.BordersOuterV
```

Draw vertical borders.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L65).

## `ContextMenuInBody`

<a id="api-78f0cdecfce8f8a3"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.ContextMenuInBody 6483fc79824d64ef731ac19cced6e664c0842cb9913816a0c7835b90f4d98c16 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.ContextMenuInBody = 32
```

Right-click on columns body/contents will display table context menu. By default it is available in TableHeadersRow().


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L37).

## `Hideable`

<a id="api-65e3cb68b2fffd3a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.Hideable 4ba716fa36bad6511031a08b5e649db0e13759783511f774e4591bd888420268 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.Hideable = 4
```

Enable hiding/disabling columns in context menu.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L25).

## `HighlightHoveredColumn`

<a id="api-540ca36aa5fbe823"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.HighlightHoveredColumn fee5c16adcef25e6b33938da0a796d4e027a3b5e5ebde324b9099c603bfc7f67 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.HighlightHoveredColumn = 268435456
```

Highlight column headers when hovered (may evolve into a fuller highlight)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L153).

## `NoBordersInBody`

<a id="api-b34c4f9ed2067d15"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.NoBordersInBody 5505a12e9c0009ec614e160c3dbe3212ce3cb07489c3662b28c55219cb78ea9c -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.NoBordersInBody = 2048
```

Disable vertical borders in columns Body (borders will always appear in Headers). -> May move to style


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L81).

## `NoBordersInBodyUntilResize`

<a id="api-c80e174c993df623"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.NoBordersInBodyUntilResize 931ddfc9d470d1eb88245428b4bba49e39a3261cf517bebec29132d1076f847a -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.NoBordersInBodyUntilResize = 4096
```

Disable vertical borders in columns Body until hovered for resize (borders will always appear in Headers). -> May move to style


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L85).

## `NoClip`

<a id="api-9dd01e48cd0be4d6"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.NoClip 544ac8195d95c507a800a737319bf6231e471c0e1be0bf295d00aa0b13a84456 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.NoClip = 1048576
```

Disable clipping rectangle for every individual columns (reduce draw command count, items will be able to overflow into other columns). Generally incompatible with TableSetupScrollFreeze().


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L121).

## `NoHostExtendX`

<a id="api-849b43244e2370e3"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.NoHostExtendX 214359dfcfc5f3c4247530f3e1b04bcbf5c3778aadd8a06c6c8cefce21e5edf6 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.NoHostExtendX = 65536
```

Make outer width auto-fit to columns, overriding outer_size.x value. Only available when ScrollX/ScrollY are disabled and Stretch columns are not used.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L105).

## `NoHostExtendY`

<a id="api-50b2a743d9547b79"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.NoHostExtendY 2158acd1ca419d298924b90caa6ac87c3cada162440c18f63e8c10dfeaa29d35 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.NoHostExtendY = 131072
```

Make outer height stop exactly at outer_size.y (prevent auto-extending table past the limit). Only available when ScrollX/ScrollY are disabled. Data below the limit will be clipped and not visible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L109).

## `NoKeepColumnsVisible`

<a id="api-e3927b0ba810d0ca"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.NoKeepColumnsVisible 4eee2270b045b9cb46a6994422bde57a5213459748742dbe7ab3a25359d6ce59 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.NoKeepColumnsVisible = 262144
```

Disable keeping column always minimally visible when ScrollX is off and table gets too small. Not recommended if columns are resizable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L113).

## `None`

<a id="api-a9a67f08cb6c3e5f"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.None e35e8f4360d99b2efac9aaadd02847774bd28f2228203297b8fd34534a49ca9f -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L13).

## `NoPadInnerX`

<a id="api-9024981f1e1d866f"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.NoPadInnerX ac617191c12a03d241736ea2dfc02b008674a7df915045a24d31e7964e4fe291 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.NoPadInnerX = 8388608
```

Disable inner padding between columns (double inner padding if BordersOuterV is on, single inner padding if BordersOuterV is off).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L133).

## `NoPadOuterX`

<a id="api-3e0df93efbd12566"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.NoPadOuterX 1ec04b4195bae38f3c92cf51733358b878d14881150cf627965eefec5be4a890 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.NoPadOuterX = 4194304
```

Default if BordersOuterV is off. Disable outermost padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L129).

## `NoSavedSettings`

<a id="api-207788b04f993503"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.NoSavedSettings 57ff2b86d523e23518479e9205ee0456e43925fe462ed5d71205b66f0f7308eb -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.NoSavedSettings = 16
```

Disable persisting columns order, width, visibility and sort settings in the .ini file.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L33).

## `PadOuterX`

<a id="api-719732779c13e4c5"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.PadOuterX f7369061e28fcad026e214282d6c8227f792efb2cbd837a9774fad35b5409055 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.PadOuterX = 2097152
```

Default if BordersOuterV is on. Enable outermost padding. Generally desirable if you have headers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L125).

## `PreciseWidths`

<a id="api-dc9c66a01d7cad45"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.PreciseWidths 06a9f32adc66ecb640f70f796d46573aa2c946ca19ea81a3b6249a6d6d2b6759 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.PreciseWidths = 524288
```

Disable distributing remainder width to stretched columns (width allocation on a 100-wide table with 3 columns: Without this flag: 33,33,34. With this flag: 33,33,33). With larger number of columns, resizing will appear to be less smooth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L117).

## `Reorderable`

<a id="api-a68ea643a8929d63"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.Reorderable 549bed764038da108e257b59fc8e978cd322a1c2c9adb76afc79d4f193f1efd8 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.Reorderable = 2
```

Enable reordering columns in header row (need calling TableSetupColumn() + TableHeadersRow() to display headers)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L21).

## `Resizable`

<a id="api-56a77443abcf3fc0"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.Resizable 69b83f6117c1a325e77b7b1986e6c4694ce03c50971a7a40b5cb858f5c19daf3 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.Resizable = 1
```

Enable resizing columns.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L17).

## `RowBg`

<a id="api-bab405fdba77ccf7"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.RowBg 29211e252a6b4ea6e80410e69b5b47593c069a5fd40f3004f0cb427ea0bff54e -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.RowBg = 64
```

Set each RowBg color with ImGuiCol_TableRowBg or ImGuiCol_TableRowBgAlt (equivalent of calling TableSetBgColor with ImGuiTableBgFlags_RowBg0 on each row manually)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L41).

## `ScrollX`

<a id="api-28297dc9d591f990"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.ScrollX c300fab6c00a40d9253839f52356ffc76f588ab368f0fdd8d14dfcd86f2cf2b5 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.ScrollX = 16777216
```

Enable horizontal scrolling. Require 'outer_size' parameter of BeginTable() to specify the container size. Changes default sizing policy. Because this creates a child window, ScrollY is currently generally recommended when using ScrollX.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L137).

## `ScrollY`

<a id="api-d3130eb5b7609ea0"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.ScrollY 2adc6058919c492aec0088cbeacb39e9ee3e65f5aad4e1b4d15ae6c61b9289c5 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.ScrollY = 33554432
```

Enable vertical scrolling. Require 'outer_size' parameter of BeginTable() to specify the container size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L141).

## `SizingFixedFit`

<a id="api-c10d345b2956448f"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.SizingFixedFit 15570448ffe2f7a655f50fc80daf3187b524807f773c2fef1448733dc82dae8f -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.SizingFixedFit = 8192
```

Columns default to _WidthFixed or _WidthAuto (if resizable or not resizable), matching contents width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L89).

## `SizingFixedSame`

<a id="api-a86ee352cca73a39"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.SizingFixedSame e48451f55ddaaf6268c324b36fbd6306abc1c676c8bb40c2c6fdf5fb03c62684 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.SizingFixedSame = 16384
```

Columns default to _WidthFixed or _WidthAuto (if resizable or not resizable), matching the maximum contents width of all columns. Implicitly enable ImGuiTableFlags_NoKeepColumnsVisible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L93).

## `SizingMask`

<a id="api-d7396b90ef5d8eeb"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.SizingMask 2ae2a1916acc0508ba4a8c899e8c88d71189246da66dd74dedea50be31764683 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.SizingMask = Inno.Editor.ImGui.ImGuiTableFlags.SizingStretchProp | Inno.Editor.ImGui.ImGuiTableFlags.SizingStretchSame
```

Selects the sizing mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L157).

## `SizingStretchProp`

<a id="api-5a584188b160913d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.SizingStretchProp c2eeef00efd8c1c95d59961b745100dfe78eccbaa2a46c6c638a4b820cd521e2 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.SizingStretchProp = Inno.Editor.ImGui.ImGuiTableFlags.SizingFixedFit | Inno.Editor.ImGui.ImGuiTableFlags.SizingFixedSame
```

Columns default to _WidthStretch with default weights proportional to each columns contents widths.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L97).

## `SizingStretchSame`

<a id="api-8e94c9a366bb838f"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.SizingStretchSame 1f35d0d20280cacfd1e62b63a36e34c830c96f6471781563bd6f90b1f40671d7 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.SizingStretchSame = 32768
```

Columns default to _WidthStretch with default weights all equal, unless overridden by TableSetupColumn().


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L101).

## `Sortable`

<a id="api-6a3e6ac3600e83cb"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.Sortable fde22f24efd15206657d545457b133d2104196c0f361da3df9cf63a061bcd021 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.Sortable = 8
```

Enable sorting. Call TableGetSortSpecs() to obtain sort specs. Also see ImGuiTableFlags_SortMulti and ImGuiTableFlags_SortTristate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L29).

## `SortMulti`

<a id="api-5683491ad55ad067"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.SortMulti bbdc4f94c8d1ee0d87560d3bf17464b6f7d9b85c60c6c117a23fe9ff0cc8fffa -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.SortMulti = 67108864
```

Hold shift when clicking headers to sort on multiple column. TableGetSortSpecs() may return specs where (SpecsCount > 1).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L145).

## `SortTristate`

<a id="api-0954a6c7ede0b621"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableFlags.SortTristate cc57e3d1521fdd9fc5d885341023b7400be94ffe4a16876be98fb895d7780995 -->

```csharp
Inno.Editor.ImGui.ImGuiTableFlags.SortTristate = 134217728
```

Allow no sorting, disable default sorting. TableGetSortSpecs() may return specs where (SpecsCount == 0).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L149).
