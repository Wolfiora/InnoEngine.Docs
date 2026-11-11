---
title: "RenderGraphNameScope"
description: "Reference for RenderGraphNameScope in Inno.Rendering."
uid: api.inno.rendering.2cdd2fc0cd385ad2
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderGraphNameScope`

This reference describes `RenderGraphNameScope` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Dispose`](#api-f70d3538816a662f) | Method |

## Type declaration

<a id="api-2cdd2fc0cd385ad2"></a>
<!-- api: T:Inno.Rendering.RenderGraphNameScope 03159286c166a45683a8cc852d42d7be6d1c49a17b34d753e85778505e613bd2 -->

```csharp
public sealed class Inno.Rendering.RenderGraphNameScope : System.IDisposable
```

Owns one nested diagnostic-name prefix in a render graph builder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphNameScope.cs#L9).

## `Dispose`

<a id="api-f70d3538816a662f"></a>
<!-- api: M:Inno.Rendering.RenderGraphNameScope.Dispose 56562f34c1967de9ca8f7ec71000cc127cca8e06f9a9cf203677b8313b81ce98 -->

```csharp
public void Inno.Rendering.RenderGraphNameScope.Dispose()
```

Ends the name prefix scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphNameScope.cs#L25).
