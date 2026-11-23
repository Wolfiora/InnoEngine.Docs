---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7daac671e4cbf1d44a3ef3f37afa28efe332cda0087f5ac2da9d0abc3e672025
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.TryResolveIdentity(InnoEngine.Core.IdentityDomainID,System.Guid,InnoEngine.Core.IdentityObject@)
title: EditorInteractions.TryResolveIdentity
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: 685d89edca87108d8df4a52a7c283f17dfb85347e1f37aa2e1c91482039c540a
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `domainID`:** Identity domain that owns the object and any replacement generation.

**Parameter `persistentID`:** Stable object identity to resolve inside that domain.

**Parameter `target`:** Receives the current live object, or `null` when the domain or object is unavailable.

## Returns

`true` when the stable identity resolves in the requested domain.
