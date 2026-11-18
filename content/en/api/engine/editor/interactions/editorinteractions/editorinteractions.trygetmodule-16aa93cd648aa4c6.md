---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.16aa93cd648aa4c63036e38e08f99aee4533a0ce2338a7bc62f28989bc86e202
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.TryGetModule``1(``0@)
title: EditorInteractions.TryGetModule
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: 7eb80919a8ea5cb3a330babba7b1f8eff010c119ee98554ab78a6413ab3ad9aa
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
