---
uid: api.d89368282e177b3633b0a397501dbfa56ed6b3304c956b8b4a1635133f79bb67
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.TryResolveIdentity(InnoEngine.Core.RuntimeIdentity,InnoEngine.Core.IdentityObject@)"
source: xml
reviewed: 4b1cf108134343f5baa577cc8bbd07ef545b052f8ef3ba2b79bffd74c300644b
title: "TryResolveIdentity"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Resolves a domain-qualified runtime identity through the Editor's complete identity-domain set.

**Parameter `identity`:** Runtime identity captured from a live Editor target.

**Parameter `target`:** Receives the current live object, or `null` when its domain or generation is unavailable.

**Returns:** `true` when the exact identity resolves in its owning domain.
