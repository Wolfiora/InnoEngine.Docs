---
title: "RenderModelOutput"
description: "Reference for RenderModelOutput in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.827b238ef341b021
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderModelOutput`

This reference describes `RenderModelOutput` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4f368aea6b8f5192) | Method |
| [`data`](#api-98a4443d6705d56e) | Property |
| [`name`](#api-f965ca292719fc41) | Property |
| [`pipeline`](#api-3cea47cfc956d083) | Property |
| [`targetFormat`](#api-db83f26e1986541f) | Property |

## Type declaration

<a id="api-827b238ef341b021"></a>
<!-- api: T:InnoEngine.Rendering.RenderModelOutput a5b0ff7887c66c96ac026ffdde5a0ee0ffc1d88a5ee6cafd068684e7ae819a85 -->

```csharp
public sealed class InnoEngine.Rendering.RenderModelOutput
```

Gets one model's prepared pipeline data for a host-owned target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderModelOutput.cs#L15).

## `#ctor`

<a id="api-4f368aea6b8f5192"></a>
<!-- api: M:InnoEngine.Rendering.RenderModelOutput.#ctor(System.String,InnoEngine.Rendering.RenderPipelineAsset,InnoEngine.Rendering.RenderFrameData,InnoEngine.Rendering.RenderTextureFormat) 47e5452df72a66f94fb53c55ae0a62e8b5d0ab8dba9f1c51cfe18e86e6f6f956 -->

```csharp
public InnoEngine.Rendering.RenderModelOutput.RenderModelOutput(string name, InnoEngine.Rendering.RenderPipelineAsset pipeline, InnoEngine.Rendering.RenderFrameData data, InnoEngine.Rendering.RenderTextureFormat targetFormat = InnoEngine.Rendering.RenderTextureFormat.RGBA8Srgb)
```

Creates prepared model output.

**Parameter `name`:** Frame-local diagnostic name.

**Parameter `pipeline`:** Exact model pipeline.

**Parameter `data`:** Immutable model frame data.

**Parameter `targetFormat`:** Required color target format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderModelOutput.cs#L32).

## `data`

<a id="api-98a4443d6705d56e"></a>
<!-- api: P:InnoEngine.Rendering.RenderModelOutput.data b278cea666d974296ce738647f8507227a81335b3089ce2f0a73bc35299e287c -->

```csharp
public InnoEngine.Rendering.RenderFrameData InnoEngine.Rendering.RenderModelOutput.data { get; }
```

Gets model frame data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderModelOutput.cs#L56).

## `name`

<a id="api-f965ca292719fc41"></a>
<!-- api: P:InnoEngine.Rendering.RenderModelOutput.name e74bf6743f3c375188a4c03a5dbfe8ec104aac827616912171646dba17208869 -->

```csharp
public string InnoEngine.Rendering.RenderModelOutput.name { get; }
```

Gets the diagnostic name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderModelOutput.cs#L48).

## `pipeline`

<a id="api-3cea47cfc956d083"></a>
<!-- api: P:InnoEngine.Rendering.RenderModelOutput.pipeline 3d42f5372705114b4761d67d566b4e99536387e7a2cf54d107346dceb0b58059 -->

```csharp
public InnoEngine.Rendering.RenderPipelineAsset InnoEngine.Rendering.RenderModelOutput.pipeline { get; }
```

Gets the model's pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderModelOutput.cs#L52).

## `targetFormat`

<a id="api-db83f26e1986541f"></a>
<!-- api: P:InnoEngine.Rendering.RenderModelOutput.targetFormat 98a5a18e7344cffbabf4f39000993290acfe99827606189cde3692d1ae6f362f -->

```csharp
public InnoEngine.Rendering.RenderTextureFormat InnoEngine.Rendering.RenderModelOutput.targetFormat { get; }
```

Gets required target format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/RenderModelOutput.cs#L60).
