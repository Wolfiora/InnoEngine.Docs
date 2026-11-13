---
uid: api.f70522c773d782d60057f077e82ade705402d98e4e572d95eb2576c4ab9c1ad6
symbol: "engine:Inno.Extensibility.Catalogs:M:Inno.Extensibility.Catalogs.ITypeCatalogRegistrar.RejectGenericConstruction(System.Type,System.Collections.Generic.IReadOnlyList{System.Type})"
source: xml
reviewed: 57c1accc1507e3f85ba27c1913e6756cb64e06f1cdd504a4b0258e4ba24619c8
title: "RejectGenericConstruction"
kind: api
owners: [Inno.Extensibility.Catalogs]
apiSurface: source-clr
---

Records a construction whose argument set was rejected by the declaration's compile-time constraints.

**Parameter `definition`:** The generic declaration contributed by the completed catalog.

**Parameter `arguments`:** The complete closed argument set. The registrar copies this collection during registration.

## Remarks

This fact lets static resolution skip an inapplicable converter without attempting dynamic generic creation. Unknown constructions remain explicit deployment errors. Repeated rejections are idempotent.

**Exception `T:System.ArgumentException`:** The declaration or argument set is incomplete, open, or conflicts with a registered factory.

**Exception `T:System.ArgumentNullException`:** The declaration or argument collection is null.

**Exception `T:System.InvalidOperationException`:** The caller runs on another thread or retained this registrar after catalog composition completed.
