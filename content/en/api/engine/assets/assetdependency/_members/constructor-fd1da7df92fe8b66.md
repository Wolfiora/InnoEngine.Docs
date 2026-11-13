---
uid: api.fd1da7df92fe8b66e015373632de53ba320e10d844e499092fe32bf18de8c5a2
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetDependency.#ctor(System.Guid,Inno.Extensibility.Types.TypeRef,System.String)"
source: xml
reviewed: b8b2d24a94c7ed9d833e0d7df80713bda1d097e4b769c93985a635ff4d101cda
title: "Constructor"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Creates an asset dependency descriptor.

**Parameter `persistentId`:** The persistent identity of the referenced asset.

**Parameter `type`:** The reload-safe identity of the expected asset type.

**Parameter `lastKnownPath`:** The last known source-relative path.

**Exception `T:System.ArgumentException`:** Thrown when `persistentId` is empty.
