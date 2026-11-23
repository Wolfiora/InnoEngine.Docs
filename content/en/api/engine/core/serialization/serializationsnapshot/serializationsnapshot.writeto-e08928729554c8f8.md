---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e08928729554c8f82704ee6bf4eda05dc0781b7f811393349e8ea0f4bf260d88
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationSnapshot.WriteTo(System.IO.Stream)
title: SerializationSnapshot.WriteTo
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: fcdea0c3d5435c3e74c0d1228f37536683a09efaba444c0510b4a0f720f3d4b7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `destination`:** The writable caller-owned stream, which remains open.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The destination is null.

**Exception `T:System.ArgumentException`:** The destination cannot be written.

**Exception `T:System.IO.IOException`:** The destination rejects a write; its partial bytes remain the caller's responsibility.

## Remarks

Immutable keyed objects may retain canonical encoded blocks of at most 64 KiB each. Larger objects remain streamed, and cached bytes never contain source objects or generation references.
