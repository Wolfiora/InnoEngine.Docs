---
uid: api.4c6e1999324312792863b75470b6ce283022a6f2a33017046f580267cd6cf9da
symbol: "engine:Inno.Assets:M:Inno.Assets.Assets.TryLoad\u0060\u00601(Inno.Assets.AssetPath,\u0060\u00600@)"
source: xml
reviewed: 6e8d8dfedc489d5f240c4bac9298d7e4e11d720c13f2a6d21e5e5dfe8019520a
title: "Assets.TryLoad"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Tries to load the canonical asset at a logical catalog path in the current session.

## Type parameters

**Type parameter `TAsset`:** The required asset contract.

## Parameters

**Parameter `path`:** The mount-qualified logical catalog path.

**Parameter `asset`:** Receives the canonical compatible asset when available.

## Returns

`true` when the current lookup contains a compatible asset; otherwise, `false`.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no asset lookup is active for the caller.
