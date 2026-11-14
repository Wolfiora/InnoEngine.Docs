---
uid: api.fa8e5265e44d9731752f685c3ed83b5d450c67e08899026e0f1c8f0610e5918d
symbol: "engine:Inno.Core.Graphs:M:Inno.Core.Graphs.GraphSerializedValue.#ctor(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 4cc5bd0fa4d3e9fe2fd29e91acedbb8f5643b3306bbe193066b62246bbacb318
title: "GraphSerializedValue.Constructor"
kind: api
owners: [Inno.Core.Graphs]
apiSurface: source-clr
---

Creates a graph value from one complete native serialization payload.

## Parameters

**Parameter `data`:** Bytes produced by the common Inno serialization pipeline.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when the payload is empty.
