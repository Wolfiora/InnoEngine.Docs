---
title: "ShaderStage"
description: "Reference for ShaderStage in Inno.Rendering."
uid: api.inno.rendering.runtime-script.e3d2bfad1afc07c9
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `ShaderStage`

This reference describes `ShaderStage` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Compute`](#api-1b90e5837f2132e3) | Field |
| [`Fragment`](#api-b13471fb7b214915) | Field |
| [`None`](#api-01aa3e2447b2f6b6) | Field |
| [`Vertex`](#api-24cd231b5b7e9662) | Field |

## Type declaration

<a id="api-e3d2bfad1afc07c9"></a>
<!-- api: T:InnoEngine.Rendering.ShaderStage b07aee91a1d93755be7b8e0c7212f4323b7200c08facdee589e58c264fd48c11 -->

```csharp
public enum InnoEngine.Rendering.ShaderStage : int
```

Identifies a programmable shader stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderStage.cs#L15).

## `Compute`

<a id="api-1b90e5837f2132e3"></a>
<!-- api: F:InnoEngine.Rendering.ShaderStage.Compute ed1e93c6009b4e1a101e8929986743b904ad4208108a021e25c1f71e5aa7eebb -->

```csharp
InnoEngine.Rendering.ShaderStage.Compute = 4
```

Compute shader stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderStage.cs#L32).

## `Fragment`

<a id="api-b13471fb7b214915"></a>
<!-- api: F:InnoEngine.Rendering.ShaderStage.Fragment 0a8723e82078f89addc76f6837b9782da04c32a138df135e61921a53506b5240 -->

```csharp
InnoEngine.Rendering.ShaderStage.Fragment = 2
```

Fragment shader stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderStage.cs#L28).

## `None`

<a id="api-01aa3e2447b2f6b6"></a>
<!-- api: F:InnoEngine.Rendering.ShaderStage.None 587dd12de90eb770eb0c3a0762a188203602f3a5cf2d9c2db4df4601854f60bc -->

```csharp
InnoEngine.Rendering.ShaderStage.None = 0
```

No shader stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderStage.cs#L20).

## `Vertex`

<a id="api-24cd231b5b7e9662"></a>
<!-- api: F:InnoEngine.Rendering.ShaderStage.Vertex 6afd0094269f33cd0829e01c441e2e991c68062b94dbd843d2c815edfebb04a0 -->

```csharp
InnoEngine.Rendering.ShaderStage.Vertex = 1
```

Vertex shader stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Shaders/ShaderStage.cs#L24).
