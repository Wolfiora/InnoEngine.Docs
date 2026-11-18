---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ebaeb8c5c94605305622886f14b96d2b2fb5540a5f25ebf6a63060857cfc8552
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationCaptureKeyBuilder.EnsureCapacity(System.Int32)
title: SerializationCaptureKeyBuilder.EnsureCapacity
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
sourceFingerprint: ac56817e5b1df09c2f33a03248c7e664b8a446162ec579379b9f8a5232d14aaf
apiScope: Runtime
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
