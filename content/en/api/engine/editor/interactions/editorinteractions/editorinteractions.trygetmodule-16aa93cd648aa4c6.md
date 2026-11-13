---
uid: api.16aa93cd648aa4c63036e38e08f99aee4533a0ce2338a7bc62f28989bc86e202
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.TryGetModule\u0060\u00601(\u0060\u00600@)"
source: xml
reviewed: 5d9ec165411b3bd234fd01ebebe678de95888f1cf0ddad6ac09671d010656a0d
title: "EditorInteractions.TryGetModule"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Resolves an active feature module for immediate use in the current Editor callback.

**Type parameter `TModule`:** The feature module contract to resolve.

**Parameter `module`:** The started, non-quarantined module, or null when unavailable.

**Returns:** True when the active generation supplies the requested module.

## Remarks

Do not retain the result across callbacks or generation changes. Candidate modules are never exposed.
