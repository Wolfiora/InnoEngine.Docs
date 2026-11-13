---
uid: api.b57aaefc66d74049e80b5365afb14489c63e3fda3498071701c688126e0fc363
symbol: "engine:Inno.Runtime:M:Inno.Runtime.StaticTypeCatalogSource.CreateInstance(System.Type)"
source: xml
reviewed: 850f66a0160803574ed4246bc99587ae7ff04ee42e94e910458f9cc99e2ed98b
title: "CreateInstance"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Constructs a declared type through the selected deployment's factory mechanism.

**Parameter `type`:** The declared runtime type.

**Returns:** A new instance owned by the caller; missing factories or failed constructors throw.
