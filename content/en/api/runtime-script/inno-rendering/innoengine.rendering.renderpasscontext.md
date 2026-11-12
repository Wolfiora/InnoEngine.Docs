---
title: "RenderPassContext"
description: "Reference for RenderPassContext in Inno.Rendering."
uid: api.inno.rendering.runtime-script.8def88483892a282
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderPassContext`

This reference describes `RenderPassContext` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-25c427757d1ae70a) | Method |
| [`commands`](#api-5b60a9af7bbcd3cf) | Property |
| [`frameIndex`](#api-ef2d9d1d20460651) | Property |

## Type declaration

<a id="api-8def88483892a282"></a>
<!-- api: T:InnoEngine.Rendering.RenderPassContext c2ad645117b05a721e4446419cf3d0b7c143766ee4e62f72dbdaa411e725cee8 -->

```csharp
public sealed class InnoEngine.Rendering.RenderPassContext
```

Supplies the command encoder and immutable frame identity to a pass callback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L766).

## `#ctor`

<a id="api-25c427757d1ae70a"></a>
<!-- api: M:InnoEngine.Rendering.RenderPassContext.#ctor 3a9a36d3ab61b62d854fa99f313c657fef4c637858da3e1153e2bd13c87caaea -->

```csharp
public InnoEngine.Rendering.RenderPassContext.RenderPassContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L766).

## `commands`

<a id="api-5b60a9af7bbcd3cf"></a>
<!-- api: P:InnoEngine.Rendering.RenderPassContext.commands 2b6598d0495f85871a9ad6766502e4efdb2bf801a8640a9c0cf7eb6f96846f83 -->

```csharp
public InnoEngine.Rendering.RenderCommandEncoder InnoEngine.Rendering.RenderPassContext.commands { get; }
```

Gets the command encoder scoped to the current pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L779).

## `frameIndex`

<a id="api-ef2d9d1d20460651"></a>
<!-- api: P:InnoEngine.Rendering.RenderPassContext.frameIndex 88be6c8a9c2651aa767aa5ab03d87a82e72d5c26d667597b889843f59bb98a9e -->

```csharp
public ulong InnoEngine.Rendering.RenderPassContext.frameIndex { get; }
```

Gets the monotonic frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L784).
