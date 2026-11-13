---
uid: api.86f6a50277afbb246354fc4c04422dc7325ba4f687b7c320a50a6c609a7212fe
symbol: "engine:Inno.Build.BrowserWasm32:M:Inno.Build.BrowserWasm32.BrowserWasm32PlayerSupportPackSource.CreatePlanAsync(Inno.Build.SupportPacks.PlayerSupportPackPlanningContext,System.Threading.CancellationToken)"
source: xml
reviewed: a5edc0c2f8b75309c13e50aa471df9934ff7e50545c38e25497807a81939db43
title: "CreatePlanAsync"
kind: api
owners: [Inno.Build.BrowserWasm32]
apiSurface: source-clr
---

Validates discovery inputs and freezes a plan before publication output exists.

**Parameter `context`:** The source checkout and host used for read-only SDK discovery.

**Parameter `cancellationToken`:** Cancels preparation before installation.

**Returns:** A frozen plan with no running work; missing tools and unsupported hosts fail here.
