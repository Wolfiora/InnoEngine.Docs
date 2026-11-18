---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9bee08a7b7410499b6085838ff3715773758631aac60c28e2cfa3858f6399c73
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.TryGetModule``1(``0@)
title: EditorInteractions.TryGetModule
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: aa901915588b74d2f376534e595ad514e340ac0fc924aca308d0c489ca62a50d
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
