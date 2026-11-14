---
uid: api.497205e2efe312e1ee5a405401e1b19f5e81ea30f4bbc77a6813eaecb902ea4b
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorState.Set\u0060\u00601(System.String,\u0060\u00600)"
source: xml
reviewed: 25540abd05c33cd1978ec8b1250868a65886948ee08f390acc96aed8979bd57b
title: "EditorState.Set"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Writes one neutral value under a stable extension-local key.

**Type parameter `T`:** The neutral value type supplied by the caller.

**Parameter `key`:** The stable key local to the owning module or panel.

**Parameter `value`:** The value to persist.

**Exception `T:System.ArgumentException`:** Thrown when `key` is empty.

**Exception `T:System.InvalidOperationException`:** Thrown when the state parameter was supplied for restoration and is therefore read-only.

**Exception `T:System.NotSupportedException`:** Thrown when `value` cannot be represented by the runtime state serializer.
