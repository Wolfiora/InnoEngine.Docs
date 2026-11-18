---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a77afa3150127e0ebea9154f98e561e5306719e3adb0e38ee79d98713bfe8b1d
symbol: scripting:Inno.References:M:InnoEngine.References.ContentReadScope.TryGetValue``1(System.Guid,``0@)
title: ContentReadScope.TryGetValue
kind: api
owners:
- Inno.References
apiSurface: editor-script
sourceFingerprint: 885a0f3332d3e5a74c7648c080dd3b0025dd4f9d1365b73c23b64d71123729e4
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TValue`:** The required identity-backed root type.

## Parameters

**Parameter `id`:** The persistent identity selecting a root already captured by this scope.

**Parameter `value`:** The live compatible object, or null when unavailable.

## Returns

True only when the captured runtime identity is still live and compatible.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The operation scope has ended.

**Exception `T:System.InvalidOperationException`:** Lookup occurs off the owning control thread.
