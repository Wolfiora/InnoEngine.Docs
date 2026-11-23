---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7e6bc7683688db1043086512e756de47d9814533c18c905c4bfdd5c4db0b75aa
symbol: engine:Inno.Build:M:Inno.Build.BuildPipeline.GetManagedDeployments(Inno.Build.BuildTargetID)
title: BuildPipeline.GetManagedDeployments
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: dc2dd223b5fd718259277e3cc638ddd4f3ab78d73fc5f964f66c0786f4ffb54b
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
