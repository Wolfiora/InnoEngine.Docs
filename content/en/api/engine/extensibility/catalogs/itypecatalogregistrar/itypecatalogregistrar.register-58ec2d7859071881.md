---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.58ec2d785907188141ef5cabd7daaa5f987e57ac2d59641974874ea87b144620
symbol: engine:Inno.Extensibility.Catalogs:M:Inno.Extensibility.Catalogs.ITypeCatalogRegistrar.Register(Inno.Extensibility.Catalogs.TypeCatalogMetadata,System.Func{System.Object})
title: ITypeCatalogRegistrar.Register
kind: api
owners:
- Inno.Extensibility.Catalogs
apiSurface: source-clr
reviewed: d4e3a3dd066ebe93f22ddb01eac94f763405afa9051afbd5b369caf5c8090bc9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `metadata`:** Complete discovery facts for one assembly-local declaration.

**Parameter `factory`:** Creates a new instance, or null when the declaration is not constructible.

## Exceptions

**Exception `T:System.ArgumentException`:** The declaration has already been registered.

**Exception `T:System.InvalidOperationException`:** The caller runs on another thread or retained this registrar after catalog composition completed.
