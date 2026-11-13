---
uid: api.0640ebc9160ea33f468d2d2a8a5fbf8add7ff7ec6b5ad9747b9c23f5a3ab7736
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.EditorAssets.EncodeNative(Inno.Assets.AssetObject)"
source: xml
reviewed: 329037c8731541f0ec3132c7228897c1e300fd0e494a0e5388092c50d774ef65
title: "EncodeNative"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Encodes a detached native asset with the current authoring pipeline's converters and reference context.

**Parameter `asset`:** Complete detached value to encode without saving or importing it.

**Returns:** Reload-safe native asset bytes suitable for draft state and History payloads.
