---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bcb41466549f328bb818a52354bd3667153d8590ea42157d9391a9ce758a630e
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.IPlayerSupportPackSource.CreatePlanAsync(Inno.Build.SupportPacks.PlayerSupportPackPlanningContext,System.Threading.CancellationToken)
title: IPlayerSupportPackSource.CreatePlanAsync
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
reviewed: ab918e4c14a62d9805d1c6f5074b981a33dfb5bede68e7917721d85b42d52d84
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The source checkout and host used for read-only SDK discovery.

**Parameter `cancellationToken`:** Cancels preparation before installation.

## Returns

A frozen plan with no running work; missing tools and unsupported hosts fail here.
