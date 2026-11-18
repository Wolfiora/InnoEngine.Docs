---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ef1894123b7f0c5083f6cf3f6382a852d819ae78ccf20b8dbcc01c897ae5be97
symbol: engine:Inno.Animation.Runtime:M:Inno.Animation.Runtime.AnimationRuntime.Play(Inno.Animation.AnimationClipAsset,Inno.Animation.AnimationTarget,Inno.Animation.AnimationPlayOptions)
title: AnimationRuntime.Play
kind: api
owners:
- Inno.Animation.Runtime
apiSurface: source-clr
sourceFingerprint: 7164a8e381aa9fad955d8310a5d7540637b4b0a5e81436f8948547fd7fb84d99
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
