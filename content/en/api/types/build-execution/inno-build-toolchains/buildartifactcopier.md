---
title: "BuildArtifactCopier"
description: "Reference for BuildArtifactCopier in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.64095ef02f145654
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `BuildArtifactCopier`

This reference describes `BuildArtifactCopier` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CopyArtifacts`](#api-31e46689f67fce64) | Method |

## Type declaration

<a id="api-64095ef02f145654"></a>
<!-- api: T:Inno.Build.Toolchains.BuildArtifactCopier 9fbd2aff6ef87e688ea12aac95d8cc6734fccaec37226068c3cebc7c9362f3ed -->

```csharp
public static class Inno.Build.Toolchains.BuildArtifactCopier
```

Copies filtered native outputs into the engine's rebuildable dependency store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactOptions.cs#L37).

## `CopyArtifacts`

<a id="api-31e46689f67fce64"></a>
<!-- api: M:Inno.Build.Toolchains.BuildArtifactCopier.CopyArtifacts(System.String,System.String,System.String,Inno.Build.Toolchains.BuildArtifactOptions) fb3a3c4ef83069371e6519b4308ef5166f9c4950ffc374fa15b72ee288ea407f -->

```csharp
public static void Inno.Build.Toolchains.BuildArtifactCopier.CopyArtifacts(string buildRoot, string outputDir, string config, Inno.Build.Toolchains.BuildArtifactOptions options)
```

Copies all artifacts accepted by one product policy into its output directory.

**Parameter `buildRoot`:** The native dependency root containing the configured build directory.

**Parameter `outputDir`:** The destination directory receiving normalized artifacts.

**Parameter `config`:** The normalized native build configuration.

**Parameter `options`:** The immutable filtering and naming policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactOptions.cs#L56).
