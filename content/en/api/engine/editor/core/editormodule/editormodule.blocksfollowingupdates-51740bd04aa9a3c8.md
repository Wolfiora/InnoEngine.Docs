---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.51740bd04aa9a3c84894b862169ac61e34012dd5e50eef0f5cac7d690c600dcb
symbol: engine:Inno.Editor.Core:P:Inno.Editor.Core.EditorModule.blocksFollowingUpdates
title: EditorModule.blocksFollowingUpdates
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: 8897191c672d9dba9f3126e818ef1e030d5ca88a9af733d8e414a7b532d84ba1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

A module may return `true` while completing a project-wide bootstrap or atomic transition that later modules must not observe partially. Panels and modals remain drawable.
