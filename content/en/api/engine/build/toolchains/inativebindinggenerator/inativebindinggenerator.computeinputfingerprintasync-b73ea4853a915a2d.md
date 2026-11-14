---
uid: api.b73ea4853a915a2d22dc0a1be5bdf30b01b19b94d0e737d3863460585898afd9
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.INativeBindingGenerator.ComputeInputFingerprintAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBindingGenerationRequest,System.Threading.CancellationToken)"
source: xml
reviewed: c29ed6fa2c1f86536a1e29cef554642e7b877788096904f67a21894bb3839ee6
title: "INativeBindingGenerator.ComputeInputFingerprintAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Computes the selected generator source input identity without producing bindings or compiling a product.

**Parameter `context`:** The borrowed operation with frozen target tools and phase-local input reads.

**Parameter `request`:** The exact component, configuration target and output mode whose source closure is planned.

**Parameter `cancellationToken`:** Cancels configuration loading, dependency evaluation and content hashing.

**Returns:** The complete source preparation identity, distinct from any generated artifact fingerprint. It remains computable when reconstructible generation outputs have been retired.

**Exception `T:System.InvalidOperationException`:** The selected tools, configuration, generator or extension inputs cannot be resolved.

**Exception `T:System.OperationCanceledException`:** Input planning was canceled.
