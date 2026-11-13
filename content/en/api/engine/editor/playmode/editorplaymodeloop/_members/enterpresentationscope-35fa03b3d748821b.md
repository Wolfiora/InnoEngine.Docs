---
uid: api.35fa03b3d748821bab84cb74127e0b57ffda393fecf6df6162eed16c100c8f8d
symbol: "engine:Inno.Editor.PlayMode:M:Inno.Editor.PlayMode.EditorPlayModeLoop.EnterPresentationScope"
source: xml
reviewed: 9c81bad4978a05db90c3e38aa6c5d2978ca0976c8180c8f2821433f223dc5568
title: "EnterPresentationScope"
kind: api
owners: [Inno.Editor.PlayMode]
apiSurface: source-clr
---

Binds editor presentation and interaction work to the isolated Play session while simulation is active, or returns an inert scope while the editor is not presenting runtime copies.

**Returns:** A scope that must be disposed after the current editor presentation phase completes.
