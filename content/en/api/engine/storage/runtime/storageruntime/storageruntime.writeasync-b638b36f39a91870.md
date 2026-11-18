---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b638b36f39a9187074e96292a59994d5a395534e29788d08b1cc85111a684fc9
symbol: engine:Inno.Storage.Runtime:M:Inno.Storage.Runtime.StorageRuntime.WriteAsync(Inno.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken)
title: StorageRuntime.WriteAsync
kind: api
owners:
- Inno.Storage.Runtime
apiSurface: source-clr
sourceFingerprint: f89b488af9e85dac8526c2f5a8a180862badc4c6761f8080fa93422d05f5f6d9
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

A task that completes after the value is durably replaced.
