---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c9a279a0cd849ff8eba32aceb0f2168cd68be86fafce383a603b674f79cf1e0c
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.TryResolveIdentity(Inno.Core.Identity.RuntimeIdentity,Inno.Core.Identity.IdentityObject@)
title: EditorInteractions.TryResolveIdentity
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 2d2cb82e06ff20721f695a92558c6e42e58dacff3a86994ff0cbe458418e1b38
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `identity`:** Runtime identity captured from a live Editor target.

**Parameter `target`:** Receives the current live object, or `null` when its domain or generation is unavailable.

## Returns

`true` when the exact identity resolves in its owning domain.
