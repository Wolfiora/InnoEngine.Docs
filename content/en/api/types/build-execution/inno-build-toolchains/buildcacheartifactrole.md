---
title: "BuildCacheArtifactRole"
description: "Reference for BuildCacheArtifactRole in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.2de77262d10ca4de
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `BuildCacheArtifactRole`

This reference describes `BuildCacheArtifactRole` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`ImmutableArtifact`](#api-50d01ce49dccb60c) | Field |
| [`ProcessWorkingDirectory`](#api-24a0b626c080cf61) | Field |
| [`ReusableWorkspace`](#api-f1ce6b608ef92971) | Field |

## Type declaration

<a id="api-2de77262d10ca4de"></a>
<!-- api: T:Inno.Build.Toolchains.BuildCacheArtifactRole 0f4d809a33201aac2e28281b3d990ca619777ec60963580147dda374b73f8dd9 -->

```csharp
public enum Inno.Build.Toolchains.BuildCacheArtifactRole : int
```

Declares the producer's file lifetime independently of target identity and directory naming.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheArtifactRole.cs#L6).

## `ImmutableArtifact`

<a id="api-50d01ce49dccb60c"></a>
<!-- api: F:Inno.Build.Toolchains.BuildCacheArtifactRole.ImmutableArtifact fff47891a0b6f754becbc993baa9c78a386220e3c8a621819a770c4def35825b -->

```csharp
Inno.Build.Toolchains.BuildCacheArtifactRole.ImmutableArtifact = 0
```

A complete immutable generation remains protected by selected products and active readers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheArtifactRole.cs#L11).

## `ProcessWorkingDirectory`

<a id="api-24a0b626c080cf61"></a>
<!-- api: F:Inno.Build.Toolchains.BuildCacheArtifactRole.ProcessWorkingDirectory d1f4c3d78264b2ff619a7f6cf9fcd53707151d7ae868a45659ce5a749582f5dc -->

```csharp
Inno.Build.Toolchains.BuildCacheArtifactRole.ProcessWorkingDirectory = 2
```

An operation directory remains protected until its exact process owners have exited.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheArtifactRole.cs#L21).

## `ReusableWorkspace`

<a id="api-f1ce6b608ef92971"></a>
<!-- api: F:Inno.Build.Toolchains.BuildCacheArtifactRole.ReusableWorkspace 760b2a8556bf470eb5dfa726596dfdb559859dfaedf7978ff9e54353764c0d57 -->

```csharp
Inno.Build.Toolchains.BuildCacheArtifactRole.ReusableWorkspace = 1
```

A mutable compiler workspace may retire when no producer or consumer is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/BuildCacheArtifactRole.cs#L16).
