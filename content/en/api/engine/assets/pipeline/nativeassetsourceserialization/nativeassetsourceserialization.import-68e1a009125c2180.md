---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.68e1a009125c2180ad20609faa36969fa3e3c46b8a52a5053f1f591e04b4d45f
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.NativeAssetSourceSerialization.Import``1(System.ReadOnlySpan{System.Byte},Inno.Assets.Pipeline.AssetSerializationServices,System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetDependency}@)
title: NativeAssetSourceSerialization.Import
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 6e83d7638feadc62ce5fc70b818a4647535a8ec69f4e37e5ea449ab8e3de71c2

# Authoring metadata. Edit these fields and the explanation below.
source: xml
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
