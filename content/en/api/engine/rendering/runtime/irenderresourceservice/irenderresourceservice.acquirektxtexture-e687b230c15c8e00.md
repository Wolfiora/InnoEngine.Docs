---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e687b230c15c8e003d300d90868b0556de5cbf98886fd1ded3ad4a4e25b37911
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.AcquireKtxTexture(Inno.Rendering.Runtime.RenderPersistentResourceId,System.Int64,System.ReadOnlyMemory{System.Byte},System.Boolean,System.String)
title: IRenderResourceService.AcquireKtxTexture
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: 07ae7c0218de968f9491700e595cdcd310c538aee8150caf4c9349add56c39ac
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
