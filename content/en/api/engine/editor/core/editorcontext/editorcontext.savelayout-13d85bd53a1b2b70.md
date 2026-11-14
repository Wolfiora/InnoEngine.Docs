---
uid: api.13d85bd53a1b2b7054b99e54738a47528d4538ac7eae29acdcad2cc7876a8565
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorContext.SaveLayout"
source: xml
reviewed: 548ef72edb8f1293b1ef3090c5e77965b895193b810132f140c58e61caad17cf
title: "EditorContext.SaveLayout"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Atomically rewrites the complete project editor layout document.

## Exceptions

**Exception `T:System.IO.IOException`:** Thrown when the layout document cannot be written atomically.

**Exception `T:System.UnauthorizedAccessException`:** Thrown when the layout document is inaccessible.
