---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b5ace5715a3e72776fd4c63ab31ff5909115f62515b6c34d7866d1be570889cf
symbol: engine:Inno.Build:M:Inno.Build.BuildPipeline.TryGetGameTargetDisplayName(Inno.Build.BuildTargetId,System.String@)
title: BuildPipeline.TryGetGameTargetDisplayName
kind: api
owners:
- Inno.Build
apiSurface: source-clr
reviewed: cce48cf7e8600ec750b831848c5345dc1155faa8906b994d31dd2970ac2a1123

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Tries to get the adapter-owned display name for a registered game target.

## Parameters

**Parameter `target`:** The stable target identity to query.

**Parameter `displayName`:** Receives the registered user-facing name, or an empty value when no target is registered.

## Returns

`true` when the target is registered; otherwise, `false`.
