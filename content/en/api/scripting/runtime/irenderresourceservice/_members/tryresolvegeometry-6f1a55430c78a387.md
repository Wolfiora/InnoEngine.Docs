---
uid: api.6f1a55430c78a387043393c590dce26cacd96e57296b73bd7c4a271a8f2f34bc
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.TryResolveGeometry(InnoEngine.Rendering.GeometryAsset,InnoEngine.Rendering.RenderGeometry@)"
source: xml
reviewed: d5519476d7321e8b6e4d129188c786ebcd886bd1b3e9feedb08da05d5bd85c3c
title: "TryResolveGeometry"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Resolves imported helper geometry into persistent vertex and index buffers.

**Parameter `geometry`:** Imported geometry asset.

**Parameter `resolvedGeometry`:** Receives generation-scoped GPU geometry when successful.

**Returns:** True when current or last-good geometry is usable.
