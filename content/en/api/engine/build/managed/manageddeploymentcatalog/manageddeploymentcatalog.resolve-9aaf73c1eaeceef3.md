---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9aaf73c1eaeceef30866350f049d980a1930f35f5b654d4b39c36479c41d3811
symbol: engine:Inno.Build.Managed:M:Inno.Build.Managed.ManagedDeploymentCatalog.Resolve(Inno.Build.Managed.ManagedDeploymentId,System.String)
title: ManagedDeploymentCatalog.Resolve
kind: api
owners:
- Inno.Build.Managed
apiSurface: source-clr
reviewed: 803f35a12b1f316f40646c2425e9c158302d97b441a5bf745f933f44dae5ab3e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `deployment`:** The stable provider identity selected by the build profile.

**Parameter `runtimeIdentifier`:** The exact managed target required by the platform composition.

## Returns

The provider that supports the requested target; missing capabilities throw explicitly.

## Exceptions

**Exception `T:System.InvalidOperationException`:** No provider is registered, or the selected provider cannot publish the requested target.
