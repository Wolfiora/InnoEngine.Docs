---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.references.runtime-script.f46372927f2108f7
symbol: scripting:Inno.References:T:InnoEngine.References.ContentReadScope
title: ContentReadScope
kind: api
owners:
- Inno.References
apiSurface: editor-script
reviewed: 66991e5155f44b86922a29a81f02ccfaba0ddd9aad5b0e745b2323352d11a63d
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-references

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

Disposing the scope revokes lookup. Copy values into domain snapshots; never retain resolved objects across frames or reloads.
