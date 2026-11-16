---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a0b8f1714328ca8a6f8bff87c7e2602da793040eeaf7b435cb4f3fbf5ecdb7b6
symbol: engine:Inno.Build:M:Inno.Build.IPlayerSupportPackProvisioner.ProvisionAsync(Inno.Build.BuildTargetId,System.String,System.Threading.CancellationToken)
title: IPlayerSupportPackProvisioner.ProvisionAsync
kind: api
owners:
- Inno.Build
apiSurface: source-clr
reviewed: 611ecf2a80a209f211043e9d0f5f13082f3c5bc97baa1520b73433dfbbbf9140
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The platform and architecture target whose current inputs are required.

**Parameter `supportPackRoot`:** The catalog directory where the verified pack must be installed.

**Parameter `cancellationToken`:** Cancellation before the installation commits.

## Returns

An operation that completes after the pack has been installed.
