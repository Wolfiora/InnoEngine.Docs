---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3f31c7ee37acca53986411694003abc1d1d6c510c30729a36c540a378e00f283
symbol: engine:Inno.Build.Managed:M:Inno.Build.Managed.ManagedDeploymentCatalog.Resolve(Inno.Build.Managed.ManagedDeploymentID,System.String)
title: ManagedDeploymentCatalog.Resolve
kind: api
owners:
- Inno.Build.Managed
apiSurface: source-clr
sourceFingerprint: 6daabcceae9225323ae95fdef9789c004d551113145384eec8195be550f4e3bc
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
