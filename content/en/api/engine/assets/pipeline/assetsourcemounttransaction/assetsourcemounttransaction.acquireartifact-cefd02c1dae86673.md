---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.cefd02c1dae86673be17990fb8cb67b66e68b34db6dbc92b22e18aeb74261d2b
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSourceMountTransaction.AcquireArtifact(System.Guid,System.String)
title: AssetSourceMountTransaction.AcquireArtifact
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 85da86292e06e75256645050ce4393fe45c2e7cb2f790f4aa7a41726fe4be455
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentID`:** The persistent asset identity.

**Parameter `outputName`:** The required output protocol.

## Returns

A caller-owned immutable artifact lease.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The requested output is unavailable or invalid.
