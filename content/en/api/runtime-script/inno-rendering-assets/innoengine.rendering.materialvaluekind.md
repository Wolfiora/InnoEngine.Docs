---
title: "MaterialValueKind"
description: "Reference for MaterialValueKind in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.c94efc099e6b32fe
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `MaterialValueKind`

This reference describes `MaterialValueKind` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Color`](#api-cd8acc99911bdfff) | Field |
| [`Float`](#api-4e062dd2bdee14fb) | Field |
| [`Matrix`](#api-4b40dae933acfa37) | Field |
| [`Texture`](#api-2ee315ada10067fe) | Field |
| [`Vector`](#api-47ec98c32de8017a) | Field |

## Type declaration

<a id="api-c94efc099e6b32fe"></a>
<!-- api: T:InnoEngine.Rendering.MaterialValueKind b75ab960fb77ba170292e4a8890dac046594eb86c005e1a4302399116a815d57 -->

```csharp
public enum InnoEngine.Rendering.MaterialValueKind : int
```

Identifies the neutral value stored by a material property.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L16).

## `Color`

<a id="api-cd8acc99911bdfff"></a>
<!-- api: F:InnoEngine.Rendering.MaterialValueKind.Color 7e25c3183ab406958d73018bdc89b5793322bf16e0548d9b94b77590d81bfb71 -->

```csharp
InnoEngine.Rendering.MaterialValueKind.Color = 2
```

Linear color value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L29).

## `Float`

<a id="api-4e062dd2bdee14fb"></a>
<!-- api: F:InnoEngine.Rendering.MaterialValueKind.Float 4d03e52c907bbb42853a1aa8cc2af82fe2ed50418b0b8bb9347d8ff7605a6d15 -->

```csharp
InnoEngine.Rendering.MaterialValueKind.Float = 0
```

Scalar floating-point value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L21).

## `Matrix`

<a id="api-4b40dae933acfa37"></a>
<!-- api: F:InnoEngine.Rendering.MaterialValueKind.Matrix 246826f9b424495b4d0dcc938ba0b5b4bd5de0bec04776eea045a1be7bdea263 -->

```csharp
InnoEngine.Rendering.MaterialValueKind.Matrix = 3
```

Four-by-four matrix value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L33).

## `Texture`

<a id="api-2ee315ada10067fe"></a>
<!-- api: F:InnoEngine.Rendering.MaterialValueKind.Texture 384a5a9b455279d23ecf105ba8ed7ab4019f0af5ea14359ce732f6329c82f60f -->

```csharp
InnoEngine.Rendering.MaterialValueKind.Texture = 4
```

Texture asset reference.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L37).

## `Vector`

<a id="api-47ec98c32de8017a"></a>
<!-- api: F:InnoEngine.Rendering.MaterialValueKind.Vector 4de6b1cea1cf51a51f35499a3a652d43efa10e3aae4cc55d87b955b230667379 -->

```csharp
InnoEngine.Rendering.MaterialValueKind.Vector = 1
```

Four-component vector value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialValue.cs#L25).
