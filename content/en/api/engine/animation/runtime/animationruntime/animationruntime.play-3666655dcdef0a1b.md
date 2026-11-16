---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3666655dcdef0a1bb8749e3e3165c0ff4a7e6888ac3d304ff41fe6044fa0b576
symbol: engine:Inno.Animation.Runtime:M:Inno.Animation.Runtime.AnimationRuntime.Play(Inno.Animation.AnimationClipAsset,Inno.Animation.AnimationTarget)
title: AnimationRuntime.Play
kind: api
owners:
- Inno.Animation.Runtime
apiSurface: source-clr
reviewed: 077cdf3988ba130ca48ea3226fa026323330949cb98a7ae6ee396a13bac26c64
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
