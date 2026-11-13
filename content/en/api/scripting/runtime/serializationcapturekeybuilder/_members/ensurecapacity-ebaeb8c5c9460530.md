---
uid: api.ebaeb8c5c94605305622886f14b96d2b2fb5540a5f25ebf6a63060857cfc8552
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationCaptureKeyBuilder.EnsureCapacity(System.Int32)"
source: xml
reviewed: e89752ac9171ef5e84c2cfbddbd49cff44397537995c5f35bc63ea9fe7c058fa
title: "EnsureCapacity"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
---

Reserves capacity for actual frozen input entries without changing a matching key.

**Parameter `capacity`:** The expected total entry count, including Core guards.

**Exception `T:System.ArgumentOutOfRangeException`:** Capacity is negative.

**Exception `T:System.InvalidOperationException`:** The callback has retired or is accessed from another thread.
