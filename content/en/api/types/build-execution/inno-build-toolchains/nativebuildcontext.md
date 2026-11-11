---
title: "NativeBuildContext"
description: "Reference for NativeBuildContext in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.9f688928dc2975a1
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeBuildContext`

This reference describes `NativeBuildContext` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2da13e8a9990e9e4) | Method |
| [`BeginInputVerification`](#api-e2c9d31213a38c3d) | Method |
| [`GetNativeBuildRoot`](#api-9862f1429dcce60d) | Method |
| [`RecordBindingBatch`](#api-a647576c4e28e854) | Method |
| [`RecordBindingGeneration`](#api-0cd0681bbd352ba0) | Method |
| [`RecordManagedProcess`](#api-356a67fcae410da4) | Method |
| [`RecordOutputRead`](#api-d4cd434a4df0db8c) | Method |
| [`RequireBindingGenerator`](#api-89f0266075d17934) | Method |
| [`RequireBindings`](#api-d7dc56d9cb63d9f8) | Method |
| [`RequireComponentOptions`](#api-0e580b15fcc39ef6) | Method |
| [`RequireToolchain`](#api-3369187de7eb2d24) | Method |
| [`WithBindingGenerator`](#api-b61b416eac393a61) | Method |
| [`WithBindings`](#api-e0d159451a1bd571) | Method |
| [`WithComponentOptions`](#api-139d8d2c3595156c) | Method |
| [`WithConfiguration`](#api-ed6187d1ff6e70ca) | Method |
| [`WithToolchain`](#api-bfb0418513278056) | Method |
| [`configuration`](#api-8f7ac1a87601b3a6) | Property |
| [`engineRoot`](#api-1c458f490a0b4d8e) | Property |
| [`statistics`](#api-3fbd993fb406c27a) | Property |
| [`toolchain`](#api-7e1c3809e11b82d1) | Property |

## Type declaration

<a id="api-9f688928dc2975a1"></a>
<!-- api: T:Inno.Build.Toolchains.NativeBuildContext 77bdc90d9a5f0eb600103f2f6d7de0f7004b557c23f159542bcc1e6868b1672e -->

```csharp
public sealed class Inno.Build.Toolchains.NativeBuildContext
```

Identifies the checkout, configuration and frozen initial inputs owned by one native build operation.
Create a new context for each operation; changes during its lifetime fail stability verification.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L13).

## `#ctor`

<a id="api-2da13e8a9990e9e4"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildContext.#ctor(System.String,System.String) 106608d4f6a9d55be85d63168eff3be08147c388a4f569ce86a76c44bf259942 -->

```csharp
public Inno.Build.Toolchains.NativeBuildContext.NativeBuildContext(string engineRoot, string configuration)
```

Creates a build context without consulting the tool assembly's checkout.

**Parameter `engineRoot`:** The checkout containing InnoEngine.sln and the native source tree; aliases resolve to one physical owner.

**Parameter `configuration`:** The normalized debug or release configuration.

**Throws `System.ArgumentException`:** The root is empty or the configuration is unsupported.

**Throws `System.IO.DirectoryNotFoundException`:** The selected checkout has no repository marker.

**Throws `System.IO.IOException`:** A checkout alias cannot be resolved to a physical owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L44).

## `BeginInputVerification`

<a id="api-e2c9d31213a38c3d"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildContext.BeginInputVerification(System.String) 371d8ead57a9f5477a563349da9e62ac3f8604afaefa533cd3bfd8ef30b66995 -->

```csharp
public Inno.Build.Toolchains.NativeBuildContext Inno.Build.Toolchains.NativeBuildContext.BeginInputVerification(string phase)
```

Starts a fresh verification phase whose reads can be shared only within this derived context.

**Parameter `phase`:** The operation phase recorded in statistics, such as binding-locks or binding-generation.

**Returns:** A context with a new input inventory and hash cache; existing scopes are unchanged.

**Constraints:** Create another phase after each independent ownership wait, generation or compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L401).

## `GetNativeBuildRoot`

<a id="api-9862f1429dcce60d"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildContext.GetNativeBuildRoot(Inno.Build.Toolchains.NativeComponentDescriptor) 9cf2c15e6967254ea5e71ace3daba737cc26999a13eeda3b600fa715f32cc7c5 -->

```csharp
public string Inno.Build.Toolchains.NativeBuildContext.GetNativeBuildRoot(Inno.Build.Toolchains.NativeComponentDescriptor component)
```

Resolves native intermediates under the owning toolchain project in this checkout.

**Parameter `component`:** The explicit component descriptor whose recipe project owns native intermediates.

**Returns:** The absolute project-local obj/native path, without creating the directory. During publication,
the path also contains the operation's target and compatible workspace identity. A Windows producer receives
a temporary junction to the same physical directory so SDK tools can use bounded paths.

**Throws `System.ArgumentNullException`:** The component owner is null.

**Throws `System.InvalidOperationException`:** The selected checkout does not contain the owning toolchain project.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L180).

## `RecordBindingBatch`

<a id="api-a647576c4e28e854"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildContext.RecordBindingBatch 4a3c20f12b610d3296839d501f44f506ace13aae8f305f89e8d8811a712cb341 -->

```csharp
public void Inno.Build.Toolchains.NativeBuildContext.RecordBindingBatch()
```

Records one complete binding batch executed by the borrowed provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L209).

## `RecordBindingGeneration`

<a id="api-0cd0681bbd352ba0"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildContext.RecordBindingGeneration a2fa6fe25daacc4afcd73c934f9f36f17519f975c640e82e432499fd1bf7e97b -->

```csharp
public void Inno.Build.Toolchains.NativeBuildContext.RecordBindingGeneration()
```

Records one actual bridge or managed generator invocation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L214).

## `RecordManagedProcess`

<a id="api-356a67fcae410da4"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildContext.RecordManagedProcess 31405cadb5ed6255e0759a0a38cb32097c244978362141d783e0e8beeda5e79d -->

```csharp
public void Inno.Build.Toolchains.NativeBuildContext.RecordManagedProcess()
```

Records a managed SDK process owned by generator extension preparation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L227).

## `RecordOutputRead`

<a id="api-d4cd434a4df0db8c"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildContext.RecordOutputRead(System.Int64) 0fcb530e3816a18b48d89280f82a7c8efd23da618a80d92ac9d795be4addbddc -->

```csharp
public void Inno.Build.Toolchains.NativeBuildContext.RecordOutputRead(long bytes)
```

Records one full artifact output read without treating it as an input snapshot hash.

**Parameter `bytes`:** The actual number of bytes consumed by output integrity verification.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L222).

## `RequireBindingGenerator`

<a id="api-89f0266075d17934"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildContext.RequireBindingGenerator b1b17e18140832cc8c596ceb2202c9666153fb534acdc4b380a5659c44618eaf -->

```csharp
public Inno.Build.Toolchains.INativeBindingGenerator Inno.Build.Toolchains.NativeBuildContext.RequireBindingGenerator()
```

Requires generation to be configured explicitly before creating staging or launching tools.

**Returns:** The borrowed provider without discovering or constructing an implementation.

**Throws `System.InvalidOperationException`:** Composition has not supplied a binding generator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L386).

## `RequireBindings`

<a id="api-d7dc56d9cb63d9f8"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildContext.RequireBindings(Inno.Build.Toolchains.NativeComponentDescriptor) ee86cb93a4c4f795a937e6246a972825642977de820d51c0f01f332164d6c23e -->

```csharp
public Inno.Build.Toolchains.NativeBindingGenerationDescriptor Inno.Build.Toolchains.NativeBuildContext.RequireBindings(Inno.Build.Toolchains.NativeComponentDescriptor component)
```

Requires the target binding generation prepared for an explicitly declared Native owner.

**Parameter `component`:** The component whose facade and managed binding share one generation.

**Returns:** The immutable completed generation descriptor.

**Throws `System.InvalidOperationException`:** The owner has no prepared generation in this operation.

**Throws `System.ObjectDisposedException`:** The caller released the borrowed binding result before this operation finished.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L356).

## `RequireComponentOptions`

<a id="api-0e580b15fcc39ef6"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildContext.RequireComponentOptions(Inno.Build.Toolchains.NativeComponentDescriptor) 3d95bc28f11ae94f420aa7c2e96edeced4856bb95c20937d5ec2586b69bc653a -->

```csharp
public Inno.Build.Toolchains.NativeComponentBuildOptions Inno.Build.Toolchains.NativeBuildContext.RequireComponentOptions(Inno.Build.Toolchains.NativeComponentDescriptor component)
```

Requires product configuration for the exact component before its recipe or tools execute.

**Parameter `component`:** The component requesting its scoped configuration.

**Returns:** The immutable configuration; absent or foreign ownership fails explicitly.

**Throws `System.InvalidOperationException`:** No options are assigned to this component owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L316).

## `RequireToolchain`

<a id="api-3369187de7eb2d24"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildContext.RequireToolchain 8cfa25090304cd29d5c7fd6ffed5b980a809e0e7d6c4cb622422e1298031a4a7 -->

```csharp
public Inno.Build.Toolchains.NativeToolchainSelection Inno.Build.Toolchains.NativeBuildContext.RequireToolchain()
```

Requires an explicit selection before a component can build or start a native tool.

**Returns:** The already frozen tool selection without performing discovery.

**Throws `System.InvalidOperationException`:** Composition has not resolved a toolchain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L277).

## `WithBindingGenerator`

<a id="api-b61b416eac393a61"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildContext.WithBindingGenerator(Inno.Build.Toolchains.INativeBindingGenerator) e1835a25263293443fa15b19b6ba826939a658f931a4e6553774bc8082abd5f3 -->

```csharp
public Inno.Build.Toolchains.NativeBuildContext Inno.Build.Toolchains.NativeBuildContext.WithBindingGenerator(Inno.Build.Toolchains.INativeBindingGenerator generator)
```

Borrows a generator while preserving this operation's input and tool ownership.

**Parameter `generator`:** The shared generation implementation selected by composition.

**Returns:** A derived context; neither context owns or disposes the provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L369).

## `WithBindings`

<a id="api-e0d159451a1bd571"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildContext.WithBindings(Inno.Build.Toolchains.NativeBindingGenerationResult) 8af11ab5dbd4fde060a242938839dceb22c7d27972bbf02497a2f6429fe6b96a -->

```csharp
public Inno.Build.Toolchains.NativeBuildContext Inno.Build.Toolchains.NativeBuildContext.WithBindings(Inno.Build.Toolchains.NativeBindingGenerationResult bindings)
```

Creates a scoped operation with an immutable, explicitly prepared target binding closure.

**Parameter `bindings`:** Borrowed completed generations indexed by their Native owners. Retain this result until all derived contexts finish.

**Returns:** A context sharing the existing tool selection, inputs and statistics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L333).

## `WithComponentOptions`

<a id="api-139d8d2c3595156c"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildContext.WithComponentOptions(Inno.Build.Toolchains.NativeComponentDescriptor,Inno.Build.Toolchains.NativeComponentBuildOptions) ddc9c4f6f45cda68509ebb137909aad50801064922fcbcb1a9a3741d682068aa -->

```csharp
public Inno.Build.Toolchains.NativeBuildContext Inno.Build.Toolchains.NativeBuildContext.WithComponentOptions(Inno.Build.Toolchains.NativeComponentDescriptor component, Inno.Build.Toolchains.NativeComponentBuildOptions options)
```

Scopes one component's explicit product configuration without changing the frozen SDK.

**Parameter `component`:** The sole source and intermediate owner receiving the configuration.

**Parameter `options`:** The immutable linkage, arguments and configuration input closure.

**Returns:** A context sharing inputs, bindings and statistics with the current operation.

**Throws `System.ArgumentNullException`:** An owner or configuration is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L295).

## `WithConfiguration`

<a id="api-ed6187d1ff6e70ca"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildContext.WithConfiguration(System.String) e3d58fff429ace20b3d9bf9eb7a9a7203f5587e846f3f7a4f29fe2aa7061809e -->

```csharp
public Inno.Build.Toolchains.NativeBuildContext Inno.Build.Toolchains.NativeBuildContext.WithConfiguration(string configuration)
```

Selects an explicit component configuration while borrowing this operation's frozen SDK and input state.

**Parameter `configuration`:** The debug or release configuration owned by the product step.

**Returns:** A derived context with no inherited workspace or artifact identity from another configuration.

**Throws `System.ArgumentException`:** The requested configuration is unsupported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L265).

## `WithToolchain`

<a id="api-bfb0418513278056"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildContext.WithToolchain(Inno.Build.Toolchains.NativeToolchainSelection) 1a838b42c0d7a3750537872e891330575c257c90c1a134b1021ba2191c315613 -->

```csharp
public Inno.Build.Toolchains.NativeBuildContext Inno.Build.Toolchains.NativeBuildContext.WithToolchain(Inno.Build.Toolchains.NativeToolchainSelection toolchain)
```

Attaches a provider's immutable tool selection while preserving this operation's input ownership.

**Parameter `toolchain`:** The complete selection resolved for the requested target.

**Returns:** A scoped context sharing input snapshots and statistics with this operation.

**Throws `System.ArgumentNullException`:** The selection is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L247).

## `configuration`

<a id="api-8f7ac1a87601b3a6"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildContext.configuration 7e39798ecf6f7d40e8b72c9426b5e259a928922e7d81a0bce9ffac84830c17ed -->

```csharp
public string Inno.Build.Toolchains.NativeBuildContext.configuration { get; }
```

Gets the normalized debug or release configuration prepared by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L155).

## `engineRoot`

<a id="api-1c458f490a0b4d8e"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildContext.engineRoot 56d4784118807ed0045f4977d6c82693db9d9995f0158c86f8c9f0683fafa625 -->

```csharp
public string Inno.Build.Toolchains.NativeBuildContext.engineRoot { get; }
```

Gets the frozen physical checkout used for every source, intermediate and output path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L150).

## `statistics`

<a id="api-3fbd993fb406c27a"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildContext.statistics 65b1cf8fede2243ddbc380f03fb5b068054763d6a1a07b29d74a256d42cdb703 -->

```csharp
public Inno.Build.Toolchains.NativeBuildStatistics Inno.Build.Toolchains.NativeBuildContext.statistics { get; }
```

Gets actual hashing and native execution work accumulated by this operation and its scoped contexts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L198).

## `toolchain`

<a id="api-7e1c3809e11b82d1"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildContext.toolchain 864894b16ff8b1ded58b7116f9363b1fbc534ba22fd1528fc2e2256d50a8cc92 -->

```csharp
public Inno.Build.Toolchains.NativeToolchainSelection? Inno.Build.Toolchains.NativeBuildContext.toolchain { get; }
```

Gets the explicit frozen target compiler and SDK selection, or null before composition resolves it.
Browser toolchains resolve their own workload-specific SDK independently.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/NativeBuildContext.cs#L161).
