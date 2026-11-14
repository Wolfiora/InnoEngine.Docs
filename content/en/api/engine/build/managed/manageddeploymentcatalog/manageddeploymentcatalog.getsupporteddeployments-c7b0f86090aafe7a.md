---
uid: api.c7b0f86090aafe7abaf48b71b23aae1b6d1576dc539035d888ec207b77ea74fb
symbol: "engine:Inno.Build.Managed:M:Inno.Build.Managed.ManagedDeploymentCatalog.GetSupportedDeployments(System.String)"
source: xml
reviewed: cf43e757a592431a9a6f35556028acab24021b6d0c6007abb8917fdeaed2d990
title: "ManagedDeploymentCatalog.GetSupportedDeployments"
kind: api
owners: [Inno.Build.Managed]
apiSurface: source-clr
---

Returns the registered deployment identities that support one managed target.

## Parameters

**Parameter `runtimeIdentifier`:** The managed toolchain target selected by the platform composition.

## Returns

A new immutable list in stable identity order; unsupported targets produce an empty list.
