---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fea21b90333b0a0536a4d6bf70082e5d01aa82a372b33b41e1697fec0a17552d
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.AcquireKtxTexture(InnoEngine.Rendering.RenderPersistentResourceId,System.Int64,System.ReadOnlyMemory{System.Byte},System.Boolean,System.String)
title: IRenderResourceService.AcquireKtxTexture
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
reviewed: d16bd59fa89b53afd13626d9143b69a86c0d6b966d25d464e67aa23f4fedf915
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `containerData`:** Complete validated KTX bytes.

**Parameter `sRgb`:** Whether texture sampling performs sRGB decoding.

**Parameter `name`:** Diagnostic name.

## Returns

A handle owned by the active device generation.
