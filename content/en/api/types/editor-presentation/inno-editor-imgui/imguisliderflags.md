---
title: "ImGuiSliderFlags"
description: "Reference for ImGuiSliderFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.b1a3f28210a7292e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiSliderFlags`

This reference describes `ImGuiSliderFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AlwaysClamp`](#api-022dfc679c236c33) | Field |
| [`ClampOnInput`](#api-c2eff36c0a939623) | Field |
| [`ClampZeroRange`](#api-152dfad362069646) | Field |
| [`ColorMarkers`](#api-98c816a9de4bc7ab) | Field |
| [`InvalidMask`](#api-c1b859578fedb5fa) | Field |
| [`Logarithmic`](#api-3505f6273b06e664) | Field |
| [`NoInput`](#api-18390f6b816b5174) | Field |
| [`None`](#api-63fcf9e1278a8631) | Field |
| [`NoRoundToFormat`](#api-1c3569c8a9ff55fe) | Field |
| [`NoSpeedTweaks`](#api-a8645643454a5aa1) | Field |
| [`WrapAround`](#api-00a28d288f533bce) | Field |

## Type declaration

<a id="api-b1a3f28210a7292e"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiSliderFlags fce6e06fc9f9dbe2dffc8e27b1c5f756310754a25b6cdda62acd492196405c24 -->

```csharp
public enum Inno.Editor.ImGui.ImGuiSliderFlags : int
```

Defines the supported slider flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L8).

## `AlwaysClamp`

<a id="api-022dfc679c236c33"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSliderFlags.AlwaysClamp 5b00c48bd73835456bae0ea69523ace834da81d4f34871fb7943265260a355fd -->

```csharp
Inno.Editor.ImGui.ImGuiSliderFlags.AlwaysClamp = Inno.Editor.ImGui.ImGuiSliderFlags.ClampOnInput | Inno.Editor.ImGui.ImGuiSliderFlags.ClampZeroRange
```

Selects the always clamp presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L49).

## `ClampOnInput`

<a id="api-c2eff36c0a939623"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSliderFlags.ClampOnInput cda854f4e855a166e8241c0c7aefd02b8021acd29446676ca8bc0eeb0a521a53 -->

```csharp
Inno.Editor.ImGui.ImGuiSliderFlags.ClampOnInput = 512
```

Clamp value to min/max bounds when input manually with Ctrl+Click. By default Ctrl+Click allows going out of bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L33).

## `ClampZeroRange`

<a id="api-152dfad362069646"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSliderFlags.ClampZeroRange 9afc52b93142932c536f0947a49eda84d3ac4cb4eb9b45d2b4ecc438cc28d1ee -->

```csharp
Inno.Editor.ImGui.ImGuiSliderFlags.ClampZeroRange = 1024
```

Clamp even if min==max==0.0f. Otherwise due to legacy reason DragXXX functions don't clamp with those values. When your clamping limits are dynamic you almost always want to use it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L37).

## `ColorMarkers`

<a id="api-98c816a9de4bc7ab"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSliderFlags.ColorMarkers ed915bf0c5a9cf4efce9ecb49d3679be5f56ed3b23ae387ea6d0d6b0ad533feb -->

```csharp
Inno.Editor.ImGui.ImGuiSliderFlags.ColorMarkers = 4096
```

DragScalarN(), SliderScalarN(): Draw R/G/B/A color markers on each component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L45).

## `InvalidMask`

<a id="api-c1b859578fedb5fa"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSliderFlags.InvalidMask a5198be8e8fbf03427d6c43be6278f392476306c7988fd10bb88ffbeb6402265 -->

```csharp
Inno.Editor.ImGui.ImGuiSliderFlags.InvalidMask = 1879048207
```

Selects the invalid mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L53).

## `Logarithmic`

<a id="api-3505f6273b06e664"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSliderFlags.Logarithmic f6789a2923666977c70ae2c829f32d2667a5b821cf67ade7742c4488f5276e71 -->

```csharp
Inno.Editor.ImGui.ImGuiSliderFlags.Logarithmic = 32
```

Make the widget logarithmic (linear otherwise). Consider using ImGuiSliderFlags_NoRoundToFormat with this if using a format-string with small amount of digits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L17).

## `NoInput`

<a id="api-18390f6b816b5174"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSliderFlags.NoInput 40e2bc4dbff4298430bf3b778ffd916e4d5e9e210e77a953ca14795e2a4349aa -->

```csharp
Inno.Editor.ImGui.ImGuiSliderFlags.NoInput = 128
```

Disable Ctrl+Click or Enter key allowing to input text directly into the widget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L25).

## `None`

<a id="api-63fcf9e1278a8631"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSliderFlags.None 46728c56240e67f04eb134445ecb574cecba04ed216204692c2be42a6cd04a26 -->

```csharp
Inno.Editor.ImGui.ImGuiSliderFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L13).

## `NoRoundToFormat`

<a id="api-1c3569c8a9ff55fe"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSliderFlags.NoRoundToFormat 90c0b97071557bc42b0fc7492868d8ff893167293d8f662cd0c9728df84fa9eb -->

```csharp
Inno.Editor.ImGui.ImGuiSliderFlags.NoRoundToFormat = 64
```

Disable rounding underlying value to match precision of the display format string (e.g. %.3f values are rounded to those 3 digits).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L21).

## `NoSpeedTweaks`

<a id="api-a8645643454a5aa1"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSliderFlags.NoSpeedTweaks 3a2f3c85a41e11f2d289c1f3842802a4e8e27c90567041124af6789cc6984409 -->

```csharp
Inno.Editor.ImGui.ImGuiSliderFlags.NoSpeedTweaks = 2048
```

Disable keyboard modifiers altering tweak speed. Useful if you want to alter tweak speed yourself based on your own logic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L41).

## `WrapAround`

<a id="api-00a28d288f533bce"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiSliderFlags.WrapAround 80eda593387b3dc1e48944484a777e8b13ccc28c4a512eac3490476e2ecf1993 -->

```csharp
Inno.Editor.ImGui.ImGuiSliderFlags.WrapAround = 256
```

Enable wrapping around from max to min and from min to max. Only supported by DragXXX() functions for now.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L29).
