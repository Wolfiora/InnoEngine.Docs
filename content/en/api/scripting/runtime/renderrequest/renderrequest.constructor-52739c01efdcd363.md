---
uid: api.52739c01efdcd363ed41900b4211220c8b20d63eac4e1abe8237f9f805022d9e
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderRequest.#ctor(System.String,InnoEngine.Rendering.RenderTarget,InnoEngine.Rendering.RenderViewport,InnoEngine.Rendering.RenderPipelineAsset,InnoEngine.Rendering.RenderFrameData,System.Int32)"
source: xml
reviewed: 5c5a1f5a59b3089c7cd95136919c17603708eec52bd2fc23100a6383663934ed
title: "RenderRequest.Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Creates an immutable render request.

**Parameter `name`:** Frame-local diagnostic name.

**Parameter `target`:** Render destination.

**Parameter `viewport`:** Destination pixel viewport.

**Parameter `pipeline`:** Optional per-request pipeline asset; the project default is used when null.

**Parameter `data`:** Optional pipeline-defined frame data copied into an immutable snapshot.

**Parameter `priority`:** Ascending frame scheduling priority.
