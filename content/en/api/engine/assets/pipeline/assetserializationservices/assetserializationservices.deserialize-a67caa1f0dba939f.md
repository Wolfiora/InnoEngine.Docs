---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a67caa1f0dba939f62602de5fa1a161538bd5872f9e5b55b3a8735ccd34ab26b
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSerializationServices.Deserialize``1(System.ReadOnlySpan{System.Byte})
title: AssetSerializationServices.Deserialize
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 0aae49185c3e7df40e4220142b9516c8451b02d0d0a3fcbd25024d65edceb7ff
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
