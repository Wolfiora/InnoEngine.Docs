---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.cefd02c1dae86673be17990fb8cb67b66e68b34db6dbc92b22e18aeb74261d2b
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSourceMountTransaction.AcquireArtifact(System.Guid,System.String)
title: AssetSourceMountTransaction.AcquireArtifact
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: f0d9aba76132a9c665f7e3b171e176fad29e84d60e4e8db8131cd18d0b96617e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `outputName`:** The required output protocol.

## Returns

A caller-owned immutable artifact lease.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The requested output is unavailable or invalid.
