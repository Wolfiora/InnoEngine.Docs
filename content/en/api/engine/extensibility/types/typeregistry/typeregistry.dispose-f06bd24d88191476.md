---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f06bd24d88191476b730109f364a692f8e2766069b72e68d9c31438eeb1763f9
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry`1.Dispose
title: TypeRegistry<TSnapshot>.Dispose
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: 8a5dae97f01ef2707cfd2217c3d0713bb77a10f74b3d462f9a7730f0ba268362

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Releases the current registry snapshot.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Live generation work remains; repeated disposal cannot bypass its retained ownership barrier.
