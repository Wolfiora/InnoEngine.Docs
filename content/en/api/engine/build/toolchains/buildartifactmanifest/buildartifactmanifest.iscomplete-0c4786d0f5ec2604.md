---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0c4786d0f5ec2604139bacd7a9df39c08d1c815ef723d1d486d23ff1fb18c9dd
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildArtifactManifest.IsComplete(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},Inno.Build.Toolchains.NativeBuildContext)
title: BuildArtifactManifest.IsComplete
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 42ee1b739e72d44ce28a5b9307bb6d6baa06d87e3c95af8c88fd23fee5773af5
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `directory`:** The published artifact directory.

**Parameter `fingerprint`:** The requested input identity.

**Parameter `outputDirectories`:** The same relative output subdirectories supplied when recording the artifact.

**Parameter `context`:** The optional operation collecting actual output integrity reads.

## Returns

True only for complete, unmodified outputs; false for a missing, malformed or mismatched manifest.

## Exceptions

**Exception `T:System.ArgumentException`:** An output path escapes the artifact root.

**Exception `T:System.IO.IOException`:** An existing output cannot be read.
