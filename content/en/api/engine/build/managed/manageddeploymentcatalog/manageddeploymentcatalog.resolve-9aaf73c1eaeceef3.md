---
uid: api.9aaf73c1eaeceef30866350f049d980a1930f35f5b654d4b39c36479c41d3811
symbol: "engine:Inno.Build.Managed:M:Inno.Build.Managed.ManagedDeploymentCatalog.Resolve(Inno.Build.Managed.ManagedDeploymentId,System.String)"
source: xml
reviewed: 9e4a92cf6f3a5757d82dd7e415b7320b3f2d4d1323dbe126ad1b5440cc863b10
title: "ManagedDeploymentCatalog.Resolve"
kind: api
owners: [Inno.Build.Managed]
apiSurface: source-clr
---

Resolves a provider and verifies target support before staging begins.

## Parameters

**Parameter `deployment`:** The stable provider identity selected by the build profile.

**Parameter `runtimeIdentifier`:** The exact managed target required by the platform composition.

## Returns

The provider that supports the requested target; missing capabilities throw explicitly.

## Exceptions

**Exception `T:System.InvalidOperationException`:** No provider is registered, or the selected provider cannot publish the requested target.
