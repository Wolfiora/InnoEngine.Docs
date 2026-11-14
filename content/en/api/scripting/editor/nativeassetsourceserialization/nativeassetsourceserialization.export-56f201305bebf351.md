---
uid: api.56f201305bebf35166a17fe3b0a90d068311ea987b6e29a759fd948e5bddaf87
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.NativeAssetSourceSerialization.Export\u0060\u00601(\u0060\u00600,InnoEditor.Assets.AssetSerializationServices)"
source: xml
reviewed: ad8b0d1790a453c8fce368d7b92dfbb90400ef0e433438a3f2cec59795e0c7e3
title: "NativeAssetSourceSerialization.Export"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Serializes one asset's editable properties and direct asset dependencies.

## Type parameters

**Type parameter `TAsset`:** Concrete asset source type.

## Parameters

**Parameter `asset`:** Unsaved or loaded asset whose editable state should be captured.

**Parameter `services`:** The generation-bound serialization services supplied by the export context.

## Returns

Deterministic native source bytes.
