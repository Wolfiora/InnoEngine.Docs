---
title: "ImGuiCol"
description: "Reference for ImGuiCol in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.cc80837b28ebaa74
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiCol`

This reference describes `ImGuiCol` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Border`](#api-33cc49c22c279f15) | Field |
| [`BorderShadow`](#api-4f62caafe8ad9806) | Field |
| [`Button`](#api-7bf00b4009e77a88) | Field |
| [`ButtonActive`](#api-e8dd7d37d0758de3) | Field |
| [`ButtonHovered`](#api-3ce3ed85030bdf2f) | Field |
| [`CheckMark`](#api-eb52196fd683d449) | Field |
| [`ChildBg`](#api-ae74eb5e5085bd66) | Field |
| [`Count`](#api-d2ade1d47d1bf7f2) | Field |
| [`DockingEmptyBg`](#api-c730ecd5a570727a) | Field |
| [`DockingPreview`](#api-7d5164108942c3e6) | Field |
| [`DragDropTarget`](#api-50b4dbd8e9f17141) | Field |
| [`DragDropTargetBg`](#api-b35355821c25b9ce) | Field |
| [`FrameBg`](#api-06866a5d613a0399) | Field |
| [`FrameBgActive`](#api-f4b80d7ab005d9ea) | Field |
| [`FrameBgHovered`](#api-fcc6d99c1cf1e503) | Field |
| [`Header`](#api-0f64a7eda0b1a743) | Field |
| [`HeaderActive`](#api-f1891ec1635b459e) | Field |
| [`HeaderHovered`](#api-4c68cc0ae3319b79) | Field |
| [`InputTextCursor`](#api-7765bfb964d41d05) | Field |
| [`MenuBarBg`](#api-3397a16fc751865e) | Field |
| [`ModalWindowDimBg`](#api-532f8c52aa83466d) | Field |
| [`NavCursor`](#api-b73a4b1ccac085d7) | Field |
| [`NavWindowingDimBg`](#api-e6c7c0bc97f4082e) | Field |
| [`NavWindowingHighlight`](#api-f8b21833092d1d55) | Field |
| [`PlotHistogram`](#api-df80006f0be6467f) | Field |
| [`PlotHistogramHovered`](#api-f514f69621457a76) | Field |
| [`PlotLines`](#api-51f3dfd23e299b76) | Field |
| [`PlotLinesHovered`](#api-c70f38b062608c16) | Field |
| [`PopupBg`](#api-39e610b5d2187c41) | Field |
| [`ResizeGrip`](#api-9a04b48f1ea83ab6) | Field |
| [`ResizeGripActive`](#api-a5b6125fdb19d865) | Field |
| [`ResizeGripHovered`](#api-eeaa9866b1a16176) | Field |
| [`ScrollbarBg`](#api-c9b77e627d66b68d) | Field |
| [`ScrollbarGrab`](#api-5792b275031c29ae) | Field |
| [`ScrollbarGrabActive`](#api-f69c07afdaf2d88c) | Field |
| [`ScrollbarGrabHovered`](#api-3e6eef1c3acf9587) | Field |
| [`Separator`](#api-c1877608f0baf0a8) | Field |
| [`SeparatorActive`](#api-43d54263b389bbdc) | Field |
| [`SeparatorHovered`](#api-ffd26680083f325a) | Field |
| [`SliderGrab`](#api-cdbfa8370a7617d0) | Field |
| [`SliderGrabActive`](#api-ebb538d27964d851) | Field |
| [`Tab`](#api-9c3d8327f9a17f19) | Field |
| [`TabDimmed`](#api-6a5c092e8fe924a9) | Field |
| [`TabDimmedSelected`](#api-ebf84aa2df267829) | Field |
| [`TabDimmedSelectedOverline`](#api-a45b9bc783695730) | Field |
| [`TabHovered`](#api-924b8dc279ef6ee6) | Field |
| [`TableBorderLight`](#api-43b54403b6d58adf) | Field |
| [`TableBorderStrong`](#api-d5cb23d5cfff8658) | Field |
| [`TableHeaderBg`](#api-1b5591683ec42e2a) | Field |
| [`TableRowBg`](#api-a0ce48dad24a4a3a) | Field |
| [`TableRowBgAlt`](#api-32999c88f8bac5f9) | Field |
| [`TabSelected`](#api-890ac43e9d7f32ba) | Field |
| [`TabSelectedOverline`](#api-1db2b1ab697a28ca) | Field |
| [`Text`](#api-3eac260917bae4e3) | Field |
| [`TextDisabled`](#api-613723c608bd0f71) | Field |
| [`TextLink`](#api-24a9cf7ccaf83551) | Field |
| [`TextSelectedBg`](#api-9a6571caec215b5f) | Field |
| [`TitleBg`](#api-8bf0f9abf5dcb861) | Field |
| [`TitleBgActive`](#api-6385f5d33062dd9e) | Field |
| [`TitleBgCollapsed`](#api-1e7edb612b4c5520) | Field |
| [`TreeLines`](#api-1d199de672fdca42) | Field |
| [`UnsavedMarker`](#api-d9fba1ebaed8eeaa) | Field |
| [`WindowBg`](#api-ec6e429ce0934647) | Field |

## Type declaration

<a id="api-cc80837b28ebaa74"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiCol c3fcf2ea5121fc594d0cfb37bf245662f65d32b70b2b2fc11b48264afdcd8370 -->

```csharp
public enum InnoEditor.ImGui.ImGuiCol : int
```

Defines the supported col choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L7).

## `Border`

<a id="api-33cc49c22c279f15"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.Border 860aed1f3822486a8d0e2e5c723639b9785dc4c64eb9772d66e6a8a00d6381e9 -->

```csharp
InnoEditor.ImGui.ImGuiCol.Border = 5
```

Selects the border presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L32).

## `BorderShadow`

<a id="api-4f62caafe8ad9806"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.BorderShadow b13b9add60301f1f36f38e266f758468b88b785e6e615a1226df2c1d0f5883da -->

```csharp
InnoEditor.ImGui.ImGuiCol.BorderShadow = 6
```

Selects the border shadow presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L36).

## `Button`

<a id="api-7bf00b4009e77a88"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.Button ec6f59d00d26773187078925f9686bbd5988255199904096eff20132affa8ff5 -->

```csharp
InnoEditor.ImGui.ImGuiCol.Button = 21
```

Selects the button presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L96).

## `ButtonActive`

<a id="api-e8dd7d37d0758de3"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.ButtonActive ac35ad6e552778355a41fb28e27341fa7efdf02d25f2f0c9b7c29896571bd182 -->

```csharp
InnoEditor.ImGui.ImGuiCol.ButtonActive = 23
```

Selects the button active presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L104).

## `ButtonHovered`

<a id="api-3ce3ed85030bdf2f"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.ButtonHovered 6588d15776ffeddfb716fa42ae798b19f8b321db6473ea16f8ab34eeeac9531a -->

```csharp
InnoEditor.ImGui.ImGuiCol.ButtonHovered = 22
```

Selects the button hovered presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L100).

## `CheckMark`

<a id="api-eb52196fd683d449"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.CheckMark 5214dc980b8e158c2e79799d612ca39d33c96af6d3f5fac3d85cd7c1f42d3747 -->

```csharp
InnoEditor.ImGui.ImGuiCol.CheckMark = 18
```

Selects the check mark presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L84).

## `ChildBg`

<a id="api-ae74eb5e5085bd66"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.ChildBg d6d5ef4efcf23abc470fd5de4ac6a3ab786dcf230f54916bdc2c9cc8ccc00235 -->

```csharp
InnoEditor.ImGui.ImGuiCol.ChildBg = 3
```

Selects the child bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L24).

## `Count`

<a id="api-d2ade1d47d1bf7f2"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.Count f87f4f16147adfcbe078742bd03239f9411c7f4999b1ead60c8e7878548cc29e -->

```csharp
InnoEditor.ImGui.ImGuiCol.Count = 62
```

Marks the exclusive end of the valid option range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L260).

## `DockingEmptyBg`

<a id="api-c730ecd5a570727a"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.DockingEmptyBg 65d5c08c6b0a2aec7666bebd5e4ac956b79fb1399a8383c7e97477fe176793c2 -->

```csharp
InnoEditor.ImGui.ImGuiCol.DockingEmptyBg = 42
```

Selects the docking empty bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L180).

## `DockingPreview`

<a id="api-7d5164108942c3e6"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.DockingPreview 899431d6ebf555207325fc36c1a0666cc491b5a537c22514eee1be19d924545b -->

```csharp
InnoEditor.ImGui.ImGuiCol.DockingPreview = 41
```

Selects the docking preview presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L176).

## `DragDropTarget`

<a id="api-50b4dbd8e9f17141"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.DragDropTarget c959fcc634c98701b87ddd311754d1e5f86702805c9f330a5df7b17afdd90caf -->

```csharp
InnoEditor.ImGui.ImGuiCol.DragDropTarget = 55
```

Selects the drag drop target presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L232).

## `DragDropTargetBg`

<a id="api-b35355821c25b9ce"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.DragDropTargetBg e95ae9ff1c4b4ee7c13c03b3d877fabf211ae3e92d7e9f773c64eebe40f76c05 -->

```csharp
InnoEditor.ImGui.ImGuiCol.DragDropTargetBg = 56
```

Selects the drag drop target bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L236).

## `FrameBg`

<a id="api-06866a5d613a0399"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.FrameBg 2e30f892b6147ab8a32dce862ba1254d8bacbfcce0fe115ad7ff6c6eae2ef7b6 -->

```csharp
InnoEditor.ImGui.ImGuiCol.FrameBg = 7
```

Selects the frame bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L40).

## `FrameBgActive`

<a id="api-f4b80d7ab005d9ea"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.FrameBgActive 43383b9856c2549a0d8d8d58c27bca6b62ccae661a6e37b4d61d4a3555f706bd -->

```csharp
InnoEditor.ImGui.ImGuiCol.FrameBgActive = 9
```

Selects the frame bg active presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L48).

## `FrameBgHovered`

<a id="api-fcc6d99c1cf1e503"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.FrameBgHovered c1fff1c8e39ce7943720299d47ad0dcd339132092cf201124210920dd1f57397 -->

```csharp
InnoEditor.ImGui.ImGuiCol.FrameBgHovered = 8
```

Selects the frame bg hovered presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L44).

## `Header`

<a id="api-0f64a7eda0b1a743"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.Header 9a046a0d939d10e9a3fd2d9101e4aee0cb2c8d4e2f3679eff645de113f659fda -->

```csharp
InnoEditor.ImGui.ImGuiCol.Header = 24
```

Selects the header presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L108).

## `HeaderActive`

<a id="api-f1891ec1635b459e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.HeaderActive f6d46336ad2014dd5942de2d195af828b0e7874fb3d87f7ac653ff7707022f8f -->

```csharp
InnoEditor.ImGui.ImGuiCol.HeaderActive = 26
```

Selects the header active presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L116).

## `HeaderHovered`

<a id="api-4c68cc0ae3319b79"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.HeaderHovered c2c7544edbe7aa7998324da8e5873d36de05bc1ceef143f87e6f8c6ee1bbbab5 -->

```csharp
InnoEditor.ImGui.ImGuiCol.HeaderHovered = 25
```

Selects the header hovered presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L112).

## `InputTextCursor`

<a id="api-7765bfb964d41d05"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.InputTextCursor 8d9afc9cdc8ab13a87a1b08777fe4ef56af26040125f132187943163e6fd2c64 -->

```csharp
InnoEditor.ImGui.ImGuiCol.InputTextCursor = 33
```

Selects the input text cursor presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L144).

## `MenuBarBg`

<a id="api-3397a16fc751865e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.MenuBarBg 3454c5ce9c32aa33be0de424d40e7cd64c083e5af8643d75226853000f72067e -->

```csharp
InnoEditor.ImGui.ImGuiCol.MenuBarBg = 13
```

Selects the menu bar bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L64).

## `ModalWindowDimBg`

<a id="api-532f8c52aa83466d"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.ModalWindowDimBg d8168f863e0c10dc6717f2c78d3484eb0092a061c0f476fa3c1cbb575690629c -->

```csharp
InnoEditor.ImGui.ImGuiCol.ModalWindowDimBg = 61
```

Selects the modal window dim bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L256).

## `NavCursor`

<a id="api-b73a4b1ccac085d7"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.NavCursor c5863b0595eba6f9336e5dfcc97865696b32fbc67ed26ab74214ea6bece8983c -->

```csharp
InnoEditor.ImGui.ImGuiCol.NavCursor = 58
```

Selects the nav cursor presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L244).

## `NavWindowingDimBg`

<a id="api-e6c7c0bc97f4082e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.NavWindowingDimBg 573ef5b20c511fe3bb555f2c8c62d086b3dc865d4dd509c221f3495c81660439 -->

```csharp
InnoEditor.ImGui.ImGuiCol.NavWindowingDimBg = 60
```

Selects the nav windowing dim bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L252).

## `NavWindowingHighlight`

<a id="api-f8b21833092d1d55"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.NavWindowingHighlight 6986222ec86f9885a08753a8b6cab8757ef49cbb8b13e17c868990835067b75e -->

```csharp
InnoEditor.ImGui.ImGuiCol.NavWindowingHighlight = 59
```

Selects the nav windowing highlight presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L248).

## `PlotHistogram`

<a id="api-df80006f0be6467f"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.PlotHistogram bf97d04c5730c8c2fe0150e1d5a485631abe5d51adc1e7023898de504727a08f -->

```csharp
InnoEditor.ImGui.ImGuiCol.PlotHistogram = 45
```

Selects the plot histogram presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L192).

## `PlotHistogramHovered`

<a id="api-f514f69621457a76"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.PlotHistogramHovered eb3a695c6e5abc9857589ed13e6aeb7ca936f74232e2af53efe75b692bb62e14 -->

```csharp
InnoEditor.ImGui.ImGuiCol.PlotHistogramHovered = 46
```

Selects the plot histogram hovered presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L196).

## `PlotLines`

<a id="api-51f3dfd23e299b76"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.PlotLines 09f86992aef332403c3d2ac4d63bc73fde436dfed200141e9068b44a7cffe31e -->

```csharp
InnoEditor.ImGui.ImGuiCol.PlotLines = 43
```

Selects the plot lines presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L184).

## `PlotLinesHovered`

<a id="api-c70f38b062608c16"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.PlotLinesHovered 723c33a4e9bf8282c08a3549a48e9217a31098974d94d05116d9479522a6a1cb -->

```csharp
InnoEditor.ImGui.ImGuiCol.PlotLinesHovered = 44
```

Selects the plot lines hovered presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L188).

## `PopupBg`

<a id="api-39e610b5d2187c41"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.PopupBg 37fcd6a6b9ce912dcaa43c079ee087cb0df3a4528ee498952e3909eb2e594a32 -->

```csharp
InnoEditor.ImGui.ImGuiCol.PopupBg = 4
```

Selects the popup bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L28).

## `ResizeGrip`

<a id="api-9a04b48f1ea83ab6"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.ResizeGrip ea1c41514df92b9da7ca18c3c6eec1341b1f7981dcaa20df603e8eef13fd3ac3 -->

```csharp
InnoEditor.ImGui.ImGuiCol.ResizeGrip = 30
```

Selects the resize grip presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L132).

## `ResizeGripActive`

<a id="api-a5b6125fdb19d865"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.ResizeGripActive 6d4d35a0e08f9fc3ea3c74a9505e26ae12086327cd75577228bae960e7650f8a -->

```csharp
InnoEditor.ImGui.ImGuiCol.ResizeGripActive = 32
```

Selects the resize grip active presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L140).

## `ResizeGripHovered`

<a id="api-eeaa9866b1a16176"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.ResizeGripHovered cd7430d92f9aa4c3cd3bcd33f2c6475cacdefdb5d4df50e1d540628a51d4f969 -->

```csharp
InnoEditor.ImGui.ImGuiCol.ResizeGripHovered = 31
```

Selects the resize grip hovered presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L136).

## `ScrollbarBg`

<a id="api-c9b77e627d66b68d"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.ScrollbarBg 1faffe68822b3ee677c6076a3313ff340df77f65ee53b6a6ffcad1db4b7cafb6 -->

```csharp
InnoEditor.ImGui.ImGuiCol.ScrollbarBg = 14
```

Selects the scrollbar bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L68).

## `ScrollbarGrab`

<a id="api-5792b275031c29ae"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.ScrollbarGrab a3b0028017f60b00df471b9c15470824691a6f8a381561d4e2fce797006af8c3 -->

```csharp
InnoEditor.ImGui.ImGuiCol.ScrollbarGrab = 15
```

Selects the scrollbar grab presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L72).

## `ScrollbarGrabActive`

<a id="api-f69c07afdaf2d88c"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.ScrollbarGrabActive 354b62928e5e1098e12285ef78d819618ec34db36093d62f02b18fc3a51cc16e -->

```csharp
InnoEditor.ImGui.ImGuiCol.ScrollbarGrabActive = 17
```

Selects the scrollbar grab active presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L80).

## `ScrollbarGrabHovered`

<a id="api-3e6eef1c3acf9587"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.ScrollbarGrabHovered e4bb5a4dfff5c8c52a55f8b1925f9f07f0e5b0d3d5ef6ad0df6185e6b7e47805 -->

```csharp
InnoEditor.ImGui.ImGuiCol.ScrollbarGrabHovered = 16
```

Selects the scrollbar grab hovered presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L76).

## `Separator`

<a id="api-c1877608f0baf0a8"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.Separator 2aef795ceb1f0af950d4a5e62fc8ac9cd58135f78f29e004035d3d7228ed8495 -->

```csharp
InnoEditor.ImGui.ImGuiCol.Separator = 27
```

Selects the separator presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L120).

## `SeparatorActive`

<a id="api-43d54263b389bbdc"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.SeparatorActive cc19c9ab2e86d535321c9dd1b4a8f4e4e2539fe13b49ed037c532f5310b79b0f -->

```csharp
InnoEditor.ImGui.ImGuiCol.SeparatorActive = 29
```

Selects the separator active presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L128).

## `SeparatorHovered`

<a id="api-ffd26680083f325a"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.SeparatorHovered c67b67fccb9e4efc5461e89b942d98151191e1185a46c763f830b483c7d45300 -->

```csharp
InnoEditor.ImGui.ImGuiCol.SeparatorHovered = 28
```

Selects the separator hovered presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L124).

## `SliderGrab`

<a id="api-cdbfa8370a7617d0"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.SliderGrab c0115aac0213d8ccc2b9085cf5b59ab7a04d67dbf5715edb1d77877ecae5efb2 -->

```csharp
InnoEditor.ImGui.ImGuiCol.SliderGrab = 19
```

Selects the slider grab presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L88).

## `SliderGrabActive`

<a id="api-ebb538d27964d851"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.SliderGrabActive 9502fdc1d95dec27288c593d586ee355c1b72edf72a130dea2544a7ebb3b2c85 -->

```csharp
InnoEditor.ImGui.ImGuiCol.SliderGrabActive = 20
```

Selects the slider grab active presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L92).

## `Tab`

<a id="api-9c3d8327f9a17f19"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.Tab 2d9089185f9fb2f2703a09e219bf359b98cb42fb0871bfb7f5f8dec29aef56c8 -->

```csharp
InnoEditor.ImGui.ImGuiCol.Tab = 35
```

Selects the tab presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L152).

## `TabDimmed`

<a id="api-6a5c092e8fe924a9"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.TabDimmed e6ee274154177ac2809593ae2c4ce178a7614389a18e3113ecc8e7fd7cbcd9b3 -->

```csharp
InnoEditor.ImGui.ImGuiCol.TabDimmed = 38
```

Selects the tab dimmed presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L164).

## `TabDimmedSelected`

<a id="api-ebf84aa2df267829"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.TabDimmedSelected d539419ad2129edc772c9768cbd3bcd4a9ae9336449c31ca17b75319851a65ca -->

```csharp
InnoEditor.ImGui.ImGuiCol.TabDimmedSelected = 39
```

Selects the tab dimmed selected presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L168).

## `TabDimmedSelectedOverline`

<a id="api-a45b9bc783695730"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.TabDimmedSelectedOverline 829bd475efd278127582f101ac19cd7fcfdaca6b06f0b657bfe97a262af920ef -->

```csharp
InnoEditor.ImGui.ImGuiCol.TabDimmedSelectedOverline = 40
```

Selects the tab dimmed selected overline presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L172).

## `TabHovered`

<a id="api-924b8dc279ef6ee6"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.TabHovered ebd2544f7895f8180ad5bc2bb4f7b803642903bffb36bb54608f8cd28d9e6530 -->

```csharp
InnoEditor.ImGui.ImGuiCol.TabHovered = 34
```

Selects the tab hovered presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L148).

## `TableBorderLight`

<a id="api-43b54403b6d58adf"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.TableBorderLight 147d98b2ba8ceca1bdff88ca4f070d5b863f95a91c3773274f37aea5614ce3da -->

```csharp
InnoEditor.ImGui.ImGuiCol.TableBorderLight = 49
```

Selects the table border light presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L208).

## `TableBorderStrong`

<a id="api-d5cb23d5cfff8658"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.TableBorderStrong cc0fc833fbb4f3d0122be653b8053175089763a9c42af3dec09ff97993e16c2b -->

```csharp
InnoEditor.ImGui.ImGuiCol.TableBorderStrong = 48
```

Selects the table border strong presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L204).

## `TableHeaderBg`

<a id="api-1b5591683ec42e2a"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.TableHeaderBg a24fa6ecda19dfa2b79ecb32f026932cd7c14a050b472bef1c8b74dddfa70004 -->

```csharp
InnoEditor.ImGui.ImGuiCol.TableHeaderBg = 47
```

Selects the table header bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L200).

## `TableRowBg`

<a id="api-a0ce48dad24a4a3a"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.TableRowBg 02d7a100e9e90b96954df75f90ceab2b6e85a39b1c414a442b28b1daa8cdbc37 -->

```csharp
InnoEditor.ImGui.ImGuiCol.TableRowBg = 50
```

Selects the table row bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L212).

## `TableRowBgAlt`

<a id="api-32999c88f8bac5f9"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.TableRowBgAlt 349c9d9e4351e589818697d3b32ad57d26f14ad2de329b43a658ac38c0740c71 -->

```csharp
InnoEditor.ImGui.ImGuiCol.TableRowBgAlt = 51
```

Selects the table row bg alt presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L216).

## `TabSelected`

<a id="api-890ac43e9d7f32ba"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.TabSelected 1e7449f9b40192af2ce9122b77ce7b9bc5051babc84a2ae6648c361c23a41bcb -->

```csharp
InnoEditor.ImGui.ImGuiCol.TabSelected = 36
```

Selects the tab selected presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L156).

## `TabSelectedOverline`

<a id="api-1db2b1ab697a28ca"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.TabSelectedOverline cd7f7ddc79d2fd016ff5e3a40f7ceb9c91147551230f80341e245f4ba6ba4536 -->

```csharp
InnoEditor.ImGui.ImGuiCol.TabSelectedOverline = 37
```

Selects the tab selected overline presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L160).

## `Text`

<a id="api-3eac260917bae4e3"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.Text b3eda29ef5897af71a13e747b5b28f5ec3074fe420983903a9e0b6420189dd99 -->

```csharp
InnoEditor.ImGui.ImGuiCol.Text = 0
```

Selects the text presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L12).

## `TextDisabled`

<a id="api-613723c608bd0f71"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.TextDisabled 1f5659e8e94f98dce20d2bb17676db27e68efdcefdee038d5f6038a0542c2ec7 -->

```csharp
InnoEditor.ImGui.ImGuiCol.TextDisabled = 1
```

Selects the text disabled presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L16).

## `TextLink`

<a id="api-24a9cf7ccaf83551"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.TextLink eec0a3822fcf926bc0c854e1ac2da68bc65aae8ae09692cfcef9272ff936b7d0 -->

```csharp
InnoEditor.ImGui.ImGuiCol.TextLink = 52
```

Selects the text link presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L220).

## `TextSelectedBg`

<a id="api-9a6571caec215b5f"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.TextSelectedBg 738873aa445c4d0a9af8c922448c339f49afd67fe423d7354f70a6ec54f2acdf -->

```csharp
InnoEditor.ImGui.ImGuiCol.TextSelectedBg = 53
```

Selects the text selected bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L224).

## `TitleBg`

<a id="api-8bf0f9abf5dcb861"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.TitleBg 6e068a87dc1dae0e597f70e36b05360d63e27566972a7c5cfbcf92cc319975ea -->

```csharp
InnoEditor.ImGui.ImGuiCol.TitleBg = 10
```

Selects the title bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L52).

## `TitleBgActive`

<a id="api-6385f5d33062dd9e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.TitleBgActive dd49116c980a084751f105e8239a81d9748bc6df80ad7cd73204d9c573a60daa -->

```csharp
InnoEditor.ImGui.ImGuiCol.TitleBgActive = 11
```

Selects the title bg active presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L56).

## `TitleBgCollapsed`

<a id="api-1e7edb612b4c5520"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.TitleBgCollapsed 6bd95e17be777519ef8bec48af665e5712b477664eaa54946aa2dd8bf1bb739e -->

```csharp
InnoEditor.ImGui.ImGuiCol.TitleBgCollapsed = 12
```

Selects the title bg collapsed presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L60).

## `TreeLines`

<a id="api-1d199de672fdca42"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.TreeLines ce609f160ae842c578833a1f8eb464b69a8f79ed854ed59f886a58fefda660d1 -->

```csharp
InnoEditor.ImGui.ImGuiCol.TreeLines = 54
```

Selects the tree lines presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L228).

## `UnsavedMarker`

<a id="api-d9fba1ebaed8eeaa"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.UnsavedMarker e894778f234cae8f2361a34bcafc0023f34b7c3edaf7714d0eac459dfe0b580b -->

```csharp
InnoEditor.ImGui.ImGuiCol.UnsavedMarker = 57
```

Selects the unsaved marker presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L240).

## `WindowBg`

<a id="api-ec6e429ce0934647"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCol.WindowBg ccae70c34f010914489ac9a2b666b6c5825deb51790e336fd56f08888016ff58 -->

```csharp
InnoEditor.ImGui.ImGuiCol.WindowBg = 2
```

Selects the window bg presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCol.cs#L20).
