---
uid: api.f0d6b639762d76e7da1dd05e516e32a87fe7e19e285889915cfad4359e3b4e30
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCatalog.#ctor(Inno.Extensibility.Modules.ModuleHost,Inno.Extensibility.Types.ITypeCatalogSource)"
source: xml
reviewed: 8e7284eb29d1df01d17214a17336d2802ccb632d18104d9aa7ec555072b88f56
title: "Constructor"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Creates a type catalog derived transactionally from one module host.

**Parameter `modules`:** The module host that owns the assembly generations visible to this catalog.

**Exception `T:System.ArgumentNullException`:** Thrown when `modules` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when `modules` has already been disposed.

**Parameter `source`:** The metadata provider selected by the composition root for every contributed assembly.
