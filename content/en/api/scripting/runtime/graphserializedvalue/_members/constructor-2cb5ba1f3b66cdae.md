---
uid: api.2cb5ba1f3b66cdae2b850db8caff202af2601e7df4ea4b48ebf35cb3edb09eea
symbol: "scripting:Inno.Core.Graphs:M:InnoEngine.Graphs.GraphSerializedValue.#ctor(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 94631cadb7c3d94ad0b8ba29cb3f8d2adc8349cce4759c7ab3d62ff5a7d16999
title: "Constructor"
kind: api
owners: [Inno.Core.Graphs]
apiSurface: editor-script
apiScope: Runtime
---

Creates a graph value from one complete native serialization payload.

**Parameter `data`:** Bytes produced by the common Inno serialization pipeline.

**Exception `T:System.ArgumentException`:** Thrown when the payload is empty.
