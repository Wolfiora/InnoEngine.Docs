---
uid: api.b6438f07caea2820e79e7d11875c9e749fc96d55836f485308082e8c563f4844
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderShaderVariant.FromMaterial(InnoEngine.Rendering.MaterialAsset)"
source: xml
reviewed: abd47c8184aac9d993d3c208a43a425af0929856af6cd62876cd0a315403b833
title: "FromMaterial"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Resolves the deterministic variant selected by a material.

**Parameter `material`:** The material whose declared keyword options are evaluated.

**Returns:** The canonical variant shared by authoring compilation and runtime lookup.

**Exception `T:System.InvalidOperationException`:** Thrown when the material has no shader definition or selects an unknown or conflicting option.
