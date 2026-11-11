---
title: "BuildDistribution"
description: "Reference for BuildDistribution in Inno.Build.Composition."
uid: api.inno.build.composition.762eabbced8955c7
kind: api
owners:
  - Inno.Build.Composition
apiSurface: source-clr
contracts:
  - project.inno-build-composition
---
# `BuildDistribution`

This reference describes `BuildDistribution` in `Inno.Build.Composition`. Read the [shared contract](../../../projects/inno-build-composition.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6f3ae276221be033) | Method |
| [`CreateBindings`](#api-c6da94a0fbd266ac) | Method |
| [`ResolveBindingGenerator`](#api-a10ca0c7be9626b4) | Method |
| [`ResolveNativeProduct`](#api-aca5b758ccee4d5a) | Method |
| [`ResolveNativeToolchain`](#api-2a30f01d0b267f9f) | Method |
| [`TryResolveNativeToolchain`](#api-18d6ee306133472a) | Method |
| [`ValidateDeployment`](#api-b5dd9ba0375c9138) | Method |
| [`availableTargets`](#api-d8e938dd581831d0) | Property |
| [`managedDeployments`](#api-d7a161536e62d231) | Property |
| [`platforms`](#api-9cb03e24f37555f3) | Property |
| [`supportPacks`](#api-a2b64727108ba31a) | Property |

## Type declaration

<a id="api-762eabbced8955c7"></a>
<!-- api: T:Inno.Build.Composition.BuildDistribution 79d14f78883dbf822163ea1913d9660cdd8e3c800bf06a389fcdefa6c939bbb2 -->

```csharp
public sealed class Inno.Build.Composition.BuildDistribution
```

Freezes platform factories, managed publishers, and matching Support Pack sources as one distribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildDistribution.cs#L17).

## `#ctor`

<a id="api-6f3ae276221be033"></a>
<!-- api: M:Inno.Build.Composition.BuildDistribution.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Build.Composition.GameBuildContribution},System.Collections.Generic.IReadOnlyList{Inno.Build.Managed.IManagedDeploymentCompiler},System.Collections.Generic.IReadOnlyList{Inno.Build.Composition.NativeToolchainContribution}) 3cb54eddc5372a9c04556c480856a6080571c7dc01943601a2d54249aee44938 -->

```csharp
public Inno.Build.Composition.BuildDistribution.BuildDistribution(System.Collections.Generic.IReadOnlyList<Inno.Build.Composition.GameBuildContribution> games, System.Collections.Generic.IReadOnlyList<Inno.Build.Managed.IManagedDeploymentCompiler> managedCompilers, System.Collections.Generic.IReadOnlyList<Inno.Build.Composition.NativeToolchainContribution>? nativeOnlyContributions = null)
```

Captures a complete distribution without creating authoring services or starting any tool.

**Parameter `games`:** Complete target contributions with explicitly bound factories, sources and SDK providers.

**Parameter `managedCompilers`:** The deployment implementations owned by this composition.

**Parameter `nativeOnlyContributions`:** Additional implemented SDK capabilities that do not register game publication targets.

**Throws `System.ArgumentNullException`:** A required collection is null.

**Throws `System.ArgumentException`:** Contributions are empty, null, duplicated, or unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildDistribution.cs#L45).

## `CreateBindings`

<a id="api-c6da94a0fbd266ac"></a>
<!-- api: M:Inno.Build.Composition.BuildDistribution.CreateBindings(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Serialization.SerializationRegistry,Inno.Extensibility.Types.TypeCatalog) 24d2a24338f4021e99e6f764fc15443f0fc48dec3d1d42be2add14a4504481cf -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Build.GameBuildTargetBinding> Inno.Build.Composition.BuildDistribution.CreateBindings(Inno.Assets.Pipeline.AssetPipeline assets, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Extensibility.Types.TypeCatalog types)
```

Creates platform targets and validates their identities and default deployment capabilities.

**Parameter `assets`:** The active borrowed authoring asset owner.

**Parameter `serialization`:** The matching borrowed serialization registry.

**Parameter `types`:** The matching borrowed extension catalog.

**Returns:** An immutable target collection ready for pipeline construction.

**Throws `System.InvalidOperationException`:** A factory returns no target, targets disagree with Support Pack identities,
or a default managed deployment cannot publish its platform.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildDistribution.cs#L212).

## `ResolveBindingGenerator`

<a id="api-a10ca0c7be9626b4"></a>
<!-- api: M:Inno.Build.Composition.BuildDistribution.ResolveBindingGenerator(System.String) ee997f503dc53cd9337ef87c8ae15da029416164e524dbe3048a3e06fcb4e99b -->

```csharp
public Inno.Build.Toolchains.INativeBindingGenerator Inno.Build.Composition.BuildDistribution.ResolveBindingGenerator(string targetId)
```

Resolves the generator explicitly registered by a target integration.

**Parameter `targetId`:** The requested native target.

**Returns:** The borrowed target generator.

**Throws `System.NotSupportedException`:** The target contributes no binding generator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildDistribution.cs#L115).

## `ResolveNativeProduct`

<a id="api-aca5b758ccee4d5a"></a>
<!-- api: M:Inno.Build.Composition.BuildDistribution.ResolveNativeProduct(System.String,System.String) ee57eafa189247ce38ea38184ad741c8f0091028c460974b252dd8ab45ffbe79 -->

```csharp
public Inno.Build.Composition.NativeProductContribution Inno.Build.Composition.BuildDistribution.ResolveNativeProduct(string targetId, string productId)
```

Resolves a platform-contributed product closure without selecting backends inside the invoking host.

**Parameter `targetId`:** The explicit registered product target.

**Parameter `productId`:** The product whose ordinary native build is requested.

**Returns:** The borrowed immutable plan declared by the target's composition.

**Throws `System.NotSupportedException`:** The target or its ordinary native product build is not registered.

**Throws `System.ArgumentException`:** A target or product identity is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildDistribution.cs#L181).

## `ResolveNativeToolchain`

<a id="api-2a30f01d0b267f9f"></a>
<!-- api: M:Inno.Build.Composition.BuildDistribution.ResolveNativeToolchain(System.String) 331c150611e0de890f268195ffcbe7cc4257d18e464aedcc611db40e3659d0a1 -->

```csharp
public Inno.Build.Toolchains.INativeToolchainProvider Inno.Build.Composition.BuildDistribution.ResolveNativeToolchain(string targetId)
```

Resolves the SDK integration bound to an explicitly registered publication target.

**Parameter `targetId`:** The requested native target identity, independently selected from the execution host.

**Returns:** The borrowed provider; resolving it freezes tools before component work begins.

**Throws `System.NotSupportedException`:** No native toolchain contribution is registered for the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildDistribution.cs#L131).

## `TryResolveNativeToolchain`

<a id="api-18d6ee306133472a"></a>
<!-- api: M:Inno.Build.Composition.BuildDistribution.TryResolveNativeToolchain(System.String,Inno.Build.Toolchains.INativeToolchainProvider@) 8a884e540338200b8da920e09df669e42649ae2a99c6b95e1bbf83469eed4825 -->

```csharp
public bool Inno.Build.Composition.BuildDistribution.TryResolveNativeToolchain(string targetId, out Inno.Build.Toolchains.INativeToolchainProvider? provider)
```

Checks whether this distribution contributes an SDK for an explicitly requested binding target.
A standalone binding definition may describe a target without registering a product publisher.

**Parameter `targetId`:** The exact target identity; no host-derived target is substituted.

**Parameter `provider`:** The borrowed SDK provider when registered, or null when the distribution has no such contribution.

**Returns:** True when the target has an explicit SDK contribution; false does not imply SDK-free configuration.

**Throws `System.ArgumentException`:** The target identity is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildDistribution.cs#L155).

## `ValidateDeployment`

<a id="api-b5dd9ba0375c9138"></a>
<!-- api: M:Inno.Build.Composition.BuildDistribution.ValidateDeployment(Inno.Build.IGameBuildTarget,Inno.Build.Managed.ManagedDeploymentId) 42d80b879ef29b4ac7ec314bdd79459be70ff431b791441ef9a29ef7c36afdaa -->

```csharp
public void Inno.Build.Composition.BuildDistribution.ValidateDeployment(Inno.Build.IGameBuildTarget target, Inno.Build.Managed.ManagedDeploymentId deployment)
```

Rejects unsupported target and deployment pairs before any staging or publication begins.

**Parameter `target`:** A target composed by this distribution.

**Parameter `deployment`:** The explicit deployment selected for publication.

**Throws `System.InvalidOperationException`:** The platform is absent or the deployment lacks its runtime capability.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildDistribution.cs#L250).

## `availableTargets`

<a id="api-d8e938dd581831d0"></a>
<!-- api: P:Inno.Build.Composition.BuildDistribution.availableTargets 0e8b0b4d964321e803379f95e3b7c7d7ba4daa2aa961f2bf73b740d74f98323b -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Build.BuildTargetId> Inno.Build.Composition.BuildDistribution.availableTargets { get; }
```

Gets the immutable platform identities shared by all hosts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildDistribution.cs#L86).

## `managedDeployments`

<a id="api-d7a161536e62d231"></a>
<!-- api: P:Inno.Build.Composition.BuildDistribution.managedDeployments 0a78dbc2ea24a586f28ac3d1740f63cd123a51b2fb20a9964d4b8c26302e1ffa -->

```csharp
public Inno.Build.Managed.ManagedDeploymentCatalog Inno.Build.Composition.BuildDistribution.managedDeployments { get; }
```

Gets the immutable deployment implementation catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildDistribution.cs#L96).

## `platforms`

<a id="api-9cb03e24f37555f3"></a>
<!-- api: P:Inno.Build.Composition.BuildDistribution.platforms 0735bdebd3a2e9bdf3a779377f1a8b862c9aea0e79a99b97aa606a6c6774ae9e -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Build.Composition.BuildPlatformContribution> Inno.Build.Composition.BuildDistribution.platforms { get; }
```

Gets complete platform registrations in their explicit composition order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildDistribution.cs#L91).

## `supportPacks`

<a id="api-a2b64727108ba31a"></a>
<!-- api: P:Inno.Build.Composition.BuildDistribution.supportPacks d4023e1b396ef3e8d0bfad902d9fa549516177339f60ecc87ed010cb1b178dfb -->

```csharp
public Inno.Build.SupportPacks.PlayerSupportPackPublisher Inno.Build.Composition.BuildDistribution.supportPacks { get; }
```

Gets the publisher containing the same platform input providers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/BuildDistribution.cs#L101).
