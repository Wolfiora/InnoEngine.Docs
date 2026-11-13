---
uid: api.inno.tooling.documentation.2081f72d9226e8fe
symbol: "engine:Inno.Tooling.Documentation:T:Inno.Tooling.Documentation.DocumentationContinuation"
source: xml
reviewed: 9cc21c28cd0fef30b59d14ee94343a768f0f242f6048ba9bae42aa36960b0cca
title: "DocumentationContinuation"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
contracts:
- project.inno-tooling-documentation#failure-and-ownership-boundaries
aliases: []
---

Identifies unread content without silently dropping constraints or splitting their ownership.

**Parameter `pageId`:** Stable page identity within the same snapshot.

**Parameter `section`:** Section anchor, or null for the entire page.

**Parameter `offset`:** UTF-16 position within the selection for a content continuation; zero begins a related contract.

**Parameter `reason`:** Whether the target continues original text or supplies a necessary associated contract.
