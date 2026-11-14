---
uid: api.a0b8f1714328ca8a6f8bff87c7e2602da793040eeaf7b435cb4f3fbf5ecdb7b6
symbol: "engine:Inno.Build:M:Inno.Build.IPlayerSupportPackProvisioner.ProvisionAsync(Inno.Build.BuildTargetId,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 6ab71c38ddcef3dc7325e31d20201c009e5e73a4cc009f123d3a3c8441b6832e
title: "IPlayerSupportPackProvisioner.ProvisionAsync"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Checks current source inputs and selects a complete immutable pack before the build resumes.

## Parameters

**Parameter `target`:** The platform and architecture target whose current inputs are required.

**Parameter `supportPackRoot`:** The catalog directory where the verified pack must be installed.

**Parameter `cancellationToken`:** Cancellation before the installation commits.

## Returns

An operation that completes after the pack has been installed.
