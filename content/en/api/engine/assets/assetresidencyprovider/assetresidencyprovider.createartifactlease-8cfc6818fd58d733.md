---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8cfc6818fd58d7339f6841a862f1cd06f4345194496e897863de9558740e97fd
symbol: engine:Inno.Assets:M:Inno.Assets.AssetResidencyProvider.CreateArtifactLease(Inno.Assets.AssetArtifactInfo,System.Func{System.IO.Stream},System.Action)
title: AssetResidencyProvider.CreateArtifactLease
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: eb74591871fa1d528cce4f9b5e020bcd7a02e9a3f95ff1d5a054fb9e580cbe2d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `artifact`:** Verified artifact metadata retained by the lease.

**Parameter `openRead`:** Opens immutable bytes with an independent provider pin owned by the returned stream.

**Parameter `release`:** Provider-owned release callback. Pending retirement must be retryable without repeating completed effects.

## Returns

A lease that retains its value until release completes; a Pending callback is retried by the owning lifecycle.
