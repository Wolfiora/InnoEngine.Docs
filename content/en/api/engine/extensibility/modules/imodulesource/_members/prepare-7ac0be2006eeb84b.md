---
uid: api.7ac0be2006eeb84be91bd3d8fc6960d6b9793950f88680f57dc4044cb76626fb
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.IModuleSource.Prepare(Inno.Extensibility.Modules.ModuleSourceContext)"
source: xml
reviewed: 05b35c5064edd998bfc71ddd3cee36aa29a6fd4791c21ac810644eaed27a55e1
title: "Prepare"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Acquires a validated candidate and transfers its lifetime to the caller on success.

**Parameter `context`:** The immutable candidate dependency closure and retirement owner.

**Returns:** A complete unpublished contribution; failure retires every acquired resource through the context.
