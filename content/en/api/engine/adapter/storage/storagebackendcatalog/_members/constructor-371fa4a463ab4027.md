---
uid: api.371fa4a463ab40276da120db244bde9c1b746394b3b8bb2b25cd8abf2941f781
symbol: "engine:Inno.Adapter.Storage:M:Inno.Adapter.Storage.StorageBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Storage.StorageBackendProvider})"
source: xml
reviewed: 9bdb851068994eca5f4da88d5a66e819f82da11ea6ea0073a31c53b58184b3f3
title: "Constructor"
kind: api
owners: [Inno.Adapter.Storage]
apiSurface: source-clr
---

Validates and captures a complete provider set without creating any service.

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

**Exception `T:System.ArgumentNullException`:** The provider sequence is null.

**Exception `T:System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.
