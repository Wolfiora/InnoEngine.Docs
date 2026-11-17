---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.dbf006af4d2c0d27c768db6fe9f173356ad689477bf141c799972dfcc065aad7
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorAction.OnPresentationLost
title: EditorAction.OnPresentationLost
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 23961de51b4f5f754f0ac2ea4ac3de277d976eede965410a8a90b73272e818b0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

The default behavior cancels the active operation. An action that owns an editable value may override this method to validate and commit that value. The operation is cancelled automatically when an override returns without calling `M:Inno.Editor.Interactions.EditorAction.Complete` or `M:Inno.Editor.Interactions.EditorAction.Cancel`.
