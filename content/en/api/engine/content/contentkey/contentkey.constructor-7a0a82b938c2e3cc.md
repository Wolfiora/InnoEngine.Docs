---
uid: api.7a0a82b938c2e3cc1ec5e4c0e5d953f336d8dfa765b75f1f3aa651a87c35a8a3
symbol: "engine:Inno.Content:M:Inno.Content.ContentKey.#ctor(System.String)"
source: xml
reviewed: a036203b40ba785f2682c0d4127e093e7d26403b03618fcaa7a6acaa0eddaa7d
title: "ContentKey.Constructor"
kind: api
owners: [Inno.Content]
apiSurface: source-clr
---

Validates a logical key without interpreting it as a host filesystem path.

## Parameters

**Parameter `value`:** A nonempty relative key with no traversal, ambiguous segments, or platform-reserved names.

## Exceptions

**Exception `T:System.ArgumentException`:** The key cannot be represented consistently by supported content sources.
