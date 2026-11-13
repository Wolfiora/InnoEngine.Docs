---
uid: api.f829b34a94a7b545c334c6f95cdba303cfc2d63baa629b4106dfe387fabc873f
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity.VerifyAsync(System.Threading.CancellationToken)"
source: xml
reviewed: e31f8d16c254a0d0cd9e821c6f25c6db2403d5ed82a92e1f31e8c12edc6fa475
title: "VerifyAsync"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Freshly verifies the complete current source input closure after waiting or preparing output.

**Parameter `cancellationToken`:** Cancels verification before cache acceptance or publication.

**Returns:** Completion when the current graph and bytes still match the frozen preparation identity.

**Exception `T:System.InvalidOperationException`:** Preparation inputs changed; no candidate may be selected.

**Exception `T:System.OperationCanceledException`:** Verification was canceled.
