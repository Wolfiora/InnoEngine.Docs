---
uid: api.ed34b5eecfb1529f011b141ed37aa3459c409e8d25ecdcbcf3faff3f8a5f6f1e
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyReloadSession.Activate"
source: xml
reviewed: 6952c10d51c156323813ba49ac4f002c0dda9067233ad65c38dc4ade69791951
title: "Activate"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Atomically publishes the candidate module and all participant snapshots.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A participant could not quiesce. Both generations remain owned and the host must restart.
