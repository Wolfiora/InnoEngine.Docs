---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fda9066d365f30ccfbf5c546aa23b9cbcda4af71b024c4fb88e99cf4668aa509
symbol: engine:Inno.Extensibility.Catalogs:M:Inno.Extensibility.Catalogs.ITypeCatalogRegistrar.RegisterFactory(System.Type,System.Func{System.Object})
title: ITypeCatalogRegistrar.RegisterFactory
kind: api
owners:
- Inno.Extensibility.Catalogs
apiSurface: source-clr
reviewed: fc7ae97ee7cee30fdc410df2b7e0d3ac6aa538a2e3e2ecc8a917fc49e876e168
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `type`:** A fully closed generic type whose definition is contributed by the completed catalog.

**Parameter `factory`:** Creates a new instance of the linked construction without dynamic code generation.

## Exceptions

**Exception `T:System.ArgumentException`:** The type is not a fully closed generic construction.

**Exception `T:System.InvalidOperationException`:** The caller runs on another thread or retained this registrar after catalog composition completed.

## Remarks

Repeated registrations of the same closed construction are idempotent; the first factory is retained.
