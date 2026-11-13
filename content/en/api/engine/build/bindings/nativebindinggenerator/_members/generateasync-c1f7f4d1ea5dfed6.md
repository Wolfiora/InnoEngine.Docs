---
uid: api.c1f7f4d1ea5dfed608c2943ef939cfc4873b40c9ee588ff97fc8d3581125e911
symbol: "engine:Inno.Build.Bindings:M:Inno.Build.Bindings.NativeBindingGenerator.GenerateAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBindingGenerationRequest,System.Threading.CancellationToken)"
source: xml
reviewed: cfa67593f4ab49d46402e6267bbac89fe6710daf534a60210e077f34bb1f701f
title: "GenerateAsync"
kind: api
owners: [Inno.Build.Bindings]
apiSurface: source-clr
---

Generates or verifies the requested closure under publication ownership.

**Parameter `context`:** The borrowed operation owning frozen inputs, tool selection and statistics. Configuration path variables must resolve from its selected toolchain without changing process state.

**Parameter `request`:** The immutable target, component closure and publication policy.

**Parameter `cancellationToken`:** Cancels preparation; active work must drain before returning.

**Returns:** An owned complete immutable map indexed by Native owner project, never a partial closure. Dispose the result only after all generated-source and native-bridge consumers finish.

**Exception `T:System.InvalidOperationException`:** Inputs change during preparation, a required frozen SDK value is absent, or required generator capabilities are unavailable.

**Exception `T:System.IO.InvalidDataException`:** A definition or generated output fails its declared contract.

**Exception `T:System.OperationCanceledException`:** The request was canceled and its active work has completed cleanup.
