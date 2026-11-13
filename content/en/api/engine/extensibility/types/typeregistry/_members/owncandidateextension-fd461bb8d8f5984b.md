---
uid: api.fd461bb8d8f5984b44346d07decff739cd8b6aec2e44ff2780658ee2f4bbcfce
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry\u00601.OwnCandidateExtension\u0060\u00601(\u0060\u00600)"
source: xml
reviewed: 2fcb83186d8d6b5e46e4ea61494f4c78a84d955ebc33ba993f05aa56f77b359c
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
