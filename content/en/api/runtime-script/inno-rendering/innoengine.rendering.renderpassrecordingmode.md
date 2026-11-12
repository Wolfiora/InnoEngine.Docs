---
title: "RenderPassRecordingMode"
description: "Reference for RenderPassRecordingMode in Inno.Rendering."
uid: api.inno.rendering.runtime-script.371120ccd5099c49
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderPassRecordingMode`

This reference describes `RenderPassRecordingMode` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Parallel`](#api-6148685b354e3b94) | Field |
| [`Serial`](#api-2ca15db194e5209a) | Field |

## Type declaration

<a id="api-371120ccd5099c49"></a>
<!-- api: T:InnoEngine.Rendering.RenderPassRecordingMode bc0d84e6ae172424159adf4c27ed929efd397e3278d0055f1e4917cb62d71b34 -->

```csharp
public enum InnoEngine.Rendering.RenderPassRecordingMode : int
```

Controls where a frame-local pass callback records backend-neutral commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L60).

## `Parallel`

<a id="api-6148685b354e3b94"></a>
<!-- api: F:InnoEngine.Rendering.RenderPassRecordingMode.Parallel 7aed875e7cfe6ed8164a9a803aaf5297d6d350f95123c3d1ab795ce02ddfa1d4 -->

```csharp
InnoEngine.Rendering.RenderPassRecordingMode.Parallel = 1
```

Records into an isolated command list on a worker thread, then replays in graph order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L69).

## `Serial`

<a id="api-2ca15db194e5209a"></a>
<!-- api: F:InnoEngine.Rendering.RenderPassRecordingMode.Serial 98ecc46fbf12e959e8b55d0daf7694ce8b8dd1f651ad223c698134d6a195b171 -->

```csharp
InnoEngine.Rendering.RenderPassRecordingMode.Serial = 0
```

Records directly on the graph execution thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L65).
