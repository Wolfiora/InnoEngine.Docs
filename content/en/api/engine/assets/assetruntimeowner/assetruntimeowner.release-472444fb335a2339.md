---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.472444fb335a233964acf845059bee476bac4efe7564891d4c539b0cfbdbdab0
symbol: engine:Inno.Assets:M:Inno.Assets.AssetRuntimeOwner.Release(Inno.Assets.AssetObject)
title: AssetRuntimeOwner.Release
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 9de2739f74ed17fbc7bcbb56f8a4a479bfe09f19a2edf209675d102d1eec5dc2
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `asset`:** The canonical instance or uncommitted candidate to retire.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The asset belongs to a different owner.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Owned work remains active. Retain the instance and retry at the owner's retirement safe point.
