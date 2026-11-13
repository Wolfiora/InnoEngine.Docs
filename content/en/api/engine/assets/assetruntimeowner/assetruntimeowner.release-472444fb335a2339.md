---
uid: api.472444fb335a233964acf845059bee476bac4efe7564891d4c539b0cfbdbdab0
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetRuntimeOwner.Release(Inno.Assets.AssetObject)"
source: xml
reviewed: bce9e69f44ba7b1fc072e943de2ac1ccf6c049445423546c18e4efddf30f6e23
title: "AssetRuntimeOwner.Release"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Releases an owned instance after quiescence, without relinquishing its mutation authority.

**Parameter `asset`:** The canonical instance or uncommitted candidate to retire.

**Exception `T:System.InvalidOperationException`:** The asset belongs to a different owner.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Owned work remains active. Retain the instance and retry at the owner's retirement safe point.
