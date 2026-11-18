---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a91177d85880170ffae047cfa70299a41c915474e84b14fc57c4fd4c44709e0f
symbol: scripting:Inno.Editor.Core:P:InnoEditor.Core.EditorModule.blocksFollowingUpdates
title: EditorModule.blocksFollowingUpdates
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: 5d6cd9277ec84210a2530252d7f00e9adff919ae4ac3b427ac51b4b8d37832ee
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

A module may return `true` while completing a project-wide bootstrap or atomic transition that later modules must not observe partially. Panels and modals remain drawable.
