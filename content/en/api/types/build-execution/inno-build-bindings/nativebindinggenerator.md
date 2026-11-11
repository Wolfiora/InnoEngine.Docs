---
title: "NativeBindingGenerator"
description: "Reference for NativeBindingGenerator in Inno.Build.Bindings."
uid: api.inno.build.bindings.f9f1859591826b8a
kind: api
owners:
  - Inno.Build.Bindings
apiSurface: source-clr
contracts:
  - project.inno-build-bindings
---
# `NativeBindingGenerator`

This reference describes `NativeBindingGenerator` in `Inno.Build.Bindings`. Read the [shared contract](../../../projects/inno-build-bindings.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.Toolchains.INativeBindingGenerator`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7d1ced719f2cb6f9) | Method |
| [`ComputeInputFingerprintAsync`](#api-b68756500cefb4ae) | Method |
| [`GenerateAsync`](#api-bdc543b7cd9f7e86) | Method |

## Type declaration

<a id="api-f9f1859591826b8a"></a>
<!-- api: T:Inno.Build.Bindings.NativeBindingGenerator ed761625983dcc7ca08f22a1852393bcfb68053a389526618ce30b3118fc7c10 -->

```csharp
public sealed class Inno.Build.Bindings.NativeBindingGenerator : Inno.Build.Toolchains.INativeBindingGenerator
```

Executes the shared facade-to-C-to-managed binding workflow independently of MSBuild.

Provides preparation input planning for the shared binding generator without producing generated artifacts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/bindings/Inno.Build.Bindings/NativeBindingGenerator.cs#L12).

## `#ctor`

<a id="api-7d1ced719f2cb6f9"></a>
<!-- api: M:Inno.Build.Bindings.NativeBindingGenerator.#ctor(Inno.Build.Bindings.NativeBindingProfile) 78c941b2cdfe38aec973d075c405ed38d0a3a2c0ee03cef57d655facbb278de3 -->

```csharp
public Inno.Build.Bindings.NativeBindingGenerator.NativeBindingGenerator(Inno.Build.Bindings.NativeBindingProfile profile)
```

Creates a generator that obtains target tools and input ownership from each build operation.

**Parameter `profile`:** The explicitly registered target profile.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/bindings/Inno.Build.Bindings/NativeBindingGenerator.cs#L22).

## `ComputeInputFingerprintAsync`

<a id="api-b68756500cefb4ae"></a>
<!-- api: M:Inno.Build.Bindings.NativeBindingGenerator.ComputeInputFingerprintAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBindingGenerationRequest,System.Threading.CancellationToken) 725170f81c1190e69bebe9aac0632962a242124c9621e27f115c3791dfce006d -->

```csharp
public System.Threading.Tasks.ValueTask<string> Inno.Build.Bindings.NativeBindingGenerator.ComputeInputFingerprintAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.NativeBindingGenerationRequest request, System.Threading.CancellationToken cancellationToken)
```

Computes the selected generator source input identity without producing bindings or compiling a product.

**Parameter `context`:** The borrowed operation with frozen target tools and phase-local input reads.

**Parameter `request`:** The exact component, configuration target and output mode whose source closure is planned.

**Parameter `cancellationToken`:** Cancels configuration loading, dependency evaluation and content hashing.

**Returns:** The complete source preparation identity, distinct from any generated artifact fingerprint.
It remains computable when reconstructible generation outputs have been retired.

**Throws `System.InvalidOperationException`:** The selected tools, configuration, generator or extension inputs cannot be resolved.

**Throws `System.OperationCanceledException`:** Input planning was canceled.

**Throws `System.NotSupportedException`:** Configuration inheritance uses a remote input without local build ownership.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/bindings/Inno.Build.Bindings/NativeBindingGenerator.Inputs.cs#L16).

## `GenerateAsync`

<a id="api-bdc543b7cd9f7e86"></a>
<!-- api: M:Inno.Build.Bindings.NativeBindingGenerator.GenerateAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBindingGenerationRequest,System.Threading.CancellationToken) 82521de32f3f4f1a83373536efc6b9f158d28e80579bc7f9ca648e87d6d0d70a -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.Toolchains.NativeBindingGenerationResult> Inno.Build.Bindings.NativeBindingGenerator.GenerateAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.NativeBindingGenerationRequest request, System.Threading.CancellationToken cancellationToken)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/bindings/Inno.Build.Bindings/NativeBindingGenerator.cs#L28).
