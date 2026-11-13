---
uid: api.37bf0f1954af416787b34098201e9b6853d354a5c24677a22558b8b1f3971d73
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.PathBoundary.RequireUnlinkedPath(System.String,System.String)"
source: xml
reviewed: baefabed81aa51ba7f9c728d8c1f1a363d9c0c585f38f2237d4b6fc8cb2ad51f
title: "RequireUnlinkedPath"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Resolves an owned path while rejecting existing links in its containment chain.

**Parameter `root`:** The trusted ownership root, which may not exist yet.

**Parameter `path`:** The absolute existing or future path beneath that root.

**Returns:** The normalized contained path after every existing entry from the root has been inspected.

**Exception `T:System.IO.IOException`:** The path escapes the boundary or an existing entry is a link or reparse point.

## Remarks

This validates the observed filesystem state. Concurrent mutations require an owner lease; it does not grant protection against unrelated actors replacing paths after validation.
