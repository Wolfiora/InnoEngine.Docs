---
uid: api.b7614e2436dcfc3594e3d5da8c6f1b9933c96b4f9ba0710b6dd4b28de4303d4d
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.NativeAssetSourceSerialization.Export\u0060\u00601(\u0060\u00600,Inno.Assets.Pipeline.AssetSerializationServices)"
source: xml
reviewed: 1b2daa0d04e92db7f37fad4fea80892db7812d8a1ca44c1883067eddd3861b13
title: "NativeAssetSourceSerialization.Export"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Serializes one asset's editable properties and direct asset dependencies.

**Type parameter `TAsset`:** Concrete asset source type.

**Parameter `asset`:** Unsaved or loaded asset whose editable state should be captured.

**Parameter `services`:** The generation-bound serialization services supplied by the export context.

**Returns:** Deterministic native source bytes.
