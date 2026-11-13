---
uid: api.c7b0f86090aafe7abaf48b71b23aae1b6d1576dc539035d888ec207b77ea74fb
symbol: "engine:Inno.Build.Managed:M:Inno.Build.Managed.ManagedDeploymentCatalog.GetSupportedDeployments(System.String)"
source: xml
reviewed: aa3213c48f28c1b907d8a5e2064fc3ae0abdf2d213c13a17f701e6666d51f5f3
title: "GetSupportedDeployments"
kind: api
owners: [Inno.Build.Managed]
apiSurface: source-clr
---

Returns the registered deployment identities that support one managed target.

**Parameter `runtimeIdentifier`:** The managed toolchain target selected by the platform composition.

**Returns:** A new immutable list in stable identity order; unsupported targets produce an empty list.
