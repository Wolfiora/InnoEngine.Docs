---
uid: api.50af8f72284cfd6a8fba05a3d207d94e009f3f1c46833537e90bf02b03f78f43
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.INativeBindingGenerator.GenerateAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBindingGenerationRequest,System.Threading.CancellationToken)"
source: xml
reviewed: 9e370e68e79704517009e6290a16da709a815a36adfb8c8a8c58fb841e831af5
title: "INativeBindingGenerator.GenerateAsync"
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
