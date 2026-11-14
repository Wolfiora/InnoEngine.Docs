---
uid: api.c9a279a0cd849ff8eba32aceb0f2168cd68be86fafce383a603b674f79cf1e0c
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.TryResolveIdentity(Inno.Core.Identity.RuntimeIdentity,Inno.Core.Identity.IdentityObject@)"
source: xml
reviewed: 9f2d99c4102b72248445fe3defaabab9af54ad2d3b4505af3e63c5330d8e73d4
title: "EditorInteractions.TryResolveIdentity"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Resolves a domain-qualified runtime identity through the Editor's complete identity-domain set.

**Parameter `identity`:** Runtime identity captured from a live Editor target.

**Parameter `target`:** Receives the current live object, or `null` when its domain or generation is unavailable.

**Returns:** `true` when the exact identity resolves in its owning domain.
