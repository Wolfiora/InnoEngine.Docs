---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c65369b3cda8004b81ecb9e7a11662f3fab47d82fd2e0fda4d18baf7267f0765
symbol: engine:Inno.Build:M:Inno.Build.BuildPipeline.EnsurePlayerSupportPackAsync(Inno.Build.BuildTargetID,System.Nullable{Inno.Build.Managed.ManagedDeploymentID},System.Threading.CancellationToken)
title: BuildPipeline.EnsurePlayerSupportPackAsync
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: 1390a9279eaf038b475568d413e351b7b97db03f30684ee413173e5bc7b13db7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The registered platform and architecture target to prepare.

**Parameter `deployment`:** The selected managed publisher, or null to use the platform's default deployment. Unsupported pairs fail before any provisioner or external tool starts.

**Parameter `cancellationToken`:** Cancellation before the Pack installation commits.

## Returns

Reading ownership of the verified Pack, to be disposed after starting its consuming build. No authoring asset database operations run during preparation.

## Exceptions

**Exception `T:System.NotSupportedException`:** No game target is registered for the requested identity.

**Exception `T:System.InvalidOperationException`:** The managed publisher is absent or cannot publish the selected platform's runtime identifier.

**Exception `T:System.IO.DirectoryNotFoundException`:** The Pack is absent and this host has no provisioner.

**Exception `T:System.IO.InvalidDataException`:** An installed or newly published Pack fails deployment validation.
