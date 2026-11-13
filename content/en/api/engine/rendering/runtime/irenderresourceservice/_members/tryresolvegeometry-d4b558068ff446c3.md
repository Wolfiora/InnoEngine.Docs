---
uid: api.d4b558068ff446c31d6d763ea31ab3fffc2e07519e0b10fa71ff5323b3b194dc
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.TryResolveGeometry(Inno.Rendering.Assets.GeometryAsset,Inno.Rendering.Runtime.RenderGeometry@)"
source: xml
reviewed: e5e6097975f9a8f81e8ee58455b2b15995442e56fd54ec7ecce82ae8bcae99f8
title: "TryResolveGeometry"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Resolves imported helper geometry into persistent vertex and index buffers.

**Parameter `geometry`:** Imported geometry asset.

**Parameter `resolvedGeometry`:** Receives generation-scoped GPU geometry when successful.

**Returns:** True when current or last-good geometry is usable.
