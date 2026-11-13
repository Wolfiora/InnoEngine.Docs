---
uid: api.6f1a55430c78a387043393c590dce26cacd96e57296b73bd7c4a271a8f2f34bc
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.TryResolveGeometry(InnoEngine.Rendering.GeometryAsset,InnoEngine.Rendering.RenderGeometry@)"
source: xml
reviewed: 7eac002abb4352dfb5d9ecb0ffd6187a785a93aeca1fbba12f7f839a4ac0f5e8
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
