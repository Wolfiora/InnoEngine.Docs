---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1f027eb4fa5d001538884c16a880c5bdbeb6f02203947aee8c83bf59ac752549
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePublisher.AcquireUseAsync(System.Threading.CancellationToken)
title: BuildCachePublisher.AcquireUseAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 649485c0c129f7b249ef70a21bddc1a8483ef3689542c88658eef0ec253f20ca

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `cancellationToken`:** Cancels this wait without disturbing other owners.

## Returns

Caller-owned shared activity; dispose after the final artifact reading lease is acquired.

## Exceptions

**Exception `T:System.OperationCanceledException`:** Acquisition was canceled.
