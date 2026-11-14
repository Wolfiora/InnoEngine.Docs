---
uid: api.39ad21cf6025d9cf2323c88ca64f56e4a3388eec9750218e56c56455f24a52c2
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationCaptureKeyBuilder.TryAddProperties(InnoEngine.Serialization.ISerializable)"
source: xml
reviewed: f8923f9bbac70d843f40b3eda45ed5e10d8a2cb1cfcc306eb736d6700282fc71
title: "SerializationCaptureKeyBuilder.TryAddProperties"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
---

Adds a complete property revision only when current metadata proves context-free default capture without converters.

## Parameters

**Parameter `source`:** The current serializable identity object.

## Returns

True for certified property state; false invalidates the complete key and requires normal capture.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Source is null.

**Exception `T:System.InvalidOperationException`:** Metadata/revision access fails, or the callback has retired or is accessed from another thread.
