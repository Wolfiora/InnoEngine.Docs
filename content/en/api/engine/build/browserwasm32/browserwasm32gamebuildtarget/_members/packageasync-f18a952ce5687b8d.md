---
uid: api.f18a952ce5687b8d048e4537fb49e0dd91dca07020ee531d49f493a862eb4306
symbol: "engine:Inno.Build.BrowserWasm32:M:Inno.Build.BrowserWasm32.BrowserWasm32GameBuildTarget.PackageAsync(Inno.Build.GameBuildPackageContext,System.Threading.CancellationToken)"
source: xml
reviewed: bd589b1678431bc02934b4f84cb2cd88d10a2c270eb60f2c2d5f5402339f3d8e
title: "PackageAsync"
kind: api
owners: [Inno.Build.BrowserWasm32]
apiSurface: source-clr
---

Composes an independently hostable site from a verified browser Support Pack and content pack.

**Parameter `context`:** The verified runtime and packaged project content.

**Parameter `cancellationToken`:** Cancels copying before the build pipeline commits the site.

**Returns:** The staged static-site directory.
