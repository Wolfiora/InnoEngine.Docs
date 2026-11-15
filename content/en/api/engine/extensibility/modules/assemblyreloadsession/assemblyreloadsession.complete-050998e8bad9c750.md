---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.050998e8bad9c7508171f80555d4f777b2e4475012da75d8779249b88950de7f
symbol: engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyReloadSession.Complete
title: AssemblyReloadSession.Complete
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
reviewed: 39835ce48ab2e3c38731af8ec30529048840f1899ddb6306a415d635e2ac2434

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Commits an activated reload and begins cooperative unload of the old generation.

## Returns

The validated assembly unload monitor that represents the completed operation.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A participant still uses its dependencies. Contexts remain owned and no unload monitor is issued.
