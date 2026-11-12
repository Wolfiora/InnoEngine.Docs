---
title: "RenderIndexFormat"
description: "Reference for RenderIndexFormat in Inno.Rendering."
uid: api.inno.rendering.runtime-script.31d5c197236112ea
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderIndexFormat`

This reference describes `RenderIndexFormat` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`UInt16`](#api-67875dbac74c4529) | Field |
| [`UInt32`](#api-0e651ab48323d68b) | Field |

## Type declaration

<a id="api-31d5c197236112ea"></a>
<!-- api: T:InnoEngine.Rendering.RenderIndexFormat 816f7838985ba8a3506410a0c306847ea4f3b6a343c064deab0c15aa0775c50c -->

```csharp
public enum InnoEngine.Rendering.RenderIndexFormat : int
```

Selects the integer representation of an index buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L340).

## `UInt16`

<a id="api-67875dbac74c4529"></a>
<!-- api: F:InnoEngine.Rendering.RenderIndexFormat.UInt16 025e860e172ce21bec2ef3331f512de32848a212d194a268e07860611d1e836d -->

```csharp
InnoEngine.Rendering.RenderIndexFormat.UInt16 = 0
```

Unsigned 16-bit indices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L345).

## `UInt32`

<a id="api-0e651ab48323d68b"></a>
<!-- api: F:InnoEngine.Rendering.RenderIndexFormat.UInt32 ef046226f3553a85feaba7a7d623e75026260e995c23e05f857f90e7434e0339 -->

```csharp
InnoEngine.Rendering.RenderIndexFormat.UInt32 = 1
```

Unsigned 32-bit indices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L349).
