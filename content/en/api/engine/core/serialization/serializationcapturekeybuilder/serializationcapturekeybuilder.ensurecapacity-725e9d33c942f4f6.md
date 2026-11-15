---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.725e9d33c942f4f693457e8c38202524ce599a98aa8d27da93bda67526405971
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationCaptureKeyBuilder.EnsureCapacity(System.Int32)
title: SerializationCaptureKeyBuilder.EnsureCapacity
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: 04fdaedfe53029345abb9aa3822560e77c2916669155b0190215dc5750a3061c

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Reserves capacity for actual frozen input entries without changing a matching key.

## Parameters

**Parameter `capacity`:** The expected total entry count, including Core guards.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Capacity is negative.

**Exception `T:System.InvalidOperationException`:** The callback has retired or is accessed from another thread.
