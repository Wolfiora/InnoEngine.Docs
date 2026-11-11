---
title: "ManagedDeploymentCatalog"
description: "Reference for ManagedDeploymentCatalog in Inno.Build.Managed."
uid: api.inno.build.managed.d7d0909e210c9df0
kind: api
owners:
  - Inno.Build.Managed
apiSurface: source-clr
contracts:
  - project.inno-build-managed
---
# `ManagedDeploymentCatalog`

This reference describes `ManagedDeploymentCatalog` in `Inno.Build.Managed`. Read the [shared contract](../../../projects/inno-build-managed.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-150f773622a5c621) | Method |
| [`GetSupportedDeployments`](#api-eebb4c100200af07) | Method |
| [`Resolve`](#api-da273fad0b82d1ce) | Method |
| [`availableDeployments`](#api-688f0048e31b6000) | Property |

## Type declaration

<a id="api-d7d0909e210c9df0"></a>
<!-- api: T:Inno.Build.Managed.ManagedDeploymentCatalog c8e2a4ab21f6a359e0548fda32d8e1138cbeba8715fb0452b1a38e311f9153c9 -->

```csharp
public sealed class Inno.Build.Managed.ManagedDeploymentCatalog
```

Owns an immutable collection of deployment providers selected explicitly by the build composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentCatalog.cs#L10).

## `#ctor`

<a id="api-150f773622a5c621"></a>
<!-- api: M:Inno.Build.Managed.ManagedDeploymentCatalog.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Build.Managed.IManagedDeploymentCompiler}) 42d225e9936dfa1f71c052c79be5b28eee44b357b60be777b714cc9dd1e250bf -->

```csharp
public Inno.Build.Managed.ManagedDeploymentCatalog.ManagedDeploymentCatalog(System.Collections.Generic.IReadOnlyList<Inno.Build.Managed.IManagedDeploymentCompiler> compilers)
```

Copies providers and rejects ambiguous identities before any publication starts.

**Parameter `compilers`:** The explicit provider implementations owned by the composition root.

**Throws `System.ArgumentException`:** The collection is empty, contains null entries or has duplicate or invalid identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentCatalog.cs#L23).

## `GetSupportedDeployments`

<a id="api-eebb4c100200af07"></a>
<!-- api: M:Inno.Build.Managed.ManagedDeploymentCatalog.GetSupportedDeployments(System.String) 9a50fb01eb49f5abd4258b3a9ae4102cb29d1508b8aa117e6dd82541e5a3961a -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Build.Managed.ManagedDeploymentId> Inno.Build.Managed.ManagedDeploymentCatalog.GetSupportedDeployments(string runtimeIdentifier)
```

Returns the registered deployment identities that support one managed target.

**Parameter `runtimeIdentifier`:** The managed toolchain target selected by the platform composition.

**Returns:** A new immutable list in stable identity order; unsupported targets produce an empty list.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentCatalog.cs#L49).

## `Resolve`

<a id="api-da273fad0b82d1ce"></a>
<!-- api: M:Inno.Build.Managed.ManagedDeploymentCatalog.Resolve(Inno.Build.Managed.ManagedDeploymentId,System.String) 5ff8f40ca9a2cc46c5c760efadad84207c8fefef2aa05d6ec7081c61901c06d4 -->

```csharp
public Inno.Build.Managed.IManagedDeploymentCompiler Inno.Build.Managed.ManagedDeploymentCatalog.Resolve(Inno.Build.Managed.ManagedDeploymentId deployment, string runtimeIdentifier)
```

Resolves a provider and verifies target support before staging begins.

**Parameter `deployment`:** The stable provider identity selected by the build profile.

**Parameter `runtimeIdentifier`:** The exact managed target required by the platform composition.

**Returns:** The provider that supports the requested target; missing capabilities throw explicitly.

**Throws `System.InvalidOperationException`:** No provider is registered, or the selected provider cannot publish the requested target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentCatalog.cs#L68).

## `availableDeployments`

<a id="api-688f0048e31b6000"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentCatalog.availableDeployments a7f1f20e209459d74423f2741cc3cb69c4fe29e7d53d942ec75225ae97c642f0 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Build.Managed.ManagedDeploymentId> Inno.Build.Managed.ManagedDeploymentCatalog.availableDeployments { get; }
```

Gets the immutable provider identities in stable order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentCatalog.cs#L38).
