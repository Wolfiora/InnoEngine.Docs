---
title: "BuildCachePolicy"
description: "Reference for BuildCachePolicy in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.3f3ad5d00c67045c
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `BuildCachePolicy`

This reference describes `BuildCachePolicy` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e241a8b60e70c998) | Method |
| [`maximumBytes`](#api-6dfb3adee2f162d0) | Property |
| [`minimumFreeBytes`](#api-1fd0322bf916c953) | Property |
| [`timeBudget`](#api-7a977b74d641c4e5) | Property |

## Type declaration

<a id="api-3f3ad5d00c67045c"></a>
<!-- api: T:Inno.Build.Toolchains.BuildCachePolicy dc70d8cba3a0a39b778c1b8ecf8f6337e08128472ffbc7064a65c42a975b66e5 -->

```csharp
public sealed class Inno.Build.Toolchains.BuildCachePolicy
```

Defines bounded retirement pressure without allowing active or current generations to be removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCachePolicy.cs#L8).

## `#ctor`

<a id="api-e241a8b60e70c998"></a>
<!-- api: M:Inno.Build.Toolchains.BuildCachePolicy.#ctor(System.Int64,System.Int64,System.Nullable{System.TimeSpan}) b7457ca41f8e6d67a68a4a6073c61b603892fbf994e2026c6f250dd338919e21 -->

```csharp
public Inno.Build.Toolchains.BuildCachePolicy.BuildCachePolicy(long maximumBytes = 68719476736, long minimumFreeBytes = 21474836480, System.TimeSpan? timeBudget = null)
```

Creates an immutable cache budget and automatic retirement time limit.

**Parameter `maximumBytes`:** The managed cache budget; defaults to 64 GiB.

**Parameter `minimumFreeBytes`:** The free-space threshold on the checkout volume; defaults to 20 GiB.

**Parameter `timeBudget`:** The retirement duration, or null for the five-second default.

**Throws `System.ArgumentOutOfRangeException`:** A budget is negative or the time limit is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCachePolicy.cs#L25).

## `maximumBytes`

<a id="api-6dfb3adee2f162d0"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCachePolicy.maximumBytes 7c824b3e29b16692b988fa9555ad2376e56c2be88fe5f0107fbde4f9630cb78e -->

```csharp
public long Inno.Build.Toolchains.BuildCachePolicy.maximumBytes { get; }
```

Gets the maximum size of explicitly registered build caches.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCachePolicy.cs#L45).

## `minimumFreeBytes`

<a id="api-1fd0322bf916c953"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCachePolicy.minimumFreeBytes 9cb228360bb3cdee736b32d332e2090fa79cb4f118b3b95bf73e5387ce355a02 -->

```csharp
public long Inno.Build.Toolchains.BuildCachePolicy.minimumFreeBytes { get; }
```

Gets the free-space threshold below which additional retirement is requested.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCachePolicy.cs#L50).

## `timeBudget`

<a id="api-7a977b74d641c4e5"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCachePolicy.timeBudget 9ab4953f44f23679ba7d4e096a5c0dce512cf2db42b7076d9c9774ee2f6eec0d -->

```csharp
public System.TimeSpan Inno.Build.Toolchains.BuildCachePolicy.timeBudget { get; }
```

Gets the duration after which an attempt starts no further retirement work.
An already executing filesystem operation finishes before ownership is released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCachePolicy.cs#L56).
