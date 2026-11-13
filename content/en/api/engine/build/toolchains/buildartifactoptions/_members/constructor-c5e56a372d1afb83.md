---
uid: api.c5e56a372d1afb83e519df9d566d196754bf2b2f6bc674910b47f84c5fa4e4f0
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildArtifactOptions.#ctor(System.String,System.Collections.Generic.IReadOnlyCollection{System.String},System.Collections.Generic.IReadOnlyCollection{System.String},System.Collections.Generic.IReadOnlyCollection{System.String},System.Func{System.String,System.String,System.String})"
source: xml
reviewed: e7dcf621dcda1d1447c38329144bf318ccf5f2aa209d23b14c6387bd855ff11f
title: "Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Defines the deterministic filter and naming policy used to collect one native product.

**Parameter `buildDirName`:** The dependency-relative directory searched for native build outputs.

**Parameter `libraryTokens`:** File-name tokens that identify artifacts belonging to the product.

**Parameter `extensions`:** The accepted native artifact extensions.

**Parameter `requiredPathTokens`:** Optional normalized path tokens used to reject unrelated intermediate files.

**Parameter `normalizeOutputName`:** The deterministic output naming policy.
