---
uid: api.ad7ca9c9db1bb52779fda09e55f2564174b8e043600d5487cddb0a16be8acd74
symbol: "engine:Inno.Editor.Interactions:P:Inno.Editor.Interactions.EditorAction.activeTarget"
source: xml
reviewed: 205f1798ca1ad4e19f080a6e2a851a605e8b1f3ec698af2bc83953c482f0c3d4
title: "EditorAction.activeTarget"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Resolves the active target afresh for this callback; null means the identity is unavailable.

## Remarks

Do not retain the result across callbacks. Activation stores a domain-qualified reference rather than the live object.
