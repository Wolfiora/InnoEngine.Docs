---
uid: api.2d15a82ea89aa8c95e7fc35d6a8f94db5a29883988ee9714f5743630850ac36d
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderGraphSourceStore.Save(Inno.Assets.AssetPath,Inno.Core.Graphs.GraphDocument,System.String)"
source: xml
reviewed: 909768673760c6ae2a2a32cc2657153497195d272861ab7039a4604255e056c7
title: "Save"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Saves serializable graph records independently of import or native compilation success.

**Parameter `path`:** Exact destination within a writable active mount.

**Parameter `graph`:** Complete graph, including missing nodes and unresolved ports.

**Parameter `expectedHash`:** Fingerprint from the last read/save; null requires a new, nonexistent file.

**Returns:** The saved fingerprint. Import runs separately through the normal asset watcher.

**Exception `T:System.IO.IOException`:** The source changed externally, disappeared, or could not be written.

**Exception `T:System.InvalidOperationException`:** The mount is unavailable or read-only.
