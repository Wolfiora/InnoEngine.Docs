---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a0529d43b39fbd099f95d5a2391b79e692a79afbeb98e2ff60485661b447f4e5
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.TryResolveIdentity(Inno.Core.Identity.IdentityDomainID,System.Guid,Inno.Core.Identity.IdentityObject@)
title: EditorInteractions.TryResolveIdentity
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: 974ebd2b25a26b68909d96342caeb393c4f668bd41fd006958918c92596e6501
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
