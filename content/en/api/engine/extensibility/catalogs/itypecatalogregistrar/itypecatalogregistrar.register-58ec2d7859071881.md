---
uid: api.58ec2d785907188141ef5cabd7daaa5f987e57ac2d59641974874ea87b144620
symbol: "engine:Inno.Extensibility.Catalogs:M:Inno.Extensibility.Catalogs.ITypeCatalogRegistrar.Register(Inno.Extensibility.Catalogs.TypeCatalogMetadata,System.Func{System.Object})"
source: xml
reviewed: 8899f4bc3ec3fd5306a01114370396889b2f80e3b3682448f6593933cd9ddf31
title: "ITypeCatalogRegistrar.Register"
kind: api
owners: [Inno.Extensibility.Catalogs]
apiSurface: source-clr
---

Registers immutable discovery metadata and an optional parameterless construction function.

## Parameters

**Parameter `metadata`:** Complete discovery facts for one assembly-local declaration.

**Parameter `factory`:** Creates a new instance, or null when the declaration is not constructible.

## Exceptions

**Exception `T:System.ArgumentException`:** The declaration has already been registered.

**Exception `T:System.InvalidOperationException`:** The caller runs on another thread or retained this registrar after catalog composition completed.
