---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.371fa4a463ab40276da120db244bde9c1b746394b3b8bb2b25cd8abf2941f781
symbol: engine:Inno.Adapter.Storage:M:Inno.Adapter.Storage.StorageBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Storage.StorageBackendProvider})
title: StorageBackendCatalog.Constructor
kind: api
owners:
- Inno.Adapter.Storage
apiSurface: source-clr
reviewed: 83465935ee392987b0e05222575f9fa1ce1f52a13aa4d92d14982945b6736016
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
