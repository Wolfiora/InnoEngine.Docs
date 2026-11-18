---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3666655dcdef0a1bb8749e3e3165c0ff4a7e6888ac3d304ff41fe6044fa0b576
symbol: engine:Inno.Animation.Runtime:M:Inno.Animation.Runtime.AnimationRuntime.Play(Inno.Animation.AnimationClipAsset,Inno.Animation.AnimationTarget)
title: AnimationRuntime.Play
kind: api
owners:
- Inno.Animation.Runtime
apiSurface: source-clr
sourceFingerprint: 166a09b5fce3a830b2614293b87b0fac08c24de22a8b957e38c5715ea8c8f376
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `clip`:** Valid clip to sample until completion or explicit stop.

**Parameter `target`:** The weak destination or explicit sampling-only policy.

## Returns

A generation-checked handle owned by this runtime.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown when this runtime has been disposed.

**Exception `T:System.ArgumentNullException`:** Thrown when `clip` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the clip is structurally invalid.
