---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fd1da7df92fe8b66e015373632de53ba320e10d844e499092fe32bf18de8c5a2
symbol: engine:Inno.Assets:M:Inno.Assets.AssetDependency.#ctor(System.Guid,Inno.Extensibility.Types.TypeRef,System.String)
title: AssetDependency.Constructor
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: f9aea910255d905acedfe31aa47c36cf521b242d82ad3052e90c05864bb1b579

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Creates an asset dependency descriptor.

## Parameters

**Parameter `persistentId`:** The persistent identity of the referenced asset.

**Parameter `type`:** The reload-safe identity of the expected asset type.

**Parameter `lastKnownPath`:** The last known source-relative path.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `persistentId` is empty.
