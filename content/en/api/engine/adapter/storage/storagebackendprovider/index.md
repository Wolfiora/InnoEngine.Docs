---
uid: api.inno.adapter.storage.3e873e1411576f97
symbol: "engine:Inno.Adapter.Storage:T:Inno.Adapter.Storage.StorageBackendProvider"
source: xml
reviewed: 4192e77deda450d5cdd99f935d9857c1c2c94ce70d6f35f12c75b3ae1c2c8445
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
