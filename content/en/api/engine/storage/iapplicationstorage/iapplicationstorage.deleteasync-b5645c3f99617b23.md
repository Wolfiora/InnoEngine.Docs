---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b5645c3f99617b23fafec07126cad0ebd933f9f20fbc6f67ac3d77e29339b7ba
symbol: engine:Inno.Storage:M:Inno.Storage.IApplicationStorage.DeleteAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken)
title: IApplicationStorage.DeleteAsync
kind: api
owners:
- Inno.Storage
apiSurface: source-clr
reviewed: 8d1aacd32c9ffadd687773942025f1c50fbfdb41b581c46e7f04ab63da65b1fa

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Deletes one value without failing when it is already absent.

## Parameters

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

## Returns

`true` when an existing value was deleted.
