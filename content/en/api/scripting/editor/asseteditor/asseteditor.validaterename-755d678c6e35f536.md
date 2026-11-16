---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.755d678c6e35f53668108b4c86cb9460f678ae6b9d360ae60c2ccb0bbd5b5d52
symbol: scripting:Inno.Editor.Assets:M:InnoEditor.Assets.AssetEditor.ValidateRename(InnoEditor.Assets.AssetEditorContext,System.String)
title: AssetEditor.ValidateRename
kind: api
owners:
- Inno.Editor.Assets
apiSurface: editor-script
reviewed: c0f422a8aeac1d7d74043fb21c063fb243e9a0318aeed4b2771a25b428270f76
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The immutable snapshot of the source entry before the move.

**Parameter `targetPath`:** The normalized source-relative destination path.

## Returns

A valid result when the transaction may proceed, or a diagnostic describing the rejection.
