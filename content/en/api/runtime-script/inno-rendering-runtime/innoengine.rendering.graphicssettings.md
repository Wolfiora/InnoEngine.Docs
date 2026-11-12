---
title: "GraphicsSettings"
description: "Reference for GraphicsSettings in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.f5ee56c5c82248e2
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `GraphicsSettings`

This reference describes `GraphicsSettings` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`capabilities`](#api-8ea75a35513b45b2) | Property |
| [`defaultPipeline`](#api-5a4c9215b1b5cef0) | Property |
| [`frameStatistics`](#api-512c30db461442b3) | Property |

## Type declaration

<a id="api-f5ee56c5c82248e2"></a>
<!-- api: T:InnoEngine.Rendering.GraphicsSettings eeb229514696bc6f21157673dd4903fb53d8670a5dd02eac0af7d631c7f086fc -->

```csharp
public static class InnoEngine.Rendering.GraphicsSettings
```

Exposes current rendering configuration and immutable device state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/GraphicsSettings.cs#L13).

## `capabilities`

<a id="api-8ea75a35513b45b2"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsSettings.capabilities b13520df0d751af714f69a64b5e275bf21b6b0af93154e5bcfc2855bd268e317 -->

```csharp
public static InnoEngine.Rendering.GraphicsCapabilities? InnoEngine.Rendering.GraphicsSettings.capabilities { get; }
```

Gets current device capabilities, or `null` before device initialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/GraphicsSettings.cs#L18).

## `defaultPipeline`

<a id="api-5a4c9215b1b5cef0"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsSettings.defaultPipeline 4aeceb6d375ea8db4fff7bee51c3c0d1ea766b6154a73e55371d5d9b9eec2aad -->

```csharp
public static InnoEngine.Rendering.RenderPipelineAsset? InnoEngine.Rendering.GraphicsSettings.defaultPipeline { get; set; }
```

Gets or sets the project default pipeline used by requests without an override.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/GraphicsSettings.cs#L23).

## `frameStatistics`

<a id="api-512c30db461442b3"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsSettings.frameStatistics 8ef2122140d5eb48aeeb84b74ed0eb9f2ee6674a17587d1a8b773e168ff358cc -->

```csharp
public static InnoEngine.Rendering.RenderFrameStatistics? InnoEngine.Rendering.GraphicsSettings.frameStatistics { get; }
```

Gets statistics for the last completed frame, or `null` before the first frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/GraphicsSettings.cs#L32).
