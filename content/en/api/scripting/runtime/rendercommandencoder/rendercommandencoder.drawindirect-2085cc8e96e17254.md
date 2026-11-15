---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2085cc8e96e172546c94e4b65e432158d6cca515f6fea75c26d81a7706247235
symbol: scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderCommandEncoder.DrawIndirect(InnoEngine.Rendering.PersistentBufferHandle,System.Int32,System.Int32)
title: RenderCommandEncoder.DrawIndirect
kind: api
owners:
- Inno.Rendering
apiSurface: editor-script
reviewed: 53aa01051cd938f14c9818ca7fdb1ffce18fb23cb2adbdd9fc66dd2c92aa5ff3
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Submits draws described by consecutive commands in an indirect buffer.

## Parameters

**Parameter `buffer`:** Persistent buffer owned by the current device generation.

**Parameter `firstCommand`:** Zero-based command offset in the indirect buffer.

**Parameter `commandCount`:** Number of consecutive indirect commands to submit.
