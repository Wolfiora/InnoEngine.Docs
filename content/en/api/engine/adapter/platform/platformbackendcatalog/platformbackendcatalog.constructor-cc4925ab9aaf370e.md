---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.cc4925ab9aaf370ea2fe98f8862b1f203751a00109fd84bcde50b150f13bc7d5
symbol: engine:Inno.Adapter.Platform:M:Inno.Adapter.Platform.PlatformBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Platform.PlatformBackendProvider})
title: PlatformBackendCatalog.Constructor
kind: api
owners:
- Inno.Adapter.Platform
apiSurface: source-clr
reviewed: a7ab341b8e5ae8504a24a616c35f4bd44a6b8375e28aa0964931ade5628aefec
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The provider sequence is null.

**Exception `T:System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.
