---
uid: api.e23d0798272baf49102211a4ff2ab5f0db16da39ad1dca4de7ea425a9f9f89c6
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationCaptureKeyBuilder.TryAddProperties(Inno.Core.Serialization.ISerializable)"
source: xml
reviewed: a40562feb8f3d2ae13c62d602d7811f8dad4fd2becc69f1c1b858cf3358cf678
title: "SerializationCaptureKeyBuilder.TryAddProperties"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Adds a complete property revision only when current metadata proves context-free default capture without converters.

## Parameters

**Parameter `source`:** The current serializable identity object.

## Returns

True for certified property state; false invalidates the complete key and requires normal capture.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Source is null.

**Exception `T:System.InvalidOperationException`:** Metadata/revision access fails, or the callback has retired or is accessed from another thread.
