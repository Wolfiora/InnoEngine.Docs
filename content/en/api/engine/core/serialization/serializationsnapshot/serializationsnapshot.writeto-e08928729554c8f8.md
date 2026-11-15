---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e08928729554c8f82704ee6bf4eda05dc0781b7f811393349e8ea0f4bf260d88
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationSnapshot.WriteTo(System.IO.Stream)
title: SerializationSnapshot.WriteTo
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: d9dd7aa1901aaf4a30dbd7dd7ef5fd149438b1535d9830770249dbe5898c50a9

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Streams this capture in the ordinary deterministic binary format without requiring a contiguous complete-output buffer.

## Parameters

**Parameter `destination`:** The writable caller-owned stream, which remains open.

## Remarks

Immutable keyed objects may retain canonical encoded blocks of at most 64 KiB each. Larger objects remain streamed, and cached bytes never contain source objects or generation references.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The destination is null.

**Exception `T:System.ArgumentException`:** The destination cannot be written.

**Exception `T:System.IO.IOException`:** The destination rejects a write; its partial bytes remain the caller's responsibility.
