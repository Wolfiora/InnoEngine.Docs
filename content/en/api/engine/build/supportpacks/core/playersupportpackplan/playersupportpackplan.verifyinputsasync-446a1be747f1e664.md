---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.446a1be747f1e66408ca2cc27d04072f2860603fabf05692558ba6dbfa384bd1
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPlan.VerifyInputsAsync(System.Threading.CancellationToken)
title: PlayerSupportPackPlan.VerifyInputsAsync
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
sourceFingerprint: 37da146a1dce1a5a3089b53e6deb40a2144b0d9abab2c889c27d660df87c6ae5
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `cancellationToken`:** Cancels verification before selecting any Pack.

## Returns

Completion only when all current inputs still match the frozen preparation identity.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The planned inputs changed and cannot be accepted.

**Exception `T:System.OperationCanceledException`:** Verification was canceled.
