---
title: "RenderPassRecordingMode"
description: "Reference for RenderPassRecordingMode in Inno.Rendering."
uid: api.inno.rendering.43617b04b122f7f8
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderPassRecordingMode`

This reference describes `RenderPassRecordingMode` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Parallel`](#api-80e2935c8d522bce) | Field |
| [`Serial`](#api-a4625f8944854d5b) | Field |

## Type declaration

<a id="api-43617b04b122f7f8"></a>
<!-- api: T:Inno.Rendering.RenderPassRecordingMode bd2b72938844a5aec56d957f4e29deb4e001a1197118e61ef39165a53f439ef1 -->

```csharp
public enum Inno.Rendering.RenderPassRecordingMode : int
```

Controls where a frame-local pass callback records backend-neutral commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L60).

## `Parallel`

<a id="api-80e2935c8d522bce"></a>
<!-- api: F:Inno.Rendering.RenderPassRecordingMode.Parallel 0d2324116e21ed8e65fc9addbe10dc0f696f642d95af49fd6682859c31123816 -->

```csharp
Inno.Rendering.RenderPassRecordingMode.Parallel = 1
```

Records into an isolated command list on a worker thread, then replays in graph order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L69).

## `Serial`

<a id="api-a4625f8944854d5b"></a>
<!-- api: F:Inno.Rendering.RenderPassRecordingMode.Serial 4166fca48d3db61be4983a204ac780eb3f0bafaf3c0cc7e3c2bc5554cf7118dd -->

```csharp
Inno.Rendering.RenderPassRecordingMode.Serial = 0
```

Records directly on the graph execution thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L65).
