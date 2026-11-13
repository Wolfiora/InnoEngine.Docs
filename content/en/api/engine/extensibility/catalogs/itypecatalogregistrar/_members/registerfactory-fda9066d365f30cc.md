---
uid: api.fda9066d365f30ccfbf5c546aa23b9cbcda4af71b024c4fb88e99cf4668aa509
symbol: "engine:Inno.Extensibility.Catalogs:M:Inno.Extensibility.Catalogs.ITypeCatalogRegistrar.RegisterFactory(System.Type,System.Func{System.Object})"
source: xml
reviewed: 9d324577cfe2191b8434970650f1a32047d5748617666a4d562fb21096a8f7e7
title: "RegisterFactory"
kind: api
owners: [Inno.Extensibility.Catalogs]
apiSurface: source-clr
---

Registers a closed generic construction linked by the contributing assembly.

**Parameter `type`:** A fully closed generic type whose definition is contributed by the completed catalog.

**Parameter `factory`:** Creates a new instance of the linked construction without dynamic code generation.

**Exception `T:System.ArgumentException`:** The type is not a fully closed generic construction.

## Remarks

Repeated registrations of the same closed construction are idempotent; the first factory is retained.

**Exception `T:System.InvalidOperationException`:** The caller runs on another thread or retained this registrar after catalog composition completed.
