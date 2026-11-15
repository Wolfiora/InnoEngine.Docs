---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f115734503b35be5f2e11c1e6897443aa1a8dae341e0153a622c49f3a2b56863
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.Assets.AcquireAsync``1(InnoEngine.Assets.AssetPath,System.Threading.CancellationToken)
title: Assets.AcquireAsync
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
reviewed: caebfc6fc5374aa1efdf63dc17166b548aef639b34fce84deb2fd69afcaa7788
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Acquires a canonical asset and explicitly retains it until the returned lease is disposed.

## Type parameters

**Type parameter `TAsset`:** Required asset contract.

## Parameters

**Parameter `path`:** Mount-qualified logical asset path.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

## Returns

A lease that owns residency for the canonical asset.
