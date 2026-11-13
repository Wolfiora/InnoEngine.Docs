---
uid: api.8d7211736b50acba73c76796e211a9fe422452470e554c7f07dc8b2e2b7f1a06
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetImportContext.ResolveDependency\u0060\u00601(Inno.Assets.AssetPath)"
source: xml
reviewed: 641b7e914d391cfd7c867fca41a9aa86f239bc05c8945dc10887b3fc7051a1c0
title: "ResolveDependency"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Resolves and declares a strongly typed runtime asset dependency during import.

**Type parameter `TAsset`:** Expected asset type.

**Parameter `path`:** Isolated dependency path.

**Returns:** The currently committed dependency asset.

**Exception `T:System.InvalidOperationException`:** Thrown when the dependency cannot be imported or has another type.
