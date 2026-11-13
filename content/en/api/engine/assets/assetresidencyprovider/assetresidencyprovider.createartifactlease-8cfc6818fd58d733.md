---
uid: api.8cfc6818fd58d7339f6841a862f1cd06f4345194496e897863de9558740e97fd
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetResidencyProvider.CreateArtifactLease(Inno.Assets.AssetArtifactInfo,System.Func{System.IO.Stream},System.Action)"
source: xml
reviewed: 836a542a4fe46ad8aac6b38871638b21e3976b246c9314a00a00b4c82b84f22d
title: "AssetResidencyProvider.CreateArtifactLease"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Creates one immutable artifact residency lease.

**Parameter `artifact`:** Verified artifact metadata retained by the lease.

**Parameter `openRead`:** Opens immutable bytes with an independent provider pin owned by the returned stream.

**Parameter `release`:** Provider-owned release callback. Pending retirement must be retryable without repeating completed effects.

**Returns:** A lease that retains its value until release completes; a Pending callback is retried by the owning lifecycle.
