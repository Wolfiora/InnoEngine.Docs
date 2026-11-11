---
title: "BuildCacheArtifactDescriptor"
description: "Reference for BuildCacheArtifactDescriptor in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.f0376a056049ffd9
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `BuildCacheArtifactDescriptor`

This reference describes `BuildCacheArtifactDescriptor` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dc5639d1f9e77581) | Method |
| [`bytes`](#api-da365f2cce24c57b) | Property |
| [`dependencies`](#api-8132c21c55b659d1) | Property |
| [`directory`](#api-2bec4a9ef8c041d6) | Property |
| [`lastUseUtc`](#api-837abd18533b53d0) | Property |
| [`leasePath`](#api-a073de45873a9854) | Property |
| [`role`](#api-e8ab234735aee5cd) | Property |
| [`targetId`](#api-f6e8cd345c0f7d93) | Property |

## Type declaration

<a id="api-f0376a056049ffd9"></a>
<!-- api: T:Inno.Build.Toolchains.BuildCacheArtifactDescriptor 5bcce9974dc2dd5cf2cce3247e4636bd232616213f849f83fa57e364a49a1323 -->

```csharp
public sealed class Inno.Build.Toolchains.BuildCacheArtifactDescriptor
```

Freezes one publisher-owned cache entry and the generations it requires.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheArtifactDescriptor.cs#L12).

## `#ctor`

<a id="api-dc5639d1f9e77581"></a>
<!-- api: M:Inno.Build.Toolchains.BuildCacheArtifactDescriptor.#ctor(System.String,System.String,System.String,System.Int64,System.DateTime,System.Collections.Generic.IReadOnlyList{System.String},Inno.Build.Toolchains.BuildCacheArtifactRole) f6fa379b2d3a8d95bcfaca291db9ab151a8a523c085364c8c2c1646d08cf7540 -->

```csharp
public Inno.Build.Toolchains.BuildCacheArtifactDescriptor.BuildCacheArtifactDescriptor(string directory, string leasePath, string? targetId, long bytes, System.DateTime lastUseUtc, System.Collections.Generic.IReadOnlyList<string> dependencies, Inno.Build.Toolchains.BuildCacheArtifactRole role)
```

Freezes ownership metadata supplied by the artifact's actual publisher.

**Parameter `directory`:** The absolute published artifact or producer-owned workspace directory.

**Parameter `leasePath`:** The absolute persistent file used by this entry's actual producer and readers for Core.IO coordination.

**Parameter `bytes`:** The publisher-recorded sum of owned file lengths, captured under writing ownership for cache budgeting.
It does not measure allocated disk blocks or count shared hardlinks as recovered volume space.

**Parameter `targetId`:** The explicit product target, or null for a shared host artifact that target-scoped cleanup must preserve.

**Parameter `lastUseUtc`:** The publisher's last recorded use, used only to order retirement.

**Parameter `dependencies`:** Absolute artifact directories required by this generation.

**Parameter `role`:** The producer-declared lifetime; workspace preference alone does not pin an immutable product.

**Throws `System.ArgumentException`:** A path is relative or the timestamp is not UTC.

**Throws `System.ArgumentOutOfRangeException`:** The measured size is negative.

**Throws `System.ArgumentNullException`:** The dependency collection is absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheArtifactDescriptor.cs#L48).

## `bytes`

<a id="api-da365f2cce24c57b"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCacheArtifactDescriptor.bytes b393ccc5d2799c15328515222e06df227397114d482f4c7bbaa1bd18ac1e7516 -->

```csharp
public long Inno.Build.Toolchains.BuildCacheArtifactDescriptor.bytes { get; }
```

Gets the logical file size used for budgeting, without weakening content validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheArtifactDescriptor.cs#L99).

## `dependencies`

<a id="api-8132c21c55b659d1"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCacheArtifactDescriptor.dependencies bcc91c51368e7fe6756532081bbcdf2385662a7d62af5484e337bd0c9e393139 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.BuildCacheArtifactDescriptor.dependencies { get; }
```

Gets the frozen dependency directories protected whenever this artifact is a live root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheArtifactDescriptor.cs#L114).

## `directory`

<a id="api-2bec4a9ef8c041d6"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCacheArtifactDescriptor.directory 08b4a5a6e07933543c56ed319ce79e9481a9b7b35c6d2cbd7b83f75add202736 -->

```csharp
public string Inno.Build.Toolchains.BuildCacheArtifactDescriptor.directory { get; }
```

Gets the absolute cache entry controlled by the declaring producer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheArtifactDescriptor.cs#L84).

## `lastUseUtc`

<a id="api-837abd18533b53d0"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCacheArtifactDescriptor.lastUseUtc f336117e2743f8904594de63ac08115ef267c08bb642e5a00e2383c3f5201de4 -->

```csharp
public System.DateTime Inno.Build.Toolchains.BuildCacheArtifactDescriptor.lastUseUtc { get; }
```

Gets the UTC use timestamp, which is never used to validate cached content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheArtifactDescriptor.cs#L109).

## `leasePath`

<a id="api-a073de45873a9854"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCacheArtifactDescriptor.leasePath 26d469a11624cc9f363d23bba5a8cbcffea769ab6c255c53ee9b943186b9fba5 -->

```csharp
public string Inno.Build.Toolchains.BuildCacheArtifactDescriptor.leasePath { get; }
```

Gets the exact existing producer/reader coordination path; retirement does not infer another lock protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheArtifactDescriptor.cs#L89).

## `role`

<a id="api-e8ab234735aee5cd"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCacheArtifactDescriptor.role cb049d26c15256513dbaf3bb11e16505bc736370f2edcd516d9ac894c8dc15a0 -->

```csharp
public Inno.Build.Toolchains.BuildCacheArtifactRole Inno.Build.Toolchains.BuildCacheArtifactDescriptor.role { get; }
```

Gets the declared lifetime used for retirement and preferred-workspace accounting.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheArtifactDescriptor.cs#L104).

## `targetId`

<a id="api-f6e8cd345c0f7d93"></a>
<!-- api: P:Inno.Build.Toolchains.BuildCacheArtifactDescriptor.targetId efc2358f9f8a5a4dc03f0eb9580013f8dbea48edb5612c3fa92380841e367179 -->

```csharp
public string? Inno.Build.Toolchains.BuildCacheArtifactDescriptor.targetId { get; }
```

Gets the producer-declared target, or null when this artifact is shared by host operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheArtifactDescriptor.cs#L94).
