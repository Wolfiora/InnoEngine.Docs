---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.956242a650d3fd2ccb19c8ebadbe164232d409f739ef7810c28917600992df2c
symbol: engine:Inno.Core.Graphs:M:Inno.Core.Graphs.GraphDocumentCodec.Encode(Inno.Core.Graphs.GraphDocument,Inno.Core.Serialization.SerializationRegistry)
title: GraphDocumentCodec.Encode
kind: api
owners:
- Inno.Core.Graphs
apiSurface: source-clr
reviewed: 9d58f55e8121e68aac8c70a482163775d46c25c1189c3e27708a2fe1c3c85845

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Encodes a graph document into deterministic native bytes.

## Parameters

**Parameter `document`:** Document to encode.

**Parameter `serialization`:** The serialization registry that owns the converter generation for this operation.

## Returns

Native graph bytes containing stable IDs and neutral values only.
