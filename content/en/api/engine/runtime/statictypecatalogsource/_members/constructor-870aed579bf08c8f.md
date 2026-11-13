---
uid: api.870aed579bf08c8fc8496649eead28aa059832d4ebbc0810d504834408e196dd
symbol: "engine:Inno.Runtime:M:Inno.Runtime.StaticTypeCatalogSource.#ctor(System.Collections.Generic.IReadOnlyList{System.Action{Inno.Extensibility.Catalogs.ITypeCatalogRegistrar}})"
source: xml
reviewed: 3af3cd4f280c49046807eaec4b63a8ba4cf6505b9cbd91d29fd70de9836d1f68
title: "Constructor"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Executes generated contributions once and freezes the resulting metadata and factory closure.

**Parameter `catalogs`:** Assembly-local registration methods. Callbacks and the registrar are released after construction.

**Exception `T:System.ArgumentException`:** A declaration is registered twice, a generic construction lacks its definition, or a contributor is null.
