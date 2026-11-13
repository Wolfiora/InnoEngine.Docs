---
uid: api.b57aaefc66d74049e80b5365afb14489c63e3fda3498071701c688126e0fc363
symbol: "engine:Inno.Runtime:M:Inno.Runtime.StaticTypeCatalogSource.CreateInstance(System.Type)"
source: xml
reviewed: a47a5e0090a76a84efdf319b0f8b2a0b41171669541a460f7f071fab5af76183
title: "CreateInstance"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Constructs a declared type through the selected deployment's factory mechanism.

**Parameter `type`:** The declared runtime type.

**Returns:** A new instance owned by the caller; missing factories or failed constructors throw.
