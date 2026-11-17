---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5c64ac7d4059f2da9685b25538a675a5570070ccebcc4c3ca1e52ecafec34fff
symbol: engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.Advance
title: GenerationCoordinator.Advance
kind: api
owners:
- Inno.Extensibility.Reload
apiSurface: source-clr
reviewed: 4020ed2d911da5da59ca8b1a2c9500028c713d9797852939236dd6fba20ee3c2
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

True only when every tracked context is unreachable and admission is ready.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The gate is terminally Faulted.

**Exception `T:Inno.Extensibility.Reload.AssemblyUnloadException`:** A retained context exceeded the configured deadline.
