---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b73ea4853a915a2d22dc0a1be5bdf30b01b19b94d0e737d3863460585898afd9
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.INativeBindingGenerator.ComputeInputFingerprintAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBindingGenerationRequest,System.Threading.CancellationToken)
title: INativeBindingGenerator.ComputeInputFingerprintAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 367e165a6767345953db545a6f1d938c0cd9b063513f9c9d8ef7822a4b19c13c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The borrowed operation with frozen target tools and phase-local input reads.

**Parameter `request`:** The exact component, configuration target and output mode whose source closure is planned.

**Parameter `cancellationToken`:** Cancels configuration loading, dependency evaluation and content hashing.

## Returns

The complete source preparation identity, distinct from any generated artifact fingerprint. It remains computable when reconstructible generation outputs have been retired.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The selected tools, configuration, generator or extension inputs cannot be resolved.

**Exception `T:System.OperationCanceledException`:** Input planning was canceled.
