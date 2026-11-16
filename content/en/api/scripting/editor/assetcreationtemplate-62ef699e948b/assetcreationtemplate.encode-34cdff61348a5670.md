---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.34cdff61348a5670c4af5d17e905330282ce6f88393bca2c6cac001050b2d2d8
symbol: scripting:Inno.Editor.Assets:M:InnoEditor.Assets.AssetCreationTemplate.Encode(InnoEditor.Assets.AssetCreationContext,InnoEngine.Assets.AssetObject)
title: AssetCreationTemplate.Encode
kind: api
owners:
- Inno.Editor.Assets
apiSurface: editor-script
reviewed: 88f99b198a7b16333011cfcfb519468b50c2d45bfc7480db62a2468bb9ada651
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** Creation services scoped to the current Asset source pipeline.

**Parameter `asset`:** The exact value returned by `M:InnoEditor.Assets.AssetCreationTemplate.Create`.

## Returns

Complete source bytes ready for an atomic File Browser create operation.

## Remarks

The default implementation uses native structured Asset serialization. Templates paired with a textual or custom binary importer can override this method without changing the File Browser or registering a second creation protocol.
