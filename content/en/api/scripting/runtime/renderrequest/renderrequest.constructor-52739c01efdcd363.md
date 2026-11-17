---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.52739c01efdcd363ed41900b4211220c8b20d63eac4e1abe8237f9f805022d9e
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderRequest.#ctor(System.String,InnoEngine.Rendering.RenderTarget,InnoEngine.Rendering.RenderViewport,InnoEngine.Rendering.RenderPipelineAsset,InnoEngine.Rendering.RenderFrameData,System.Int32)
title: RenderRequest.Constructor
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
reviewed: 73fdf2c99758c08b95ece738722cfb2835e31ee4bc6493bc645283f6e4cd5ece
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `name`:** Frame-local diagnostic name.

**Parameter `target`:** Render destination.

**Parameter `viewport`:** Destination pixel viewport.

**Parameter `pipeline`:** Optional per-request pipeline asset; the project default is used when null.

**Parameter `data`:** Optional pipeline-defined frame data copied into an immutable snapshot.

**Parameter `priority`:** Ascending frame scheduling priority.
