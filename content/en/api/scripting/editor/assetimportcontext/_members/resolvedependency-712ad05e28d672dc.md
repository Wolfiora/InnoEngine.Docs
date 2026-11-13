---
uid: api.712ad05e28d672dc40a9046217ddbfc32430bd30ed697e7bde9915221da0b748
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetImportContext.ResolveDependency\u0060\u00601(InnoEngine.Assets.AssetPath)"
source: xml
reviewed: 47717dffe438e1601bd3ded3e355b76bf2e073f3013871f8a1020850666bc987
title: "ResolveDependency"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Resolves and declares a strongly typed runtime asset dependency during import.

**Type parameter `TAsset`:** Expected asset type.

**Parameter `path`:** Isolated dependency path.

**Returns:** The currently committed dependency asset.

**Exception `T:System.InvalidOperationException`:** Thrown when the dependency cannot be imported or has another type.
