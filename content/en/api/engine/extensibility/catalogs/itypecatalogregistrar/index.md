---
uid: api.inno.extensibility.catalogs.3c11be680076b4b1
symbol: "engine:Inno.Extensibility.Catalogs:T:Inno.Extensibility.Catalogs.ITypeCatalogRegistrar"
source: xml
reviewed: 3e6b7f2d475afb007c6a85258468ebf91944258d224090a698f0ce3302b359c5
title: "ITypeCatalogRegistrar"
kind: api
owners: [Inno.Extensibility.Catalogs]
apiSurface: source-clr
contracts:
- project.inno-extensibility-catalogs#composition-and-factory-contract
aliases: []
---

Accepts explicit declarations and linked generic factories while a static catalog is being composed.

## Remarks

Generated contributors run synchronously on the composition thread and must not retain the registrar. Its registrations belong to the resulting generation. Constructors execute only when requested.
