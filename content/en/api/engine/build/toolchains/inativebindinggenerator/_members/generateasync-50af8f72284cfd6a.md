---
uid: api.50af8f72284cfd6a8fba05a3d207d94e009f3f1c46833537e90bf02b03f78f43
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.INativeBindingGenerator.GenerateAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBindingGenerationRequest,System.Threading.CancellationToken)"
source: xml
reviewed: 1416fbdb397307fb9cb8e6b6fbe625f088cb6218c3f55b9ce37e20e51a403b60
title: "GenerateAsync"
kind: api
owners: [Inno.Build.Toolchains]
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
