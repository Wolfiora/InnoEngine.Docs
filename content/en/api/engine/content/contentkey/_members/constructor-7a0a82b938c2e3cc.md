---
uid: api.7a0a82b938c2e3cc1ec5e4c0e5d953f336d8dfa765b75f1f3aa651a87c35a8a3
symbol: "engine:Inno.Content:M:Inno.Content.ContentKey.#ctor(System.String)"
source: xml
reviewed: 5cd8d51856998937f1f1d61b87296e2014b187e4e2d42a7b3ed79468407a4d46
title: "Constructor"
kind: api
owners: [Inno.Content]
apiSurface: source-clr
---

Validates a logical key without interpreting it as a host filesystem path.

**Parameter `value`:** A nonempty relative key with no traversal, ambiguous segments, or platform-reserved names.

**Exception `T:System.ArgumentException`:** The key cannot be represented consistently by supported content sources.
