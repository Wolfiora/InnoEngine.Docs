---
uid: api.565dfae26b3f78988bb158f44d994356f4fcf9c71f1ce9cfc8778c0560fcdec8
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.Assets.LocalPath(System.String,System.String)"
source: xml
reviewed: 6b92e5f2b2f8ef01574835447eaf521d2d296b0bc7e6161eb293a28d18e059d7
title: "LocalPath"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Creates a path relative to the Asset source that owns the calling script.

**Parameter `localPath`:** The normalized path relative to the caller's Project or installed Plugin Assets root.

**Parameter `sourceFile`:** The compiler-supplied canonical Asset path of the calling source file; callers normally omit it.

**Returns:** A mount-qualified path that follows the script from Project development into an installed Plugin.

**Exception `T:System.InvalidOperationException`:** The caller does not provide a canonical source location produced by the scripting compiler.

**Exception `T:System.ArgumentNullException`:** The local path or source location is null.
