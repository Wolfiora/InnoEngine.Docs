---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a2aaac9746b68fbf669bdac0fce0d64574337d235666e8af8099a60ce40f92f0
symbol: engine:Inno.Build.Bindings:M:Inno.Build.Bindings.NativeBindingGenerator.ComputeInputFingerprintAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBindingGenerationRequest,System.Threading.CancellationToken)
title: NativeBindingGenerator.ComputeInputFingerprintAsync
kind: api
owners:
- Inno.Build.Bindings
apiSurface: source-clr
reviewed: db2ecc6390add80b0d6390a87dc84f2fdc64833fd613d4eccc400ab08ea14742
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

**Exception `T:System.NotSupportedException`:** Configuration inheritance uses a remote input without local build ownership.
