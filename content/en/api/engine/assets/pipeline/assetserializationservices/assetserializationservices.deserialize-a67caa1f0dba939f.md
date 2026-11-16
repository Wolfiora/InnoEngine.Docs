---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a67caa1f0dba939f62602de5fa1a161538bd5872f9e5b55b3a8735ccd34ab26b
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSerializationServices.Deserialize``1(System.ReadOnlySpan{System.Byte})
title: AssetSerializationServices.Deserialize
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 7d756be261501d98457595551dcff2b5ad6a02e3d39f017454411abe96f3c8e2
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TValue`:** The serializable value contract.

## Parameters

**Parameter `bytes`:** Complete structured bytes produced by the common serialization system.

## Returns

A restored value owned by the caller.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the value contains an asset reference but no candidate resolver is available.
