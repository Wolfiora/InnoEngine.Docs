---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.89b345b4d536831f9c290c1ebad071baa1437bb34c87c57ce5cb6368466e6136
symbol: scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderGraphBuilder.BeginMutationScope
title: RenderGraphBuilder.BeginMutationScope
kind: api
owners:
- Inno.Rendering
apiSurface: editor-script
reviewed: aeb7ebd0f7c4004e5f73b5dff83afcd33f89cb3a5cd4332ee891ef6cbb55352b
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Begins an isolated graph mutation that rolls back every added pass and resource unless committed.

## Returns

A mutation scope used by reloadable features and other failure-isolated producers.
