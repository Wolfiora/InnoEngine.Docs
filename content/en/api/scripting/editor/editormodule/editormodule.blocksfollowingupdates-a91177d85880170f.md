---
uid: api.a91177d85880170ffae047cfa70299a41c915474e84b14fc57c4fd4c44709e0f
symbol: "scripting:Inno.Editor.Core:P:InnoEditor.Core.EditorModule.blocksFollowingUpdates"
source: xml
reviewed: 719181067c32cf2de361ef38682369293076724d54beb3c8d406caa6b1277346
title: "EditorModule.blocksFollowingUpdates"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Gets whether modules ordered after this module must defer their updates for the current frame.

## Remarks

A module may return `true` while completing a project-wide bootstrap or atomic transition that later modules must not observe partially. Panels and modals remain drawable.
