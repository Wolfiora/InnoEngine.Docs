---
title: "BuildCacheOwnerDescriptor"
description: "Reference for BuildCacheOwnerDescriptor in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.888aef18924cab93
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `BuildCacheOwnerDescriptor`

This reference describes `BuildCacheOwnerDescriptor` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3bc8b7e189b23e5e) | Method |
| [`coordinationPath`](#api-2cd41209b1f8e9f6) | Property |
| [`directory`](#api-b814126b1ad81fd2) | Property |
| [`id`](#api-70fc00d0f7730f40) | Property |

## Type declaration

<a id="api-888aef18924cab93"></a>
<!-- api: T:Inno.Build.Toolchains.BuildCacheOwnerDescriptor fc39d182692d0c375d2d6a94cf7ef84cb0252092de6a08068d259e36456e077a -->

```csharp
public sealed class Inno.Build.Toolchains.BuildCacheOwnerDescriptor
```

Registers a publisher's exact cache boundary and its current artifact ownership inventory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheOwnerDescriptor.cs#L11).

## `#ctor`

<a id="api-3bc8b7e189b23e5e"></a>
<!-- api: M:Inno.Build.Toolchains.BuildCacheOwnerDescriptor.#ctor(System.String,System.String,System.String,System.Func{System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.BuildCacheArtifactDescriptor}},System.Func{System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyList{System.String}},System.Action{System.Threading.CancellationToken}) b5afea570c8ebb4661e323965a87500f9846a2690bfe8087c19a3844106ed6da -->

```csharp
public Inno.Build.Toolchains.BuildCacheOwnerDescriptor.BuildCacheOwnerDescriptor(string id, string directory, string coordinationPath, System.Func<System.Threading.CancellationToken, System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.BuildCacheArtifactDescriptor>> readArtifacts, System.Func<System.Threading.CancellationToken, System.Collections.Generic.IReadOnlyList<string>> readProtectedArtifacts, System.Action<System.Threading.CancellationToken>? retireMetadata = null)
```

Borrows publisher callbacks without discovering artifacts from directory names or file extensions.

**Parameter `id`:** The unique registration identity within this cleanup operation.

**Parameter `directory`:** The absolute cache root exclusively managed by this publisher.

**Parameter `coordinationPath`:** The persistent owner lease also acquired by publication and protected-root updates.
It must remain within the cache root and is never deleted by cleanup.

**Parameter `readArtifacts`:** Returns only generations proven to belong to this owner, with their dependency metadata.
The callback must observe cancellation and must not create, repair or publish artifacts.

**Parameter `readProtectedArtifacts`:** Returns current product and Pack roots; retirement follows their complete dependency closure.
Root updates must hold coordinationPath and retain each referenced artifact's reading lease.

**Parameter `retireMetadata`:** Optional owner-specific metadata retirement, called only under exclusive owner coordination.

**Throws `System.ArgumentException`:** An identity is blank or a path is relative.

**Throws `System.ArgumentNullException`:** An inventory callback is absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheOwnerDescriptor.cs#L47).

## `coordinationPath`

<a id="api-2cd41209b1f8e9f6"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCacheOwnerDescriptor.coordinationPath 38ac833f7d2b96b1d2e876602c67c46161a791ad2745cb1214ef2e0ac77c93f1 -->

```csharp
public string Inno.Build.Toolchains.BuildCacheOwnerDescriptor.coordinationPath { get; }
```

Gets the persistent lease shared with publication and protected-root changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheOwnerDescriptor.cs#L83).

## `directory`

<a id="api-b814126b1ad81fd2"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCacheOwnerDescriptor.directory c8373aa5ae6f592d702212a3f5fd3895b4c9a971f527d4a8de0091fc47eace6f -->

```csharp
public string Inno.Build.Toolchains.BuildCacheOwnerDescriptor.directory { get; }
```

Gets the exact registered cache root; its parent directories are never managed implicitly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheOwnerDescriptor.cs#L78).

## `id`

<a id="api-70fc00d0f7730f40"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCacheOwnerDescriptor.id 2781d42b07f64dd8ea7035258e470e93e202ba0cc6a3961b0e734945473b051a -->

```csharp
public string Inno.Build.Toolchains.BuildCacheOwnerDescriptor.id { get; }
```

Gets the unique publisher identity registered for this cleanup operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheOwnerDescriptor.cs#L73).
