---
title: "ImGuiColorEditFlags"
description: "Reference for ImGuiColorEditFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.7bc04157c0630bcc
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiColorEditFlags`

This reference describes `ImGuiColorEditFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AlphaBar`](#api-ad419d19fbf2e2e1) | Field |
| [`AlphaMask`](#api-0085018895bada35) | Field |
| [`AlphaNoBg`](#api-afea30938f23fa23) | Field |
| [`AlphaOpaque`](#api-f41ede32ec0bc616) | Field |
| [`AlphaPreviewHalf`](#api-c91de287999d2953) | Field |
| [`DataTypeMask`](#api-a24b69168e0eae62) | Field |
| [`DefaultOptions`](#api-85ccc2e10dea99f7) | Field |
| [`DisplayHex`](#api-7ddd88640abd3ee4) | Field |
| [`DisplayHsv`](#api-8e6b337e3e42c052) | Field |
| [`DisplayMask`](#api-758632b8031c6b3d) | Field |
| [`DisplayRgb`](#api-4fbcf577651bf789) | Field |
| [`Float`](#api-fda7afe0739e4af3) | Field |
| [`Hdr`](#api-06724f5ddefcb622) | Field |
| [`InputHsv`](#api-a50a7415639fd92e) | Field |
| [`InputMask`](#api-b4dc5f150574a955) | Field |
| [`InputRgb`](#api-2653a2ce8ebeea22) | Field |
| [`NoAlpha`](#api-8240e98e2470571f) | Field |
| [`NoBorder`](#api-28472aec832068aa) | Field |
| [`NoColorMarkers`](#api-a85f5a6e76c4fde8) | Field |
| [`NoDragDrop`](#api-3e259f3ad1455fd0) | Field |
| [`NoInputs`](#api-856780638a72bb16) | Field |
| [`NoLabel`](#api-b2f779bcd476a955) | Field |
| [`None`](#api-e790301d42bd26fb) | Field |
| [`NoOptions`](#api-a15ab2921eb3408b) | Field |
| [`NoPicker`](#api-43e5b9d72f9df315) | Field |
| [`NoSidePreview`](#api-2bfaffce1d23563d) | Field |
| [`NoSmallPreview`](#api-9112ce18c847834c) | Field |
| [`NoTooltip`](#api-2255119b89ac3f21) | Field |
| [`PickerHueBar`](#api-5b315b8c0b49457a) | Field |
| [`PickerHueWheel`](#api-869ff4f45e05be4d) | Field |
| [`PickerMask`](#api-16f7443df80379fa) | Field |
| [`Uint8`](#api-4a4e20fdd0ea5bff) | Field |

## Type declaration

<a id="api-7bc04157c0630bcc"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiColorEditFlags 660b1cb4a77f6ac52e825c037c89da60883c623acd270ce534e6e3fb71d08683 -->

```csharp
public enum InnoEditor.ImGui.ImGuiColorEditFlags : int
```

Defines the supported color edit flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L8).

## `AlphaBar`

<a id="api-ad419d19fbf2e2e1"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.AlphaBar 2155cb9f565cceede6c61413106207e9f4bf24c8c3fe3bb1f28b36dbc676f0f0 -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.AlphaBar = 262144
```

// ColorEdit, ColorPicker: show vertical alpha bar/gradient in picker.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L73).

## `AlphaMask`

<a id="api-0085018895bada35"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.AlphaMask 9ca16a8d9913c47ae81d569de1adbc8438638d832ad4a42519342bd65f37e1ee -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.AlphaMask = 28674
```

Selects the alpha mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L121).

## `AlphaNoBg`

<a id="api-afea30938f23fa23"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.AlphaNoBg d26ccb909f945a040186156e96802a9d14c1895ba5ca79daf2286f4350460ed1 -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.AlphaNoBg = 8192
```

// ColorEdit, ColorPicker, ColorButton: disable rendering a checkerboard background behind transparent color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L65).

## `AlphaOpaque`

<a id="api-f41ede32ec0bc616"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.AlphaOpaque ce18204b18616d60353a93b6e80dc624573555a3102dc8b6b6234e50e1637352 -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.AlphaOpaque = 4096
```

// ColorEdit, ColorPicker, ColorButton: disable alpha in the preview,. Contrary to _NoAlpha it may still be edited when calling ColorEdit4()/ColorPicker4(). For ColorButton() this does the same as _NoAlpha.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L61).

## `AlphaPreviewHalf`

<a id="api-c91de287999d2953"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.AlphaPreviewHalf 03db5c348abf949c4dc557077b4d185672ed635269a6ae8e6f7f9c706a98a92a -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.AlphaPreviewHalf = 16384
```

// ColorEdit, ColorPicker, ColorButton: display half opaque / half transparent preview.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L69).

## `DataTypeMask`

<a id="api-a24b69168e0eae62"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.DataTypeMask 100c0060a6908fdeec7cc6034b5c9f12b2e3b519a45da367ff11629fa47c22f9 -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.DataTypeMask = 25165824
```

Selects the data type mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L129).

## `DefaultOptions`

<a id="api-85ccc2e10dea99f7"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.DefaultOptions b047ea1876c18d508156d8f4840e4f2edf4372521608d5d7639ad3e4e1116f25 -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.DefaultOptions = 177209344
```

Selects the default options presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L117).

## `DisplayHex`

<a id="api-7ddd88640abd3ee4"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.DisplayHex 50dc2a0939d39b51998abbdac1981c0c245feeb4f54198319417b3fe39b4686b -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.DisplayHex = 4194304
```

// "


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L89).

## `DisplayHsv`

<a id="api-8e6b337e3e42c052"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.DisplayHsv 1ed51cad75e5aa50b36c5101bf95476a8c780ed3fe7af08ec68f7dfb6dc0e5e5 -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.DisplayHsv = 2097152
```

Selects the display hsv presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L85).

## `DisplayMask`

<a id="api-758632b8031c6b3d"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.DisplayMask ec2f1995fa739e2aa1c88b696a47a45a54afadc0c35d539fde16377482802850 -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.DisplayMask = 7340032
```

Selects the display mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L125).

## `DisplayRgb`

<a id="api-4fbcf577651bf789"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.DisplayRgb a4d27c0e296e8714564b026ac299db3ff75cb8de1f0e6e3d41af54040f6179c3 -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.DisplayRgb = 1048576
```

Selects the display rgb presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L81).

## `Float`

<a id="api-fda7afe0739e4af3"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.Float b2fae007c0046c649e70c563bb61d136bbe73a25cc56b124f0805e0d9c335d25 -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.Float = 16777216
```

// ColorEdit, ColorPicker, ColorButton: _display_ values formatted as 0.0f..1.0f floats instead of 0..255 integers. No round-trip of value via integers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L97).

## `Hdr`

<a id="api-06724f5ddefcb622"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.Hdr fc59406321b1932bd10fd18d304db31e5dbaaa55635dee662ab3602cca7a7a4e -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.Hdr = 524288
```

Selects the hdr presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L77).

## `InputHsv`

<a id="api-a50a7415639fd92e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.InputHsv 334ca5b7465b6d8ddf4c927a1920f80f7d0ac57dc9a2c318643badc2369dec5b -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.InputHsv = 268435456
```

Selects the input hsv presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L113).

## `InputMask`

<a id="api-b4dc5f150574a955"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.InputMask ad18eb1bb9a6c048cc6d03f5b2357663559796c5b394f6ab3b9f199500bdb6af -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.InputMask = 402653184
```

Selects the input mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L137).

## `InputRgb`

<a id="api-2653a2ce8ebeea22"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.InputRgb 81e9955d6376b65151b940f362b4af14d1cf93e6076acfbe17e98d6d7986b512 -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.InputRgb = 134217728
```

Selects the input rgb presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L109).

## `NoAlpha`

<a id="api-8240e98e2470571f"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.NoAlpha e43d64bffa5233bd948501fc9d5f137f3fd7d3021e25bc1e22182d5465e7c48a -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.NoAlpha = 2
```

// ColorEdit, ColorPicker, ColorButton: ignore Alpha component (will only read 3 components from the input pointer).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L17).

## `NoBorder`

<a id="api-28472aec832068aa"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.NoBorder 154932fbf2151c3351de7ef03820a52f9f7ac53777379fa854e9e172353f868e -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.NoBorder = 1024
```

// ColorButton: disable border (which is enforced by default)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L53).

## `NoColorMarkers`

<a id="api-a85f5a6e76c4fde8"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.NoColorMarkers d4078cba0d353ec64482b009cfe67bd6dce2754e1f7309e35b1e661e8c950337 -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.NoColorMarkers = 2048
```

// ColorEdit: disable rendering R/G/B/A color marker. May also be disabled globally by setting style.ColorMarkerSize = 0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L57).

## `NoDragDrop`

<a id="api-3e259f3ad1455fd0"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.NoDragDrop 15a2a9fb0368ca16ea1883e2b08d63b7de9f544c458bcd0252c1f2022a5b1a3e -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.NoDragDrop = 512
```

// ColorEdit: disable drag and drop target/source. ColorButton: disable drag and drop source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L49).

## `NoInputs`

<a id="api-856780638a72bb16"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.NoInputs c6cc31e46188bb0bd1fee4cd674d9ec4b114588a1e4239ba2937e9085fb65eba -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.NoInputs = 32
```

// ColorEdit, ColorPicker: disable inputs sliders/text widgets (e.g. to show only the small preview color square).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L33).

## `NoLabel`

<a id="api-b2f779bcd476a955"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.NoLabel 7a9331d76ee19dd97e9685dbc40cbd41495b0cac15bbf294183918fbbcd12557 -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.NoLabel = 128
```

// ColorEdit, ColorPicker: disable display of inline text label (the label is still forwarded to the tooltip and picker).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L41).

## `None`

<a id="api-e790301d42bd26fb"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.None 84fa96cc9c3634b8b5471668e7cbd5bf96eced764c14a7847e0f633b8d469d73 -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L13).

## `NoOptions`

<a id="api-a15ab2921eb3408b"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.NoOptions 3565a3f7ace8615430b3a9cf90b725a8e45067a8b053b72c3a4e8b3c2adaada9 -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.NoOptions = 8
```

// ColorEdit: disable toggling options menu when right-clicking on inputs/small preview.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L25).

## `NoPicker`

<a id="api-43e5b9d72f9df315"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.NoPicker f6fb5d8f7ee999b69f3418d205cda983d55d3a65832da98d6e6fa5b7cad2fc1e -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.NoPicker = 4
```

// ColorEdit: disable picker when clicking on color square.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L21).

## `NoSidePreview`

<a id="api-2bfaffce1d23563d"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.NoSidePreview 1845300f6c77e4bc364e53a5e7ddeebe208980b5cc2524b39e09ab71b1a7b9de -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.NoSidePreview = 256
```

// ColorPicker: disable bigger color preview on right side of the picker, use small color square preview instead.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L45).

## `NoSmallPreview`

<a id="api-9112ce18c847834c"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.NoSmallPreview dd9877d8dc594679aa80eca1aa159bf7dbe732754d0f5328e0743b1d9016dc53 -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.NoSmallPreview = 16
```

// ColorEdit, ColorPicker: disable color square preview next to the inputs. (e.g. to show only the inputs)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L29).

## `NoTooltip`

<a id="api-2255119b89ac3f21"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.NoTooltip 0687e3e5a4e3c110eedba2980bb02f8189ee0b48fc4d51de79a0b2bc6634f62e -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.NoTooltip = 64
```

// ColorEdit, ColorPicker, ColorButton: disable tooltip when hovering the preview.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L37).

## `PickerHueBar`

<a id="api-5b315b8c0b49457a"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.PickerHueBar 2f449b6123aa837cdf9960bf18eca504923f1f843eb41c95c5b25f33cee86820 -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.PickerHueBar = 33554432
```

// ColorPicker: bar for Hue, rectangle for Sat/Value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L101).

## `PickerHueWheel`

<a id="api-869ff4f45e05be4d"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.PickerHueWheel 165f834b51c4bd7d472a27ce686ce6812b870330f7d9ed133568abb33606f85d -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.PickerHueWheel = 67108864
```

// ColorPicker: wheel for Hue, triangle for Sat/Value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L105).

## `PickerMask`

<a id="api-16f7443df80379fa"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.PickerMask 114f203dfcb25283ca9f6fdf86d9b033ce74d00fd8e77700f7ea08fc368b0405 -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.PickerMask = 100663296
```

Selects the picker mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L133).

## `Uint8`

<a id="api-4a4e20fdd0ea5bff"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiColorEditFlags.Uint8 7c35186c3c23726a1e594e799ac57071c517d82417735d95b2b28b29fbe296d6 -->

```csharp
InnoEditor.ImGui.ImGuiColorEditFlags.Uint8 = 8388608
```

// ColorEdit, ColorPicker, ColorButton: _display_ values formatted as 0..255.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L93).
