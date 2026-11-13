---
uid: api.inno.tooling.documentation.d08e77b2a3339140
symbol: "engine:Inno.Tooling.Documentation:T:Inno.Tooling.Documentation.DocumentationExampleContext"
source: xml
reviewed: 1aa291e9dda0c479ef3626b3fdf8dacc71a0793120d76e67df5147883634229a
title: "DocumentationExampleContext"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
contracts:
- project.inno-tooling-documentation#failure-and-ownership-boundaries
aliases: []
---

Identifies the authored compilation context for a page's executable examples without preparing it.

**Parameter `mode`:** The explicit reference mode: host, runtime-script or editor-script. Script modes require the actual projected assemblies, never substituted host references.

**Parameter `projects`:** Actual project identities supplying the SDK context and host dependencies. For script modes they identify ownership only; their host assemblies must not enter the example's references.
