---
uid: api.8ac156264ee863a0fbbbc2411b994ac0cdd6dd84dd1b77c82a5af4fd9e2ef0d3
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildHostServices.#ctor(Inno.Build.Toolchains.IToolchainWorkspaceProvider,System.StringComparer,System.Collections.Generic.IEnumerable{System.String},System.String)"
source: xml
reviewed: 9d2ada8f76cf54d060c936b0c485084808d6945e48dc75aa56b5966ee5daaa03
title: "BuildHostServices.Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Captures execution policy and its implementation inputs.

## Parameters

**Parameter `workspaces`:** The host's scoped execution path provider.

**Parameter `environmentComparer`:** The host's environment variable name semantics.

**Parameter `inputPaths`:** Checkout-relative implementation files included in native recipe identity.

**Parameter `executableExtension`:** The host executable suffix, or an empty string for suffix-free executable names.
