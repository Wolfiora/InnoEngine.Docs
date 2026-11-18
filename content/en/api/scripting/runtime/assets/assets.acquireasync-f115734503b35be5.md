---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f115734503b35be5f2e11c1e6897443aa1a8dae341e0153a622c49f3a2b56863
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.Assets.AcquireAsync``1(InnoEngine.Assets.AssetPath,System.Threading.CancellationToken)
title: Assets.AcquireAsync
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
sourceFingerprint: 0f83aaa5757aef62ebf573b384fef6d18b99a47c38c2b28ecafb5effc025b855
apiScope: Runtime
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
