---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fd461bb8d8f5984b44346d07decff739cd8b6aec2e44ff2780658ee2f4bbcfce
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry`1.OwnCandidateExtension``1(``0)
title: TypeRegistry<TSnapshot>.OwnCandidateExtension
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
sourceFingerprint: 734ab26189ba364013c3a3f409c5e997beaa156db0e43d00741c6b44b1ffd076
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TExtension`:** The newly constructed extension contract.

## Parameters

**Parameter `extension`:** A new instance, never an instance borrowed from the active snapshot.

## Returns

The same instance. After a successful build its containing snapshot must own its retirement.

## Exceptions

**Exception `T:System.InvalidOperationException`:** This method is called outside synchronous candidate construction.
