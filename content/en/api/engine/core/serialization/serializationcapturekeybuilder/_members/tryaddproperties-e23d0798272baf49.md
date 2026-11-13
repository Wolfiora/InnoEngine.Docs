---
uid: api.e23d0798272baf49102211a4ff2ab5f0db16da39ad1dca4de7ea425a9f9f89c6
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationCaptureKeyBuilder.TryAddProperties(Inno.Core.Serialization.ISerializable)"
source: xml
reviewed: 447827e7f75ad6043ff983084cb35b3ac62e3f04280c8bfdf6f4c52dc6446c3d
title: "TryAddProperties"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Adds a complete property revision only when current metadata proves context-free default capture without converters.

**Parameter `source`:** The current serializable identity object.

**Returns:** True for certified property state; false invalidates the complete key and requires normal capture.

**Exception `T:System.ArgumentNullException`:** Source is null.

**Exception `T:System.InvalidOperationException`:** Metadata/revision access fails, or the callback has retired or is accessed from another thread.
