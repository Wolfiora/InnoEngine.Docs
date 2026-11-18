---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.725e9d33c942f4f693457e8c38202524ce599a98aa8d27da93bda67526405971
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationCaptureKeyBuilder.EnsureCapacity(System.Int32)
title: SerializationCaptureKeyBuilder.EnsureCapacity
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: 4a0a3313b76cc97b0506ea84bfedd6b4dc8b4a80eb0e34aa97e6892acd8cf761
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `capacity`:** The expected total entry count, including Core guards.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Capacity is negative.

**Exception `T:System.InvalidOperationException`:** The callback has retired or is accessed from another thread.
