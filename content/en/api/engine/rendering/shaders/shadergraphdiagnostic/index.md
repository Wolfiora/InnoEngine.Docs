---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.rendering.shaders.8ab368e5851ba32f
symbol: engine:Inno.Rendering.Shaders:T:Inno.Rendering.Shaders.ShaderGraphDiagnostic
title: ShaderGraphDiagnostic
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: 6e55bf57f9a3c10a70d525ddd7f163660afadf2f932cf23f78533b549e3405a3

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-rendering-shaders
aliases: []
---

Identifies a graph compilation problem without retaining a node or compiler instance.

## Parameters

**Parameter `code`:** Stable diagnostic identity.

**Parameter `severity`:** Diagnostic severity.

**Parameter `message`:** Human-readable explanation.

**Parameter `nodeId`:** Affected node identity when known.

**Parameter `portId`:** Affected semantic port when known.
