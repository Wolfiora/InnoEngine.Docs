---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b6befb8660e2f1a46820ba5b9a26b1c83396e3b5205d15b0de5a47295ae996cf
symbol: engine:Inno.Assets:M:Inno.Assets.IAssetResidency.AcquireArtifact(System.Guid,System.String)
title: IAssetResidency.AcquireArtifact
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 205a2a5bce41266e724baeb933fcb32e97311b1efaf3e250a10f298e1f6b0b3f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentID`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Stable artifact output name.

## Returns

A lease that keeps the artifact generation available to the caller.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the requested artifact does not exist or fails verification.
