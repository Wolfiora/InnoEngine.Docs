---
uid: api.1f027eb4fa5d001538884c16a880c5bdbeb6f02203947aee8c83bf59ac752549
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePublisher.AcquireUseAsync(System.Threading.CancellationToken)"
source: xml
reviewed: f3bce0f17b0adb4906bddd893a99699ac4fb77bb48d74a1600b39ab756d6e4db
title: "AcquireUseAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Pins publisher activity until publication, reading handoff and current-root updates finish.

**Parameter `cancellationToken`:** Cancels this wait without disturbing other owners.

**Returns:** Caller-owned shared activity; dispose after the final artifact reading lease is acquired.

**Exception `T:System.OperationCanceledException`:** Acquisition was canceled.
