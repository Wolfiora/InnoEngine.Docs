---
uid: api.a5d25c498aa764bb21b4ebb48c46107183c29bfe1e4102d94dbfaeee033f4824
symbol: "engine:Inno.Core.Identity:M:Inno.Core.Identity.Identity.Resolve\u0060\u00601"
source: xml
reviewed: 6105c26db2e075324bca22d286ac4ab236feacc535afd96c40f269ca4a8a9d5c
title: "Identity.Resolve"
kind: api
owners: [Inno.Core.Identity]
apiSurface: source-clr
---

Resolves this transient snapshot through its original weak identity registry.

## Type parameters

**Type parameter `TObject`:** The expected identity object type.

## Returns

The current object, or null if the registry retired, the slot changed generation, or the type differs.
