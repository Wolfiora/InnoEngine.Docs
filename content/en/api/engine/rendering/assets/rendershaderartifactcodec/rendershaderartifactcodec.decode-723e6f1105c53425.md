---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.723e6f1105c534252d730292ad872fa19bfb449fa97c577114057f897925ddde
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderShaderArtifactCodec.Decode(System.ReadOnlySpan{System.Byte},System.String,Inno.Rendering.Assets.RenderShaderVariant)
title: RenderShaderArtifactCodec.Decode
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
reviewed: 57d39369e428ff42184ae6402b7e6ec92b886274c1096f6fb2f7368e4b031985
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `bytes`:** The complete binary deployment payload.

**Parameter `expectedShaderName`:** The shader name declared by the requesting runtime asset.

**Parameter `expectedVariant`:** The exact static keyword selection requested by the material.

## Returns

A fully validated, source-free artifact ready for GPU resource creation.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** Thrown when the payload is corrupt, exceeds safety limits, or does not match the request.
