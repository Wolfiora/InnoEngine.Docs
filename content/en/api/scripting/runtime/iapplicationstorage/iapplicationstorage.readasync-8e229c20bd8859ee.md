---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8e229c20bd8859eee4e337bdb74cba6b3b0610df04973e5feffb5e9e6aa00658
symbol: scripting:Inno.Storage:M:InnoEngine.Storage.IApplicationStorage.ReadAsync(InnoEngine.Storage.StorageKey,System.Threading.CancellationToken)
title: IApplicationStorage.ReadAsync
kind: api
owners:
- Inno.Storage
apiSurface: editor-script
reviewed: 1bf928523be1452a7a6d3d7c38e826f66054ba19e3388a94fbfa902cf495bb63
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

## Returns

The stored bytes, or `null` when the key does not exist.
