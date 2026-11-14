---
uid: api.f829b34a94a7b545c334c6f95cdba303cfc2d63baa629b4106dfe387fabc873f
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity.VerifyAsync(System.Threading.CancellationToken)"
source: xml
reviewed: 9eb61b2e157c62a24674329098209a5db14d4aa580cf05544527be8fb61cfca0
title: "PlayerSupportPackPreparationIdentity.VerifyAsync"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Freshly verifies the complete current source input closure after waiting or preparing output.

**Parameter `cancellationToken`:** Cancels verification before cache acceptance or publication.

**Returns:** Completion when the current graph and bytes still match the frozen preparation identity.

**Exception `T:System.InvalidOperationException`:** Preparation inputs changed; no candidate may be selected.

**Exception `T:System.OperationCanceledException`:** Verification was canceled.
