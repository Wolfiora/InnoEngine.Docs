---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.editor.core.b7254ac55c2ccaae
symbol: engine:Inno.Editor.Core:T:Inno.Editor.Core.EditorStatistics
title: EditorStatistics
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: b85e730fabeca16e2d9bedf889fd40e9a84010c19fd525536b48f546854d175f

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- api.projects.inno-editor-core#lifecycle-and-failure-contracts
aliases: []
---

Exchanges frame-scoped, reload-safe statistics between independent editor features and viewers.

## Remarks

Contributions contain only stable identifiers and strings. A contribution is retained for the current frame and one completed-frame handoff so panel draw order cannot lose data.
