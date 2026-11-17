---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d694ec0f18ec2dd3e56a7f7e5b167ad85b977eb4d4c8baba995da6eabd51ef7f
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCacheOwnerDescriptor.#ctor(System.String,System.String,System.String,System.Func{System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.BuildCacheArtifactDescriptor}},System.Func{System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyList{System.String}},System.Action{System.Threading.CancellationToken})
title: BuildCacheOwnerDescriptor.Constructor
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 716f8e6a66d6f2748d5a8a7b149dde5a60cb3c2e30a56e9751465f0475c709f9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The unique registration identity within this cleanup operation.

**Parameter `directory`:** The absolute cache root exclusively managed by this publisher.

**Parameter `coordinationPath`:** The persistent owner lease also acquired by publication and protected-root updates. It must remain within the cache root and is never deleted by cleanup.

**Parameter `readArtifacts`:** Returns only generations proven to belong to this owner, with their dependency metadata. The callback must observe cancellation and must not create, repair or publish artifacts.

**Parameter `readProtectedArtifacts`:** Returns current product and Pack roots; retirement follows their complete dependency closure. Root updates must hold coordinationPath and retain each referenced artifact's reading lease.

**Parameter `retireMetadata`:** Optional owner-specific metadata retirement, called only under exclusive owner coordination.

## Exceptions

**Exception `T:System.ArgumentException`:** An identity is blank or a path is relative.

**Exception `T:System.ArgumentNullException`:** An inventory callback is absent.
