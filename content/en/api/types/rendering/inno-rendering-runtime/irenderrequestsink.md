---
title: "IRenderRequestSink"
description: "Reference for IRenderRequestSink in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.f1bfbd76d3921eb2
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `IRenderRequestSink`

This reference describes `IRenderRequestSink` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Submit`](#api-009eed5ffe5a4b97) | Method |

## Type declaration

<a id="api-f1bfbd76d3921eb2"></a>
<!-- api: T:Inno.Rendering.Runtime.IRenderRequestSink 7d196fc97344e2435c89f2397e8184ddff07a1294e2b614909778897e2f1264b -->

```csharp
public interface Inno.Rendering.Runtime.IRenderRequestSink
```

Accepts rendering-model-neutral requests without exposing runtime or backend ownership.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/IRenderRequestSink.cs#L10).

## `Submit`

<a id="api-009eed5ffe5a4b97"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderRequestSink.Submit(Inno.Rendering.Runtime.RenderRequest) 5cebc318e9801300a5c8fb37f6eeb491e9e7ce636f0a2edde0fca2279f19b177 -->

```csharp
void Inno.Rendering.Runtime.IRenderRequestSink.Submit(Inno.Rendering.Runtime.RenderRequest request)
```

Queues one immutable view request for the current or next render frame.

**Parameter `request`:** Immutable pipeline-defined request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/IRenderRequestSink.cs#L18).
