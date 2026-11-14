---
uid: api.60d28c3bdd77b5f3d4473ec6ed1eb7a1d38f84b8e31e09b28a3eb87cb51680eb
symbol: "engine:Inno.Build.Toolchains:P:Inno.Build.Toolchains.ProductNativeBuildResult.Item(System.Int32)"
source: xml
reviewed: d455d2f16b80942c1c91cdd792249fc784c8f80a830c9937ab5690a50974318d
title: "ProductNativeBuildResult.Item"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Borrows a product whose lease is owned by this result until disposal.

## Parameters

**Parameter `index`:** The zero-based position in the plan's declaration order.

## Returns

The borrowed product; the caller must finish access before disposing the result.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The result no longer owns the products.
