---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fd1da7df92fe8b66e015373632de53ba320e10d844e499092fe32bf18de8c5a2
symbol: engine:Inno.Assets:M:Inno.Assets.AssetDependency.#ctor(System.Guid,Inno.Extensibility.Types.TypeRef,System.String)
title: AssetDependency.Constructor
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 9015a208c1b8aa5422740d1c07ee11fab115e400d2c65c204ad6c75d3d0fc73b
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
