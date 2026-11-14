---
uid: api.38054458d08498c63efa79c965d5ffcebbdebcf36bd459c1d16d9dc41b70c781
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorState.Set\u0060\u00601(System.String,\u0060\u00600)"
source: xml
reviewed: e2fe7ae43a41ee851123e6b3422411ea90ca1ffb30e607b066f6680d9ce191b1
title: "EditorState.Set"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Writes one neutral value under a stable extension-local key.

**Type parameter `T`:** The neutral value type supplied by the caller.

**Parameter `key`:** The stable key local to the owning module or panel.

**Parameter `value`:** The value to persist.

**Exception `T:System.ArgumentException`:** Thrown when `key` is empty.

**Exception `T:System.InvalidOperationException`:** Thrown when the state parameter was supplied for restoration and is therefore read-only.

**Exception `T:System.NotSupportedException`:** Thrown when `value` cannot be represented by the runtime state serializer.
