---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8e229c20bd8859eee4e337bdb74cba6b3b0610df04973e5feffb5e9e6aa00658
symbol: scripting:Inno.Storage:M:InnoEngine.Storage.IApplicationStorage.ReadAsync(InnoEngine.Storage.StorageKey,System.Threading.CancellationToken)
title: IApplicationStorage.ReadAsync
kind: api
owners:
- Inno.Storage
apiSurface: editor-script
reviewed: 176f2d65b72d8aaca6595204728897fb07f515cf5d89892aa13f1cb59364c60f
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
