---
uid: api.39ad21cf6025d9cf2323c88ca64f56e4a3388eec9750218e56c56455f24a52c2
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationCaptureKeyBuilder.TryAddProperties(InnoEngine.Serialization.ISerializable)"
source: xml
reviewed: 4580c574d38f32d1311e23e10dbf43c1ceac4dd431ee4bdb28be8b4d9a568d2a
title: "TryAddProperties"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
---

Adds a complete property revision only when current metadata proves context-free default capture without converters.

**Parameter `source`:** The current serializable identity object.

**Returns:** True for certified property state; false invalidates the complete key and requires normal capture.

**Exception `T:System.ArgumentNullException`:** Source is null.

**Exception `T:System.InvalidOperationException`:** Metadata/revision access fails, or the callback has retired or is accessed from another thread.
