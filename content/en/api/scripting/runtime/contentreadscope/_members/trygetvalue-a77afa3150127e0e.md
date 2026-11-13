---
uid: api.a77afa3150127e0ebea9154f98e561e5306719e3adb0e38ee79d98713bfe8b1d
symbol: "scripting:Inno.References:M:InnoEngine.References.ContentReadScope.TryGetValue\u0060\u00601(System.Guid,\u0060\u00600@)"
source: xml
reviewed: 9e91bfdccec1b007c02f1dcb6bbc84258ebb1a0b091b6a67ca5558f19c01dc36
title: "TryGetValue"
kind: api
owners: [Inno.References]
apiSurface: editor-script
apiScope: Runtime
---

Resolves a selected root without rebinding a stale snapshot to a replacement generation.

**Type parameter `TValue`:** The required identity-backed root type.

**Parameter `id`:** The persistent identity selecting a root already captured by this scope.

**Parameter `value`:** The live compatible object, or null when unavailable.

**Returns:** True only when the captured runtime identity is still live and compatible.

**Exception `T:System.ObjectDisposedException`:** The operation scope has ended.

**Exception `T:System.InvalidOperationException`:** Lookup occurs off the owning control thread.
