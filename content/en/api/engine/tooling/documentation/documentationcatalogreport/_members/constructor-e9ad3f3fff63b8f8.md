---
uid: api.e9ad3f3fff63b8f8a2dbb98f6976b7ff7c56a29a22732508e2eac405817a2bf5
symbol: "engine:Inno.Tooling.Documentation:M:Inno.Tooling.Documentation.DocumentationCatalogReport.#ctor(System.String,System.String,System.String,System.String,System.String,System.String,System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IReadOnlyList{Inno.Tooling.Documentation.DocumentationPageInfo},System.Collections.Generic.IReadOnlyList{Inno.Tooling.Documentation.DocumentationReferenceInfo})"
source: xml
reviewed: d9dba8e08557de4f1f0178caa8f6352f81caaf64019a3e97242372da7ca4f304
title: "Constructor"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
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
