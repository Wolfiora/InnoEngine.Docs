---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9bee08a7b7410499b6085838ff3715773758631aac60c28e2cfa3858f6399c73
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.TryGetModule``1(``0@)
title: EditorInteractions.TryGetModule
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: 94de2e783fc60947c262d42f13cd4fcf4f3b8510dfd0014321a8e0d4455472f4
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TModule`:** The feature module contract to resolve.

## Parameters

**Parameter `module`:** The started, non-quarantined module, or null when unavailable.

## Returns

True when the active generation supplies the requested module.

## Remarks

Do not retain the result across callbacks or generation changes. Candidate modules are never exposed.
