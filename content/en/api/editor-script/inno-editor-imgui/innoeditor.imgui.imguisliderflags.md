---
title: "ImGuiSliderFlags"
description: "Reference for ImGuiSliderFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.e7941c50fbb83873
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiSliderFlags`

This reference describes `ImGuiSliderFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AlwaysClamp`](#api-7aa77752e38228f5) | Field |
| [`ClampOnInput`](#api-4314555ba0b13e08) | Field |
| [`ClampZeroRange`](#api-452cd1a71e95dfc8) | Field |
| [`ColorMarkers`](#api-68338e2aca5a536f) | Field |
| [`InvalidMask`](#api-bbb2bb87cb309976) | Field |
| [`Logarithmic`](#api-f824fc3b13cf5804) | Field |
| [`NoInput`](#api-66291ed3bf49a5c0) | Field |
| [`None`](#api-85bb55ed842ffc78) | Field |
| [`NoRoundToFormat`](#api-a2ad9f765773a75f) | Field |
| [`NoSpeedTweaks`](#api-2b8917cde1e14fd8) | Field |
| [`WrapAround`](#api-2350580efc8c62fd) | Field |

## Type declaration

<a id="api-e7941c50fbb83873"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiSliderFlags f8aaea4ab06744abaa09a6d0e9b96e35eacecae1f37128038093b16b3e09ad9f -->

```csharp
public enum InnoEditor.ImGui.ImGuiSliderFlags : int
```

Defines the supported slider flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L8).

## `AlwaysClamp`

<a id="api-7aa77752e38228f5"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSliderFlags.AlwaysClamp 29a741c645f16801c8ce00d5113375ecba0d387a5c036e56537114c083864d18 -->

```csharp
InnoEditor.ImGui.ImGuiSliderFlags.AlwaysClamp = 1536
```

Selects the always clamp presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L49).

## `ClampOnInput`

<a id="api-4314555ba0b13e08"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSliderFlags.ClampOnInput aa4d5ce00bf4b9fc41d83968f512e773d5eea45179a52b70651d9b8cbdb19853 -->

```csharp
InnoEditor.ImGui.ImGuiSliderFlags.ClampOnInput = 512
```

Clamp value to min/max bounds when input manually with Ctrl+Click. By default Ctrl+Click allows going out of bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L33).

## `ClampZeroRange`

<a id="api-452cd1a71e95dfc8"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSliderFlags.ClampZeroRange ab7e2279447761ca2fecd58dc99c5990f4326a6eeb52ebdd1726dacb9607e798 -->

```csharp
InnoEditor.ImGui.ImGuiSliderFlags.ClampZeroRange = 1024
```

Clamp even if min==max==0.0f. Otherwise due to legacy reason DragXXX functions don't clamp with those values. When your clamping limits are dynamic you almost always want to use it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L37).

## `ColorMarkers`

<a id="api-68338e2aca5a536f"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSliderFlags.ColorMarkers 99d654f9d1c5566db0bcba3ebd0d0bed8e26d5a5c2e37d39c271c64455f1bd85 -->

```csharp
InnoEditor.ImGui.ImGuiSliderFlags.ColorMarkers = 4096
```

DragScalarN(), SliderScalarN(): Draw R/G/B/A color markers on each component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L45).

## `InvalidMask`

<a id="api-bbb2bb87cb309976"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSliderFlags.InvalidMask de57d7518af6288551f04d4728199e5127ff4ebfb59fd9ffc744223dcd6f5b9f -->

```csharp
InnoEditor.ImGui.ImGuiSliderFlags.InvalidMask = 1879048207
```

Selects the invalid mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L53).

## `Logarithmic`

<a id="api-f824fc3b13cf5804"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSliderFlags.Logarithmic 476103109b710eb4a6525341987313fd68dfed6175bde455a9d9b3c6ec6208c7 -->

```csharp
InnoEditor.ImGui.ImGuiSliderFlags.Logarithmic = 32
```

Make the widget logarithmic (linear otherwise). Consider using ImGuiSliderFlags_NoRoundToFormat with this if using a format-string with small amount of digits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L17).

## `NoInput`

<a id="api-66291ed3bf49a5c0"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSliderFlags.NoInput c768051d52e6380179c1c30dcdf20cd94a28187e8b9480cc25ecc841dc63700b -->

```csharp
InnoEditor.ImGui.ImGuiSliderFlags.NoInput = 128
```

Disable Ctrl+Click or Enter key allowing to input text directly into the widget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L25).

## `None`

<a id="api-85bb55ed842ffc78"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSliderFlags.None d0164d014715275a4a01ac5f58548bb2b641d50e78931287b951d1a164be8c1e -->

```csharp
InnoEditor.ImGui.ImGuiSliderFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L13).

## `NoRoundToFormat`

<a id="api-a2ad9f765773a75f"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSliderFlags.NoRoundToFormat 9478062dbc1d14416c1c22cd0d8780ee15e1ea7514b8f163ffd748d11be9185a -->

```csharp
InnoEditor.ImGui.ImGuiSliderFlags.NoRoundToFormat = 64
```

Disable rounding underlying value to match precision of the display format string (e.g. %.3f values are rounded to those 3 digits).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L21).

## `NoSpeedTweaks`

<a id="api-2b8917cde1e14fd8"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSliderFlags.NoSpeedTweaks a034cd58756b16cad5495f49ce1fc9e0a4fbe592aedb560583712d4d9f828182 -->

```csharp
InnoEditor.ImGui.ImGuiSliderFlags.NoSpeedTweaks = 2048
```

Disable keyboard modifiers altering tweak speed. Useful if you want to alter tweak speed yourself based on your own logic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L41).

## `WrapAround`

<a id="api-2350580efc8c62fd"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiSliderFlags.WrapAround 5fa508ad7ea5006045882aebd62cfb6287031c178bf80b18684f153f5d8fd394 -->

```csharp
InnoEditor.ImGui.ImGuiSliderFlags.WrapAround = 256
```

Enable wrapping around from max to min and from min to max. Only supported by DragXXX() functions for now.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiSliderFlags.cs#L29).
