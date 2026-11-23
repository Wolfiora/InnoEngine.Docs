---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2c883d9897f361d6935728a0c08087bdc5ad99c15f357663b99c02ee993659cd
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner.ProvisionAsync(Inno.Build.BuildTargetID,System.String,System.Threading.CancellationToken)
title: SourcePlayerSupportPackProvisioner.ProvisionAsync
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
sourceFingerprint: 65cd43a39c7851d9d5463b962b8693247b498db8d12883754a3e4f572ae06505
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The target platform and architecture identity.

**Parameter `supportPackRoot`:** The directory that owns the installed target directories.

**Parameter `cancellationToken`:** Cancels preparation or publication before a new current fingerprint is selected.

## Returns

An operation that completes after the target Pack has been installed and verified.
