---
uid: api.48268bfd6728fa2790cb6be50c57ea8c9f60d286f22fa938d3e0ae32a1d30c34
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationWriter.WriteObject(System.String,System.Action{Inno.Core.Serialization.SerializationWriter})"
source: xml
reviewed: 801f678f9b8e04b5d7207108606da5cca668f5715bab1a71c9508e3a1f21d9fc
title: "WriteObject"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Writes a named structured object.

**Parameter `name`:** The unique non-empty member name.

**Parameter `write`:** The callback that fills the child object.

**Exception `T:System.ArgumentNullException`:** Thrown when `write` is null.
