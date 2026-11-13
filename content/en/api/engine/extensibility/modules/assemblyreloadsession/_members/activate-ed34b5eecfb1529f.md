---
uid: api.ed34b5eecfb1529f011b141ed37aa3459c409e8d25ecdcbcf3faff3f8a5f6f1e
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyReloadSession.Activate"
source: xml
reviewed: f82440b1cb5c6b3f5fdf655c3d93a3d44755c96aee35af4edcc420f8693d554b
title: "Activate"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Atomically publishes the candidate module and all participant snapshots.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A participant could not quiesce. Both generations remain owned and the host must restart.
