---
uid: api.b5645c3f99617b23fafec07126cad0ebd933f9f20fbc6f67ac3d77e29339b7ba
symbol: "engine:Inno.Storage:M:Inno.Storage.IApplicationStorage.DeleteAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken)"
source: xml
reviewed: 18a21ee4b9fb9c0ecbfd070a6898dd6f5631316556d965f7a45cd5c34f8584b1
title: "DeleteAsync"
kind: api
owners: [Inno.Storage]
apiSurface: source-clr
---

Deletes one value without failing when it is already absent.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** `true` when an existing value was deleted.
