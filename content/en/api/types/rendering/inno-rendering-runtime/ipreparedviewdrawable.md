---
title: "IPreparedViewDrawable"
description: "Reference for IPreparedViewDrawable in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.d847eeed8ed6a979
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `IPreparedViewDrawable`

This reference describes `IPreparedViewDrawable` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Encode`](#api-516fcae546c20abb) | Method |

## Type declaration

<a id="api-d847eeed8ed6a979"></a>
<!-- api: T:Inno.Rendering.Runtime.IPreparedViewDrawable 8b1af62b9578b35cffde3193448313ec8b4d59b9d84252787c0541ac5ee765a4 -->

```csharp
public interface Inno.Rendering.Runtime.IPreparedViewDrawable
```

Encodes a resource-ready draw into the owning model's scene pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L199).

## `Encode`

<a id="api-516fcae546c20abb"></a>
<!-- api: M:Inno.Rendering.Runtime.IPreparedViewDrawable.Encode(Inno.Rendering.RenderCommandEncoder) 86a3fd62435fdb6269ada8782a0e836a15230952369d20fdb16ad0d4817604f4 -->

```csharp
void Inno.Rendering.Runtime.IPreparedViewDrawable.Encode(Inno.Rendering.RenderCommandEncoder commands)
```

Encodes commands while the owning model controls attachments and view state.

**Parameter `commands`:** Backend-neutral scene pass encoder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L207).
