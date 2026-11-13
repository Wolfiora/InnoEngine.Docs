---
uid: api.inno.adapter.storage.3e873e1411576f97
symbol: "engine:Inno.Adapter.Storage:T:Inno.Adapter.Storage.StorageBackendProvider"
source: xml
reviewed: 2e491f07c39e3a24c96a6b9e61bd48fa4a0e5136c5cc6c7f09a5fef282b20166
title: "StorageBackendProvider"
kind: api
owners: [Inno.Adapter.Storage]
apiSurface: source-clr
contracts:
- project.inno-adapter-storage#ownership-and-scope-contract
aliases: []
---

Describes one explicitly composed storage implementation and its creation boundary.

## Remarks

The composition owns this provider and its immutable registration identity. Products are owned by their callers. This registration does not perform type discovery.
