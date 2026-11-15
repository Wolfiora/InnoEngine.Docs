---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f0d6b639762d76e7da1dd05e516e32a87fe7e19e285889915cfad4359e3b4e30
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCatalog.#ctor(Inno.Extensibility.Modules.ModuleHost,Inno.Extensibility.Types.ITypeCatalogSource)
title: TypeCatalog.Constructor
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: b1af16f207547b6ce855378c8c18fee8a61005514cce9c68cc3dddc688eb6376

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Creates a type catalog derived transactionally from one module host.

## Parameters

**Parameter `modules`:** The module host that owns the assembly generations visible to this catalog.

**Parameter `source`:** The metadata provider selected by the composition root for every contributed assembly.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `modules` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when `modules` has already been disposed.
