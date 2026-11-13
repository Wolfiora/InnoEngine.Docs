---
uid: api.e679c0a0093eeaf7a8e0d4e63b723a7447cb693ef9ef8c4e1d48911f662be87e
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetExecutionContext.EnterScope(Inno.Assets.IAssetLookup)"
source: xml
reviewed: 3dda241e6b4542de3991bfaf06986989d79b58ec9ab3fc0d003a03d2db51ee9f
title: "EnterScope"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Binds an asset lookup until the returned strict last-in-first-out scope is disposed.

**Parameter `assets`:** The host-owned lookup to expose to script-facing asset operations.

**Returns:** A strict last-in-first-out execution scope owned by the caller.

**Exception `T:System.ArgumentNullException`:** Thrown when `assets` is `null`.
