---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9793b657aee8633e366d28f87aec2ebbd8345a1faafd3184c0f9bddbfc956c09
symbol: engine:Inno.Build:M:Inno.Build.BuildPipeline.GetManagedDeployments(Inno.Build.BuildTargetId)
title: BuildPipeline.GetManagedDeployments
kind: api
owners:
- Inno.Build
apiSurface: source-clr
reviewed: cb4d5e555a70a7b0b3357278930719bbcdd1b2b013fd961ab377eb595e303a95
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The registered publication target whose managed runtime requirements are queried.

## Returns

Immutable deployment identities in stable order; an unknown target throws explicitly.

## Exceptions

**Exception `T:System.ArgumentException`:** The publication target is not registered in this build composition.
