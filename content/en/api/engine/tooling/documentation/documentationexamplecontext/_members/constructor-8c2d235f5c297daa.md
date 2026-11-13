---
uid: api.8c2d235f5c297daaea116ae8748aa28d5f7f1944ada33540c0756fda08f92140
symbol: "engine:Inno.Tooling.Documentation:M:Inno.Tooling.Documentation.DocumentationExampleContext.#ctor(System.String,System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: 32bdeff7c4571d7482cb1c1a05527622e0c29f83f314c2914316408db54a0bcc
title: "Constructor"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
---

Identifies the authored compilation context for a page's executable examples without preparing it.

**Parameter `mode`:** The explicit reference mode: host, runtime-script or editor-script. Script modes require the actual projected assemblies, never substituted host references.

**Parameter `projects`:** Actual project identities supplying the SDK context and host dependencies. For script modes they identify ownership only; their host assemblies must not enter the example's references.
