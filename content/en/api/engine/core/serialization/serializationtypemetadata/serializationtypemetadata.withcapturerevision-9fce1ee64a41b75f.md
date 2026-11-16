---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9fce1ee64a41b75f1de9ebc9163ee6580c8d36d1e5e86cb7007e564e64212abc
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationTypeMetadata.WithCaptureRevision(System.Func{System.Object,System.Nullable{System.UInt64}})
title: SerializationTypeMetadata.WithCaptureRevision
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: 4a0d7e4ecdcb9491dd4c1bc6670234bd275370b1a84589fa7abcfd1cdd3166ff
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `readRevision`:** The owner-controlled revision reader; null results decline reuse and counters must not repeat for different state.

## Returns

An immutable declaration; snapshots never retain this reader or metadata.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The revision reader is null.

**Exception `T:System.InvalidOperationException`:** The declaration is not a sealed identity reference type.
