---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.41e2d851d4b6adfa1fbfc9f68a1fb93bcc81cdd7608315dd3b1a814685dc0636
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner.ProvisionAsync(Inno.Build.BuildTargetId,System.String,System.Threading.CancellationToken)
title: SourcePlayerSupportPackProvisioner.ProvisionAsync
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
reviewed: fc920032296a3980d1f35d742fe7cb1d32d4e15a995abc4970713b8163caeeb4
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
