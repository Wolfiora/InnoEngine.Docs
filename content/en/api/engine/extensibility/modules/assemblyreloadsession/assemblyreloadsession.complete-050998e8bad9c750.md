---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.050998e8bad9c7508171f80555d4f777b2e4475012da75d8779249b88950de7f
symbol: engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyReloadSession.Complete
title: AssemblyReloadSession.Complete
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
sourceFingerprint: f6b567ed51c59648536f04e8dece6f1f2a1d8b781f4f9e84696b6f72ab436e7a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

The validated assembly unload monitor that represents the completed operation.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A participant still uses its dependencies. Contexts remain owned and no unload monitor is issued.
