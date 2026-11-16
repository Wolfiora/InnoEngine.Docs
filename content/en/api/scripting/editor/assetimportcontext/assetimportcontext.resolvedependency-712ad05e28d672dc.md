---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.712ad05e28d672dc40a9046217ddbfc32430bd30ed697e7bde9915221da0b748
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetImportContext.ResolveDependency``1(InnoEngine.Assets.AssetPath)
title: AssetImportContext.ResolveDependency
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
reviewed: 322092fb0c59b46ecc37d57393670b8e5b62382b791ac7dffcf70520e9cae243
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** Expected asset type.

## Parameters

**Parameter `path`:** Isolated dependency path.

## Returns

The currently committed dependency asset.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the dependency cannot be imported or has another type.
