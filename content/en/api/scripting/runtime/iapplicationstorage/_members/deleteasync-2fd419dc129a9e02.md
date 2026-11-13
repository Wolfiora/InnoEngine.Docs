---
uid: api.2fd419dc129a9e02db1e550992c6b8aae3d023129eabd80063946b514341c8e9
symbol: "scripting:Inno.Storage:M:InnoEngine.Storage.IApplicationStorage.DeleteAsync(InnoEngine.Storage.StorageKey,System.Threading.CancellationToken)"
source: xml
reviewed: 677b16d816e064784e048538051bc21ea2e81e1b773e88f20d1336ad156dce33
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
