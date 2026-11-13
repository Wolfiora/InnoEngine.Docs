---
uid: api.2fd419dc129a9e02db1e550992c6b8aae3d023129eabd80063946b514341c8e9
symbol: "scripting:Inno.Storage:M:InnoEngine.Storage.IApplicationStorage.DeleteAsync(InnoEngine.Storage.StorageKey,System.Threading.CancellationToken)"
source: xml
reviewed: 336fb2b2bfcb257fdcea828389b6c19d3fc18ffcaa5ceb5899fa9a587078c9d1
title: "DeleteAsync"
kind: api
owners: [Inno.Storage]
apiSurface: editor-script
apiScope: Runtime
---

Deletes one value without failing when it is already absent.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** `true` when an existing value was deleted.
