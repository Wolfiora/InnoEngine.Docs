---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.371fa4a463ab40276da120db244bde9c1b746394b3b8bb2b25cd8abf2941f781
symbol: engine:Inno.Adapter.Storage:M:Inno.Adapter.Storage.StorageBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Storage.StorageBackendProvider})
title: StorageBackendCatalog.Constructor
kind: api
owners:
- Inno.Adapter.Storage
apiSurface: source-clr
sourceFingerprint: 7691321d4c8401f053b3638c7dfe0259547c983872af9452bd47de04770378ca
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
