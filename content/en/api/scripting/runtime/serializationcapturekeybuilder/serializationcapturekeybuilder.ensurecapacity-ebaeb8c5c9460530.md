---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ebaeb8c5c94605305622886f14b96d2b2fb5540a5f25ebf6a63060857cfc8552
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationCaptureKeyBuilder.EnsureCapacity(System.Int32)
title: SerializationCaptureKeyBuilder.EnsureCapacity
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: d4c0ca22a776b65f9da0ef4206410bc2a1909289ffcf25070bba97d5c5359dbd
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
