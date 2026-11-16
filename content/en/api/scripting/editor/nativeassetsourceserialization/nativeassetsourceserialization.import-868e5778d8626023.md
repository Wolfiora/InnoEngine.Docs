---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.868e5778d86260236aa6885ed8ef226e6679d57c8f4fc1d9bce58d7688735515
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.NativeAssetSourceSerialization.Import``1(System.ReadOnlySpan{System.Byte},InnoEditor.Assets.AssetSerializationServices,System.Collections.Generic.IReadOnlyList{InnoEngine.Assets.AssetDependency}@)
title: NativeAssetSourceSerialization.Import
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
reviewed: 29cbbb9bd43ba05acfb65e64010f5242055b97c61de3e1ad694832a62faa2168
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

**Parameter `dependencies`:** Receives persistent dependencies discovered during export.

**Parameter `services`:** The generation-bound serialization and reference services supplied by the import context.

## Returns

A detached asset ready for an import transaction.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the source type identity is incompatible.
