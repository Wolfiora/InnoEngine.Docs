---
uid: api.268d6575caf4ba5b39e3dfc34a808879391172aa672cfad7889d507ccef5f633
symbol: "engine:Inno.Build.Managed:M:Inno.Build.Managed.ManagedDeploymentCatalog.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Build.Managed.IManagedDeploymentCompiler})"
source: xml
reviewed: e9889f5e3742f83e33e8c8765ab5ae4c3dd23d61a5e4b958f6a8ac8585da6765
title: "Constructor"
kind: api
owners: [Inno.Build.Managed]
apiSurface: source-clr
---

Copies providers and rejects ambiguous identities before any publication starts.

**Parameter `compilers`:** The explicit provider implementations owned by the composition root.

**Exception `T:System.ArgumentException`:** The collection is empty, contains null entries or has duplicate or invalid identities.
