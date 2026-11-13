---
uid: api.2e14a08b23b21ff98f9e541958d954ba3e64f6750e770738a3e4eb10a09e12f3
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPlan.PrepareAsync(System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 0b8aa70568f782d3a8e9f092e247beda92651b246383295327be9f0555dd6332
title: "PrepareAsync"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Executes frozen inputs in publisher-owned staging without selecting tools again.

**Parameter `stagingDirectory`:** The isolated empty directory borrowed for this execution only.

**Parameter `cancellationToken`:** Cancels execution and drains owned work before returning.

**Returns:** Completion when the full closure is prepared; failures propagate without publishing.
