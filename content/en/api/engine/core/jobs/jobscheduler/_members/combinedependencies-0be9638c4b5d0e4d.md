---
uid: api.0be9638c4b5d0e4d43f7e7612ac0c29184c240ac4c0b41ecd6e2b75f5e660abd
symbol: "engine:Inno.Core.Jobs:M:Inno.Core.Jobs.JobScheduler.CombineDependencies(System.ReadOnlySpan{Inno.Core.Jobs.JobHandle})"
source: xml
reviewed: c587684663bdc8f558510b43273931e7d7b06adfccfd93dfbfe0ba88f3458fd6
title: "CombineDependencies"
kind: api
owners: [Inno.Core.Jobs]
apiSurface: source-clr
---

Creates one handle that completes after every supplied dependency.

**Parameter `dependencies`:** Handles combined by the returned synchronization point.

**Returns:** A generation-safe combined handle.
