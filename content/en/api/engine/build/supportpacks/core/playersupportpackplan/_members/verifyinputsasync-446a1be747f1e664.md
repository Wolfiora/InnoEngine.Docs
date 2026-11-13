---
uid: api.446a1be747f1e66408ca2cc27d04072f2860603fabf05692558ba6dbfa384bd1
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPlan.VerifyInputsAsync(System.Threading.CancellationToken)"
source: xml
reviewed: 497a56a44de73322c773fb8f81d2ef8cd0cfcb939f10bc95067cb1d66023937a
title: "VerifyInputsAsync"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Freshly verifies the planned source graph after an ownership wait or preparation work.

**Parameter `cancellationToken`:** Cancels verification before selecting any Pack.

**Returns:** Completion only when all current inputs still match the frozen preparation identity.

**Exception `T:System.InvalidOperationException`:** The planned inputs changed and cannot be accepted.

**Exception `T:System.OperationCanceledException`:** Verification was canceled.
