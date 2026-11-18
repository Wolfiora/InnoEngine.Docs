---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e679c0a0093eeaf7a8e0d4e63b723a7447cb693ef9ef8c4e1d48911f662be87e
symbol: engine:Inno.Assets:M:Inno.Assets.AssetExecutionContext.EnterScope(Inno.Assets.IAssetLookup)
title: AssetExecutionContext.EnterScope
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 1d7bca2f717cb7668cb0d8700640a44cc12b4c4c84e84d2708a8b7144840634d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `assets`:** The host-owned lookup to expose to script-facing asset operations.

## Returns

A strict last-in-first-out execution scope owned by the caller.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `assets` is `null`.
