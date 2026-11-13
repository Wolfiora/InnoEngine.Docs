---
uid: api.a2aaac9746b68fbf669bdac0fce0d64574337d235666e8af8099a60ce40f92f0
symbol: "engine:Inno.Build.Bindings:M:Inno.Build.Bindings.NativeBindingGenerator.ComputeInputFingerprintAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBindingGenerationRequest,System.Threading.CancellationToken)"
source: xml
reviewed: bf3447b8301550739e6e4a271ee116488165e780076e1a6e30de4ccd72000c3a
title: "ComputeInputFingerprintAsync"
kind: api
owners: [Inno.Build.Bindings]
apiSurface: source-clr
---

Computes the selected generator source input identity without producing bindings or compiling a product.

**Parameter `context`:** The borrowed operation with frozen target tools and phase-local input reads.

**Parameter `request`:** The exact component, configuration target and output mode whose source closure is planned.

**Parameter `cancellationToken`:** Cancels configuration loading, dependency evaluation and content hashing.

**Returns:** The complete source preparation identity, distinct from any generated artifact fingerprint. It remains computable when reconstructible generation outputs have been retired.

**Exception `T:System.InvalidOperationException`:** The selected tools, configuration, generator or extension inputs cannot be resolved.

**Exception `T:System.OperationCanceledException`:** Input planning was canceled.

**Exception `T:System.NotSupportedException`:** Configuration inheritance uses a remote input without local build ownership.
