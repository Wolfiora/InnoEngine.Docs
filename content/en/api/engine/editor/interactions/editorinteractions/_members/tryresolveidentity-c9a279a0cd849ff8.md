---
uid: api.c9a279a0cd849ff8eba32aceb0f2168cd68be86fafce383a603b674f79cf1e0c
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.TryResolveIdentity(Inno.Core.Identity.RuntimeIdentity,Inno.Core.Identity.IdentityObject@)"
source: xml
reviewed: 72e0bb4420eeedd807dd77e8061aec71ab86c47c538eee765677f53a00ba7de3
title: "TryResolveIdentity"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Resolves a domain-qualified runtime identity through the Editor's complete identity-domain set.

**Parameter `identity`:** Runtime identity captured from a live Editor target.

**Parameter `target`:** Receives the current live object, or `null` when its domain or generation is unavailable.

**Returns:** `true` when the exact identity resolves in its owning domain.
