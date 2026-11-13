---
uid: api.13db3b133013d7dbca35f94c3c6c22169c60690b044788d8fbd026c09682db76
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePublisher.RecordIndex(System.String,System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: d96ac29d9f30e081032bfeb00c9a0dbad6dba2cdde39fde9538ca00e948ecea9
title: "RecordIndex"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Registers an exact cache index and the publication directories required to keep it useful.

**Parameter `path`:** The producer-owned index file within this publisher root.

**Parameter `dependencies`:** Exact publication roots; missing dependencies make the index retireable.

## Remarks

The caller must hold this publisher's shared activity gate through the index write and registration.
