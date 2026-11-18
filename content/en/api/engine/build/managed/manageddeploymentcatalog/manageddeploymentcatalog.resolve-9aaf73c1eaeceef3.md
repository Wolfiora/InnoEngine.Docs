---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9aaf73c1eaeceef30866350f049d980a1930f35f5b654d4b39c36479c41d3811
symbol: engine:Inno.Build.Managed:M:Inno.Build.Managed.ManagedDeploymentCatalog.Resolve(Inno.Build.Managed.ManagedDeploymentId,System.String)
title: ManagedDeploymentCatalog.Resolve
kind: api
owners:
- Inno.Build.Managed
apiSurface: source-clr
sourceFingerprint: 6df8116260416769091f42925201f74cbe795434796e919a25e8e259e22c642a
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
