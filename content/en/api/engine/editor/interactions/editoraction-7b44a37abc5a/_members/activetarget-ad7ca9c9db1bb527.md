---
uid: api.ad7ca9c9db1bb52779fda09e55f2564174b8e043600d5487cddb0a16be8acd74
symbol: "engine:Inno.Editor.Interactions:P:Inno.Editor.Interactions.EditorAction.activeTarget"
source: xml
reviewed: 0009f88264767a8451803624bff62a1a1b942af0e4f845476521982ccc02b993
title: "activeTarget"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Resolves the active target afresh for this callback; null means the identity is unavailable.

## Remarks

Do not retain the result across callbacks. Activation stores a domain-qualified reference rather than the live object.
