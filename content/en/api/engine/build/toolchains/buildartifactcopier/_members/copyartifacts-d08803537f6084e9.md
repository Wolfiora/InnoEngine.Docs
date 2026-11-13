---
uid: api.d08803537f6084e9d356ea2e1af6fc73485ae850f9231bf10be47284f73283e8
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildArtifactCopier.CopyArtifacts(System.String,System.String,System.String,Inno.Build.Toolchains.BuildArtifactOptions)"
source: xml
reviewed: 2f785c134f9650012aa32d2de0d3ec0650b0034e08200e5f8f2063d003bbeab5
title: "CopyArtifacts"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Copies all artifacts accepted by one product policy into its output directory.

**Parameter `buildRoot`:** The native dependency root containing the configured build directory.

**Parameter `outputDir`:** The destination directory receiving normalized artifacts.

**Parameter `config`:** The normalized native build configuration.

**Parameter `options`:** The immutable filtering and naming policy.
