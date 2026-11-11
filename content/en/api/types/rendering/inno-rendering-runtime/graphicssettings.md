---
title: "GraphicsSettings"
description: "Reference for GraphicsSettings in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.c8d216836353b9aa
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `GraphicsSettings`

This reference describes `GraphicsSettings` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`capabilities`](#api-1a27f9418ed0277a) | Property |
| [`defaultPipeline`](#api-e62e2990a4b8ba13) | Property |
| [`frameStatistics`](#api-eca7e927475556e0) | Property |

## Type declaration

<a id="api-c8d216836353b9aa"></a>
<!-- api: T:Inno.Rendering.Runtime.GraphicsSettings 70246586dc6d7732d0e905e2462c5b3bb61d4f0bf078e503acc8683e8e91c8c6 -->

```csharp
public static class Inno.Rendering.Runtime.GraphicsSettings
```

Exposes current rendering configuration and immutable device state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/GraphicsSettings.cs#L13).

## `capabilities`

<a id="api-1a27f9418ed0277a"></a>
<!-- api: P:Inno.Rendering.Runtime.GraphicsSettings.capabilities 614f819052baed016c9f4ddc2a0b904f3020762b758407cf30b03e826bbfbefc -->

```csharp
public static Inno.Rendering.GraphicsCapabilities? Inno.Rendering.Runtime.GraphicsSettings.capabilities { get; }
```

Gets current device capabilities, or `null` before device initialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/GraphicsSettings.cs#L18).

## `defaultPipeline`

<a id="api-e62e2990a4b8ba13"></a>
<!-- api: P:Inno.Rendering.Runtime.GraphicsSettings.defaultPipeline 6b3be29e356396f786c6ec8282898e6ced24d6a38f7bcea667d4c356bc8a88e7 -->

```csharp
public static Inno.Rendering.Assets.RenderPipelineAsset? Inno.Rendering.Runtime.GraphicsSettings.defaultPipeline { get; set; }
```

Gets or sets the project default pipeline used by requests without an override.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/GraphicsSettings.cs#L23).

## `frameStatistics`

<a id="api-eca7e927475556e0"></a>
<!-- api: P:Inno.Rendering.Runtime.GraphicsSettings.frameStatistics 0be79ed1e4fcf1e463b8e7dde1c9a14ffb62062e43c8871a6d5535072d7af4b8 -->

```csharp
public static Inno.Rendering.Runtime.RenderFrameStatistics? Inno.Rendering.Runtime.GraphicsSettings.frameStatistics { get; }
```

Gets statistics for the last completed frame, or `null` before the first frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/GraphicsSettings.cs#L32).
