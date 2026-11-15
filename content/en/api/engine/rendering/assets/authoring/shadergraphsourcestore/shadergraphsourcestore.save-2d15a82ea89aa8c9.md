---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2d15a82ea89aa8c95e7fc35d6a8f94db5a29883988ee9714f5743630850ac36d
symbol: engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderGraphSourceStore.Save(Inno.Assets.AssetPath,Inno.Core.Graphs.GraphDocument,System.String)
title: ShaderGraphSourceStore.Save
kind: api
owners:
- Inno.Rendering.Assets.Authoring
apiSurface: source-clr
reviewed: d07257170ad47b6c36c27f1b757e89bb29108f43846a40092a95e65e7fbeaee5

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `path`:** Exact destination within a writable active mount.

**Parameter `graph`:** Complete graph, including missing nodes and unresolved ports.

**Parameter `expectedHash`:** Fingerprint from the last read/save; null requires a new, nonexistent file.

## Returns

The saved fingerprint. Import runs separately through the normal asset watcher.

## Exceptions

**Exception `T:System.IO.IOException`:** The source changed externally, disappeared, or could not be written.

**Exception `T:System.InvalidOperationException`:** The mount is unavailable or read-only.
