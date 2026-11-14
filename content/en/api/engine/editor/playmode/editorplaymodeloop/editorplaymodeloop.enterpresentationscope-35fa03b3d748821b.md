---
uid: api.35fa03b3d748821bab84cb74127e0b57ffda393fecf6df6162eed16c100c8f8d
symbol: "engine:Inno.Editor.PlayMode:M:Inno.Editor.PlayMode.EditorPlayModeLoop.EnterPresentationScope"
source: xml
reviewed: d7cd3c781c393328b9baafc61241cde4fca5cf77e70a6849e0cfc891efde429f
title: "EditorPlayModeLoop.EnterPresentationScope"
kind: api
owners: [Inno.Editor.PlayMode]
apiSurface: source-clr
---

Binds editor presentation and interaction work to the isolated Play session while simulation is active, or returns an inert scope while the editor is not presenting runtime copies.

## Returns

A scope that must be disposed after the current editor presentation phase completes.
