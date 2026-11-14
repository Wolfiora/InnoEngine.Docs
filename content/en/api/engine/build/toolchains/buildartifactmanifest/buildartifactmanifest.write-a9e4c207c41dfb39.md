---
uid: api.a9e4c207c41dfb394b15c605a82767b73ef8d6ce8f524f4312e9e6bc848ea03e
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildArtifactManifest.Write(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},Inno.Build.Toolchains.NativeBuildContext)"
source: xml
reviewed: 1319bf64b8a425f717f019af677d80188fe1482f709479f96590cbf84403d937
title: "BuildArtifactManifest.Write"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Records a completed staging tree before its owner publishes the directory.

**Parameter `directory`:** The complete staging root owned exclusively by the caller.

**Parameter `fingerprint`:** The immutable identity of every input used to produce these outputs.

**Parameter `outputDirectories`:** Relative output subdirectories included in this artifact; each must stay within the root.

**Parameter `context`:** The optional operation collecting independent output-read statistics.

**Exception `T:System.ArgumentException`:** An identity or output path is invalid.

**Exception `T:System.IO.IOException`:** An output or manifest cannot be read or written.
