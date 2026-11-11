---
title: "BuildArtifactManifest"
description: "Reference for BuildArtifactManifest in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.0009c6bfd2d89cc4
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `BuildArtifactManifest`

This reference describes `BuildArtifactManifest` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`IsComplete`](#api-1f76ea6e26b892fe) | Method |
| [`Write`](#api-248940898e1ccdb6) | Method |

## Type declaration

<a id="api-0009c6bfd2d89cc4"></a>
<!-- api: T:Inno.Build.Toolchains.BuildArtifactManifest 23eb1471d4c5062c19ec716b4d388d8c99c3ec4a0117a645ef415524ea83993d -->

```csharp
public static class Inno.Build.Toolchains.BuildArtifactManifest
```

Validates complete build outputs against their input identity and recorded file hashes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactManifest.cs#L15).

## `IsComplete`

<a id="api-1f76ea6e26b892fe"></a>
<!-- api: M:Inno.Build.Toolchains.BuildArtifactManifest.IsComplete(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},Inno.Build.Toolchains.NativeBuildContext) 57c9e7c0b2b0de3b869abb5e3531a6bc1a8bb13115adf111499135b96ea695fd -->

```csharp
public static bool Inno.Build.Toolchains.BuildArtifactManifest.IsComplete(string directory, string fingerprint, System.Collections.Generic.IReadOnlyList<string> outputDirectories, Inno.Build.Toolchains.NativeBuildContext? context = null)
```

Checks the identity, exact output file set and bytes before reusing a cached artifact.

**Parameter `directory`:** The published artifact directory.

**Parameter `fingerprint`:** The requested input identity.

**Parameter `outputDirectories`:** The same relative output subdirectories supplied when recording the artifact.

**Parameter `context`:** The optional operation collecting actual output integrity reads.

**Returns:** True only for complete, unmodified outputs; false for a missing, malformed or mismatched manifest.

**Throws `System.ArgumentException`:** An output path escapes the artifact root.

**Throws `System.IO.IOException`:** An existing output cannot be read.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactManifest.cs#L88).

## `Write`

<a id="api-248940898e1ccdb6"></a>
<!-- api: M:Inno.Build.Toolchains.BuildArtifactManifest.Write(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},Inno.Build.Toolchains.NativeBuildContext) d5a808ad6726a08ac1376a680a00ebbc58bbaed86553ac692d9db135212c41e4 -->

```csharp
public static void Inno.Build.Toolchains.BuildArtifactManifest.Write(string directory, string fingerprint, System.Collections.Generic.IReadOnlyList<string> outputDirectories, Inno.Build.Toolchains.NativeBuildContext? context = null)
```

Records a completed staging tree before its owner publishes the directory.

**Parameter `directory`:** The complete staging root owned exclusively by the caller.

**Parameter `fingerprint`:** The immutable identity of every input used to produce these outputs.

**Parameter `outputDirectories`:** Relative output subdirectories included in this artifact; each must stay within the root.

**Parameter `context`:** The optional operation collecting independent output-read statistics.

**Throws `System.ArgumentException`:** An identity or output path is invalid.

**Throws `System.IO.IOException`:** An output or manifest cannot be read or written.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactManifest.cs#L40).
