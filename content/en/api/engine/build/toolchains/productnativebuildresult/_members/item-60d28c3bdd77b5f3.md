---
uid: api.60d28c3bdd77b5f3d4473ec6ed1eb7a1d38f84b8e31e09b28a3eb87cb51680eb
symbol: "engine:Inno.Build.Toolchains:P:Inno.Build.Toolchains.ProductNativeBuildResult.Item(System.Int32)"
source: xml
reviewed: 1be3e725da2960bba062e3db75b99c7c622e7626b5a62ea0e4a6a9dfb9872f24
title: "Item"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Borrows a product whose lease is owned by this result until disposal.

**Parameter `index`:** The zero-based position in the plan's declaration order.

**Returns:** The borrowed product; the caller must finish access before disposing the result.

**Exception `T:System.ObjectDisposedException`:** The result no longer owns the products.
