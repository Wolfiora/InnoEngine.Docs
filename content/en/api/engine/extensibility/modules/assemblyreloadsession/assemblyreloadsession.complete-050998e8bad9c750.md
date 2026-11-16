---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.050998e8bad9c7508171f80555d4f777b2e4475012da75d8779249b88950de7f
symbol: engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyReloadSession.Complete
title: AssemblyReloadSession.Complete
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
reviewed: b1bc1eb85ff3ec38374e9979496dc8372724c4160af38e02cb5d01462c996965
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
