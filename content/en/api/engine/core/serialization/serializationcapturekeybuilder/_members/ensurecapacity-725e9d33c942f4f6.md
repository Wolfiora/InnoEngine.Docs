---
uid: api.725e9d33c942f4f693457e8c38202524ce599a98aa8d27da93bda67526405971
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationCaptureKeyBuilder.EnsureCapacity(System.Int32)"
source: xml
reviewed: 901ad4c80ec5923bba0b328b19ef80b1a09bdf13c1e4c0c6061b4d096678002b
title: "EnsureCapacity"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Reserves capacity for actual frozen input entries without changing a matching key.

**Parameter `capacity`:** The expected total entry count, including Core guards.

**Exception `T:System.ArgumentOutOfRangeException`:** Capacity is negative.

**Exception `T:System.InvalidOperationException`:** The callback has retired or is accessed from another thread.
