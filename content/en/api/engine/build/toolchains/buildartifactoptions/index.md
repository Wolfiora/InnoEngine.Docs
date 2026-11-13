---
uid: api.inno.build.toolchains.aaa2ad78c607f7a8
symbol: "engine:Inno.Build.Toolchains:T:Inno.Build.Toolchains.BuildArtifactOptions"
source: xml
reviewed: 5a06510f119e1d93b6a91123d7e0ef1f85d9cb541432b5977d410810cdc0f969
title: "BuildArtifactOptions"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
contracts:
- project.inno-build-toolchains
aliases: []
---

Defines the deterministic filter and naming policy used to collect one native product.

**Parameter `buildDirName`:** The dependency-relative directory searched for native build outputs.

**Parameter `libraryTokens`:** File-name tokens that identify artifacts belonging to the product.

**Parameter `extensions`:** The accepted native artifact extensions.

**Parameter `requiredPathTokens`:** Optional normalized path tokens used to reject unrelated intermediate files.

**Parameter `normalizeOutputName`:** The deterministic output naming policy.
