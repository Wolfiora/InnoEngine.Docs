---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f70522c773d782d60057f077e82ade705402d98e4e572d95eb2576c4ab9c1ad6
symbol: engine:Inno.Extensibility.Catalogs:M:Inno.Extensibility.Catalogs.ITypeCatalogRegistrar.RejectGenericConstruction(System.Type,System.Collections.Generic.IReadOnlyList{System.Type})
title: ITypeCatalogRegistrar.RejectGenericConstruction
kind: api
owners:
- Inno.Extensibility.Catalogs
apiSurface: source-clr
sourceFingerprint: 27c06b7c540fc7ec238a4fd40564b74bf0098637852c05e3e23cecfddc283f87
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `definition`:** The generic declaration contributed by the completed catalog.

**Parameter `arguments`:** The complete closed argument set. The registrar copies this collection during registration.

## Remarks

This fact lets static resolution skip an inapplicable converter without attempting dynamic generic creation. Unknown constructions remain explicit deployment errors. Repeated rejections are idempotent.

## Exceptions

**Exception `T:System.ArgumentException`:** The declaration or argument set is incomplete, open, or conflicts with a registered factory.

**Exception `T:System.ArgumentNullException`:** The declaration or argument collection is null.

**Exception `T:System.InvalidOperationException`:** The caller runs on another thread or retained this registrar after catalog composition completed.
