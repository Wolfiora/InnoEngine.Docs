---
uid: api.268d6575caf4ba5b39e3dfc34a808879391172aa672cfad7889d507ccef5f633
symbol: "engine:Inno.Build.Managed:M:Inno.Build.Managed.ManagedDeploymentCatalog.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Build.Managed.IManagedDeploymentCompiler})"
source: xml
reviewed: d62b80fefba2f0629f449e031f92d2052a63c76f460dff6d84e450c3cbaf865f
title: "ManagedDeploymentCatalog.Constructor"
kind: api
owners: [Inno.Build.Managed]
apiSurface: source-clr
---

Copies providers and rejects ambiguous identities before any publication starts.

## Parameters

**Parameter `compilers`:** The explicit provider implementations owned by the composition root.

## Exceptions

**Exception `T:System.ArgumentException`:** The collection is empty, contains null entries or has duplicate or invalid identities.
