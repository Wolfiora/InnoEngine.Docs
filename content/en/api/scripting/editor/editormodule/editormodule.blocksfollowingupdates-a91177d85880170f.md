---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a91177d85880170ffae047cfa70299a41c915474e84b14fc57c4fd4c44709e0f
symbol: scripting:Inno.Editor.Core:P:InnoEditor.Core.EditorModule.blocksFollowingUpdates
title: EditorModule.blocksFollowingUpdates
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: f59034623c6d4786cf69ce61ed2743f8686ad2e990598936170c36a98af1a612
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

A module may return `true` while completing a project-wide bootstrap or atomic transition that later modules must not observe partially. Panels and modals remain drawable.
