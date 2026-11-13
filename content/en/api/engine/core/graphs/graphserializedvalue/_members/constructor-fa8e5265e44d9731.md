---
uid: api.fa8e5265e44d9731752f685c3ed83b5d450c67e08899026e0f1c8f0610e5918d
symbol: "engine:Inno.Core.Graphs:M:Inno.Core.Graphs.GraphSerializedValue.#ctor(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 6f7a094af21ffed2d9940ecfa471c61dbc2009b8cebbb1d814072dff6f28267f
title: "Constructor"
kind: api
owners: [Inno.Core.Graphs]
apiSurface: source-clr
---

Creates a graph value from one complete native serialization payload.

**Parameter `data`:** Bytes produced by the common Inno serialization pipeline.

**Exception `T:System.ArgumentException`:** Thrown when the payload is empty.
