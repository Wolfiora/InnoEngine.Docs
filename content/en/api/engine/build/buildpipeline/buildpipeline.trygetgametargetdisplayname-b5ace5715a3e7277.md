---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b5ace5715a3e72776fd4c63ab31ff5909115f62515b6c34d7866d1be570889cf
symbol: engine:Inno.Build:M:Inno.Build.BuildPipeline.TryGetGameTargetDisplayName(Inno.Build.BuildTargetId,System.String@)
title: BuildPipeline.TryGetGameTargetDisplayName
kind: api
owners:
- Inno.Build
apiSurface: source-clr
reviewed: 442c214cde12d57e88b8283c0fb7a4062d414231e8f796ba4e9574ab121fb33c
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
