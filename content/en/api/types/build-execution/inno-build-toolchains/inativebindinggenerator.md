---
title: "INativeBindingGenerator"
description: "Reference for INativeBindingGenerator in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.584222bb01ba363a
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `INativeBindingGenerator`

This reference describes `INativeBindingGenerator` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`ComputeInputFingerprintAsync`](#api-ea3680c6c9e29bcf) | Method |
| [`GenerateAsync`](#api-135e4f322cef7da0) | Method |

## Type declaration

<a id="api-584222bb01ba363a"></a>
<!-- api: T:Inno.Build.Toolchains.INativeBindingGenerator 7ce3a9efe34cba3c5b413794e101b532a8b8fb45f45a5015a846eba36dd4815e -->

```csharp
public interface Inno.Build.Toolchains.INativeBindingGenerator
```

Prepares an entire binding closure without coupling native recipes to a generator or build host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/INativeBindingGenerator.cs#L10).

## `ComputeInputFingerprintAsync`

<a id="api-ea3680c6c9e29bcf"></a>
<!-- api: M:Inno.Build.Toolchains.INativeBindingGenerator.ComputeInputFingerprintAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBindingGenerationRequest,System.Threading.CancellationToken) 883e0c96a6616cc0110a35b84da3a0cfb2a790a81c9ff0488f4d7fdba52f1303 -->

```csharp
System.Threading.Tasks.ValueTask<string> Inno.Build.Toolchains.INativeBindingGenerator.ComputeInputFingerprintAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.NativeBindingGenerationRequest request, System.Threading.CancellationToken cancellationToken)
```

Computes the selected generator source input identity without producing bindings or compiling a product.

**Parameter `context`:** The borrowed operation with frozen target tools and phase-local input reads.

**Parameter `request`:** The exact component, configuration target and output mode whose source closure is planned.

**Parameter `cancellationToken`:** Cancels configuration loading, dependency evaluation and content hashing.

**Returns:** The complete source preparation identity, distinct from any generated artifact fingerprint.
It remains computable when reconstructible generation outputs have been retired.

**Throws `System.InvalidOperationException`:** The selected tools, configuration, generator or extension inputs cannot be resolved.

**Throws `System.OperationCanceledException`:** Input planning was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/INativeBindingGenerator.cs#L34).

## `GenerateAsync`

<a id="api-135e4f322cef7da0"></a>
<!-- api: M:Inno.Build.Toolchains.INativeBindingGenerator.GenerateAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBindingGenerationRequest,System.Threading.CancellationToken) c857a20c80ec2b7223912bfc46321ce5e89e23f9f31ce599c786441211e2bd05 -->

```csharp
System.Threading.Tasks.ValueTask<Inno.Build.Toolchains.NativeBindingGenerationResult> Inno.Build.Toolchains.INativeBindingGenerator.GenerateAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.NativeBindingGenerationRequest request, System.Threading.CancellationToken cancellationToken)
```

Generates or verifies the requested closure under publication ownership.

**Parameter `context`:** The borrowed operation owning frozen inputs, tool selection and statistics.
Configuration path variables must resolve from its selected toolchain without changing process state.

**Parameter `request`:** The immutable target, component closure and publication policy.

**Parameter `cancellationToken`:** Cancels preparation; active work must drain before returning.

**Returns:** An owned complete immutable map indexed by Native owner project, never a partial closure.
Dispose the result only after all generated-source and native-bridge consumers finish.

**Throws `System.InvalidOperationException`:** Inputs change during preparation, a required frozen SDK value is absent,
or required generator capabilities are unavailable.

**Throws `System.IO.InvalidDataException`:** A definition or generated output fails its declared contract.

**Throws `System.OperationCanceledException`:** The request was canceled and its active work has completed cleanup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/INativeBindingGenerator.cs#L67).
