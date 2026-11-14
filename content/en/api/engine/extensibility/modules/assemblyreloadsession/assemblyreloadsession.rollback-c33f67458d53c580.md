---
uid: api.c33f67458d53c580b4abb23c8deadcaeb97adfe675e08d900aa8c53894ed0db9
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyReloadSession.Rollback"
source: xml
reviewed: af6f8238fc71a9c2134042a29436509dc409820100678c4f8d344a7d5c6f67f0
title: "AssemblyReloadSession.Rollback"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Restores the previous generation and unloads the candidate generation.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Rollback cannot safely release the candidate. Contexts remain owned and the shared gate is faulted.
