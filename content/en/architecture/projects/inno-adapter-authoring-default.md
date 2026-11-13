---
title: Inno.Adapter.Authoring.Default
description: "Editor authoring and presentation providers composed over the neutral runtime catalog."
uid: project.inno-adapter-authoring-default
kind: project
owners: [Inno.Adapter.Authoring.Default]
exampleMode: host
exampleProjects: [Inno.Adapter.Authoring.Default]
---
# Inno.Adapter.Authoring.Default

Editor authoring and presentation providers composed over the neutral runtime catalog.

Start with [composing a runtime host](../../extending/runtime-host.md) and [runtime lifetime](../runtime-lifetime.md).

## Authoring-only composition

`DefaultAuthoringAdapterCatalog` delegates runtime families to `DefaultAdapterCatalog` and adds explicitly supplied rendering-authoring and presentation providers. `EditorHost` consumes `IAuthoringAdapterCatalog`, not concrete SDL applications, BGFX devices, MiniAudio devices or ImGui contexts. This catalog belongs to the authoring closure, not Player execution.

Platform, Rendering and Storage factories remain required in the runtime options. Both authoring and presentation provider collections are required; an empty collection deliberately installs no provider for that family.

## Preflight and atomic creation

Before allocating a GPU device, rendering-authoring registration validates exact runtime/authoring Backend ID pairing. Duplicate, missing and null registrations fail explicitly. Standard products select BGFX and ImGui; a custom product may select other compatible implementations.

Presentation uses the open `PresentationBackendId`, a frozen `supportedBackends` set and explicit context options. Unknown IDs, unassigned or duplicate providers and null results are errors. If shader, renderer or context creation fails, release all previously acquired resources and fail startup; never publish a half-initialized context.

Runtime integration belongs to the platform product; shader/native build integration belongs to distribution. Neither selection becomes an implicit OS check in the shared host.

## Host usage

Supply live, explicitly owned dependencies as described above. These examples compile against the host contract; they do not initialize a complete product or verify a device.

```csharp
using System.Collections.Generic;
using Inno.Adapter;
using Inno.Adapter.Authoring.Default;
using Inno.Adapter.Default;
using Inno.Adapter.Presentation;
using Inno.Adapter.Rendering;

static IAuthoringAdapterCatalog Compose(
    DefaultAdapterCatalogOptions options,
    IEnumerable<RenderingAuthoringBackendProvider> authoring,
    IEnumerable<PresentationBackendProvider> presentation
) => new DefaultAuthoringAdapterCatalog(options, authoring, presentation);
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Authoring.Default/Inno.Adapter.Authoring.Default.csproj) defines the host declarations. Source API extraction does not establish script visibility, native behavior or completed generation retirement.

## API reference

[Browse exact types and members](../../api/engine/adapter/authoring/default/index.md).
