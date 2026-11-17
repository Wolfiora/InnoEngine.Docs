---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9b11c98b22418afe381f50858426c377a942c126f7b30ba62ca1e6e1535010a1
symbol: scripting:Inno.Storage:M:InnoEngine.Storage.IApplicationStorage.WriteAsync(InnoEngine.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken)
title: IApplicationStorage.WriteAsync
kind: api
owners:
- Inno.Storage
apiSurface: editor-script
reviewed: 396f4017e45fffca52fed41f33a2368fe4416f02be065c96fec3f95dc32e945f
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

A task that completes after the value is durably replaced.
