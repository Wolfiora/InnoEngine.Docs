---
uid: api.inno.tooling.documentation.3f297b186dd8c22c
symbol: "engine:Inno.Tooling.Documentation:T:Inno.Tooling.Documentation.DocumentationCatalogReport"
source: xml
reviewed: e1e6fda8cce6b339ad4b9d64b732165133d7b64391f95af9372df7f1a2f7d194
title: "DocumentationCatalogReport"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
contracts:
- project.inno-tooling-documentation#failure-and-ownership-boundaries
aliases: []
---

Describes a prepared snapshot for website, coverage and transport adapters without reparsing Markdown. Content identity excludes query implementation details; source verification remains separate.

**Parameter `snapshot`:** Exact query generation protected by the exporting session.

**Parameter `contentIdentity`:** SHA-256 of sorted page paths and content hashes, independent of machine paths and query binaries.

**Parameter `repository`:** Source repository recorded in the selected binding.

**Parameter `revision`:** Exact engine source revision recorded in the selected binding.

**Parameter `sourceTree`:** Engine source-tree identity; this value alone does not certify compatibility.

**Parameter `toolingRevision`:** Tooling revision requested by the documentation source binding.

**Parameter `sourceApiStatus`:** Source API evidence state. Unverified must not be treated as a passed API check.

**Parameter `projects`:** Actual project identities mapped to their authoritative page identity; null identifies missing coverage.

**Parameter `pages`:** Parsed page facts in stable path order, including complete section and contract identities.

**Parameter `references`:** Protected project/API payloads available from the same snapshot without returning to a mutable checkout.
