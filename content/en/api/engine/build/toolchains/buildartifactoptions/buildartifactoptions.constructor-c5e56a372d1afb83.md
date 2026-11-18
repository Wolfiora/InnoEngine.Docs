---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c5e56a372d1afb83e519df9d566d196754bf2b2f6bc674910b47f84c5fa4e4f0
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildArtifactOptions.#ctor(System.String,System.Collections.Generic.IReadOnlyCollection{System.String},System.Collections.Generic.IReadOnlyCollection{System.String},System.Collections.Generic.IReadOnlyCollection{System.String},System.Func{System.String,System.String,System.String})
title: BuildArtifactOptions.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: afdd96c80fc6e40d5541d26dc5bae9edd82be226df7ec26fdfa3a20b441d2687
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
