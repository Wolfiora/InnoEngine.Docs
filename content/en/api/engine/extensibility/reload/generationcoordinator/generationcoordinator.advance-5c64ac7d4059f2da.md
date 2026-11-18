---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5c64ac7d4059f2da9685b25538a675a5570070ccebcc4c3ca1e52ecafec34fff
symbol: engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.Advance
title: GenerationCoordinator.Advance
kind: api
owners:
- Inno.Extensibility.Reload
apiSurface: source-clr
sourceFingerprint: 3a421d61baa4faa22f028522e5d250eb44d914ef943abf173dd7930495bec343
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
