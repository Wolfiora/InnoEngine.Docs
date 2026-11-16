---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.14ad5509e0c57124609b5e913462d15204a00bd5302556504c4a629424ded477
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.TryResolveIdentity(Inno.Core.Identity.IdentityDomainId,System.Guid,Inno.Core.Identity.IdentityObject@)
title: EditorInteractions.TryResolveIdentity
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 8819dcd5765bfc90c230a1784d4697df123a69314c31052b63062be8e1b4797b
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
