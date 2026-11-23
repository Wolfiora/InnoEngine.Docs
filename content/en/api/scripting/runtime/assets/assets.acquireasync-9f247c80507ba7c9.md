---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9f247c80507ba7c9bb07053507dccd6940ad19c02d30d2c38a894e6374a7ffbc
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.Assets.AcquireAsync``1(System.Guid,System.Threading.CancellationToken)
title: Assets.AcquireAsync
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
sourceFingerprint: e7754c1b6821ccd2e406872b18108a1ca7d45eb54a4214ce98b67ddfadb06075
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

**Parameter `persistentID`:** Persistent asset identity.

**Parameter `cancellationToken`:** Cancellation for this caller's asynchronous wait.

## Returns

A lease that owns residency for the canonical asset.
