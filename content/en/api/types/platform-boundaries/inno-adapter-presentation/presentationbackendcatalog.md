---
title: "PresentationBackendCatalog"
description: "Reference for PresentationBackendCatalog in Inno.Adapter.Presentation."
uid: api.inno.adapter.presentation.52c7610b0dd5590c
kind: api
owners:
  - Inno.Adapter.Presentation
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation
---
# `PresentationBackendCatalog`

This reference describes `PresentationBackendCatalog` in `Inno.Adapter.Presentation`. Read the [shared contract](../../../projects/inno-adapter-presentation.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.Presentation.IPresentationBackendFactory`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8dee44613dce9ef2) | Method |
| [`CreateContext`](#api-d4284a1eec39ec1a) | Method |
| [`supportedBackends`](#api-a15f08031ff61f1f) | Property |

## Type declaration

<a id="api-52c7610b0dd5590c"></a>
<!-- api: T:Inno.Adapter.Presentation.PresentationBackendCatalog f6ae41599ee4eefbb657eecff19c6ebccf866e407eeefab642287d4b18233fb1 -->

```csharp
public sealed class Inno.Adapter.Presentation.PresentationBackendCatalog : Inno.Adapter.Presentation.IPresentationBackendFactory
```

Resolves presentation providers from one immutable, composition-owned registration snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendCatalog.cs#L10).

## `#ctor`

<a id="api-8dee44613dce9ef2"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Presentation.PresentationBackendProvider}) bbcd6337e4339c02f570ba5957e17298bcbceea67beb96e8851797792a88d7b5 -->

```csharp
public Inno.Adapter.Presentation.PresentationBackendCatalog.PresentationBackendCatalog(System.Collections.Generic.IEnumerable<Inno.Adapter.Presentation.PresentationBackendProvider> providers)
```

Validates and captures a complete provider set without creating any service.

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

**Throws `System.ArgumentNullException`:** The provider sequence is null.

**Throws `System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendCatalog.cs#L26).

## `CreateContext`

<a id="api-d4284a1eec39ec1a"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationBackendCatalog.CreateContext(Inno.Adapter.Presentation.PresentationBackendId,Inno.Adapter.Presentation.PresentationBackendOptions) d799f920f5c272421262668816ab36b54bf5256dd5fd4a407a6c5d6550861422 -->

```csharp
public Inno.Adapter.Presentation.IPresentationContext Inno.Adapter.Presentation.PresentationBackendCatalog.CreateContext(Inno.Adapter.Presentation.PresentationBackendId backend, Inno.Adapter.Presentation.PresentationBackendOptions options)
```

Creates a presentation context over compatible platform and rendering adapters.

**Parameter `backend`:** Stable presentation implementation selected by the composition root.

**Parameter `options`:** Host-owned resources and presentation policy.

**Returns:** A caller-owned backend-neutral presentation context.

**Throws `System.NotSupportedException`:** Thrown when the selected platform, rendering, and presentation backends are incompatible.

**Throws `System.InvalidOperationException`:** The selected provider returned no service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendCatalog.cs#L44).

## `supportedBackends`

<a id="api-a15f08031ff61f1f"></a>
<!-- api: P:Inno.Adapter.Presentation.PresentationBackendCatalog.supportedBackends 2e6bb70afb6c6b6cdaa8acbf64802ca6d7411d1f6e213046b5a56f1bc8a0308e -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Adapter.Presentation.PresentationBackendId> Inno.Adapter.Presentation.PresentationBackendCatalog.supportedBackends { get; }
```

Gets the implementation identities available in this immutable factory snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendCatalog.cs#L38).
