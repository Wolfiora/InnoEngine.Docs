---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ef1894123b7f0c5083f6cf3f6382a852d819ae78ccf20b8dbcc01c897ae5be97
symbol: engine:Inno.Animation.Runtime:M:Inno.Animation.Runtime.AnimationRuntime.Play(Inno.Animation.AnimationClipAsset,Inno.Animation.AnimationTarget,Inno.Animation.AnimationPlayOptions)
title: AnimationRuntime.Play
kind: api
owners:
- Inno.Animation.Runtime
apiSurface: source-clr
reviewed: 36131e195096ec6ef8a5322c55f335d42cf35dca020e20189c1ec53567108f9d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `clip`:** Valid clip to sample until completion or explicit stop.

**Parameter `options`:** Playback options validated before a runtime slot is allocated.

**Parameter `target`:** The weak destination or explicit sampling-only policy.

## Returns

A generation-checked handle owned by this runtime.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown when this runtime has been disposed.

**Exception `T:System.ArgumentNullException`:** Thrown when `clip` is null.

**Exception `T:System.ArgumentException`:** Thrown when `options` contains a non-finite or unsupported value.

**Exception `T:System.InvalidOperationException`:** Thrown when the clip is structurally invalid.
