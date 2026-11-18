---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.34cdff61348a5670c4af5d17e905330282ce6f88393bca2c6cac001050b2d2d8
symbol: scripting:Inno.Editor.Assets:M:InnoEditor.Assets.AssetCreationTemplate.Encode(InnoEditor.Assets.AssetCreationContext,InnoEngine.Assets.AssetObject)
title: AssetCreationTemplate.Encode
kind: api
owners:
- Inno.Editor.Assets
apiSurface: editor-script
sourceFingerprint: b543453a0c2066b0e1cd8d6ed66fc5c57a3a9d1403b0706c44b64fbd664acab9
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
