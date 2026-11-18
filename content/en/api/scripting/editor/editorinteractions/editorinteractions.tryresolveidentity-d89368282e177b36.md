---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d89368282e177b3633b0a397501dbfa56ed6b3304c956b8b4a1635133f79bb67
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.TryResolveIdentity(InnoEngine.Core.RuntimeIdentity,InnoEngine.Core.IdentityObject@)
title: EditorInteractions.TryResolveIdentity
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: bf4990837573038e16845750b6530fa68dc6496760300effded416cb51ce8660
apiScope: Editor
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
