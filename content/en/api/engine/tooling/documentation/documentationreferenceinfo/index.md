---
uid: api.inno.tooling.documentation.3936d9869994dc28
symbol: "engine:Inno.Tooling.Documentation:T:Inno.Tooling.Documentation.DocumentationReferenceInfo"
source: xml
reviewed: a85645f79080ccf92f478710079bc33410cd8beba7ed14f488a23d6bf0672bb6
title: "DocumentationReferenceInfo"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
contracts:
- project.inno-tooling-documentation#failure-and-ownership-boundaries
aliases: []
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
