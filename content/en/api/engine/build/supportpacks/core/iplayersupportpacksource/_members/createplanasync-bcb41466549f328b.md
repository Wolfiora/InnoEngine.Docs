---
uid: api.bcb41466549f328bb818a52354bd3667153d8590ea42157d9391a9ce758a630e
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.IPlayerSupportPackSource.CreatePlanAsync(Inno.Build.SupportPacks.PlayerSupportPackPlanningContext,System.Threading.CancellationToken)"
source: xml
reviewed: 6986a53ff676854708f87bc220e67243e0a56c918b0709a87b62445bd1fa4068
title: "CreatePlanAsync"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Validates discovery inputs and freezes a plan before publication output exists.

**Parameter `context`:** The source checkout and host used for read-only SDK discovery.

**Parameter `cancellationToken`:** Cancels preparation before installation.

**Returns:** A frozen plan with no running work; missing tools and unsupported hosts fail here.
