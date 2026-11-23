---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b0d5518a91cd58758a9ad9ea1e044e1661821771b245916f060fcbff2e9813a5
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.AcquireKtxTexture(InnoEngine.Rendering.RenderPersistentResourceID,System.Int64,System.ReadOnlyMemory{System.Byte},System.Boolean,System.String)
title: IRenderResourceService.AcquireKtxTexture
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
sourceFingerprint: 6b4c11c9a96a42b3f0ffdd9492ad2e044c1e61f62327c28fdf58f7fd6e83bc0a
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
