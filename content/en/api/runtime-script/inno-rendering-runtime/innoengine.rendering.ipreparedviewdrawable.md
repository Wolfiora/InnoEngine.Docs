---
title: "IPreparedViewDrawable"
description: "Reference for IPreparedViewDrawable in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.fee8c7ce80c99f3a
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `IPreparedViewDrawable`

This reference describes `IPreparedViewDrawable` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`Encode`](#api-fc2434dbc6375dba) | Method |

## Type declaration

<a id="api-fee8c7ce80c99f3a"></a>
<!-- api: T:InnoEngine.Rendering.IPreparedViewDrawable d401cf9d0240f5d7b3b75a1f28e02d9e6c1a231dab40a19c0f396ed56c266a3e -->

```csharp
public interface InnoEngine.Rendering.IPreparedViewDrawable
```

Encodes a resource-ready draw into the owning model's scene pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L199).

## `Encode`

<a id="api-fc2434dbc6375dba"></a>
<!-- api: M:InnoEngine.Rendering.IPreparedViewDrawable.Encode(InnoEngine.Rendering.RenderCommandEncoder) 0892f8e8aed4035ade6fa3c0478bb2d3fe3f5f34db572932ac51a176e4f672a9 -->

```csharp
void InnoEngine.Rendering.IPreparedViewDrawable.Encode(InnoEngine.Rendering.RenderCommandEncoder commands)
```

Encodes commands while the owning model controls attachments and view state.

**Parameter `commands`:** Backend-neutral scene pass encoder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L207).
