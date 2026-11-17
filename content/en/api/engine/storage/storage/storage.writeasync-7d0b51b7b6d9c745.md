---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7d0b51b7b6d9c745828a94190c704bd800e6c0c3916be871c854d731e004d613
symbol: engine:Inno.Storage:M:Inno.Storage.Storage.WriteAsync(Inno.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken)
title: Storage.WriteAsync
kind: api
owners:
- Inno.Storage
apiSurface: source-clr
reviewed: ae360a47be78e5d10ec0a228a2dc4860644afcea1863e1aac4dafc69289ac4d4
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
