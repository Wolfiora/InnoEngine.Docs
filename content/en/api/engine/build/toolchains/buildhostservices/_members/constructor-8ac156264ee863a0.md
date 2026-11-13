---
uid: api.8ac156264ee863a0fbbbc2411b994ac0cdd6dd84dd1b77c82a5af4fd9e2ef0d3
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildHostServices.#ctor(Inno.Build.Toolchains.IToolchainWorkspaceProvider,System.StringComparer,System.Collections.Generic.IEnumerable{System.String},System.String)"
source: xml
reviewed: a9b717def59534cd5bd6fc0d760ec653878fc111a9aaade4a7cde9d9d2dc0208
title: "Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Captures execution policy and its implementation inputs.

**Parameter `workspaces`:** The host's scoped execution path provider.

**Parameter `environmentComparer`:** The host's environment variable name semantics.

**Parameter `inputPaths`:** Checkout-relative implementation files included in native recipe identity.

**Parameter `executableExtension`:** The host executable suffix, or an empty string for suffix-free executable names.
