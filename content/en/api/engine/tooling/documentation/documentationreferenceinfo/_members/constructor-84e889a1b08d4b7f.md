---
uid: api.84e889a1b08d4b7f83ffeec2e99cdd8a4d3bfb8152289afc4bb5c7395f679721
symbol: "engine:Inno.Tooling.Documentation:M:Inno.Tooling.Documentation.DocumentationReferenceInfo.#ctor(System.String,System.String,System.String,System.String,System.String,System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: 1babd3aa526aedb51859869964498ee989b52dc62dbe64378a61566e405eaa6e
title: "Constructor"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
---

Identifies an immutable source-fact payload protected by a documentation snapshot. Captured facts remain distinct from evidence that they match the current engine candidate.

**Parameter `path`:** Original reference path relative to the explicitly selected Docs checkout.

**Parameter `identity`:** SHA-256 of the complete original reference bytes.

**Parameter `model`:** Project-inventory or the actual captured API surface model.

**Parameter `configuration`:** Evaluated API configuration, or null for the project inventory.

**Parameter `target`:** Explicit captured target, or null for a target-neutral capture.

**Parameter `sourceRevision`:** Exact source revision recorded for this capture.

**Parameter `sourceTree`:** Exact source-tree identity recorded for this capture.

**Parameter `projects`:** Actual project identities present in the payload, including empty public surfaces.
