---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.68e1a009125c2180ad20609faa36969fa3e3c46b8a52a5053f1f591e04b4d45f
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.NativeAssetSourceSerialization.Import``1(System.ReadOnlySpan{System.Byte},Inno.Assets.Pipeline.AssetSerializationServices,System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetDependency}@)
title: NativeAssetSourceSerialization.Import
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 5b904970bdea0a6523151e01cd2ce357ad283c554b4800dd745cc2ab0ff08190
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
