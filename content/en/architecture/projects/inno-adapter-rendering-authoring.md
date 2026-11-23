---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-adapter-rendering-authoring
symbol: project:Inno.Adapter.Rendering.Authoring
title: Inno.Adapter.Rendering.Authoring
kind: project
owners:
- Inno.Adapter.Rendering.Authoring
sourceFingerprint: 694a9822fb9f72953bb496d9a266f1dc1bff9d85a2dc938262baa461cd8b6f90
contracts: []
outdatedFor: 7669fa693c83a80c48c62c3bf6e7382f466b7dea1e5a708258356ecbb241caeb

# Authoring metadata. Edit these fields and the explanation below.
source: FLwolfy
description:
- Backend-matched shader and texture compiler factories for authoring hosts.
outdated: false
---
# Inno.Adapter.Rendering.Authoring

Backend-matched shader and texture compiler factories for authoring hosts.

Start with [rendering tasks](../../manual/rendering/index.md) and [frame ownership](../render-frame.md).

## Pair with runtime registration

IRenderingAuthoringBackendFactory creates shader and texture target compilers through neutral asset-authoring contracts. It selects by the same open RenderingBackendID used for runtime device creation. Concrete shaderc/texturec tools, process execution and physical paths remain backend implementation details.

RenderingAuthoringBackendProvider captures its immutable ID in the protected constructor and supplies both compiler factories. This is explicit composition registration, not type discovery; it does not override an ID getter or probe a device to discover identity.

RenderingAuthoringBackendCatalog freezes providers and validates exact pairing with runtime backend IDs before allocating a native device. Unassigned, duplicate and unmatched registration sets fail with ArgumentException. Unknown IDs fail at creation; supportedBackends reports the frozen set.

## Authoring-only dependency direction

DefaultAuthoringAdapterCatalog receives the explicit runtime options and authoring/presentation providers. The rendering factory and authoring collection must pair; no null-default BGFX path exists. Provider lifetime belongs to the containing composition.

This assembly can depend on Rendering.Assets.Authoring. Runtime Rendering adapters, the neutral Adapter catalog, DefaultAdapterCatalog, Shell and Player must not depend back on it.

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering.Authoring/Inno.Adapter.Rendering.Authoring.csproj) defines the host declarations. Source API extraction does not establish script visibility, native behavior or completed generation retirement.

## API reference

[Browse types and members](../../api/engine/adapter/rendering/authoring/index.md).
