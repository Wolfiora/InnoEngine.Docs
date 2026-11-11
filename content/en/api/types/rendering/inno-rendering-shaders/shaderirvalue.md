---
title: "ShaderIrValue"
description: "Reference for ShaderIrValue in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.b5e283593e7c2ede
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderIrValue`

This reference describes `ShaderIrValue` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`index`](#api-d5205356ac843fe4) | Property |
| [`type`](#api-9bdc632e4e5e347a) | Property |

## Type declaration

<a id="api-b5e283593e7c2ede"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderIrValue 380a970a2f12c1878ae8b000e41ca05e1da0d4ca48fda4be90a6f8e3b8dcbd19 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderIrValue
```

Identifies a typed single-assignment value within one intermediate block.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L11).

## `index`

<a id="api-d5205356ac843fe4"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrValue.index 250457d9f153e0b53f85bb9be5031118d14bdad6345f5fb0cdf91185b02d3cd7 -->

```csharp
public int Inno.Rendering.Shaders.ShaderIrValue.index { get; }
```

Gets the deterministic block-local value index, not a GPU register or resource slot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L26).

## `type`

<a id="api-9bdc632e4e5e347a"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderIrValue.type 6a3c94bc1a02f0f7eda5aa841f8ac090bbcf37fddd832eba63bcbefcebbcf9b7 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceType Inno.Rendering.Shaders.ShaderIrValue.type { get; }
```

Gets the complete language-independent value type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L30).
