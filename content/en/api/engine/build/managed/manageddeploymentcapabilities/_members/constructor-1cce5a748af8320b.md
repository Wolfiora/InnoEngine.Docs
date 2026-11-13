---
uid: api.1cce5a748af8320b8418d5e951bfbf7603432789b0d6b1608c74a48941c3c2a3
symbol: "engine:Inno.Build.Managed:M:Inno.Build.Managed.ManagedDeploymentCapabilities.#ctor(System.Collections.Generic.IReadOnlyList{System.String},System.Boolean,System.Boolean,System.Boolean)"
source: xml
reviewed: d386b119995d30ecef73ece7299160a6a86beb2c03fcf77895d3b4cbb298b677
title: "Constructor"
kind: api
owners: [Inno.Build.Managed]
apiSurface: source-clr
---

Freezes the execution policy and supported runtime identifiers declared by a provider.

**Parameter `runtimeIdentifiers`:** The exact runtime identifiers accepted by the selected managed toolchain.

**Parameter `dynamicCode`:** Whether the deployed runtime supports generating executable managed code.

**Parameter `aheadOfTime`:** Whether this publisher compiles managed code before deployment.

**Parameter `nativeStaticLinking`:** Whether native object inputs can participate in the runtime's final link.
