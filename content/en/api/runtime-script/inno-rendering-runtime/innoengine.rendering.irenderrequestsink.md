---
title: "IRenderRequestSink"
description: "Reference for IRenderRequestSink in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.fc3652bd2113cb2a
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `IRenderRequestSink`

This reference describes `IRenderRequestSink` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`Submit`](#api-dfa6b64339c7ffe3) | Method |

## Type declaration

<a id="api-fc3652bd2113cb2a"></a>
<!-- api: T:InnoEngine.Rendering.IRenderRequestSink aa082f9a1a92f81763f5d9c4ece54868b8362b173364631297db9629760f7902 -->

```csharp
public interface InnoEngine.Rendering.IRenderRequestSink
```

Accepts rendering-model-neutral requests without exposing runtime or backend ownership.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/IRenderRequestSink.cs#L10).

## `Submit`

<a id="api-dfa6b64339c7ffe3"></a>
<!-- api: M:InnoEngine.Rendering.IRenderRequestSink.Submit(InnoEngine.Rendering.RenderRequest) 6f61794fb2511fca5290e5d0006fc9b8023df64295742eabb8700ee97529b12d -->

```csharp
void InnoEngine.Rendering.IRenderRequestSink.Submit(InnoEngine.Rendering.RenderRequest request)
```

Queues one immutable view request for the current or next render frame.

**Parameter `request`:** Immutable pipeline-defined request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/IRenderRequestSink.cs#L18).
