---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c5e56a372d1afb83e519df9d566d196754bf2b2f6bc674910b47f84c5fa4e4f0
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildArtifactOptions.#ctor(System.String,System.Collections.Generic.IReadOnlyCollection{System.String},System.Collections.Generic.IReadOnlyCollection{System.String},System.Collections.Generic.IReadOnlyCollection{System.String},System.Func{System.String,System.String,System.String})
title: BuildArtifactOptions.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 052ab119e0b6c15f7c8820fcca4a40a76666957786a0179561d8f077bf8c406f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `buildDirName`:** The dependency-relative directory searched for native build outputs.

**Parameter `libraryTokens`:** File-name tokens that identify artifacts belonging to the product.

**Parameter `extensions`:** The accepted native artifact extensions.

**Parameter `requiredPathTokens`:** Optional normalized path tokens used to reject unrelated intermediate files.

**Parameter `normalizeOutputName`:** The deterministic output naming policy.
