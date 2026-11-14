---
uid: api.1cce5a748af8320b8418d5e951bfbf7603432789b0d6b1608c74a48941c3c2a3
symbol: "engine:Inno.Build.Managed:M:Inno.Build.Managed.ManagedDeploymentCapabilities.#ctor(System.Collections.Generic.IReadOnlyList{System.String},System.Boolean,System.Boolean,System.Boolean)"
source: xml
reviewed: 75222b2da1d42d48077f0cb4a86eafe8b82722663d89ff0487538454ce9489cc
title: "ManagedDeploymentCapabilities.Constructor"
kind: api
owners: [Inno.Build.Managed]
apiSurface: source-clr
---

Freezes the execution policy and supported runtime identifiers declared by a provider.

## Parameters

**Parameter `runtimeIdentifiers`:** The exact runtime identifiers accepted by the selected managed toolchain.

**Parameter `dynamicCode`:** Whether the deployed runtime supports generating executable managed code.

**Parameter `aheadOfTime`:** Whether this publisher compiles managed code before deployment.

**Parameter `nativeStaticLinking`:** Whether native object inputs can participate in the runtime's final link.
