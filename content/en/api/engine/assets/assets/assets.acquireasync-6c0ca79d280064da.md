---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6c0ca79d280064da61ccd81da2f4ec7db8b121e28bf64e53a2a0a00d6e2d6000
symbol: engine:Inno.Assets:M:Inno.Assets.Assets.AcquireAsync``1(Inno.Assets.AssetPath,System.Threading.CancellationToken)
title: Assets.AcquireAsync
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: abfeaf7658f1c6799e970478ef430d6ac05ca6dd16190d7875bce7046dcd9b89

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
