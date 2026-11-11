---
title: "BuildCacheCleanupResult"
description: "Reference for BuildCacheCleanupResult in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.d918d9a0796f6207
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `BuildCacheCleanupResult`

This reference describes `BuildCacheCleanupResult` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`failures`](#api-0c24e9db2c050cbd) | Property |
| [`retired`](#api-aa94064710f77e60) | Property |
| [`retiredBytes`](#api-4682e87a1cf17634) | Property |
| [`skipped`](#api-2c53d85d743d363b) | Property |
| [`timeLimitReached`](#api-7bba09ef2a07923c) | Property |

## Type declaration

<a id="api-d918d9a0796f6207"></a>
<!-- api: T:Inno.Build.Toolchains.BuildCacheCleanupResult 259cb6b7b57b0fa961da5c3789395393942e93abcb9bd77af6180809666672bb -->

```csharp
public sealed class Inno.Build.Toolchains.BuildCacheCleanupResult
```

Reports completed retirement independently from protected, active and failed artifacts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheCleanupResult.cs#L11).

## `failures`

<a id="api-0c24e9db2c050cbd"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCacheCleanupResult.failures 13338d646cdfb3bb0c36f1a9f4b6f694a89ec66a4dffbd4e5993ff7adce318d3 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, string> Inno.Build.Toolchains.BuildCacheCleanupResult.failures { get; }
```

Gets failed paths and their IO, permission or metadata-integrity diagnostics.
A metadata failure preserves its claim and does not erase completed payload retirements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheCleanupResult.cs#L41).

## `retired`

<a id="api-aa94064710f77e60"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCacheCleanupResult.retired 353c9aa0ea75a6de55f6b1fa452f6ca74870da6631a48b8f98e5e4379c3a4ae3 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.BuildCacheCleanupResult.retired { get; }
```

Gets directories actually retired; a preview always returns an empty collection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheCleanupResult.cs#L30).

## `retiredBytes`

<a id="api-4682e87a1cf17634"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCacheCleanupResult.retiredBytes 2533a25d46058abd8f4cd01c894604f5f5200cf2b0f9ca1eef0e576965e4b2fb -->

```csharp
public long Inno.Build.Toolchains.BuildCacheCleanupResult.retiredBytes { get; }
```

Gets the declared file bytes of successfully retired artifacts, excluding persistent leases.
This is a logical size; hardlinks, compression and other writers can affect actual volume recovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheCleanupResult.cs#L47).

## `skipped`

<a id="api-2c53d85d743d363b"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCacheCleanupResult.skipped f76c960127f6ece74e873a73a4152effe8a6a645e58ef24f69e3f21fa9c7f88c -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.BuildCacheCleanupResult.skipped { get; }
```

Gets candidates preserved because ownership, protection or dependencies changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheCleanupResult.cs#L35).

## `timeLimitReached`

<a id="api-7bba09ef2a07923c"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCacheCleanupResult.timeLimitReached 322aa1302fa2aae3a807d44a01f350477c68446d8b83cc9f8e372e063b2a6963 -->

```csharp
public bool Inno.Build.Toolchains.BuildCacheCleanupResult.timeLimitReached { get; }
```

Gets whether the bounded attempt ended before processing all eligible candidates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheCleanupResult.cs#L52).
