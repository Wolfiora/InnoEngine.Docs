---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ef5a9ce4e8f397bbbe958b0ef9181773d078f211a1fb1131c5a9b69b51e7a183
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderPipeline.Dispose
title: RenderPipeline.Dispose
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
reviewed: 10f332850204d467a2baf5898cad2979aa0f6d2353939eda6fb518b9e29e3f9a
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Releases generation-scoped pipeline state.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Pipeline work is still active. The owner must retain this instance and retry before releasing dependencies.
