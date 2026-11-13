---
uid: api.870aed579bf08c8fc8496649eead28aa059832d4ebbc0810d504834408e196dd
symbol: "engine:Inno.Runtime:M:Inno.Runtime.StaticTypeCatalogSource.#ctor(System.Collections.Generic.IReadOnlyList{System.Action{Inno.Extensibility.Catalogs.ITypeCatalogRegistrar}})"
source: xml
reviewed: 21d6c070f766e03c2d47d10d3b4d7acda2dcd4c8b1e9ec434f23685a600eefd4
title: "Constructor"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Executes generated contributions once and freezes the resulting metadata and factory closure.

**Parameter `catalogs`:** Assembly-local registration methods. Callbacks and the registrar are released after construction.

**Exception `T:System.ArgumentException`:** A declaration is registered twice, a generic construction lacks its definition, or a contributor is null.
