---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a0b8f1714328ca8a6f8bff87c7e2602da793040eeaf7b435cb4f3fbf5ecdb7b6
symbol: engine:Inno.Build:M:Inno.Build.IPlayerSupportPackProvisioner.ProvisionAsync(Inno.Build.BuildTargetId,System.String,System.Threading.CancellationToken)
title: IPlayerSupportPackProvisioner.ProvisionAsync
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: 45ab03aacfaee17d38244c917e2adcfc4ef1fd51c51102acd7819f2df2d78915
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
