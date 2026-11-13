---
uid: api.8339ffbce30892115301deccda9935724dfc0e900b06f4b77f560cba940fd51f
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorState.Get\u0060\u00601(System.String,\u0060\u00600)"
source: xml
reviewed: f56670948ce1679f6685dc560d9dd816ffb801c06b49a05966978e1a247748f7
title: "EditorState.Get"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Reads a compatible value or returns the caller-provided fallback.

**Type parameter `T`:** The neutral value type expected by the caller.

**Parameter `key`:** The stable key local to the owning module or panel.

**Parameter `fallback`:** The value returned when the key is absent, malformed, or incompatible with `T`.

**Returns:** The stored compatible value, or `fallback`.

**Exception `T:System.ArgumentException`:** Thrown when `key` is empty.
