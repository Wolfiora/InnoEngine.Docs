---
title: "RenderStoreAction"
description: "Reference for RenderStoreAction in Inno.Rendering."
uid: api.inno.rendering.runtime-script.4e9260ee7fa61efb
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderStoreAction`

This reference describes `RenderStoreAction` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Discard`](#api-5c862aa508ce11fb) | Field |
| [`Store`](#api-49e033ae8b0d5e17) | Field |

## Type declaration

<a id="api-4e9260ee7fa61efb"></a>
<!-- api: T:InnoEngine.Rendering.RenderStoreAction 22240824a4ed558d03e3b13dacc5e7ce349f5f51658fb8972f425a36adec0dec -->

```csharp
public enum InnoEngine.Rendering.RenderStoreAction : int
```

Controls whether attachment contents remain valid after a raster pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L94).

## `Discard`

<a id="api-5c862aa508ce11fb"></a>
<!-- api: F:InnoEngine.Rendering.RenderStoreAction.Discard cb22293ea9dacb06b0c4dcfb053aee47b4bb88a1fbabd52024b463a38e0ba8c2 -->

```csharp
InnoEngine.Rendering.RenderStoreAction.Discard = 1
```

Allows the backend to discard rendered contents.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L103).

## `Store`

<a id="api-49e033ae8b0d5e17"></a>
<!-- api: F:InnoEngine.Rendering.RenderStoreAction.Store 220ec506ab308fde74f1fa07f43649d3286f86d1b95d8ee6e5e0f3e97a75fee4 -->

```csharp
InnoEngine.Rendering.RenderStoreAction.Store = 0
```

Preserves rendered contents.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L99).
