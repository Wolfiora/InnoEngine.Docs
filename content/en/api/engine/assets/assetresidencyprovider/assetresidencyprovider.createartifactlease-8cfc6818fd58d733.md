---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8cfc6818fd58d7339f6841a862f1cd06f4345194496e897863de9558740e97fd
symbol: engine:Inno.Assets:M:Inno.Assets.AssetResidencyProvider.CreateArtifactLease(Inno.Assets.AssetArtifactInfo,System.Func{System.IO.Stream},System.Action)
title: AssetResidencyProvider.CreateArtifactLease
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 822e337a957fbbf4aa757137bf2df52edc620415a2b5854a082549ab60fdd3be
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
