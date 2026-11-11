---
title: "BuildPlatformContribution"
description: "Reference for BuildPlatformContribution in Inno.Build.Composition."
uid: api.inno.build.composition.c2c41402f03da6ab
kind: api
owners:
  - Inno.Build.Composition
apiSurface: source-clr
contracts:
  - project.inno-build-composition
---
# `BuildPlatformContribution`

This reference describes `BuildPlatformContribution` in `Inno.Build.Composition`. Read the [shared contract](../../../projects/inno-build-composition.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-267ca0a837bde685) | Method |
| [`bindingGenerator`](#api-97ab85b58a13fa7f) | Property |
| [`descriptor`](#api-d97453467d7b4c2f) | Property |
| [`editorProject`](#api-c5572f0e44d46ac7) | Property |
| [`factory`](#api-47c0d6d31dab95dd) | Property |
| [`managedDeployments`](#api-298660b065913185) | Property |
| [`nativeProducts`](#api-65e7f6f9e7a7810a) | Property |
| [`supportPackSource`](#api-3c9831053813332e) | Property |
| [`toolchainProvider`](#api-373e14f9906d74b9) | Property |

## Type declaration

<a id="api-c2c41402f03da6ab"></a>
<!-- api: T:Inno.Build.Composition.BuildPlatformContribution e379ff8dfce63c50e47e0be68586248eb051cfd223c1ed2992acd9df278821ef -->

```csharp
public sealed class Inno.Build.Composition.BuildPlatformContribution
```

Binds one implemented target to its factory, Support Pack source and SDK provider as a single registration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildPlatformContribution.cs#L14).

## `#ctor`

<a id="api-267ca0a837bde685"></a>
<!-- api: M:Inno.Build.Composition.BuildPlatformContribution.#ctor(Inno.Build.PlatformTargetDescriptor,Inno.Build.Composition.BuildTargetFactory,Inno.Build.SupportPacks.IPlayerSupportPackSource,Inno.Build.Toolchains.INativeToolchainProvider,System.String,System.Collections.Generic.IReadOnlyList{Inno.Build.Composition.NativeProductContribution},Inno.Build.Toolchains.INativeBindingGenerator,System.Collections.Generic.IReadOnlyList{Inno.Build.Managed.ManagedDeploymentId}) 5578783d7b08a59c4293008fe12e84cdc3cb549d77d416248201daef4b9a45a2 -->

```csharp
public Inno.Build.Composition.BuildPlatformContribution.BuildPlatformContribution(Inno.Build.PlatformTargetDescriptor descriptor, Inno.Build.Composition.BuildTargetFactory factory, Inno.Build.SupportPacks.IPlayerSupportPackSource supportPackSource, Inno.Build.Toolchains.INativeToolchainProvider toolchainProvider, string? editorProject = null, System.Collections.Generic.IReadOnlyList<Inno.Build.Composition.NativeProductContribution>? nativeProducts = null, Inno.Build.Toolchains.INativeBindingGenerator? bindingGenerator = null, System.Collections.Generic.IReadOnlyList<Inno.Build.Managed.ManagedDeploymentId>? managedDeployments = null)
```

Creates a complete target registration and rejects mismatched source identities immediately.

**Parameter `descriptor`:** The immutable target facts owned by the platform package.

**Parameter `factory`:** The authoring target factory for these exact target facts.

**Parameter `supportPackSource`:** The matching runtime and compiler input source.

**Parameter `toolchainProvider`:** The SDK resolver for this target, independent of the host.

**Parameter `editorProject`:** The portable checkout-relative Editor product, or null when no Editor is supported.

**Parameter `nativeProducts`:** Explicit product-native plans owned by this target; null declares no ordinary native product build.

**Parameter `bindingGenerator`:** The target-owned generator, or null when the contribution generates no bindings.

**Parameter `managedDeployments`:** Deployment identities supported by this platform, or null when none is contributed.

**Throws `System.ArgumentNullException`:** A required contribution is null.

**Throws `System.ArgumentException`:** A source identity differs from its target, an Editor declaration is inconsistent,
native product plans are null or duplicated, or deployment identities are unassigned or repeated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildPlatformContribution.cs#L50).

## `bindingGenerator`

<a id="api-97ab85b58a13fa7f"></a>
<!-- api: P:Inno.Build.Composition.BuildPlatformContribution.bindingGenerator 92d8635a57db6b2f03c7fa01860f312509d3d35ff56ed08aae08f25faaeeb5ac -->

```csharp
public Inno.Build.Toolchains.INativeBindingGenerator? Inno.Build.Composition.BuildPlatformContribution.bindingGenerator { get; }
```

Gets the target-owned generator, or null when no binding capability is registered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildPlatformContribution.cs#L122).

## `descriptor`

<a id="api-d97453467d7b4c2f"></a>
<!-- api: P:Inno.Build.Composition.BuildPlatformContribution.descriptor 413c79c342ccd47b16e43df7ef191fc6cda1492f1865bf1f0963702f51a35b19 -->

```csharp
public Inno.Build.PlatformTargetDescriptor Inno.Build.Composition.BuildPlatformContribution.descriptor { get; }
```

Gets the platform-owned, explicit target mapping.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildPlatformContribution.cs#L93).

## `editorProject`

<a id="api-c5572f0e44d46ac7"></a>
<!-- api: P:Inno.Build.Composition.BuildPlatformContribution.editorProject 25c15ac885014c8c909e280d0518873135a1aa9a0fe0fd4aa82378a3ea4cefd8 -->

```csharp
public string? Inno.Build.Composition.BuildPlatformContribution.editorProject { get; }
```

Gets the implemented Editor product location without deriving a project from target naming.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildPlatformContribution.cs#L113).

## `factory`

<a id="api-47c0d6d31dab95dd"></a>
<!-- api: P:Inno.Build.Composition.BuildPlatformContribution.factory 1aece24c0c5e8eb5b2c2e17ff30efa7a1ad2f88599f681793911ca753c0b98fd -->

```csharp
public Inno.Build.Composition.BuildTargetFactory Inno.Build.Composition.BuildPlatformContribution.factory { get; }
```

Gets the matching authoring target factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildPlatformContribution.cs#L98).

## `managedDeployments`

<a id="api-298660b065913185"></a>
<!-- api: P:Inno.Build.Composition.BuildPlatformContribution.managedDeployments 50d4e681dec7ab2746f58f4ee609b6d4e6a369c7ddd868a7170cd10f32083625 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Build.Managed.ManagedDeploymentId> Inno.Build.Composition.BuildPlatformContribution.managedDeployments { get; }
```

Gets the deployment identities this platform authorizes for its declared managed runtime target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildPlatformContribution.cs#L127).

## `nativeProducts`

<a id="api-65e7f6f9e7a7810a"></a>
<!-- api: P:Inno.Build.Composition.BuildPlatformContribution.nativeProducts d10599a9bf9dd0538c2db82223c3d848c98cd23a37db331a8cb3bdcbfa068a51 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Build.Composition.NativeProductContribution> Inno.Build.Composition.BuildPlatformContribution.nativeProducts { get; }
```

Gets the frozen ordinary product-build closures explicitly contributed by this target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildPlatformContribution.cs#L118).

## `supportPackSource`

<a id="api-3c9831053813332e"></a>
<!-- api: P:Inno.Build.Composition.BuildPlatformContribution.supportPackSource 864dbf19b7e68a7ee74b933d02f5633b57ea2d3313c421179889e3c59ec0abe3 -->

```csharp
public Inno.Build.SupportPacks.IPlayerSupportPackSource Inno.Build.Composition.BuildPlatformContribution.supportPackSource { get; }
```

Gets the matching product input source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildPlatformContribution.cs#L103).

## `toolchainProvider`

<a id="api-373e14f9906d74b9"></a>
<!-- api: P:Inno.Build.Composition.BuildPlatformContribution.toolchainProvider e8c3f06925c96da482583441a8648eae05d27b4176952396ac694cd91c341fbc -->

```csharp
public Inno.Build.Toolchains.INativeToolchainProvider Inno.Build.Composition.BuildPlatformContribution.toolchainProvider { get; }
```

Gets the explicit SDK resolver for this target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildPlatformContribution.cs#L108).
