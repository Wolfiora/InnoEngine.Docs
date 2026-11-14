---
uid: api.9793b657aee8633e366d28f87aec2ebbd8345a1faafd3184c0f9bddbfc956c09
symbol: "engine:Inno.Build:M:Inno.Build.BuildPipeline.GetManagedDeployments(Inno.Build.BuildTargetId)"
source: xml
reviewed: 71be791566f189db19009106fb4229ddb3ae4c0ca1c5f44b20ffc434fc216665
title: "BuildPipeline.GetManagedDeployments"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Gets the managed deployment choices supported by a registered publication platform.

## Parameters

**Parameter `target`:** The registered publication target whose managed runtime requirements are queried.

## Returns

Immutable deployment identities in stable order; an unknown target throws explicitly.

## Exceptions

**Exception `T:System.ArgumentException`:** The publication target is not registered in this build composition.
