---
uid: api.1e7df5b0aa24b97ade973144bfcd694e7d24aaafa85926f25c93cab0c2f8db4c
symbol: "engine:Inno.Tooling.Documentation:M:Inno.Tooling.Documentation.DocumentationContinuation.#ctor(System.String,System.String,System.Int32,System.String)"
source: xml
reviewed: 76172524ea19e7d1a84251ec0d6bd2f00dcf69a7ed3b644c080aa06f2d77c845
title: "Constructor"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
---

Identifies unread content without silently dropping constraints or splitting their ownership.

**Parameter `pageId`:** Stable page identity within the same snapshot.

**Parameter `section`:** Section anchor, or null for the entire page.

**Parameter `offset`:** UTF-16 position within the selection for a content continuation; zero begins a related contract.

**Parameter `reason`:** Whether the target continues original text or supplies a necessary associated contract.
