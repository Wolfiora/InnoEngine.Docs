---
title: "RenderPassContext"
description: "Reference for RenderPassContext in Inno.Rendering."
uid: api.inno.rendering.9bb1190b5269d394
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderPassContext`

This reference describes `RenderPassContext` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`commands`](#api-738a75fac730ac69) | Property |
| [`frameIndex`](#api-41099b0fe4fca14a) | Property |

## Type declaration

<a id="api-9bb1190b5269d394"></a>
<!-- api: T:Inno.Rendering.RenderPassContext 0f4c8b379958452c9eadabe149cf322c143ea3ec0f3544438418ac6933dce038 -->

```csharp
public sealed class Inno.Rendering.RenderPassContext
```

Supplies the command encoder and immutable frame identity to a pass callback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L766).

## `commands`

<a id="api-738a75fac730ac69"></a>
<!-- api: P:Inno.Rendering.RenderPassContext.commands 32afbeb1c52b4c2cae98f4aa172dcf96bd5f6fd10995e0b03bb811b58c62ae5f -->

```csharp
public Inno.Rendering.RenderCommandEncoder Inno.Rendering.RenderPassContext.commands { get; }
```

Gets the command encoder scoped to the current pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L779).

## `frameIndex`

<a id="api-41099b0fe4fca14a"></a>
<!-- api: P:Inno.Rendering.RenderPassContext.frameIndex e4e713b2147c99b183cbcbf789bc0abf0f25266d6c37910f728deb0ba8f1e3fc -->

```csharp
public ulong Inno.Rendering.RenderPassContext.frameIndex { get; }
```

Gets the monotonic frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L784).
