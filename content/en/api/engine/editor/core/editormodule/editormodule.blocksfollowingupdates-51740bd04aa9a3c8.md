---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.51740bd04aa9a3c84894b862169ac61e34012dd5e50eef0f5cac7d690c600dcb
symbol: engine:Inno.Editor.Core:P:Inno.Editor.Core.EditorModule.blocksFollowingUpdates
title: EditorModule.blocksFollowingUpdates
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: 18ed44fd806c6fc03b567d783cf16a6d4da3e54fcfb704c1a5c3a46a03b66f62
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

A module may return `true` while completing a project-wide bootstrap or atomic transition that later modules must not observe partially. Panels and modals remain drawable.
