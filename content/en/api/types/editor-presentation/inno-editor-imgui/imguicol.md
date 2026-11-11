---
title: "ImGuiCol"
description: "Reference for ImGuiCol in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.1ed1ea57fab03581
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiCol`

This reference describes `ImGuiCol` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Border`](#api-e68534abb30d4004) | Field |
| [`BorderShadow`](#api-958dc8d1714ac490) | Field |
| [`Button`](#api-4f71fed1820a080f) | Field |
| [`ButtonActive`](#api-b0eca605ce21440d) | Field |
| [`ButtonHovered`](#api-e09e2794d82c8a09) | Field |
| [`CheckMark`](#api-80c5f3f82bd2424d) | Field |
| [`ChildBg`](#api-43721afa581289eb) | Field |
| [`Count`](#api-cd5126609147a176) | Field |
| [`DockingEmptyBg`](#api-0ca8f47d81949b66) | Field |
| [`DockingPreview`](#api-aa0ae6e8037e96da) | Field |
| [`DragDropTarget`](#api-43a61220f821756a) | Field |
| [`DragDropTargetBg`](#api-e215a22fef9d6669) | Field |
| [`FrameBg`](#api-adc615f15968e1ab) | Field |
| [`FrameBgActive`](#api-66f9115e9a91b98d) | Field |
| [`FrameBgHovered`](#api-cb0d4ca1d38a2515) | Field |
| [`Header`](#api-7066d57bc31b430f) | Field |
| [`HeaderActive`](#api-14d85ec8395fa118) | Field |
| [`HeaderHovered`](#api-31cbcfef9c827437) | Field |
| [`InputTextCursor`](#api-7dcbee8237a8bf72) | Field |
| [`MenuBarBg`](#api-d599271c49f10520) | Field |
| [`ModalWindowDimBg`](#api-fd1c3332f0359095) | Field |
| [`NavCursor`](#api-b471e99423726a47) | Field |
| [`NavWindowingDimBg`](#api-0657285d1ee3511c) | Field |
| [`NavWindowingHighlight`](#api-0d384b6fe41d714a) | Field |
| [`PlotHistogram`](#api-b303e45077e36c96) | Field |
| [`PlotHistogramHovered`](#api-97db3ea6fa1bb187) | Field |
| [`PlotLines`](#api-1b0f27176dafa688) | Field |
| [`PlotLinesHovered`](#api-801129056a04bf92) | Field |
| [`PopupBg`](#api-936f851a5296bcc7) | Field |
| [`ResizeGrip`](#api-d57eeea0b04b96b2) | Field |
| [`ResizeGripActive`](#api-90642fb6ad381034) | Field |
| [`ResizeGripHovered`](#api-ef359711151e4a56) | Field |
| [`ScrollbarBg`](#api-57d5b4bd12a3373e) | Field |
| [`ScrollbarGrab`](#api-e22c0cbde5e6ebb1) | Field |
| [`ScrollbarGrabActive`](#api-68f72450622153d7) | Field |
| [`ScrollbarGrabHovered`](#api-3bccb2140be442bd) | Field |
| [`Separator`](#api-390c7c7fa7d4c82b) | Field |
| [`SeparatorActive`](#api-2cfe10b1055b646d) | Field |
| [`SeparatorHovered`](#api-a67d8ada57b5c532) | Field |
| [`SliderGrab`](#api-1201da770705dbd7) | Field |
| [`SliderGrabActive`](#api-901139e88c3058c0) | Field |
| [`Tab`](#api-159b90dfbdb3f96b) | Field |
| [`TabDimmed`](#api-deb9252053483b1d) | Field |
| [`TabDimmedSelected`](#api-9e0f3c6301d0355e) | Field |
| [`TabDimmedSelectedOverline`](#api-6703885cf32dd735) | Field |
| [`TabHovered`](#api-089b5f5dd2ebe4c8) | Field |
| [`TableBorderLight`](#api-f944309a52d0a735) | Field |
| [`TableBorderStrong`](#api-418746fe3b6a3bdc) | Field |
| [`TableHeaderBg`](#api-7308e32816de7322) | Field |
| [`TableRowBg`](#api-ea7ff0057cbbd565) | Field |
| [`TableRowBgAlt`](#api-7c8e3ffd010fa9d7) | Field |
| [`TabSelected`](#api-3199c82c448dc9e9) | Field |
| [`TabSelectedOverline`](#api-1e921ca5a1758c3b) | Field |
| [`Text`](#api-a9527f3a5de6845c) | Field |
| [`TextDisabled`](#api-1203951b80a98912) | Field |
| [`TextLink`](#api-ba76a89180d030d9) | Field |
| [`TextSelectedBg`](#api-1ed9e6aeb81cb52c) | Field |
| [`TitleBg`](#api-583cc80408dfc68d) | Field |
| [`TitleBgActive`](#api-b9af0a4790dceef8) | Field |
| [`TitleBgCollapsed`](#api-7c1139aa53eeab89) | Field |
| [`TreeLines`](#api-f785659eff111541) | Field |
| [`UnsavedMarker`](#api-51957a63ad96042a) | Field |
| [`WindowBg`](#api-9ef751519198b8fb) | Field |

## Type declaration

<a id="api-1ed1ea57fab03581"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiCol 1d48d71a8188fc077d7f4b99ca975926519ea69a1f5665cf77fbb5320ca0babe -->

```csharp
public enum Inno.Editor.ImGui.ImGuiCol : int
```

Defines the supported col choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L7).

## `Border`

<a id="api-e68534abb30d4004"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.Border 11b02247b4afd089d9e82002c8686ed27d9577b7a9e530cc9fbe05b356569c86 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.Border = 5
```

Selects the border presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L32).

## `BorderShadow`

<a id="api-958dc8d1714ac490"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.BorderShadow d827ce6ec4eb78e49d05eaebfdd42e9f66680dc7b6196f9afdb5ec88699e4c26 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.BorderShadow = 6
```

Selects the border shadow presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L36).

## `Button`

<a id="api-4f71fed1820a080f"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.Button 9f5356c102e1ca2f1e1d794f5e928cde63c54cff386406cae5f108f216dc9ae0 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.Button = 21
```

Selects the button presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L96).

## `ButtonActive`

<a id="api-b0eca605ce21440d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.ButtonActive d2ea6cc8157f0f1b5a394245d27285b815bd697c815f634b69998949cf69ae24 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.ButtonActive = 23
```

Selects the button active presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L104).

## `ButtonHovered`

<a id="api-e09e2794d82c8a09"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.ButtonHovered d2de0d355be05086ec2e9d3763c7ecd9c99f3626985fa00221b1b8c5b363af0f -->

```csharp
Inno.Editor.ImGui.ImGuiCol.ButtonHovered = 22
```

Selects the button hovered presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L100).

## `CheckMark`

<a id="api-80c5f3f82bd2424d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.CheckMark f045f9e382e9d2b7c5e3998cf16f8ad885d34be9afaa88d0d1dec6a659a5844d -->

```csharp
Inno.Editor.ImGui.ImGuiCol.CheckMark = 18
```

Selects the check mark presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L84).

## `ChildBg`

<a id="api-43721afa581289eb"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.ChildBg 807f37e1d0f86ad04cb0bcf13bfcab326778b352441de2e8b82ec4560e30b7ed -->

```csharp
Inno.Editor.ImGui.ImGuiCol.ChildBg = 3
```

Selects the child bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L24).

## `Count`

<a id="api-cd5126609147a176"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.Count ab2d58b12f95f893804dfcbb4050454bb695522de63b14d7443849ada0e027f9 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.Count = 62
```

Marks the exclusive end of the valid option range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L260).

## `DockingEmptyBg`

<a id="api-0ca8f47d81949b66"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.DockingEmptyBg 6ec7c551addd162d80657294b8b6bd395dba07582ab278891214f4526dead086 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.DockingEmptyBg = 42
```

Selects the docking empty bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L180).

## `DockingPreview`

<a id="api-aa0ae6e8037e96da"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.DockingPreview c36005fda38924d5fbb7b2b01bbb34dac233dc8c6840b0ccab55333b066913ec -->

```csharp
Inno.Editor.ImGui.ImGuiCol.DockingPreview = 41
```

Selects the docking preview presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L176).

## `DragDropTarget`

<a id="api-43a61220f821756a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.DragDropTarget 0323b8f0dcfce6fa16ffdad3d788462adee37f71b9947df39ddc4f19e24ff1df -->

```csharp
Inno.Editor.ImGui.ImGuiCol.DragDropTarget = 55
```

Selects the drag drop target presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L232).

## `DragDropTargetBg`

<a id="api-e215a22fef9d6669"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.DragDropTargetBg 9f1e84bd44474f695ba5b632176695c996c5f92721b1c28f1f9994a2bc67a967 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.DragDropTargetBg = 56
```

Selects the drag drop target bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L236).

## `FrameBg`

<a id="api-adc615f15968e1ab"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.FrameBg cc0036e05398a8054add479e339351ba77d8c0ac4bb6f0cd9022d6798bf67b78 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.FrameBg = 7
```

Selects the frame bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L40).

## `FrameBgActive`

<a id="api-66f9115e9a91b98d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.FrameBgActive 5c5bfd964b63e93a35e90ecbdfcb648e19b36a624039e09417b3c63295257266 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.FrameBgActive = 9
```

Selects the frame bg active presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L48).

## `FrameBgHovered`

<a id="api-cb0d4ca1d38a2515"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.FrameBgHovered 57e1625232a50ef46cac0b546337e10f7df502b69e21d0dbdaeb510e8755044c -->

```csharp
Inno.Editor.ImGui.ImGuiCol.FrameBgHovered = 8
```

Selects the frame bg hovered presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L44).

## `Header`

<a id="api-7066d57bc31b430f"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.Header e8cf06d83fc5395e32ca2684ee5941aa48957d41b4ba2bc670f00a27ced4ee4c -->

```csharp
Inno.Editor.ImGui.ImGuiCol.Header = 24
```

Selects the header presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L108).

## `HeaderActive`

<a id="api-14d85ec8395fa118"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.HeaderActive a41d4fd816a092e32b1790a6e50f5d74a5ee3d57ab958f1bbd344edd6f5b8a69 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.HeaderActive = 26
```

Selects the header active presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L116).

## `HeaderHovered`

<a id="api-31cbcfef9c827437"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.HeaderHovered b159dbb0b730c1fb41fea246494687bdf66312854db9e2aabb1377ce0e8f0de6 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.HeaderHovered = 25
```

Selects the header hovered presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L112).

## `InputTextCursor`

<a id="api-7dcbee8237a8bf72"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.InputTextCursor 2c82b794bb4269885c8bf893c335d88e6c77e3dc9689810f2471230251f739f5 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.InputTextCursor = 33
```

Selects the input text cursor presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L144).

## `MenuBarBg`

<a id="api-d599271c49f10520"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.MenuBarBg ec5dff4be65f6c315b807ce4efc90aed93b95f916e7ca15635925d4baddfbcf0 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.MenuBarBg = 13
```

Selects the menu bar bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L64).

## `ModalWindowDimBg`

<a id="api-fd1c3332f0359095"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.ModalWindowDimBg 2f0a39776f03e91e760469c8ff58aafd136564c26e0d6e16b94cfbc66ef7395f -->

```csharp
Inno.Editor.ImGui.ImGuiCol.ModalWindowDimBg = 61
```

Selects the modal window dim bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L256).

## `NavCursor`

<a id="api-b471e99423726a47"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.NavCursor b18df98c25e06b1f903c79a74c450955bd2d836b20f176a8cc5e0dfa60a83fe9 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.NavCursor = 58
```

Selects the nav cursor presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L244).

## `NavWindowingDimBg`

<a id="api-0657285d1ee3511c"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.NavWindowingDimBg 70526e45cdf8e2566c1f7dfea03f30dbbe0b68a49a693c044c72fd9097df46fb -->

```csharp
Inno.Editor.ImGui.ImGuiCol.NavWindowingDimBg = 60
```

Selects the nav windowing dim bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L252).

## `NavWindowingHighlight`

<a id="api-0d384b6fe41d714a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.NavWindowingHighlight ed316c83ecc358b41385ce9780b62921959d144722da4956f5f246a9279156b4 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.NavWindowingHighlight = 59
```

Selects the nav windowing highlight presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L248).

## `PlotHistogram`

<a id="api-b303e45077e36c96"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.PlotHistogram d2be3626ecb7a38ae591e44968457ecb0e7e1463c1cfca7b1ead962ac51c437b -->

```csharp
Inno.Editor.ImGui.ImGuiCol.PlotHistogram = 45
```

Selects the plot histogram presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L192).

## `PlotHistogramHovered`

<a id="api-97db3ea6fa1bb187"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.PlotHistogramHovered f0d95e0166173b70e9d4d967d5e983e976ffcb6970fd1efd2c7ed13761167831 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.PlotHistogramHovered = 46
```

Selects the plot histogram hovered presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L196).

## `PlotLines`

<a id="api-1b0f27176dafa688"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.PlotLines 64035ec91a87bc84315411de9da082b0461dc79c85e9833805d18bb9fdc060ea -->

```csharp
Inno.Editor.ImGui.ImGuiCol.PlotLines = 43
```

Selects the plot lines presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L184).

## `PlotLinesHovered`

<a id="api-801129056a04bf92"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.PlotLinesHovered a84d97ea6ba71972c637793ffcea81aa487391264eafe334d7e234dac6b3214a -->

```csharp
Inno.Editor.ImGui.ImGuiCol.PlotLinesHovered = 44
```

Selects the plot lines hovered presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L188).

## `PopupBg`

<a id="api-936f851a5296bcc7"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.PopupBg 3a5e475cc5b909ad9fa6ac8a186b9710e541af83796736498c02c75016a22ddd -->

```csharp
Inno.Editor.ImGui.ImGuiCol.PopupBg = 4
```

Selects the popup bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L28).

## `ResizeGrip`

<a id="api-d57eeea0b04b96b2"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.ResizeGrip c128ed5b28971f0ef3a33c828c2bc5697ba4ae4b94083c91c8d4d73b659b10b7 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.ResizeGrip = 30
```

Selects the resize grip presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L132).

## `ResizeGripActive`

<a id="api-90642fb6ad381034"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.ResizeGripActive 961cf268866bc46b8a9b4aab29ee4638cf53ec433644685c69d4a3c5cc8d2d57 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.ResizeGripActive = 32
```

Selects the resize grip active presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L140).

## `ResizeGripHovered`

<a id="api-ef359711151e4a56"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.ResizeGripHovered f8ccf3f1768bb952da83bef405d6c0db94c499dfcd9a5bd327e2ac9e99c3d5d3 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.ResizeGripHovered = 31
```

Selects the resize grip hovered presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L136).

## `ScrollbarBg`

<a id="api-57d5b4bd12a3373e"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.ScrollbarBg 89550799e8672bda669d7715a1b6561299be0c7ee1a2a4eabf0674dfb9ca96a3 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.ScrollbarBg = 14
```

Selects the scrollbar bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L68).

## `ScrollbarGrab`

<a id="api-e22c0cbde5e6ebb1"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.ScrollbarGrab afe724ccd599b858439a690fd19ad9d65020b6b74bebab7ac09a34548725b6cb -->

```csharp
Inno.Editor.ImGui.ImGuiCol.ScrollbarGrab = 15
```

Selects the scrollbar grab presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L72).

## `ScrollbarGrabActive`

<a id="api-68f72450622153d7"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.ScrollbarGrabActive 9d3115b5d2b040f4834a0e2f5fb105c3c215b98d4918a3b0e44f503c032866ed -->

```csharp
Inno.Editor.ImGui.ImGuiCol.ScrollbarGrabActive = 17
```

Selects the scrollbar grab active presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L80).

## `ScrollbarGrabHovered`

<a id="api-3bccb2140be442bd"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.ScrollbarGrabHovered b90fac9a5a2a147b6e3050b52c0fa888091baa49c665280cfb8d44d2a98075eb -->

```csharp
Inno.Editor.ImGui.ImGuiCol.ScrollbarGrabHovered = 16
```

Selects the scrollbar grab hovered presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L76).

## `Separator`

<a id="api-390c7c7fa7d4c82b"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.Separator 465aa28362b4310d6c91ce3f1848b19f1df9db95d4ade52827bd5f2ca0ea02e8 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.Separator = 27
```

Selects the separator presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L120).

## `SeparatorActive`

<a id="api-2cfe10b1055b646d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.SeparatorActive e30b127268311ce42d6e24f8c29b8b5515a34fdf4086c491c22dc05874dc610f -->

```csharp
Inno.Editor.ImGui.ImGuiCol.SeparatorActive = 29
```

Selects the separator active presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L128).

## `SeparatorHovered`

<a id="api-a67d8ada57b5c532"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.SeparatorHovered d04f8607e51d0a901d63e2ab36c944914b6856c581a51d81eedf41c59b0e652a -->

```csharp
Inno.Editor.ImGui.ImGuiCol.SeparatorHovered = 28
```

Selects the separator hovered presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L124).

## `SliderGrab`

<a id="api-1201da770705dbd7"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.SliderGrab 9d598fc327889e7357da914ca562bbaf0f2b155614d0c6d5eb9914fbbd06570a -->

```csharp
Inno.Editor.ImGui.ImGuiCol.SliderGrab = 19
```

Selects the slider grab presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L88).

## `SliderGrabActive`

<a id="api-901139e88c3058c0"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.SliderGrabActive 023d514659cd1e339b44ee83cb1d831b8b2174e63c0d8fa2273cf5e3b3fb44c9 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.SliderGrabActive = 20
```

Selects the slider grab active presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L92).

## `Tab`

<a id="api-159b90dfbdb3f96b"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.Tab 71834a322f76a10159004439f7650ca1938a5063114c4c25672d04ee7d1bb7bb -->

```csharp
Inno.Editor.ImGui.ImGuiCol.Tab = 35
```

Selects the tab presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L152).

## `TabDimmed`

<a id="api-deb9252053483b1d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.TabDimmed 1805e239c516a0e1fa1600edd834ee93006f559a1e51d0d76d8da13ebe7cd008 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.TabDimmed = 38
```

Selects the tab dimmed presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L164).

## `TabDimmedSelected`

<a id="api-9e0f3c6301d0355e"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.TabDimmedSelected f7188f4296b9611ae0a1502de53b93d74923b8419f1302fc76578119f2e3be97 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.TabDimmedSelected = 39
```

Selects the tab dimmed selected presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L168).

## `TabDimmedSelectedOverline`

<a id="api-6703885cf32dd735"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.TabDimmedSelectedOverline cbda643f48af47b761aa1743a9a9de08d77712b0fba0217621920c12ea76020b -->

```csharp
Inno.Editor.ImGui.ImGuiCol.TabDimmedSelectedOverline = 40
```

Selects the tab dimmed selected overline presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L172).

## `TabHovered`

<a id="api-089b5f5dd2ebe4c8"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.TabHovered 5ff397e4b72d137ee9137deaa40c673d513d1b433d148e01e946889b5289c254 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.TabHovered = 34
```

Selects the tab hovered presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L148).

## `TableBorderLight`

<a id="api-f944309a52d0a735"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.TableBorderLight d098f1ce6fcdcc4ac5714bac90b31998d87892671b38fae6d9377da4ab4e99e5 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.TableBorderLight = 49
```

Selects the table border light presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L208).

## `TableBorderStrong`

<a id="api-418746fe3b6a3bdc"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.TableBorderStrong dff75f09627eb44403643432c7870d284b75357727bf660efb300cbd0cfbc6c8 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.TableBorderStrong = 48
```

Selects the table border strong presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L204).

## `TableHeaderBg`

<a id="api-7308e32816de7322"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.TableHeaderBg cbde8c86f20bb143669d8b667c14a25e8a53e8820ba5b7504122ff0ed7906255 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.TableHeaderBg = 47
```

Selects the table header bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L200).

## `TableRowBg`

<a id="api-ea7ff0057cbbd565"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.TableRowBg 3d1d2e97c6e6cdd938d8544c0c79bf35cc3903805ec3b8f85e2a60e8f600857e -->

```csharp
Inno.Editor.ImGui.ImGuiCol.TableRowBg = 50
```

Selects the table row bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L212).

## `TableRowBgAlt`

<a id="api-7c8e3ffd010fa9d7"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.TableRowBgAlt 329158e20221901a2a198f9419f9fa65d6b2fb34e3d25187d0c7c964373df169 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.TableRowBgAlt = 51
```

Selects the table row bg alt presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L216).

## `TabSelected`

<a id="api-3199c82c448dc9e9"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.TabSelected 6751751417cbd15f9db61cd0e64dd565f2c2b0d901eb54455187b45d5908c703 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.TabSelected = 36
```

Selects the tab selected presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L156).

## `TabSelectedOverline`

<a id="api-1e921ca5a1758c3b"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.TabSelectedOverline 99beb8961cdf6b1e23508d5e610056082ba45be07a809c11c6fa16dcd2fd4cb7 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.TabSelectedOverline = 37
```

Selects the tab selected overline presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L160).

## `Text`

<a id="api-a9527f3a5de6845c"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.Text aab7201f77361f1beb952423810bf75e68dd1c82c15432dbad097308e2c1c3fd -->

```csharp
Inno.Editor.ImGui.ImGuiCol.Text = 0
```

Selects the text presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L12).

## `TextDisabled`

<a id="api-1203951b80a98912"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.TextDisabled e3f78786d69d5f3d445cd1ae9e43f0dcffca40c9748cfc44a7f9f15bebaa8e39 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.TextDisabled = 1
```

Selects the text disabled presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L16).

## `TextLink`

<a id="api-ba76a89180d030d9"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.TextLink 264f6b1a33d9fcaaec5254843758df773b547f27b23c1f6502c5af78a406e749 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.TextLink = 52
```

Selects the text link presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L220).

## `TextSelectedBg`

<a id="api-1ed9e6aeb81cb52c"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.TextSelectedBg 4bbbf66eb6bb97eb91d937ec816a60e9798d7a50ec310df265756a8a30c72c0f -->

```csharp
Inno.Editor.ImGui.ImGuiCol.TextSelectedBg = 53
```

Selects the text selected bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L224).

## `TitleBg`

<a id="api-583cc80408dfc68d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.TitleBg 72406e0eb1a8a75166a90ee9832d545069d6d37e46a045cc6de710e2dd269560 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.TitleBg = 10
```

Selects the title bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L52).

## `TitleBgActive`

<a id="api-b9af0a4790dceef8"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.TitleBgActive db0345a07fbbe841284517e6aa899bf77a439e17c8c0ce3bd8dc28c2067c7f57 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.TitleBgActive = 11
```

Selects the title bg active presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L56).

## `TitleBgCollapsed`

<a id="api-7c1139aa53eeab89"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.TitleBgCollapsed 82c6fb740a01ac97f665d4a0c61248e2af31c1835d1010b90259f43a5a5f85be -->

```csharp
Inno.Editor.ImGui.ImGuiCol.TitleBgCollapsed = 12
```

Selects the title bg collapsed presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L60).

## `TreeLines`

<a id="api-f785659eff111541"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.TreeLines fd6817a8e7b049ef2fe89c5a51ba0c977c96a800c9aed1e873edbbc06a605524 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.TreeLines = 54
```

Selects the tree lines presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L228).

## `UnsavedMarker`

<a id="api-51957a63ad96042a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.UnsavedMarker 3d9154b3cd26b79d34e45b1d6b33e0f7295fd9c2e423c7b308b3477f333afefd -->

```csharp
Inno.Editor.ImGui.ImGuiCol.UnsavedMarker = 57
```

Selects the unsaved marker presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L240).

## `WindowBg`

<a id="api-9ef751519198b8fb"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCol.WindowBg 20308f211562ac8bbf5ab7e298027e1b208175aab3ec596f43b89cca3acb06d8 -->

```csharp
Inno.Editor.ImGui.ImGuiCol.WindowBg = 2
```

Selects the window bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L20).
