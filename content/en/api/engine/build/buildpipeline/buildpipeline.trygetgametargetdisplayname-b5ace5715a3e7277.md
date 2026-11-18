---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b5ace5715a3e72776fd4c63ab31ff5909115f62515b6c34d7866d1be570889cf
symbol: engine:Inno.Build:M:Inno.Build.BuildPipeline.TryGetGameTargetDisplayName(Inno.Build.BuildTargetId,System.String@)
title: BuildPipeline.TryGetGameTargetDisplayName
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: ca78e1c89bd6385e7545aa609ecfbb1b31cf5404ca3b89602f33479b4b84b108
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The stable target identity to query.

**Parameter `displayName`:** Receives the registered user-facing name, or an empty value when no target is registered.

## Returns

`true` when the target is registered; otherwise, `false`.
