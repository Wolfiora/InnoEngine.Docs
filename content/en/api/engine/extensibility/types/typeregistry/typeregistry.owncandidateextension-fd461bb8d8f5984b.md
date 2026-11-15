---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fd461bb8d8f5984b44346d07decff739cd8b6aec2e44ff2780658ee2f4bbcfce
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry`1.OwnCandidateExtension``1(``0)
title: TypeRegistry<TSnapshot>.OwnCandidateExtension
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: 0edd67163bef11ce255111ef8fe19ee5f6d0c16df6a411d1ce976c140d8db6c1

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Adds a newly constructed extension to the current build's rollback ownership before further validation.

## Type parameters

**Type parameter `TExtension`:** The newly constructed extension contract.

## Parameters

**Parameter `extension`:** A new instance, never an instance borrowed from the active snapshot.

## Returns

The same instance. After a successful build its containing snapshot must own its retirement.

## Exceptions

**Exception `T:System.InvalidOperationException`:** This method is called outside synchronous candidate construction.
