---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bcb41466549f328bb818a52354bd3667153d8590ea42157d9391a9ce758a630e
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.IPlayerSupportPackSource.CreatePlanAsync(Inno.Build.SupportPacks.PlayerSupportPackPlanningContext,System.Threading.CancellationToken)
title: IPlayerSupportPackSource.CreatePlanAsync
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
sourceFingerprint: 9d63edcdc9b08aeeff2dde526334689942d628413475e40414e8ad6137d4df4e
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
