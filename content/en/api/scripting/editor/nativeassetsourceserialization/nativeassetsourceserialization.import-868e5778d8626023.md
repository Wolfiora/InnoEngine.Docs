---
uid: api.868e5778d86260236aa6885ed8ef226e6679d57c8f4fc1d9bce58d7688735515
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.NativeAssetSourceSerialization.Import\u0060\u00601(System.ReadOnlySpan{System.Byte},InnoEditor.Assets.AssetSerializationServices,System.Collections.Generic.IReadOnlyList{InnoEngine.Assets.AssetDependency}@)"
source: xml
reviewed: bc003095124be0a0e69d88f096cd22092b381e3aa37a8bfa19481c5fe3330ee0
title: "NativeAssetSourceSerialization.Import"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Restores one concrete asset and its declared direct dependencies.

## Type parameters

**Type parameter `TAsset`:** Concrete asset source type.

## Parameters

**Parameter `bytes`:** Native source bytes.

**Parameter `dependencies`:** Receives persistent dependencies discovered during export.

**Parameter `services`:** The generation-bound serialization and reference services supplied by the import context.

## Returns

A detached asset ready for an import transaction.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the source type identity is incompatible.
