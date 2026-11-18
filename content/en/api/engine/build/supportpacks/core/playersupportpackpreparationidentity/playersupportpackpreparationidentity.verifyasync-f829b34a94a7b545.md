---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f829b34a94a7b545c334c6f95cdba303cfc2d63baa629b4106dfe387fabc873f
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPreparationIdentity.VerifyAsync(System.Threading.CancellationToken)
title: PlayerSupportPackPreparationIdentity.VerifyAsync
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
sourceFingerprint: a9a031e429f527740f8e0242e664a0e8705f61c98ca67f483bb10c53e05f33cc
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `cancellationToken`:** Cancels verification before cache acceptance or publication.

## Returns

Completion when the current graph and bytes still match the frozen preparation identity.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Preparation inputs changed; no candidate may be selected.

**Exception `T:System.OperationCanceledException`:** Verification was canceled.
