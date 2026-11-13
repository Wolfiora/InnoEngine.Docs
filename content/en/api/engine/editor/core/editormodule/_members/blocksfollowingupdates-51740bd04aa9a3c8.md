---
uid: api.51740bd04aa9a3c84894b862169ac61e34012dd5e50eef0f5cac7d690c600dcb
symbol: "engine:Inno.Editor.Core:P:Inno.Editor.Core.EditorModule.blocksFollowingUpdates"
source: xml
reviewed: c1da3369f07d4a3f6e110ed86d0caecd364afe485116c586044133e92186c835
title: "blocksFollowingUpdates"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Gets whether modules ordered after this module must defer their updates for the current frame.

## Remarks

A module may return `true` while completing a project-wide bootstrap or atomic transition that later modules must not observe partially. Panels and modals remain drawable.
