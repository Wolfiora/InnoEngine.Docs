---
title: "RenderLoadAction"
description: "Reference for RenderLoadAction in Inno.Rendering."
uid: api.inno.rendering.runtime-script.de858bc83d665b5e
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderLoadAction`

This reference describes `RenderLoadAction` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Clear`](#api-6c66762964cfc9c5) | Field |
| [`Discard`](#api-8dd54ec5f5d87781) | Field |
| [`Load`](#api-271ce492e7cf3096) | Field |

## Type declaration

<a id="api-de858bc83d665b5e"></a>
<!-- api: T:InnoEngine.Rendering.RenderLoadAction 5d580a95cdb9391949ac3f230a795db8d3e4f838cb4308c1bf09c92d75a66427 -->

```csharp
public enum InnoEngine.Rendering.RenderLoadAction : int
```

Controls how existing attachment contents enter a raster pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L75).

## `Clear`

<a id="api-6c66762964cfc9c5"></a>
<!-- api: F:InnoEngine.Rendering.RenderLoadAction.Clear c8e3aad475612e6244e05d00d4ad6f21672a2cb26f4543564af77d55814ce15b -->

```csharp
InnoEngine.Rendering.RenderLoadAction.Clear = 1
```

Clears the attachment before rendering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L84).

## `Discard`

<a id="api-8dd54ec5f5d87781"></a>
<!-- api: F:InnoEngine.Rendering.RenderLoadAction.Discard 549f17ed40a5b8b43f2a685e9227d92d3cb04bba3de1a774d950edcb867b892f -->

```csharp
InnoEngine.Rendering.RenderLoadAction.Discard = 2
```

Does not require prior attachment contents.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L88).

## `Load`

<a id="api-271ce492e7cf3096"></a>
<!-- api: F:InnoEngine.Rendering.RenderLoadAction.Load 213390ee1329057c4fb7504bd20f3080ac4c1694377c76e91695e1d65134f43a -->

```csharp
InnoEngine.Rendering.RenderLoadAction.Load = 0
```

Preserves prior attachment contents.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L80).
