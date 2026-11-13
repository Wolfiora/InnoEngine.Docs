---
uid: api.d694ec0f18ec2dd3e56a7f7e5b167ad85b977eb4d4c8baba995da6eabd51ef7f
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCacheOwnerDescriptor.#ctor(System.String,System.String,System.String,System.Func{System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.BuildCacheArtifactDescriptor}},System.Func{System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyList{System.String}},System.Action{System.Threading.CancellationToken})"
source: xml
reviewed: 6201244e632b06806dd1950a1eae0eaf54e4ebb3dabd03b183f3c4daa0e515f2
title: "Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Borrows publisher callbacks without discovering artifacts from directory names or file extensions.

**Parameter `id`:** The unique registration identity within this cleanup operation.

**Parameter `directory`:** The absolute cache root exclusively managed by this publisher.

**Parameter `coordinationPath`:** The persistent owner lease also acquired by publication and protected-root updates. It must remain within the cache root and is never deleted by cleanup.

**Parameter `readArtifacts`:** Returns only generations proven to belong to this owner, with their dependency metadata. The callback must observe cancellation and must not create, repair or publish artifacts.

**Parameter `readProtectedArtifacts`:** Returns current product and Pack roots; retirement follows their complete dependency closure. Root updates must hold coordinationPath and retain each referenced artifact's reading lease.

**Parameter `retireMetadata`:** Optional owner-specific metadata retirement, called only under exclusive owner coordination.

**Exception `T:System.ArgumentException`:** An identity is blank or a path is relative.

**Exception `T:System.ArgumentNullException`:** An inventory callback is absent.
