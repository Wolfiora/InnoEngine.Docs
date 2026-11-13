---
uid: api.e679c0a0093eeaf7a8e0d4e63b723a7447cb693ef9ef8c4e1d48911f662be87e
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetExecutionContext.EnterScope(Inno.Assets.IAssetLookup)"
source: xml
reviewed: 24e0a53236ad68966bfcfeb0647cb3d7d431265e1105558859cede544852e781
title: "AssetExecutionContext.EnterScope"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Binds an asset lookup until the returned strict last-in-first-out scope is disposed.

**Parameter `assets`:** The host-owned lookup to expose to script-facing asset operations.

**Returns:** A strict last-in-first-out execution scope owned by the caller.

**Exception `T:System.ArgumentNullException`:** Thrown when `assets` is `null`.
