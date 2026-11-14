---
uid: api.1f027eb4fa5d001538884c16a880c5bdbeb6f02203947aee8c83bf59ac752549
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePublisher.AcquireUseAsync(System.Threading.CancellationToken)"
source: xml
reviewed: 649485c0c129f7b249ef70a21bddc1a8483ef3689542c88658eef0ec253f20ca
title: "BuildCachePublisher.AcquireUseAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Pins publisher activity until publication, reading handoff and current-root updates finish.

**Parameter `cancellationToken`:** Cancels this wait without disturbing other owners.

**Returns:** Caller-owned shared activity; dispose after the final artifact reading lease is acquired.

**Exception `T:System.OperationCanceledException`:** Acquisition was canceled.
