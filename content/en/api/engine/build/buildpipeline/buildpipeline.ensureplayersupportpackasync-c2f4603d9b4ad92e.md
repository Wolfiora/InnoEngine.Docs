---
uid: api.c2f4603d9b4ad92ed413b274bf923c9f67df18f9eed862625ee065f4441f970e
symbol: "engine:Inno.Build:M:Inno.Build.BuildPipeline.EnsurePlayerSupportPackAsync(Inno.Build.BuildTargetId,System.Nullable{Inno.Build.Managed.ManagedDeploymentId},System.Threading.CancellationToken)"
source: xml
reviewed: 2b8e7caacebb1f85f36ace2cb35834652aef2b7f11b338ccdd73f441a6fffea8
title: "BuildPipeline.EnsurePlayerSupportPackAsync"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Validates the platform and managed deployment before asynchronously preparing its Support Pack.

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
