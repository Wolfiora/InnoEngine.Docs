---
title: "BuildCacheOwnerCatalog"
description: "Reference for BuildCacheOwnerCatalog in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.d5b7efe7dde2cab6
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `BuildCacheOwnerCatalog`

This reference describes `BuildCacheOwnerCatalog` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ReadOwners`](#api-069af7a7f5382b57) | Method |
| [`Register`](#api-75e1a375b2f99642) | Method |

## Type declaration

<a id="api-d5b7efe7dde2cab6"></a>
<!-- api: T:Inno.Build.Toolchains.BuildCacheOwnerCatalog f9ab6b17dfe5b5a513cbf637ff9ef1d9b763d825e361378235cc768624b9a9d2 -->

```csharp
public static class Inno.Build.Toolchains.BuildCacheOwnerCatalog
```

Persists explicit publisher registrations for maintenance without loading the production distribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheOwnerCatalog.cs#L16).

## `ReadOwners`

<a id="api-069af7a7f5382b57"></a>
<!-- api: M:Inno.Build.Toolchains.BuildCacheOwnerCatalog.ReadOwners(System.String,System.Threading.CancellationToken) 28717f0da772b26855fa3ae349b2be2b89227897bd24ecf6d3621fb1a32e3aa6 -->

```csharp
public static System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.BuildCacheOwnerDescriptor> Inno.Build.Toolchains.BuildCacheOwnerCatalog.ReadOwners(string engineRoot, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Reads explicitly registered roots using each publisher's existing inventory and protection rules.

**Parameter `engineRoot`:** The absolute checkout containing registrations.

**Parameter `cancellationToken`:** Cancels reading before a cleanup plan exists.

**Returns:** Frozen owner descriptors; an unprepared checkout returns an empty list.

**Throws `System.IO.InvalidDataException`:** A registration is malformed or has an ambiguous identity.

**Throws `System.IO.IOException`:** A registered path crosses a link or leaves the checkout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheOwnerCatalog.cs#L90).

## `Register`

<a id="api-75e1a375b2f99642"></a>
<!-- api: M:Inno.Build.Toolchains.BuildCacheOwnerCatalog.Register(System.String,System.String,System.String,Inno.Build.Toolchains.BuildCacheArtifactRole,System.Threading.CancellationToken) e412d19cff48dfe5620351bdb9790aef061ba2372e1a99572c7acd831a856877 -->

```csharp
public static void Inno.Build.Toolchains.BuildCacheOwnerCatalog.Register(string engineRoot, string directory, string id, Inno.Build.Toolchains.BuildCacheArtifactRole role, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Registers a publisher root; this never adopts unrecorded artifacts inside that root.

**Parameter `engineRoot`:** The absolute checkout owning the registration.

**Parameter `directory`:** The exact publisher root beneath the checkout.

**Parameter `id`:** The distribution's unique owner identity.

**Parameter `role`:** The publisher's actual artifact lifetime.

**Parameter `cancellationToken`:** Cancels before registration commits.

**Throws `System.IO.IOException`:** A registration crosses a link or ownership boundary.

**Throws `System.IO.InvalidDataException`:** An existing root has a different registration.

**Throws `System.OperationCanceledException`:** Cancellation precedes commit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheOwnerCatalog.cs#L45).
