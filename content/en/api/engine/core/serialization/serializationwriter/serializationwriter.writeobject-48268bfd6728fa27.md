---
uid: api.48268bfd6728fa2790cb6be50c57ea8c9f60d286f22fa938d3e0ae32a1d30c34
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationWriter.WriteObject(System.String,System.Action{Inno.Core.Serialization.SerializationWriter})"
source: xml
reviewed: ef051a55cc3557795c511de8f12fa1313cdd264233dcf8723e94cd8dccab4d24
title: "SerializationWriter.WriteObject"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Writes a named structured object.

**Parameter `name`:** The unique non-empty member name.

**Parameter `write`:** The callback that fills the child object.

**Exception `T:System.ArgumentNullException`:** Thrown when `write` is null.
