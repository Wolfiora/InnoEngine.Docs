---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a9e4c207c41dfb394b15c605a82767b73ef8d6ce8f524f4312e9e6bc848ea03e
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildArtifactManifest.Write(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},Inno.Build.Toolchains.NativeBuildContext)
title: BuildArtifactManifest.Write
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: f6127defde8d0b843bba43f6b3bd9860ee6a56e508e4c06e82947f84592a06d4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `directory`:** The complete staging root owned exclusively by the caller.

**Parameter `fingerprint`:** The immutable identity of every input used to produce these outputs.

**Parameter `outputDirectories`:** Relative output subdirectories included in this artifact; each must stay within the root.

**Parameter `context`:** The optional operation collecting independent output-read statistics.

## Exceptions

**Exception `T:System.ArgumentException`:** An identity or output path is invalid.

**Exception `T:System.IO.IOException`:** An output or manifest cannot be read or written.
