---
uid: api.ca1e88d9bb1ac0f53523cb0d28e1a8a7cd4b001138c6ff2a35d2cf941b0999e0
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.TryResolveIdentity(InnoEngine.Core.IdentityDomainId,System.Guid,InnoEngine.Core.IdentityObject@)"
source: xml
reviewed: a29ed5a72ed36c6c38d47eec4e84926aba9cc46f29c7fe69d3d4ca2e753d5c40
title: "EditorInteractions.TryResolveIdentity"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Resolves a persistent identity through one explicitly selected Editor identity domain.

## Parameters

**Parameter `domainId`:** Identity domain that owns the object and any replacement generation.

**Parameter `persistentId`:** Stable object identity to resolve inside that domain.

**Parameter `target`:** Receives the current live object, or `null` when the domain or object is unavailable.

## Returns

`true` when the stable identity resolves in the requested domain.
