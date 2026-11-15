---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.39b5adceb8747efde1780ee3d179d1a326ce4d1ec1339ffc667ec4a1700d6af8
symbol: engine:Inno.Adapter.Presentation:M:Inno.Adapter.Presentation.PresentationBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Presentation.PresentationBackendProvider})
title: PresentationBackendCatalog.Constructor
kind: api
owners:
- Inno.Adapter.Presentation
apiSurface: source-clr
reviewed: dccb6420140c18c9977fdbd68c0abf0ad9b1e8d95ba8cd2b8ab4a9c8ee873a7c

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Validates and captures a complete provider set without creating any service.

## Parameters

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The provider sequence is null.

**Exception `T:System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.
