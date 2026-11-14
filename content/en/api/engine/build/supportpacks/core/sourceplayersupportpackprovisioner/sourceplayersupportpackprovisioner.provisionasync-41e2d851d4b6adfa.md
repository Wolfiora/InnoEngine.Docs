---
uid: api.41e2d851d4b6adfa1fbfc9f68a1fb93bcc81cdd7608315dd3b1a814685dc0636
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.SourcePlayerSupportPackProvisioner.ProvisionAsync(Inno.Build.BuildTargetId,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: faf56761b43c7ca25e3619d6c8af7ed331d8f0e57d2f962de4352deba5b541da
title: "SourcePlayerSupportPackProvisioner.ProvisionAsync"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Prepares current target inputs and atomically selects their immutable Support Pack.

**Parameter `target`:** The target platform and architecture identity.

**Parameter `supportPackRoot`:** The directory that owns the installed target directories.

**Parameter `cancellationToken`:** Cancels preparation or publication before a new current fingerprint is selected.

**Returns:** An operation that completes after the target Pack has been installed and verified.
