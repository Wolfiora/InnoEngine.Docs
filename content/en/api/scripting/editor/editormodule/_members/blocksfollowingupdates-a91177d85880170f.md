---
uid: api.a91177d85880170ffae047cfa70299a41c915474e84b14fc57c4fd4c44709e0f
symbol: "scripting:Inno.Editor.Core:P:InnoEditor.Core.EditorModule.blocksFollowingUpdates"
source: xml
reviewed: 1176458af1464ee3063b44f64dc906c03057a8716bdbc883c34dfba8611ff997
title: "blocksFollowingUpdates"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Gets whether modules ordered after this module must defer their updates for the current frame.

## Remarks

A module may return `true` while completing a project-wide bootstrap or atomic transition that later modules must not observe partially. Panels and modals remain drawable.
