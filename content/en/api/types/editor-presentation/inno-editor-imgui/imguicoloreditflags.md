---
title: "ImGuiColorEditFlags"
description: "Reference for ImGuiColorEditFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.cb7f1f70c142103d
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiColorEditFlags`

This reference describes `ImGuiColorEditFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AlphaBar`](#api-14a709846f8774ba) | Field |
| [`AlphaMask`](#api-6c2121ef2b531f94) | Field |
| [`AlphaNoBg`](#api-6d10a9addd706b94) | Field |
| [`AlphaOpaque`](#api-01228078293b0a6d) | Field |
| [`AlphaPreviewHalf`](#api-c360166f96d80e5d) | Field |
| [`DataTypeMask`](#api-9c2ba0f7fadf6dc4) | Field |
| [`DefaultOptions`](#api-23d3bd477e9ffc9f) | Field |
| [`DisplayHex`](#api-7bb11de1f7b541fe) | Field |
| [`DisplayHsv`](#api-949b75875f9b9b3c) | Field |
| [`DisplayMask`](#api-c547531087e9e5be) | Field |
| [`DisplayRgb`](#api-1e1b6267e94f50ba) | Field |
| [`Float`](#api-cf6d4eb4027f0feb) | Field |
| [`Hdr`](#api-9b76e2cab12b8183) | Field |
| [`InputHsv`](#api-c8c05b7523c085be) | Field |
| [`InputMask`](#api-e0fb7b6cd92a34e0) | Field |
| [`InputRgb`](#api-bf460cd852bfec7c) | Field |
| [`NoAlpha`](#api-3dd2ee6a275ee21d) | Field |
| [`NoBorder`](#api-4c7c53ddada0b6f1) | Field |
| [`NoColorMarkers`](#api-98bd14a470d940d2) | Field |
| [`NoDragDrop`](#api-f77d24babaa0d816) | Field |
| [`NoInputs`](#api-ddf970cd480fe79a) | Field |
| [`NoLabel`](#api-0b9769e245edefb2) | Field |
| [`None`](#api-6e206142941045f4) | Field |
| [`NoOptions`](#api-fdc39a39704c2ab9) | Field |
| [`NoPicker`](#api-dc50b4f73bbdcf26) | Field |
| [`NoSidePreview`](#api-84d7ad7115e91836) | Field |
| [`NoSmallPreview`](#api-4eb7ad0e7b52769d) | Field |
| [`NoTooltip`](#api-52af29606ddd1196) | Field |
| [`PickerHueBar`](#api-9faeb409e0b12fb2) | Field |
| [`PickerHueWheel`](#api-5fb0679b0573c85d) | Field |
| [`PickerMask`](#api-36f2c2a1f9c77266) | Field |
| [`Uint8`](#api-e156fa6a98437817) | Field |

## Type declaration

<a id="api-cb7f1f70c142103d"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiColorEditFlags 1fe3ffca77897849970df6d47d4375d35edf89bd5be4ccb281c6057e66782c61 -->

```csharp
public enum Inno.Editor.ImGui.ImGuiColorEditFlags : int
```

Defines the supported color edit flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L8).

## `AlphaBar`

<a id="api-14a709846f8774ba"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.AlphaBar baaee3feacba6a499743219f277468ae2aabee71896e651979d99613721dd017 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.AlphaBar = 262144
```

// ColorEdit, ColorPicker: show vertical alpha bar/gradient in picker.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L73).

## `AlphaMask`

<a id="api-6c2121ef2b531f94"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.AlphaMask 63ee95cfca7b511101e890b3bafb5070eeea4655531499be60e7cb91c9307483 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.AlphaMask = Inno.Editor.ImGui.ImGuiColorEditFlags.NoAlpha | Inno.Editor.ImGui.ImGuiColorEditFlags.AlphaOpaque | Inno.Editor.ImGui.ImGuiColorEditFlags.AlphaNoBg | Inno.Editor.ImGui.ImGuiColorEditFlags.AlphaPreviewHalf
```

Selects the alpha mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L121).

## `AlphaNoBg`

<a id="api-6d10a9addd706b94"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.AlphaNoBg 86fee0b06b12ffbf071b6c46ccbbf1cf85f839f4f38277620227d5534b2ccc65 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.AlphaNoBg = 8192
```

// ColorEdit, ColorPicker, ColorButton: disable rendering a checkerboard background behind transparent color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L65).

## `AlphaOpaque`

<a id="api-01228078293b0a6d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.AlphaOpaque afd2a0cdbb607168b87d74f6f923657909dd4e14c154f93e8c3723014654e904 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.AlphaOpaque = 4096
```

// ColorEdit, ColorPicker, ColorButton: disable alpha in the preview,. Contrary to _NoAlpha it may still be edited when calling ColorEdit4()/ColorPicker4(). For ColorButton() this does the same as _NoAlpha.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L61).

## `AlphaPreviewHalf`

<a id="api-c360166f96d80e5d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.AlphaPreviewHalf 0fcca72ef5c857e7220ccce720fb1a736ef0c4560c37ebbd0feb1e4a5a7eaafa -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.AlphaPreviewHalf = 16384
```

// ColorEdit, ColorPicker, ColorButton: display half opaque / half transparent preview.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L69).

## `DataTypeMask`

<a id="api-9c2ba0f7fadf6dc4"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.DataTypeMask 661f400f47ead549bff5d2ed822b4ecdc3517aa24271e95c1f1ba1a44fa17433 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.DataTypeMask = Inno.Editor.ImGui.ImGuiColorEditFlags.Uint8 | Inno.Editor.ImGui.ImGuiColorEditFlags.Float
```

Selects the data type mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L129).

## `DefaultOptions`

<a id="api-23d3bd477e9ffc9f"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.DefaultOptions 389ff140e1e79bff6b2140989bfd9eb9135c1fda0dc94103d1c948423b47755d -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.DefaultOptions = Inno.Editor.ImGui.ImGuiColorEditFlags.DisplayRgb | Inno.Editor.ImGui.ImGuiColorEditFlags.Uint8 | Inno.Editor.ImGui.ImGuiColorEditFlags.PickerHueBar | Inno.Editor.ImGui.ImGuiColorEditFlags.InputRgb
```

Selects the default options presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L117).

## `DisplayHex`

<a id="api-7bb11de1f7b541fe"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.DisplayHex f3bb6ed880bd2694b8332a71e5c1ddbd86b8a8342ac18ebe1443b8e5f81ded92 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.DisplayHex = 4194304
```

// "


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L89).

## `DisplayHsv`

<a id="api-949b75875f9b9b3c"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.DisplayHsv 3a0c3c5eaec8f0c31b9a58564fe30e68073ef422954c1e14ac49b1e1d0007a55 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.DisplayHsv = 2097152
```

Selects the display hsv presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L85).

## `DisplayMask`

<a id="api-c547531087e9e5be"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.DisplayMask ea3b9e579b145d3fb801751e530de80340b0290365bc47b4d0e9eb0818376618 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.DisplayMask = Inno.Editor.ImGui.ImGuiColorEditFlags.DisplayRgb | Inno.Editor.ImGui.ImGuiColorEditFlags.DisplayHsv | Inno.Editor.ImGui.ImGuiColorEditFlags.DisplayHex
```

Selects the display mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L125).

## `DisplayRgb`

<a id="api-1e1b6267e94f50ba"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.DisplayRgb ecbaee07b7958b04625d5a2bede8a41a32e61c6c4ba50526e98db533755ea1db -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.DisplayRgb = 1048576
```

Selects the display rgb presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L81).

## `Float`

<a id="api-cf6d4eb4027f0feb"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.Float ee2d7312e6c0c8c907a6ca24596e293e359005aad2c4eee92d4e28adf7bce90a -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.Float = 16777216
```

// ColorEdit, ColorPicker, ColorButton: _display_ values formatted as 0.0f..1.0f floats instead of 0..255 integers. No round-trip of value via integers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L97).

## `Hdr`

<a id="api-9b76e2cab12b8183"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.Hdr c3b00c5e8dbbd79bdceb3a99daaf07653a94929e2e6012da7389cc454f5094b0 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.Hdr = 524288
```

Selects the hdr presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L77).

## `InputHsv`

<a id="api-c8c05b7523c085be"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.InputHsv ad1d8410c13b3b630a263a735564d0687e94b5b8aa0aa668aaab5dac66cbe2f4 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.InputHsv = 268435456
```

Selects the input hsv presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L113).

## `InputMask`

<a id="api-e0fb7b6cd92a34e0"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.InputMask e1667fb0a01060de75e4283163678e4834882251cfe6a613a08710c3501c638c -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.InputMask = Inno.Editor.ImGui.ImGuiColorEditFlags.InputRgb | Inno.Editor.ImGui.ImGuiColorEditFlags.InputHsv
```

Selects the input mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L137).

## `InputRgb`

<a id="api-bf460cd852bfec7c"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.InputRgb 9c2b5037fdfcf6f8974bffdc45a481ac2a2c52285aba39e171a4b7c11ed76d67 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.InputRgb = 134217728
```

Selects the input rgb presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L109).

## `NoAlpha`

<a id="api-3dd2ee6a275ee21d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.NoAlpha 10a619525caf58b27877eb52c7e36316045cd1fb67009ba4f4763b11bb45b073 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.NoAlpha = 2
```

// ColorEdit, ColorPicker, ColorButton: ignore Alpha component (will only read 3 components from the input pointer).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L17).

## `NoBorder`

<a id="api-4c7c53ddada0b6f1"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.NoBorder 52a0fa692ae29d2a9c0a269d2d62f5d012d2a9bb645cd467c638bf6ae39e8397 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.NoBorder = 1024
```

// ColorButton: disable border (which is enforced by default)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L53).

## `NoColorMarkers`

<a id="api-98bd14a470d940d2"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.NoColorMarkers 43e3bc6c758f82ad231f141e35e039a5f6985fc16cc65360ab125fcabf0d5653 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.NoColorMarkers = 2048
```

// ColorEdit: disable rendering R/G/B/A color marker. May also be disabled globally by setting style.ColorMarkerSize = 0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L57).

## `NoDragDrop`

<a id="api-f77d24babaa0d816"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.NoDragDrop 97fc717b0a48d8ef4e9b511c80845d12bcd16aa0ad88a3a3d76a8ddb5251eca7 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.NoDragDrop = 512
```

// ColorEdit: disable drag and drop target/source. ColorButton: disable drag and drop source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L49).

## `NoInputs`

<a id="api-ddf970cd480fe79a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.NoInputs dcae045b951d86ba1420905a998d657f00e906a48da665fe5ebb78c23d30c300 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.NoInputs = 32
```

// ColorEdit, ColorPicker: disable inputs sliders/text widgets (e.g. to show only the small preview color square).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L33).

## `NoLabel`

<a id="api-0b9769e245edefb2"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.NoLabel 1e1e3b29064d5556f08d993b710f1e96e3ad0df9d5c7fe934bf9f11c4ed81ae3 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.NoLabel = 128
```

// ColorEdit, ColorPicker: disable display of inline text label (the label is still forwarded to the tooltip and picker).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L41).

## `None`

<a id="api-6e206142941045f4"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.None 6f4cb409137719b792e3cf1ddc5a7733ccb8907de4afd91caddd55cf6801257b -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L13).

## `NoOptions`

<a id="api-fdc39a39704c2ab9"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.NoOptions 5b1c10d140b113e43336930a512c176e25e69455a75d10894c46f9f19b01ded3 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.NoOptions = 8
```

// ColorEdit: disable toggling options menu when right-clicking on inputs/small preview.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L25).

## `NoPicker`

<a id="api-dc50b4f73bbdcf26"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.NoPicker 2da5c9f7b8e2a31e201bd8d51ad2dee3697a21072057ae795352422e09756924 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.NoPicker = 4
```

// ColorEdit: disable picker when clicking on color square.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L21).

## `NoSidePreview`

<a id="api-84d7ad7115e91836"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.NoSidePreview 62259cb7301f4606ba3d226db9f95e249a3e41a402823c7b669f9a51e3f0fae6 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.NoSidePreview = 256
```

// ColorPicker: disable bigger color preview on right side of the picker, use small color square preview instead.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L45).

## `NoSmallPreview`

<a id="api-4eb7ad0e7b52769d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.NoSmallPreview e6c98b221e3264165d19016e88f6c73d2dc82692c6de0651ce909e1fc5c22298 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.NoSmallPreview = 16
```

// ColorEdit, ColorPicker: disable color square preview next to the inputs. (e.g. to show only the inputs)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L29).

## `NoTooltip`

<a id="api-52af29606ddd1196"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.NoTooltip f8efcd28885d42324463c884b22ef17d45d6404f1c6efa720f01729dbba5e439 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.NoTooltip = 64
```

// ColorEdit, ColorPicker, ColorButton: disable tooltip when hovering the preview.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L37).

## `PickerHueBar`

<a id="api-9faeb409e0b12fb2"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.PickerHueBar 651b22d2b9767722c8436f1303e41f4b0fbd6c88c33ffe0038c505f1cafba0ba -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.PickerHueBar = 33554432
```

// ColorPicker: bar for Hue, rectangle for Sat/Value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L101).

## `PickerHueWheel`

<a id="api-5fb0679b0573c85d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.PickerHueWheel 14112ec258aaf41a5654556f85bbd5767975de9b514e2aa06975055ae1ed4ba1 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.PickerHueWheel = 67108864
```

// ColorPicker: wheel for Hue, triangle for Sat/Value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L105).

## `PickerMask`

<a id="api-36f2c2a1f9c77266"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.PickerMask 7f7539b05ca1610c4afe8fe235dee7dd88a86f7776367e0a0ca15eb970703852 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.PickerMask = Inno.Editor.ImGui.ImGuiColorEditFlags.PickerHueBar | Inno.Editor.ImGui.ImGuiColorEditFlags.PickerHueWheel
```

Selects the picker mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L133).

## `Uint8`

<a id="api-e156fa6a98437817"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiColorEditFlags.Uint8 2e2e740e5f10d258b9987495ac4b3c221b82c1fda569efd9ee67b4bee5adf2e2 -->

```csharp
Inno.Editor.ImGui.ImGuiColorEditFlags.Uint8 = 8388608
```

// ColorEdit, ColorPicker, ColorButton: _display_ values formatted as 0..255.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiColorEditFlags.cs#L93).
