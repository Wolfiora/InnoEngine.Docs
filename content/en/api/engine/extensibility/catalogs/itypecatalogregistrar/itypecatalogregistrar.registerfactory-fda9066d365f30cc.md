---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fda9066d365f30ccfbf5c546aa23b9cbcda4af71b024c4fb88e99cf4668aa509
symbol: engine:Inno.Extensibility.Catalogs:M:Inno.Extensibility.Catalogs.ITypeCatalogRegistrar.RegisterFactory(System.Type,System.Func{System.Object})
title: ITypeCatalogRegistrar.RegisterFactory
kind: api
owners:
- Inno.Extensibility.Catalogs
apiSurface: source-clr
sourceFingerprint: ee089f3d2c3a8cf5bd946b7a54195a13dda9dc56cc9dfc2fbebdd60bff6ec2e3
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
