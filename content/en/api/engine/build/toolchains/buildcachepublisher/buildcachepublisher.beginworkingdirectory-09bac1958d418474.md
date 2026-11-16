---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.09bac1958d418474dd05299f715a5912a8170b88bddd623113dca29344963e75
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePublisher.BeginWorkingDirectory(System.String,System.String,System.String,System.Threading.CancellationToken)
title: BuildCachePublisher.BeginWorkingDirectory
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 8f00d614ffc5a0fb877372723defa373fffbe5fe1e755d5d521334ac50e0893b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `directory`:** The new or previously registered workspace within this publisher root.

**Parameter `leasePath`:** The caller's persistent exclusive producer lease outside the workspace.

**Parameter `targetId`:** The explicit product target, or null for shared host work.

**Parameter `cancellationToken`:** Cancels registration before payload writes.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The publisher does not manage reusable workspaces or an existing directory has no current registration.

**Exception `T:System.IO.IOException`:** The workspace escapes its boundary or ownership cannot be written.
