---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fd1da7df92fe8b66e015373632de53ba320e10d844e499092fe32bf18de8c5a2
symbol: engine:Inno.Assets:M:Inno.Assets.AssetDependency.#ctor(System.Guid,Inno.Extensibility.Types.TypeRef,System.String)
title: AssetDependency.Constructor
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 1e503cfd6650190d41def71d0cff26c130276f62795c7c7a5426b66256798972
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentId`:** The persistent identity of the referenced asset.

**Parameter `type`:** The reload-safe identity of the expected asset type.

**Parameter `lastKnownPath`:** The last known source-relative path.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `persistentId` is empty.
