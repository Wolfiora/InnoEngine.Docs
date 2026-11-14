---
uid: api.a67caa1f0dba939f62602de5fa1a161538bd5872f9e5b55b3a8735ccd34ab26b
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSerializationServices.Deserialize\u0060\u00601(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: d52b4ec5daac1bc6c086b432972938acaf0e2bf2d7b1ebb813fabd4ba68effc3
title: "AssetSerializationServices.Deserialize"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Deserializes one structured value against the active importer candidate generation.

## Type parameters

**Type parameter `TValue`:** The serializable value contract.

## Parameters

**Parameter `bytes`:** Complete structured bytes produced by the common serialization system.

## Returns

A restored value owned by the caller.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the value contains an asset reference but no candidate resolver is available.
