---
title: "ImGuiTableFlags"
description: "Reference for ImGuiTableFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.2d33d14ec62aef74
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiTableFlags`

This reference describes `ImGuiTableFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Borders`](#api-9c85a28a31f39c92) | Field |
| [`BordersH`](#api-c3621c77662d0528) | Field |
| [`BordersInner`](#api-87a7a17f406d9c8a) | Field |
| [`BordersInnerH`](#api-e7d81386d494a900) | Field |
| [`BordersInnerV`](#api-dc43ce4295db971a) | Field |
| [`BordersOuter`](#api-9f9ca9730f45a63f) | Field |
| [`BordersOuterH`](#api-ff9d95ce19e86cbc) | Field |
| [`BordersOuterV`](#api-86d685ea99bcc979) | Field |
| [`BordersV`](#api-4026617c26096504) | Field |
| [`ContextMenuInBody`](#api-3ae8e2e3421febc1) | Field |
| [`Hideable`](#api-5c6cc290b5a2e7d4) | Field |
| [`HighlightHoveredColumn`](#api-0eec1d37e66b5c43) | Field |
| [`NoBordersInBody`](#api-bc6d04fc29083401) | Field |
| [`NoBordersInBodyUntilResize`](#api-3799961b6eca3458) | Field |
| [`NoClip`](#api-fe0f7c7976bd34e7) | Field |
| [`NoHostExtendX`](#api-f748f60258ce8471) | Field |
| [`NoHostExtendY`](#api-912139f52c8138ec) | Field |
| [`NoKeepColumnsVisible`](#api-da3e782a56064354) | Field |
| [`None`](#api-d6c40659cac41ddd) | Field |
| [`NoPadInnerX`](#api-625e4744d5903b1d) | Field |
| [`NoPadOuterX`](#api-0e7edee38ad64df6) | Field |
| [`NoSavedSettings`](#api-e37c64a549b0d74e) | Field |
| [`PadOuterX`](#api-942dddf15c6a0421) | Field |
| [`PreciseWidths`](#api-6d885e26c7c2deaa) | Field |
| [`Reorderable`](#api-eff7f2b9d88530dc) | Field |
| [`Resizable`](#api-53ec412eeccf7721) | Field |
| [`RowBg`](#api-6a323d458df46fb3) | Field |
| [`ScrollX`](#api-ddbd5fa5caa4c164) | Field |
| [`ScrollY`](#api-845403a437e3e6d6) | Field |
| [`SizingFixedFit`](#api-d79740844f3a544a) | Field |
| [`SizingFixedSame`](#api-b85509e7a4ad41ea) | Field |
| [`SizingMask`](#api-5ad9d203095270c5) | Field |
| [`SizingStretchProp`](#api-7a8a5cf69fc11018) | Field |
| [`SizingStretchSame`](#api-0a63e5295088eb52) | Field |
| [`Sortable`](#api-9b91ceb9574dd703) | Field |
| [`SortMulti`](#api-d8b5d6c1e10823bd) | Field |
| [`SortTristate`](#api-b6873906b694dfd9) | Field |

## Type declaration

<a id="api-2d33d14ec62aef74"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiTableFlags 1c43a900bbe14d2e968cc38ee59d7cd44220c105a3672e1dae1cb180df58555f -->

```csharp
public enum InnoEditor.ImGui.ImGuiTableFlags : int
```

Defines the supported table flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L8).

## `Borders`

<a id="api-9c85a28a31f39c92"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.Borders f0cd272c138737cc32f126e690b7ab3064d37d13053d3074ed804db5d694f852 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.Borders = 1920
```

Draw all borders.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L77).

## `BordersH`

<a id="api-c3621c77662d0528"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.BordersH c476a3bd097e44d7132087363cbdabcd19c88bd0998d19b3d284acb6ae20bed0 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.BordersH = 384
```

Draw horizontal borders.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L61).

## `BordersInner`

<a id="api-87a7a17f406d9c8a"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.BordersInner 22330191a1be1b3388127d31ac7b4bb7bc058dc70fc343e66fde2341de4a7337 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.BordersInner = 640
```

Draw inner borders.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L69).

## `BordersInnerH`

<a id="api-e7d81386d494a900"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.BordersInnerH 91502101b9cb10db2c40be245cde7d457761a28bf8758b0376d802a4ffd5cf0e -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.BordersInnerH = 128
```

Draw horizontal borders between rows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L45).

## `BordersInnerV`

<a id="api-dc43ce4295db971a"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.BordersInnerV 1706347de74cb69d637397347a8fd75bbb9fcb9dc09514bf4fecf3454818b6e4 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.BordersInnerV = 512
```

Draw vertical borders between columns.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L53).

## `BordersOuter`

<a id="api-9f9ca9730f45a63f"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.BordersOuter 2043343d47cf6e7aaf6a971735dcb8fa9f293afbffbd4f1c16674188e2714ba5 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.BordersOuter = 1280
```

Draw outer borders.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L73).

## `BordersOuterH`

<a id="api-ff9d95ce19e86cbc"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.BordersOuterH 9f080daf9872e0c51fa861096ce00741a139316b64ec53a2b9b7ee3ea7a39494 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.BordersOuterH = 256
```

Draw horizontal borders at the top and bottom.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L49).

## `BordersOuterV`

<a id="api-86d685ea99bcc979"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.BordersOuterV 69c09e8a05738c7b3d074421370b5a210e270ca05d0a94a70e4b8984617ff360 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.BordersOuterV = 1024
```

Draw vertical borders on the left and right sides.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L57).

## `BordersV`

<a id="api-4026617c26096504"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.BordersV 4ba2ed1c4c551191c5f89ca8c0e869f44d4a856fb9002f94c36354eb6f695aab -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.BordersV = 1536
```

Draw vertical borders.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L65).

## `ContextMenuInBody`

<a id="api-3ae8e2e3421febc1"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.ContextMenuInBody f773c84482025a517092e747367099cb60d22b441e88253ad619a6e6fff9ef08 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.ContextMenuInBody = 32
```

Right-click on columns body/contents will display table context menu. By default it is available in TableHeadersRow().


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L37).

## `Hideable`

<a id="api-5c6cc290b5a2e7d4"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.Hideable 698aab5258b44cc008434703f911e0dde15f31eabb2ba5d5d00e6f9b810976a2 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.Hideable = 4
```

Enable hiding/disabling columns in context menu.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L25).

## `HighlightHoveredColumn`

<a id="api-0eec1d37e66b5c43"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.HighlightHoveredColumn df015294becdf1095630c79d30dfb9fd644ff55c5197a05b23e1f27cbd2f3c6c -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.HighlightHoveredColumn = 268435456
```

Highlight column headers when hovered (may evolve into a fuller highlight)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L153).

## `NoBordersInBody`

<a id="api-bc6d04fc29083401"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.NoBordersInBody 2ebc22488c0f4a8de044289dab7bd1c5c41d4007fd90f1f8cbf8607dd6937a84 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.NoBordersInBody = 2048
```

Disable vertical borders in columns Body (borders will always appear in Headers). -> May move to style


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L81).

## `NoBordersInBodyUntilResize`

<a id="api-3799961b6eca3458"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.NoBordersInBodyUntilResize 876c2bb556a84a06e7bba55534b91dabcc9fcae94e079f82b5997fc6c20f24ba -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.NoBordersInBodyUntilResize = 4096
```

Disable vertical borders in columns Body until hovered for resize (borders will always appear in Headers). -> May move to style


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L85).

## `NoClip`

<a id="api-fe0f7c7976bd34e7"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.NoClip d898390d8dc4e611531ba92eb97bc39f9ba888f32be6036f51996eeaa44e81be -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.NoClip = 1048576
```

Disable clipping rectangle for every individual columns (reduce draw command count, items will be able to overflow into other columns). Generally incompatible with TableSetupScrollFreeze().


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L121).

## `NoHostExtendX`

<a id="api-f748f60258ce8471"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.NoHostExtendX 915814b446d8583c7b25a307629b66c596228916bce5692c1427bcbf43007a5d -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.NoHostExtendX = 65536
```

Make outer width auto-fit to columns, overriding outer_size.x value. Only available when ScrollX/ScrollY are disabled and Stretch columns are not used.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L105).

## `NoHostExtendY`

<a id="api-912139f52c8138ec"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.NoHostExtendY c5ae27054433f86dd93bb1314ac081d473ee022630b6c729e9f8c2704b200944 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.NoHostExtendY = 131072
```

Make outer height stop exactly at outer_size.y (prevent auto-extending table past the limit). Only available when ScrollX/ScrollY are disabled. Data below the limit will be clipped and not visible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L109).

## `NoKeepColumnsVisible`

<a id="api-da3e782a56064354"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.NoKeepColumnsVisible 3ccfe4d915e0fbbce950d6d355784c6c39a80c63beaea88d34d48703dcbea156 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.NoKeepColumnsVisible = 262144
```

Disable keeping column always minimally visible when ScrollX is off and table gets too small. Not recommended if columns are resizable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L113).

## `None`

<a id="api-d6c40659cac41ddd"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.None 4862c9e04df6104f315d6b3c36fedc457a4517b0f48a54ef449ecd5f6ed20983 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L13).

## `NoPadInnerX`

<a id="api-625e4744d5903b1d"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.NoPadInnerX 6a4376ffd20e37ad83d85e7c6ec661d1baf79bc138db36e8a939bb340c8d3d39 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.NoPadInnerX = 8388608
```

Disable inner padding between columns (double inner padding if BordersOuterV is on, single inner padding if BordersOuterV is off).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L133).

## `NoPadOuterX`

<a id="api-0e7edee38ad64df6"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.NoPadOuterX 70e0c479aa9e039608c6ec3fe8a7758533d9e3565479216e6c4189d3e7a35ac6 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.NoPadOuterX = 4194304
```

Default if BordersOuterV is off. Disable outermost padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L129).

## `NoSavedSettings`

<a id="api-e37c64a549b0d74e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.NoSavedSettings 4f6c92eec6259990ad433b1e918149d5008d32a53eb645958787fbb364a15415 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.NoSavedSettings = 16
```

Disable persisting columns order, width, visibility and sort settings in the .ini file.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L33).

## `PadOuterX`

<a id="api-942dddf15c6a0421"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.PadOuterX 1ec5e3feb25904d63a0c32be18bcc75e1770149a019ef209bb6bd8e275e4e957 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.PadOuterX = 2097152
```

Default if BordersOuterV is on. Enable outermost padding. Generally desirable if you have headers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L125).

## `PreciseWidths`

<a id="api-6d885e26c7c2deaa"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.PreciseWidths e7054424b4d201c9b943711f36fc629749be1f4c62a8b46ab96274c97a6ed80d -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.PreciseWidths = 524288
```

Disable distributing remainder width to stretched columns (width allocation on a 100-wide table with 3 columns: Without this flag: 33,33,34. With this flag: 33,33,33). With larger number of columns, resizing will appear to be less smooth.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L117).

## `Reorderable`

<a id="api-eff7f2b9d88530dc"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.Reorderable 346454682ad64709f9b49dbad1ff8ca6690f75766a7a85fc07e719b25f6451b5 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.Reorderable = 2
```

Enable reordering columns in header row (need calling TableSetupColumn() + TableHeadersRow() to display headers)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L21).

## `Resizable`

<a id="api-53ec412eeccf7721"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.Resizable 4f1385a2c37339b506a0cb41d12148966fc2850384b508316962a1f2a436314b -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.Resizable = 1
```

Enable resizing columns.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L17).

## `RowBg`

<a id="api-6a323d458df46fb3"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.RowBg 6ea595387687dfa8f7aabfd60348b33c13281144ad03a652dc68595ba657c1c8 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.RowBg = 64
```

Set each RowBg color with ImGuiCol_TableRowBg or ImGuiCol_TableRowBgAlt (equivalent of calling TableSetBgColor with ImGuiTableBgFlags_RowBg0 on each row manually)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L41).

## `ScrollX`

<a id="api-ddbd5fa5caa4c164"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.ScrollX 1294dc04c5d3a27915a9f4dfca4da45f6bb860f7fc4bdf688d956adc439115aa -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.ScrollX = 16777216
```

Enable horizontal scrolling. Require 'outer_size' parameter of BeginTable() to specify the container size. Changes default sizing policy. Because this creates a child window, ScrollY is currently generally recommended when using ScrollX.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L137).

## `ScrollY`

<a id="api-845403a437e3e6d6"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.ScrollY 71bc42d6c1a7e06142b5e62e7b20dc9d904135d467db380bd6e9179e4a393b13 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.ScrollY = 33554432
```

Enable vertical scrolling. Require 'outer_size' parameter of BeginTable() to specify the container size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L141).

## `SizingFixedFit`

<a id="api-d79740844f3a544a"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.SizingFixedFit f5b0d41dfbfbc7896222c24373db5fdebbfebc36cd50ff684a48e44f351e3f1a -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.SizingFixedFit = 8192
```

Columns default to _WidthFixed or _WidthAuto (if resizable or not resizable), matching contents width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L89).

## `SizingFixedSame`

<a id="api-b85509e7a4ad41ea"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.SizingFixedSame d13baade86baac952e283178b23d07357841e086ed5b3c4759bdf30133cabb93 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.SizingFixedSame = 16384
```

Columns default to _WidthFixed or _WidthAuto (if resizable or not resizable), matching the maximum contents width of all columns. Implicitly enable ImGuiTableFlags_NoKeepColumnsVisible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L93).

## `SizingMask`

<a id="api-5ad9d203095270c5"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.SizingMask f9f7ae19bc38cf25dbe450e4113251cbd35540f68a3a8d92638e5446b823603f -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.SizingMask = 57344
```

Selects the sizing mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L157).

## `SizingStretchProp`

<a id="api-7a8a5cf69fc11018"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.SizingStretchProp 5a2079a5947632600edea5a2c281631ffffc622ba3e58c017d45bfd1b0d8b468 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.SizingStretchProp = 24576
```

Columns default to _WidthStretch with default weights proportional to each columns contents widths.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L97).

## `SizingStretchSame`

<a id="api-0a63e5295088eb52"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.SizingStretchSame 2f948d780025180e4868542e54a9f720d397b9d37cb5c6cb1ff48ea955d7a565 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.SizingStretchSame = 32768
```

Columns default to _WidthStretch with default weights all equal, unless overridden by TableSetupColumn().


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L101).

## `Sortable`

<a id="api-9b91ceb9574dd703"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.Sortable 4b03022dc1e8d5fec41f56683f7f18105e21414c39976c0012e2fa5c1baa2028 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.Sortable = 8
```

Enable sorting. Call TableGetSortSpecs() to obtain sort specs. Also see ImGuiTableFlags_SortMulti and ImGuiTableFlags_SortTristate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L29).

## `SortMulti`

<a id="api-d8b5d6c1e10823bd"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.SortMulti 3d79eccd1e8a241fafd61142646f74479afbe119c42ef93a2ec83fa149d3bdc5 -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.SortMulti = 67108864
```

Hold shift when clicking headers to sort on multiple column. TableGetSortSpecs() may return specs where (SpecsCount > 1).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L145).

## `SortTristate`

<a id="api-b6873906b694dfd9"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableFlags.SortTristate 2f5a06b72a566f8498f2fde7653de27d81c4e7a4ba54ac73509e444a9badddae -->

```csharp
InnoEditor.ImGui.ImGuiTableFlags.SortTristate = 134217728
```

Allow no sorting, disable default sorting. TableGetSortSpecs() may return specs where (SpecsCount == 0).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableFlags.cs#L149).
