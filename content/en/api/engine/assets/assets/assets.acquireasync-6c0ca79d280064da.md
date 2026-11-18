---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6c0ca79d280064da61ccd81da2f4ec7db8b121e28bf64e53a2a0a00d6e2d6000
symbol: engine:Inno.Assets:M:Inno.Assets.Assets.AcquireAsync``1(Inno.Assets.AssetPath,System.Threading.CancellationToken)
title: Assets.AcquireAsync
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 760c45744230b683820be770ce24211113c6c389190ec41af6bd07cbe6d0af3b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** Required asset contract.

## Parameters

**Parameter `path`:** Mount-qualified logical asset path.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

## Returns

A lease that owns residency for the canonical asset.
