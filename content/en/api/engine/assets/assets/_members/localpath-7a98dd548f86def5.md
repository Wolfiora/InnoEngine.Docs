---
uid: api.7a98dd548f86def58b46c981efc7d696e52851128e0978ddcad3cbf2ea841857
symbol: "engine:Inno.Assets:M:Inno.Assets.Assets.LocalPath(System.String,System.String)"
source: xml
reviewed: 5884b087505ada008d9d800629537e3c30d1ebf0333d572398496c2d2c659d19
title: "LocalPath"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Creates a path relative to the Asset source that owns the calling script.

**Parameter `localPath`:** The normalized path relative to the caller's Project or installed Plugin Assets root.

**Parameter `sourceFile`:** The compiler-supplied canonical Asset path of the calling source file; callers normally omit it.

**Returns:** A mount-qualified path that follows the script from Project development into an installed Plugin.

**Exception `T:System.InvalidOperationException`:** The caller does not provide a canonical source location produced by the scripting compiler.

**Exception `T:System.ArgumentNullException`:** The local path or source location is null.
