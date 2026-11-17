---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ca1e88d9bb1ac0f53523cb0d28e1a8a7cd4b001138c6ff2a35d2cf941b0999e0
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.TryResolveIdentity(InnoEngine.Core.IdentityDomainId,System.Guid,InnoEngine.Core.IdentityObject@)
title: EditorInteractions.TryResolveIdentity
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: f085a09fa86fd9709ea09d151d1d16765bd52fad69fb168ad08b1c39c4b1787c
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `domainId`:** Identity domain that owns the object and any replacement generation.

**Parameter `persistentId`:** Stable object identity to resolve inside that domain.

**Parameter `target`:** Receives the current live object, or `null` when the domain or object is unavailable.

## Returns

`true` when the stable identity resolves in the requested domain.
