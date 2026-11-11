---
title: "BgfxSurfaceRole"
description: "Reference for BgfxSurfaceRole in Inno.Adapter.Rendering.Bgfx."
uid: api.inno.adapter.rendering.bgfx.bf46ff7472b88918
kind: api
owners:
  - Inno.Adapter.Rendering.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-adapter-rendering-bgfx
---
# `BgfxSurfaceRole`

This reference describes `BgfxSurfaceRole` in `Inno.Adapter.Rendering.Bgfx`. Read the [shared contract](../../../projects/inno-adapter-rendering-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Additional`](#api-af7cb54b88b7eb4d) | Field |
| [`Primary`](#api-0a4b39bc74e6c219) | Field |

## Type declaration

<a id="api-bf46ff7472b88918"></a>
<!-- api: T:Inno.Adapter.Rendering.Bgfx.BgfxSurfaceRole 00ea9584898bdbd523b6291f1592830fc208bc446abc41bbcd2a2f2a1d22a91f -->

```csharp
public enum Inno.Adapter.Rendering.Bgfx.BgfxSurfaceRole : int
```

Identifies how a borrowed window is used by a BGFX device, independently of its system ABI.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/Surfaces/IBgfxSurfaceIntegration.cs#L8).

## `Additional`

<a id="api-af7cb54b88b7eb4d"></a>
<!-- api: F:Inno.Adapter.Rendering.Bgfx.BgfxSurfaceRole.Additional c7f5c560346abf23c1c9495ec73a6ac9fdd9f8da001932ed151a06f440f60f0c -->

```csharp
Inno.Adapter.Rendering.Bgfx.BgfxSurfaceRole.Additional = 1
```

An additional window whose framebuffer is owned by an active device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/Surfaces/IBgfxSurfaceIntegration.cs#L17).

## `Primary`

<a id="api-0a4b39bc74e6c219"></a>
<!-- api: F:Inno.Adapter.Rendering.Bgfx.BgfxSurfaceRole.Primary b534315d545cab4e6bee5587e4148620d6f1b14ea21274503687337360ef7882 -->

```csharp
Inno.Adapter.Rendering.Bgfx.BgfxSurfaceRole.Primary = 0
```

The primary window supplied before device initialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/Surfaces/IBgfxSurfaceIntegration.cs#L13).
