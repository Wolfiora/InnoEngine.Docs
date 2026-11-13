---
uid: api.0c4786d0f5ec2604139bacd7a9df39c08d1c815ef723d1d486d23ff1fb18c9dd
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildArtifactManifest.IsComplete(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},Inno.Build.Toolchains.NativeBuildContext)"
source: xml
reviewed: 30baeb8c299092c176a6ea68dbec33ba7e4dc8dcb28143565871c6e3ba3275f7
title: "IsComplete"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Checks the identity, exact output file set and bytes before reusing a cached artifact.

**Parameter `directory`:** The published artifact directory.

**Parameter `fingerprint`:** The requested input identity.

**Parameter `outputDirectories`:** The same relative output subdirectories supplied when recording the artifact.

**Parameter `context`:** The optional operation collecting actual output integrity reads.

**Returns:** True only for complete, unmodified outputs; false for a missing, malformed or mismatched manifest.

**Exception `T:System.ArgumentException`:** An output path escapes the artifact root.

**Exception `T:System.IO.IOException`:** An existing output cannot be read.
