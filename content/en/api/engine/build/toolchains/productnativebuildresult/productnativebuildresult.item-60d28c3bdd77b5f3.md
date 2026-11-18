---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.60d28c3bdd77b5f3d4473ec6ed1eb7a1d38f84b8e31e09b28a3eb87cb51680eb
symbol: engine:Inno.Build.Toolchains:P:Inno.Build.Toolchains.ProductNativeBuildResult.Item(System.Int32)
title: ProductNativeBuildResult.Item
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 886d0c054a99b71fe2e226ad17306b308a76a01dbb3a728f6a4034281c471c49
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `index`:** The zero-based position in the plan's declaration order.

## Returns

The borrowed product; the caller must finish access before disposing the result.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The result no longer owns the products.
