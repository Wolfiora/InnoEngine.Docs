---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.712ad05e28d672dc40a9046217ddbfc32430bd30ed697e7bde9915221da0b748
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetImportContext.ResolveDependency``1(InnoEngine.Assets.AssetPath)
title: AssetImportContext.ResolveDependency
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
reviewed: d9fb8f21569b783334fb5db79ec57ff01d36dcdddd9dae0ffd990459b95a297e
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Resolves and declares a strongly typed runtime asset dependency during import.

## Type parameters

**Type parameter `TAsset`:** Expected asset type.

## Parameters

**Parameter `path`:** Isolated dependency path.

## Returns

The currently committed dependency asset.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the dependency cannot be imported or has another type.
