---
title: "PresentationBackendProvider"
description: "Reference for PresentationBackendProvider in Inno.Adapter.Presentation."
uid: api.inno.adapter.presentation.3c63f1ad0a666728
kind: api
owners:
  - Inno.Adapter.Presentation
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation
---
# `PresentationBackendProvider`

This reference describes `PresentationBackendProvider` in `Inno.Adapter.Presentation`. Read the [shared contract](../../../projects/inno-adapter-presentation.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-667ed04e887987d8) | Method |
| [`CreateContext`](#api-c88dbf1e67e33da2) | Method |
| [`id`](#api-69969514867e8593) | Property |

## Type declaration

<a id="api-3c63f1ad0a666728"></a>
<!-- api: T:Inno.Adapter.Presentation.PresentationBackendProvider 87413423192bdf205434979a8657c118a6b63c1b7997d6695ae483be4d033923 -->

```csharp
public abstract class Inno.Adapter.Presentation.PresentationBackendProvider
```

Describes an explicitly composed host presentation implementation and its creation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendProvider.cs#L8).

## `#ctor`

<a id="api-667ed04e887987d8"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationBackendProvider.#ctor(Inno.Adapter.Presentation.PresentationBackendId) b9da8c9f3d10e213df4205606a1d1f895b5435c3bf8d39b46d93b65cd70551c6 -->

```csharp
protected Inno.Adapter.Presentation.PresentationBackendProvider.PresentationBackendProvider(Inno.Adapter.Presentation.PresentationBackendId id)
```

Captures the implementation identity assigned by the composition owner.

**Parameter `id`:** The assigned, immutable implementation identifier.

**Throws `System.ArgumentException`:** The identifier is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendProvider.cs#L19).

## `CreateContext`

<a id="api-c88dbf1e67e33da2"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationBackendProvider.CreateContext(Inno.Adapter.Presentation.PresentationBackendOptions) b03c953d76932d618d7ba68dd0034445973bb27682ca01d3c047f51f06656318 -->

```csharp
public abstract Inno.Adapter.Presentation.IPresentationContext Inno.Adapter.Presentation.PresentationBackendProvider.CreateContext(Inno.Adapter.Presentation.PresentationBackendOptions options)
```

Creates a new caller-owned presentation context over the supplied host resources.

**Parameter `options`:** Externally owned platform and rendering resources, together with the requested presentation policy.

**Returns:** A new context whose caller must dispose it before releasing the supplied resources.
Providers must not return null.

**Throws `System.NotSupportedException`:** The host resources or requested features are incompatible with this implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendProvider.cs#L44).

## `id`

<a id="api-69969514867e8593"></a>
<!-- api: P:Inno.Adapter.Presentation.PresentationBackendProvider.id f6b3f6476be26a60f43c5c463e138726c7e94dd66a6f9adfdf6e582304addd16 -->

```csharp
public Inno.Adapter.Presentation.PresentationBackendId Inno.Adapter.Presentation.PresentationBackendProvider.id { get; }
```

Gets this registration's immutable implementation identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendProvider.cs#L29).
