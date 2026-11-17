---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8e2dd1f1916a429f8bc4f29abd75aaf3264686b6690cae0ff4e56321b26db9ae
symbol: scripting:Inno.Storage:M:InnoEngine.Storage.Storage.WriteAsync(InnoEngine.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken)
title: Storage.WriteAsync
kind: api
owners:
- Inno.Storage
apiSurface: editor-script
reviewed: cdf21147d3a617d1bce8dbd35a41e749699723af1cd3ba99b3cbc1b9829ad2c7
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `value`:** The complete value to commit.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

## Returns

A task that completes after commit.
