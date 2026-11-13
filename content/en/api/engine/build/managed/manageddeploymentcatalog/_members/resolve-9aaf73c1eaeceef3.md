---
uid: api.9aaf73c1eaeceef30866350f049d980a1930f35f5b654d4b39c36479c41d3811
symbol: "engine:Inno.Build.Managed:M:Inno.Build.Managed.ManagedDeploymentCatalog.Resolve(Inno.Build.Managed.ManagedDeploymentId,System.String)"
source: xml
reviewed: aa0b665fc1b3cdbecf6eaeeb91b91e8fbd681ddad9566d68ce64ee82aa81d32f
title: "Resolve"
kind: api
owners: [Inno.Build.Managed]
apiSurface: source-clr
---

Resolves a provider and verifies target support before staging begins.

**Parameter `deployment`:** The stable provider identity selected by the build profile.

**Parameter `runtimeIdentifier`:** The exact managed target required by the platform composition.

**Returns:** The provider that supports the requested target; missing capabilities throw explicitly.

**Exception `T:System.InvalidOperationException`:** No provider is registered, or the selected provider cannot publish the requested target.
