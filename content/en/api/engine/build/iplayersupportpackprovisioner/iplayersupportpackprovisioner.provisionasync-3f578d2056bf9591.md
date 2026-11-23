---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3f578d2056bf959116607ac55624db70104051f81466d048f5ad0a9d554c241a
symbol: engine:Inno.Build:M:Inno.Build.IPlayerSupportPackProvisioner.ProvisionAsync(Inno.Build.BuildTargetID,System.String,System.Threading.CancellationToken)
title: IPlayerSupportPackProvisioner.ProvisionAsync
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: e3341c3f5a27cb307c9b3bcb92599083210129ae0451098ce4daa4bdb15a3cc3
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
