---
uid: api.fd461bb8d8f5984b44346d07decff739cd8b6aec2e44ff2780658ee2f4bbcfce
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry\u00601.OwnCandidateExtension\u0060\u00601(\u0060\u00600)"
source: xml
reviewed: 0edd67163bef11ce255111ef8fe19ee5f6d0c16df6a411d1ce976c140d8db6c1
title: "OwnCandidateExtension"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Adds a newly constructed extension to the current build's rollback ownership before further validation.

**Type parameter `TExtension`:** The newly constructed extension contract.

**Parameter `extension`:** A new instance, never an instance borrowed from the active snapshot.

**Returns:** The same instance. After a successful build its containing snapshot must own its retirement.

**Exception `T:System.InvalidOperationException`:** This method is called outside synchronous candidate construction.
