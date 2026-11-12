---
title: "IRenderFrameUploadService"
description: "Reference for IRenderFrameUploadService in Inno.Rendering."
uid: api.inno.rendering.runtime-script.168e39a98fde865f
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `IRenderFrameUploadService`

This reference describes `IRenderFrameUploadService` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`UploadBuffer`](#api-fd3fc43af6cd281c) | Method |

## Type declaration

<a id="api-168e39a98fde865f"></a>
<!-- api: T:InnoEngine.Rendering.IRenderFrameUploadService 95f3a54ead6d6f9fa425dafb28682eb1fa32fdbc272f5693a83b13c5fb7e94a0 -->

```csharp
public interface InnoEngine.Rendering.IRenderFrameUploadService
```

Streams immutable CPU data into reusable GPU pages for the current frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/IRenderFrameUploadService.cs#L10).

## `UploadBuffer`

<a id="api-fd3fc43af6cd281c"></a>
<!-- api: M:InnoEngine.Rendering.IRenderFrameUploadService.UploadBuffer(InnoEngine.Rendering.RenderBufferUploadDescriptor,System.ReadOnlyMemory{System.Byte},System.String) b50e950f9fb8c4c9ae69a675fc69140a509039986ed9845511cbc9585915a5d3 -->

```csharp
InnoEngine.Rendering.RenderBufferSlice InnoEngine.Rendering.IRenderFrameUploadService.UploadBuffer(InnoEngine.Rendering.RenderBufferUploadDescriptor descriptor, System.ReadOnlyMemory<byte> data, string name)
```

Uploads complete elements and returns a slice valid only during the current frame.

**Parameter `descriptor`:** Element interpretation and permitted GPU uses.

**Parameter `data`:** Tightly packed complete element bytes.

**Parameter `name`:** Diagnostic name used when a backing page is allocated.

**Returns:** A current-frame slice covering the uploaded elements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/IRenderFrameUploadService.cs#L27).
