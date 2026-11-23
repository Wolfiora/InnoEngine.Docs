---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.868e5778d86260236aa6885ed8ef226e6679d57c8f4fc1d9bce58d7688735515
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.NativeAssetSourceSerialization.Import``1(System.ReadOnlySpan{System.Byte},InnoEditor.Assets.AssetSerializationServices,System.Collections.Generic.IReadOnlyList{InnoEngine.Assets.AssetDependency}@)
title: NativeAssetSourceSerialization.Import
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
sourceFingerprint: a970892e3514ad8e59faf6059d456b655f9d724ebe5f576a455f79757e86a070
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** Concrete asset source type.

## Parameters

**Parameter `bytes`:** Native source bytes.

**Parameter `services`:** The generation-bound serialization and reference services supplied by the import context.

**Parameter `dependencies`:** Receives persistent dependencies discovered during export.

## Returns

A detached asset ready for an import transaction.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the source type identity is incompatible.
