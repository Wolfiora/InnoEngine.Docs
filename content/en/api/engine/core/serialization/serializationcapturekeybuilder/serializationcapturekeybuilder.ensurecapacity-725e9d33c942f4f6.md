---
uid: api.725e9d33c942f4f693457e8c38202524ce599a98aa8d27da93bda67526405971
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationCaptureKeyBuilder.EnsureCapacity(System.Int32)"
source: xml
reviewed: 04fdaedfe53029345abb9aa3822560e77c2916669155b0190215dc5750a3061c
title: "SerializationCaptureKeyBuilder.EnsureCapacity"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Reserves capacity for actual frozen input entries without changing a matching key.

**Parameter `capacity`:** The expected total entry count, including Core guards.

**Exception `T:System.ArgumentOutOfRangeException`:** Capacity is negative.

**Exception `T:System.InvalidOperationException`:** The callback has retired or is accessed from another thread.
