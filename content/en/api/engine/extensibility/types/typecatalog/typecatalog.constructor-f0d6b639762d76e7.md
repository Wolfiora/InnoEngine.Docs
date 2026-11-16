---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f0d6b639762d76e7da1dd05e516e32a87fe7e19e285889915cfad4359e3b4e30
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCatalog.#ctor(Inno.Extensibility.Modules.ModuleHost,Inno.Extensibility.Types.ITypeCatalogSource)
title: TypeCatalog.Constructor
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: 61a3cb8fea43e771ca7b0e310cd31b10a8326aa0834291d0cf7bbf746049a511
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `modules`:** The module host that owns the assembly generations visible to this catalog.

**Parameter `source`:** The metadata provider selected by the composition root for every contributed assembly.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `modules` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when `modules` has already been disposed.
