---
uid: api.2cb5ba1f3b66cdae2b850db8caff202af2601e7df4ea4b48ebf35cb3edb09eea
symbol: "scripting:Inno.Core.Graphs:M:InnoEngine.Graphs.GraphSerializedValue.#ctor(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 6b28b4de2b63fce35405bf23bbbd15934b48f59f0f5a20de40fcff0363106e47
title: "Constructor"
kind: api
owners: [Inno.Core.Graphs]
apiSurface: editor-script
apiScope: Runtime
---

Creates a graph value from one complete native serialization payload.

**Parameter `data`:** Bytes produced by the common Inno serialization pipeline.

**Exception `T:System.ArgumentException`:** Thrown when the payload is empty.
