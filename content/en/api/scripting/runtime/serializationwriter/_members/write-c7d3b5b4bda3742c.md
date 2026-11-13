---
uid: api.c7d3b5b4bda3742c09065382e125d853f8a02cfd1fef60e2aed57a74b5a2e300
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationWriter.Write\u0060\u00601(System.String,\u0060\u00600)"
source: xml
reviewed: fe855f6fa3aa6d8d033025e658f202e7fbd8db4005da61d1a5feb80466f7c83f
title: "Write"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
---

Writes a named value through the unified value pipeline.

**Type parameter `TValue`:** The declared value type.

**Parameter `name`:** The unique non-empty member name.

**Parameter `value`:** The value to write.

**Exception `T:System.ArgumentException`:** Thrown when `name` is empty.

**Exception `T:System.InvalidOperationException`:** Thrown when the name is duplicated or the value is unsupported.
