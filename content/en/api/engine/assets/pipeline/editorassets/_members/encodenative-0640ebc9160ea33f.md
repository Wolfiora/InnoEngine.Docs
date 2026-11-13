---
uid: api.0640ebc9160ea33f468d2d2a8a5fbf8add7ff7ec6b5ad9747b9c23f5a3ab7736
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.EditorAssets.EncodeNative(Inno.Assets.AssetObject)"
source: xml
reviewed: 9e5dda82e7af020a99d7bb62e74184d239cd1823f25ddf5f5b6f606a498a89d2
title: "EncodeNative"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Encodes a detached native asset with the current authoring pipeline's converters and reference context.

**Parameter `asset`:** Complete detached value to encode without saving or importing it.

**Returns:** Reload-safe native asset bytes suitable for draft state and History payloads.
