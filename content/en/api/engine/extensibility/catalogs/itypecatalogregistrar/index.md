---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.extensibility.catalogs.3c11be680076b4b1
symbol: engine:Inno.Extensibility.Catalogs:T:Inno.Extensibility.Catalogs.ITypeCatalogRegistrar
title: ITypeCatalogRegistrar
kind: api
owners:
- Inno.Extensibility.Catalogs
apiSurface: source-clr
reviewed: 839088bd6cffa34bd63af72f81e0edb70e89176f26d6e2cacf5cd4a123dc9a25

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-extensibility-catalogs#composition-and-factory-contract
aliases: []
---

Accepts explicit declarations and linked generic factories while a static catalog is being composed.

## Remarks

Generated contributors run synchronously on the composition thread and must not retain the registrar. Its registrations belong to the resulting generation. Constructors execute only when requested.
