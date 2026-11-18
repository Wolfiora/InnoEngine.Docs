---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c9a279a0cd849ff8eba32aceb0f2168cd68be86fafce383a603b674f79cf1e0c
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.TryResolveIdentity(Inno.Core.Identity.RuntimeIdentity,Inno.Core.Identity.IdentityObject@)
title: EditorInteractions.TryResolveIdentity
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: 6a340dd80d2b3e6bb9ddc7bb94b91d8f171ca2bb4d6681731ed738d1e0423582
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
