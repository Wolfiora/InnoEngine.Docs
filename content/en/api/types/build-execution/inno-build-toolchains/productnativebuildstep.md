---
title: "ProductNativeBuildStep"
description: "Reference for ProductNativeBuildStep in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.43850d847f8cba8a
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `ProductNativeBuildStep`

This reference describes `ProductNativeBuildStep` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5d14520833bd34b0) | Method |
| [`bindDependencies`](#api-773f90ed800edf86) | Property |
| [`build`](#api-1161688e6f75a12c) | Property |
| [`component`](#api-84db99d3c79eced6) | Property |
| [`configuration`](#api-52b45301545f8f85) | Property |
| [`createRecipe`](#api-1d1a9f1f6d62a888) | Property |
| [`dependencies`](#api-a9ec8caebcf5c943) | Property |
| [`deploymentPath`](#api-b77c7ae982ccfa7b) | Property |
| [`id`](#api-1b8fdf6fe4a78248) | Property |
| [`options`](#api-4cde0ecfa4289584) | Property |

## Type declaration

<a id="api-43850d847f8cba8a"></a>
<!-- api: T:Inno.Build.Toolchains.ProductNativeBuildStep 8740029da22d47ab23bfb9277ab1f7e37f0d39c0824d287e6f3c5028cb5edba4 -->

```csharp
public sealed class Inno.Build.Toolchains.ProductNativeBuildStep
```

Binds one product component to an owned build operation and explicit deployment layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeBuildStep.cs#L12).

## `#ctor`

<a id="api-5d14520833bd34b0"></a>
<!-- api: M:Inno.Build.Toolchains.ProductNativeBuildStep.#ctor(System.String,Inno.Build.Toolchains.NativeComponentDescriptor,Inno.Build.Toolchains.NativeComponentBuildOptions,System.Collections.Generic.IReadOnlyList{System.String},System.Func{Inno.Build.Toolchains.NativeBuildContext,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeBuildProduct},System.Threading.CancellationToken,System.Threading.Tasks.Task{Inno.Build.Toolchains.NativeBuildProduct}},System.Func{Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBuildRecipe},System.Func{System.String,System.String,System.String},System.String,System.Func{Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBuildRecipe,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeBuildProduct},Inno.Build.Toolchains.NativeBuildRecipe}) 94819c6bc8d87e011092bc38691d4fc953eb94722ec9a51f6c5a84357377f5da -->

```csharp
public Inno.Build.Toolchains.ProductNativeBuildStep.ProductNativeBuildStep(string id, Inno.Build.Toolchains.NativeComponentDescriptor component, Inno.Build.Toolchains.NativeComponentBuildOptions options, System.Collections.Generic.IReadOnlyList<string> dependencies, System.Func<Inno.Build.Toolchains.NativeBuildContext, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Build.Toolchains.NativeBuildProduct>, System.Threading.CancellationToken, System.Threading.Tasks.Task<Inno.Build.Toolchains.NativeBuildProduct>>? build, System.Func<Inno.Build.Toolchains.NativeBuildContext, Inno.Build.Toolchains.NativeBuildRecipe>? createRecipe, System.Func<string, string, string?> deploymentPath, string? configuration = null, System.Func<Inno.Build.Toolchains.NativeBuildContext, Inno.Build.Toolchains.NativeBuildRecipe, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Build.Toolchains.NativeBuildProduct>, Inno.Build.Toolchains.NativeBuildRecipe>? bindDependencies = null)
```

Freezes a component step without embedding any backend list in the shared executor.

**Parameter `id`:** The expected published component identity.

**Parameter `component`:** The unique source and recipe owners.

**Parameter `options`:** Explicit product linkage, ordered component parameters and their input closure.

**Parameter `dependencies`:** Earlier component identities required by this operation.

**Parameter `build`:** The awaited standalone producer, or null when the component is executed by a static aggregate.

**Parameter `createRecipe`:** Declares the standalone producer's source inputs without creating generated outputs,
or null for a component whose complete source definition is owned by a static aggregate.

**Parameter `deploymentPath`:** Maps a relative output and target to a deployment path, or null for build-only inputs.

**Parameter `configuration`:** An explicit component configuration, or null to use the product configuration.

**Parameter `bindDependencies`:** Optional backend-owned transformation adding the exact published dependency inputs to its source recipe.
It must not generate outputs or execute tools.

**Throws `System.ArgumentException`:** The identity or dependency set is invalid.

**Throws `System.ArgumentNullException`:** A required owner, producer or path policy is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeBuildStep.cs#L52).

## `bindDependencies`

<a id="api-773f90ed800edf86"></a>
<!-- api: P:Inno.Build.Toolchains.ProductNativeBuildStep.bindDependencies e484ffc25dffb84e5d9d8d1534268c24c2b91eacf75ce15191d56e8367e33017 -->

```csharp
public System.Func<Inno.Build.Toolchains.NativeBuildContext, Inno.Build.Toolchains.NativeBuildRecipe, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Build.Toolchains.NativeBuildProduct>, Inno.Build.Toolchains.NativeBuildRecipe>? Inno.Build.Toolchains.ProductNativeBuildStep.bindDependencies { get; }
```

Gets the backend-owned dependency transformation, or null for an independent source recipe.
The supplied products are borrowed only during recipe construction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeBuildStep.cs#L134).

## `build`

<a id="api-1161688e6f75a12c"></a>
<!-- api: P:Inno.Build.Toolchains.ProductNativeBuildStep.build ec99590ccfb19429447b215f02c53c90b72ac4a147cd7662d9eb3944066f00e8 -->

```csharp
public System.Func<Inno.Build.Toolchains.NativeBuildContext, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Build.Toolchains.NativeBuildProduct>, System.Threading.CancellationToken, System.Threading.Tasks.Task<Inno.Build.Toolchains.NativeBuildProduct>>? Inno.Build.Toolchains.ProductNativeBuildStep.build { get; }
```

Gets the standalone producer, or null for a component owned by a static aggregate executor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeBuildStep.cs#L112).

## `component`

<a id="api-84db99d3c79eced6"></a>
<!-- api: P:Inno.Build.Toolchains.ProductNativeBuildStep.component 2bdcd838c9d373ccac72c9e251349b035eaf65f2cedf5e70352b85e791c0696d -->

```csharp
public Inno.Build.Toolchains.NativeComponentDescriptor Inno.Build.Toolchains.ProductNativeBuildStep.component { get; }
```

Gets the explicit source and recipe owners.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeBuildStep.cs#L97).

## `configuration`

<a id="api-52b45301545f8f85"></a>
<!-- api: P:Inno.Build.Toolchains.ProductNativeBuildStep.configuration 211ba59b966b51aa2f04cffe71dca0ba12ed3ffce653259a3ecfe8b170685e8e -->

```csharp
public string? Inno.Build.Toolchains.ProductNativeBuildStep.configuration { get; }
```

Gets the step's explicit configuration, or null to borrow the containing product configuration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeBuildStep.cs#L128).

## `createRecipe`

<a id="api-1d1a9f1f6d62a888"></a>
<!-- api: P:Inno.Build.Toolchains.ProductNativeBuildStep.createRecipe b7a48a824c0de6365e9b8467520a99340ac0575dc0629094f4f0c3477ba4787f -->

```csharp
public System.Func<Inno.Build.Toolchains.NativeBuildContext, Inno.Build.Toolchains.NativeBuildRecipe>? Inno.Build.Toolchains.ProductNativeBuildStep.createRecipe { get; }
```

Gets the producer's source declaration, or null when a static aggregate owns the component recipe.
The declaration must not generate bindings, run a compiler or create staging.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeBuildStep.cs#L118).

## `dependencies`

<a id="api-a9ec8caebcf5c943"></a>
<!-- api: P:Inno.Build.Toolchains.ProductNativeBuildStep.dependencies c22dae0bfaefb8dd68ac2ea667b95563743447f876954d878bf6f75266ed3783 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.ProductNativeBuildStep.dependencies { get; }
```

Gets dependencies that must precede this step.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeBuildStep.cs#L107).

## `deploymentPath`

<a id="api-b77c7ae982ccfa7b"></a>
<!-- api: P:Inno.Build.Toolchains.ProductNativeBuildStep.deploymentPath a6d1128594a31bbd2d9241c33ad44c2240d9ec8e9804ab4782ce80789bb892a7 -->

```csharp
public System.Func<string, string, string?> Inno.Build.Toolchains.ProductNativeBuildStep.deploymentPath { get; }
```

Gets the explicit output layout policy; null results exclude build-only files.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeBuildStep.cs#L123).

## `id`

<a id="api-1b8fdf6fe4a78248"></a>
<!-- api: P:Inno.Build.Toolchains.ProductNativeBuildStep.id 42c727bf71f49f7d9cf5a5bf5fb5b5c0a1c39e1946c091e3b0791539e443d3ee -->

```csharp
public string Inno.Build.Toolchains.ProductNativeBuildStep.id { get; }
```

Gets the exact expected component identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeBuildStep.cs#L92).

## `options`

<a id="api-4cde0ecfa4289584"></a>
<!-- api: P:Inno.Build.Toolchains.ProductNativeBuildStep.options 0a074b7f990378096a6a16b1f602afdc5df86805aaa15837a4f44d1e260b14a8 -->

```csharp
public Inno.Build.Toolchains.NativeComponentBuildOptions Inno.Build.Toolchains.ProductNativeBuildStep.options { get; }
```

Gets product-owned configuration independently of the selected SDK.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ProductNativeBuildStep.cs#L102).
