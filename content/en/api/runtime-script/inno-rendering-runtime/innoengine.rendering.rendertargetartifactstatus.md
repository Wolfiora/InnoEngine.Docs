---
title: "RenderTargetArtifactStatus"
description: "Reference for RenderTargetArtifactStatus in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.8ef34360b9fda798
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderTargetArtifactStatus`

This reference describes `RenderTargetArtifactStatus` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Failed`](#api-ce932ef6889231f3) | Field |
| [`Pending`](#api-ac207d21aebecbb6) | Field |
| [`Ready`](#api-40511eab4e971a0f) | Field |
| [`Unavailable`](#api-89141dbe75029ac9) | Field |

## Type declaration

<a id="api-8ef34360b9fda798"></a>
<!-- api: T:InnoEngine.Rendering.RenderTargetArtifactStatus 3861779a68c4c2471d6250e2e5587c432d8058c1d56e32200ec1feb7c0fcb813 -->

```csharp
public enum InnoEngine.Rendering.RenderTargetArtifactStatus : int
```

Describes the current availability of one target-specific rendering artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Deployment/RenderTargetArtifactStatus.cs#L9).

## `Failed`

<a id="api-ce932ef6889231f3"></a>
<!-- api: F:InnoEngine.Rendering.RenderTargetArtifactStatus.Failed f183e6fce5629e78a21a906015a2f13dea41898d7fb874b6a6f52b0612e59d95 -->

```csharp
InnoEngine.Rendering.RenderTargetArtifactStatus.Failed = 3
```

Artifact production completed unsuccessfully and published a specific diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Deployment/RenderTargetArtifactStatus.cs#L29).

## `Pending`

<a id="api-ac207d21aebecbb6"></a>
<!-- api: F:InnoEngine.Rendering.RenderTargetArtifactStatus.Pending a07ff57e23e2f6369079e6bbf0bbafa63f3e0cd98c5a664c9a7a812928233957 -->

```csharp
InnoEngine.Rendering.RenderTargetArtifactStatus.Pending = 1
```

Artifact production is still running and no usable artifact is available yet.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Deployment/RenderTargetArtifactStatus.cs#L19).

## `Ready`

<a id="api-40511eab4e971a0f"></a>
<!-- api: F:InnoEngine.Rendering.RenderTargetArtifactStatus.Ready 07d91219590ffb7e9a2fae8bb9d959109e8877c8f2c8dfefe071dac7ff9b047f -->

```csharp
InnoEngine.Rendering.RenderTargetArtifactStatus.Ready = 0
```

A validated artifact is available for immediate use.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Deployment/RenderTargetArtifactStatus.cs#L14).

## `Unavailable`

<a id="api-89141dbe75029ac9"></a>
<!-- api: F:InnoEngine.Rendering.RenderTargetArtifactStatus.Unavailable 0ce1f8665c14eb92f5261fa19ad9e9399aa6f44ed96291c9f474cd49bd57a5e4 -->

```csharp
InnoEngine.Rendering.RenderTargetArtifactStatus.Unavailable = 2
```

The active deployment does not contain the requested artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Deployment/RenderTargetArtifactStatus.cs#L24).
