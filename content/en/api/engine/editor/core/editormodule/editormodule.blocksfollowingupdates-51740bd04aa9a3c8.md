---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.51740bd04aa9a3c84894b862169ac61e34012dd5e50eef0f5cac7d690c600dcb
symbol: engine:Inno.Editor.Core:P:Inno.Editor.Core.EditorModule.blocksFollowingUpdates
title: EditorModule.blocksFollowingUpdates
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: 7197dfcfc89424ac539ac97a3e6ad46c31b0bac208bd6d19cf8167669b39bb16

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Gets whether modules ordered after this module must defer their updates for the current frame.

## Remarks

A module may return `true` while completing a project-wide bootstrap or atomic transition that later modules must not observe partially. Panels and modals remain drawable.
