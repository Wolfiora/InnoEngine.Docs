---
uid: api.aeeafaad919a7bb3699621a733bb8c921b4dbfaaeb057447a0fc12a4b1aca879
symbol: "engine:Inno.Shell:M:Inno.Shell.Shell.#ctor(Inno.Adapter.IAdapterCatalog,Inno.Shell.ShellOptions)"
source: xml
reviewed: 3084df7adaf2bffa8399c4e0d84617361ba945d4696df9780a7d2c04369e801b
title: "Constructor"
kind: api
owners: [Inno.Shell]
apiSurface: source-clr
---

Creates the backend-neutral host resources shared by Player and Editor products.

**Parameter `adapterCatalog`:** Catalog that resolves explicit backend selections without leaking implementation types.

**Parameter `options`:** Primary-window and rendering policy.

**Exception `T:System.ArgumentNullException`:** Thrown when `adapterCatalog` or `options` is null.
