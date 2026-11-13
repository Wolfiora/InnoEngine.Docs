---
uid: api.c61971238aa644b31a7be4c8bd846e9f9deae1604d0450b37c351a625eaebd65
symbol: "engine:Inno.Content:M:Inno.Content.ContentEntry.#ctor(Inno.Content.ContentKey,System.Int64,System.String)"
source: xml
reviewed: b4188b2ae59b192c160d93358081f6b8934f7f66408341c5786698ffd5d8021a
title: "Constructor"
kind: api
owners: [Inno.Content]
apiSurface: source-clr
---

Freezes a portable key, byte length, and SHA-256 identity.

**Parameter `key`:** The assigned logical content key.

**Parameter `length`:** The exact nonnegative decoded byte count.

**Parameter `contentHash`:** The hexadecimal SHA-256 of decoded bytes, normalized to uppercase.

**Exception `T:System.ArgumentException`:** The key is unassigned or the hash is malformed.
