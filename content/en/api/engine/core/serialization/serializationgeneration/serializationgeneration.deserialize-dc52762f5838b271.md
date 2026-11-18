---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.dc52762f5838b271d7fbc85a2a896f841e22d1104d2a6c7aa420d65852410cff
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationGeneration.Deserialize``1(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationContext)
title: SerializationGeneration.Deserialize
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: f4a6729736ac9c3314631f45b41131dc7557310a780b170fa1dda02e11be91c1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `T`:** The concrete root type to create.

## Parameters

**Parameter `bytes`:** Deterministic binary data containing the root object.

**Parameter `context`:** Optional immutable converter context for this operation.

## Returns

The restored root object.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown when this generation has already been disposed.
