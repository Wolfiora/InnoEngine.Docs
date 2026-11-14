---
uid: api.9ede56236728fd915639085c0d0c1a80ff7fb971dd34f6262534a5bdd440d995
symbol: "scripting:Inno.Storage:M:InnoEngine.Storage.Storage.ReadAsync(InnoEngine.Storage.StorageKey,System.Threading.CancellationToken)"
source: xml
reviewed: 9f8d6c552f7f2071b2af6dfef89f6f97b9822666e8a96b4449f367783cb1d4e0
title: "Storage.ReadAsync"
kind: api
owners: [Inno.Storage]
apiSurface: editor-script
apiScope: Runtime
---

Reads a complete value.

## Parameters

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

## Returns

The stored bytes, or `null` when absent.
