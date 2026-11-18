---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.09bac1958d418474dd05299f715a5912a8170b88bddd623113dca29344963e75
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePublisher.BeginWorkingDirectory(System.String,System.String,System.String,System.Threading.CancellationToken)
title: BuildCachePublisher.BeginWorkingDirectory
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 3d3c5c0cda1bf412806241805c9737b62556ca4db39e12179871f48f571ad9e5
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
